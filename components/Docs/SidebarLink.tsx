// components/Docs/SidebarLink.tsx
"use client";
import Link from "next/link";

const SidebarLink = ({ href, text }) => {
  return (
    <li className="block">
      <Link
        href={href}
        className="flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {text}
      </Link>
    </li>
  );
};

export default SidebarLink;
