import { AxiomWithoutBatching, ContentEncoding, ContentType } from '@axiomhq/js';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // disable prerendering

export async function GET() {
  const axiom = new AxiomWithoutBatching({
    token: process.env.AXIOM_TOKEN || '',
    orgId: process.env.AXIOM_ORG_ID,
    url: process.env.AXIOM_URL,
  });

  try {
    const resp = await axiom.ingestRaw(
      'axiom-js-e2e-test',
      `[{"foo":"bar", "test": "ingest_on_edge"},{"bar":"baz", "test": "ingest_on_edge"}]`,
      ContentType.JSON,
      ContentEncoding.Identity,
    );
    if (resp.ingested !== 2) {
      return NextResponse.json({ test: 'ingest_on_edge', error: 'ingest failed' }, { status: 500 });
    }

    return NextResponse.json({ test: 'ingest_on_edge', ...resp });
  } catch(err) {
    return NextResponse.json({ test: 'ingest_on_edge', error: err.message }, { status: 500 });
  }

  
}
