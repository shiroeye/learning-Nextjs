import Image from "next/image";

interface ImageProps {
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ItemProps {
  title: string;
  className: string;
  href: string;
  target: string;
  rel: string;
  image?: ImageProps;
}

const vercel_image: ImageProps = {
  className: "dark:invert",
  src: "/vercel.svg",
  alt: "Vercel logomark",
  width: 20,
  height: 20,
};

const ITEMS: ItemProps[] = [
  {
    title: "Deploy now",
    className:
      "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    image: vercel_image,
  },
  {
    title: "Read our docs",
    className:
      "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function Main() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        {ITEMS.map((item) => {
          return (
            <a
              key={item.title}
              href={item.href}
              className={item.className}
              target={item.target}
              rel={item.rel}
            >
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                />
              )}
              {item.title}
            </a>
          );
        })}
      </div>
    </main>
  );
}
