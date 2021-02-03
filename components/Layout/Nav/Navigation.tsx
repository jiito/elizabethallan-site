import Link from "next/link";
import React from "react";

interface NavProps {
  pages: string[];
}

export const Navigation: React.FC<NavProps> = ({ pages }) => {
  return (
    <div className="flex justify-between mt-6 font-serif ">
      <div className="mx-auto text-2xl font-medium">
        Elizabeth J. Allan, Ph.D.
      </div>
      <nav className="flex mx-auto">
        {pages.map((page, i) => (
          <div className="mx-3 text-lg ">
            <Link href={page} key={i}>
              <a>{page.replace("/", " ")}</a>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
