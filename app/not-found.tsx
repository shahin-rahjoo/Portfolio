import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">

      <p className="text-6xl font-bold text-orange-400 sm:text-8xl">404</p>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold sm:text-2xl">
          This page doesn&apos;t exist yet
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 sm:text-base">
          Maybe I&apos;ll build it someday. Who knows.
        </p>
      </div>

      <Button
        asChild
        variant="outline"
        className="rounded-full border-orange-400 px-6 py-2 text-orange-400 transition hover:bg-orange-400"
      >
        <Link href="/">Take me home</Link>
      </Button>

    </div>
  );
}