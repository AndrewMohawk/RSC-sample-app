import { decodeAction } from 'react-server-dom-webpack/server.node';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const start = Date.now();
  const formData = await req.formData();
  const entries: Array<[string, FormDataEntryValue]> = [];
  formData.forEach((value, key) => {
    entries.push([key, value]);
  });
  const slowFormData = {
    forEach(cb: (value: FormDataEntryValue, key: string) => void) {
      for (const [key, value] of entries) cb(value, key);
    },
    get(name: string) {
      for (const [key, value] of entries) {
        if (key === name) return value;
      }
      return null;
    },
    append(name: string, value: FormDataEntryValue) {
      entries.push([name, value]);
    },
  } as unknown as FormData;
  try {
    const action = decodeAction(slowFormData, {});
    if (action) {
      await action;
    }
  } catch (err) {
    // Expected for invalid/unknown action ids; DoS impact already occurred.
  }
  const elapsedMs = Date.now() - start;
  return new Response(JSON.stringify({ ok: true, elapsedMs }), {
    headers: { 'content-type': 'application/json' },
  });
}
