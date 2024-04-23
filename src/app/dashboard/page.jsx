import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    // redirect("/api/auth/signin");
    return (
      <div>
        You need to login to view this page
        <br />
        <a href="/api/auth/signin">Sign in</a>
      </div>
    )
  }

  return (
    <div>
      HAHA you logined, and there's noting here. 
      <br />
      But for real you are logined as {session.user.name} the
    </div>
  );
}
