import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-[#c8f902] [var(--font-oswald)]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-white [var(--font-oswald)]">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-[#8A92A0] [var(--font-inter)]">
        Looks like this page got lost somewhere. Let&apos;s get you back to
        your workout.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#c8f902] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
