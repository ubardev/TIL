import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getPost } from '@/service/posts';

type Context = {
  params: { id: string };
};

export async function GET(request: NextResponse, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getPost(context.params.id) //
    .then((data) => NextResponse.json(data));
}
