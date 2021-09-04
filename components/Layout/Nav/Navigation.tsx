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

  const isCurrentPath = (path: string) => path === href
  return (
    <div className="container flex flex-col items-center justify-between max-w-4xl p-8 mt-8 mb-10 font-sans border-2 border-gray-200 border-solid rounded">
      <Link href="/about" >
        <a className="self-center mb-4 text-5xl font-bold">Elizabeth J. Allan, Ph.D.</a>
      </Link>
        <h3 className="self-center mt-1 mb-8 text-lg font-light text-gray-600">Professor of Higher Education</h3>
      <nav className="flex">
        {pages.map((page, i) => (
          <div className="mx-3 font-thin text-gray-500">
            <Link href={slugify(page)} key={i}>
              <a className={`hover:underline ${isCurrentPath(slugify(page)) ? 'text-gray-900 font-medium': ""}`}>{page}</a>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
