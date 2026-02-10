import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { createTemporaryReferenceSet, decodeReplyFromBusboy } from 'next/dist/compiled/react-server-dom-webpack/server.node';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const start = Date.now();
  const Busboy = require('next/dist/compiled/busboy');
  const contentType = req.headers.get('content-type') || '';
  const busboy = Busboy({ headers: { 'content-type': contentType } });

  const temporaryReferences = createTemporaryReferenceSet();
  const decodePromise = decodeReplyFromBusboy(busboy, {}, { temporaryReferences });

  const body = req.body ? Readable.fromWeb(req.body as any) : Readable.from([]);
  await pipeline(body, busboy);

  let resultType = 'unknown';
  try {
    const result = await decodePromise;
    resultType = Array.isArray(result) ? 'array' : typeof result;
  } catch (err) {
    resultType = 'error';
  }

  const elapsedMs = Date.now() - start;
  return new Response(JSON.stringify({ ok: resultType !== 'error', elapsedMs, resultType }), {
    headers: { 'content-type': 'application/json' },
  });
}
