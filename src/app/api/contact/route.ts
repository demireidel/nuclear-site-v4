import { z } from 'zod';
export async function POST(req: Request) {
  const schema = z.object({ name: z.string().min(1), email: z.string().email(), message: z.string().min(10).max(5000) });
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return Response.json({ error: parsed.error.flatten() }, { status: 400 });
  return Response.json({ ok: true });
}
