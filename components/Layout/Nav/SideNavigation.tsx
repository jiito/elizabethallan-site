import Link from "next/link";
import React from "react";

interface SideNavProps {
  pages: string[];
}

export const SideNavigation: React.FC<SideNavProps> = ({ pages }) => {
  return (
    <div className="flex flex-col font-serif ">
      <div className="mx-auto text-2xl font-medium ">
        Elizabeth J. Allan, Ph.D.
      </div>
      <nav className="flex flex-col mt-6 align-start">
        {pages.map((page, i) => (
          <div className="mt-2 text-xl text-gray-400">
            <Link href={page} key={i}>
              <a>{page.replace("/", " ")}</a>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
