import { BadgeAsLink } from "@/components/ui/badgeAsLink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="font-space-mono text-3xl font-bold">FarmOrchestra</h1> 
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Open Source IoT Dashboard for managing Hydroponics Data.
          </h1>
          <BadgeAsLink text={"Contribute"} link={"https://github.com/julzdao/farm-orchestra"}></BadgeAsLink>
          <p className="font-space-mono max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Monitor and control your hydroponic system from anywhere in the world, making it easier to produce fresh and healthy produce at home.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
           <a
            className="flex h-12 w-full items-center justify-center rounded-none border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-none bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Sign up
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-none border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/dashboard"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </main>
    </div>
  );
}
