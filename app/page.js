import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="py-14 mt-6 px-6 mx-auto max-w-2xl relative">
      <div className="absolute top-0 right-5">
        <ModeToggle />
      </div>
      <div className="grid gap-2 mt-5 text-center">
        <h1 className="text-4xl font-extrabold">Starter Template</h1>
        <p className="text-base">This is a starter template for Next.js with Tailwind CSS, Shadcn and Mongoose!</p>
      </div>
      <div className="mt-8 grid gap-2">
        <div className="border p-3 rounded-md grid gap-0.5 transition hover:bg-secondary/25">
          <h1 className="text-lg font-bold">Setup Mongodb</h1>
          <p className="text-sm">
            start by adding <span className="font-mono bg-secondary px-1 py-0.5">environment</span> values to your <span className="font-mono bg-secondary px-1 py-0.5">.env.local</span> file.
          </p>
          <div className="mt-1 font-mono bg-secondary px-1 py-0.5 text-sm">
            MONGO_URI=<span className="bg-primary/20">"replace_with_your_mongo_url"</span>
          </div>
        </div>

        <div className="border p-3 rounded-md grid gap-0.5 transition hover:bg-secondary/25">
          <h1 className="text-lg font-bold">Utils</h1>
          <p className="text-sm">There are some pre-built utils fuctions.</p>
          <ul className="mt-1 list-decimal px-5 text-sm grid gap-0.5">
            <li>Connect to MongoDB using mongoose <span className="font-mono bg-secondary px-1 py-0.5">lib/mongoose/utils.js:connect</span></li>
            <li>Disconnect from MongoDB using mongoose <span className="font-mono bg-secondary px-1 py-0.5">lib/mongoose/utils.js:disconnect</span></li>
          </ul>
        </div>

        <div className="border p-3 rounded-md grid gap-0.5 transition hover:bg-secondary/25">
          <h1 className="text-lg font-bold">Schema</h1>
          <p className="text-sm">There are some pre-defined schemas.</p>
          <ul className="mt-1 list-decimal px-5 text-sm grid gap-0.5">
            <li>User Schema <span className="font-mono bg-secondary px-1 py-0.5">lib/mongoose/schema/user.js</span></li>
            <li>File Schema <span className="font-mono bg-secondary px-1 py-0.5">lib/mongoose/schema/file.js</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center grid gap-1">
        <p className="text-sm">Start by editing <span className="font-mono bg-secondary px-1 py-0.5">app/page.js</span></p>
        <a className="text-xs underline" href="https://github.com/r2hu1/nsmc-stack" target="_blank" rel="noreferrer">made by r2hu1</a>
      </div>
    </main>
  );
}
