"use client";
// pages/index.tsx (or pages/index.js)
import { useSession, signIn } from 'next-auth/react';

const HomePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        <p>Please sign in to access your account.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  // User is authenticated
  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <p>{session.user.image}</p>
      <img src={session.user.image} alt={session.user.name} />
      <p>Email: {session.user.email}</p>
    </div>
  );
};

export default HomePage;
