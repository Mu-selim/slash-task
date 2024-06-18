import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center gap-x-8">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </div>
    </main>
  );
}
