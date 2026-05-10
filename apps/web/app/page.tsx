import { prisma } from '@repo/prisma/client';
export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await prisma.user.findFirst();
        console.log(user);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
 );
}