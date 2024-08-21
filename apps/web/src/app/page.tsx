"use client";

import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen p-16 bg-blue-100">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Az Stack
      </h2>
      <p className="text-blue-800 font-medium">
        This is a demo app using my preferred tech stack of TypeScript, Next.js,
        Tailwind, and shadcn/ui.
      </p>
      <Button
        onClick={() => {
          alert("hello from Az Stack");
        }}
        className="mt-4"
      >
        Click Me
      </Button>
    </div>
  );
}
