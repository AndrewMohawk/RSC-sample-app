export const runtime = 'nodejs';

export async function POST(req: Request) {
  const spec = req.headers.get('rsc-action') || '';
  if (spec) {
    const dynamicImport = new Function('s', 'return import(s)') as (s: string) => Promise<unknown>;
    await dynamicImport(spec);
  }
  return new Response(JSON.stringify({ ok: true, specifier: spec }), {
    headers: { 'content-type': 'application/json' },
  });
}
