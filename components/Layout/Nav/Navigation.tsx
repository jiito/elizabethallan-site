import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

interface NavProps {
  pages: string[];
}

const slugify = (title: string) => {
  return title.replace(" ", "-").toLowerCase();
};

export const Navigation: React.FC<NavProps> = ({ pages }) => {
  const router = useRouter()

  const href = router.pathname.replace("/", "")

  console.log(href)

  const isCurrentPath = (path: string) => path === href
  return (
    <div className="container flex items-center justify-between mt-6 font-serif">
      <div className="text-2xl font-medium">Elizabeth J. Allan, Ph.D.</div>
      <nav className="flex">
        {pages.map((page, i) => (
          <div className="mx-3 text-gray-700 text-md ">
            <Link href={slugify(page)} key={i}>
              <a className={`hover:underline ${isCurrentPath(slugify(page)) ? 'text-blue-500': ""}`}>{page}</a>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
