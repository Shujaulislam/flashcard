// src/pages/login.js
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn('github')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
