export const dynamic = 'force-static';
export async function GET(){ return Response.json({ok:true,time:new Date().toISOString()}) }
