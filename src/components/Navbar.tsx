import { Link, useLocation } from "solid-app-router";
import { Component } from "solid-js";

const getTextColor = (path: string, currentPath: string) => {
  return path === currentPath
    ? "text-light-black dark:text-lighter-gray"
    : "text-dark-gray dark:text-light-gray";
};

const Navbar: Component = () => {
  const { pathname } = useLocation();

  return (
    <div class="flex w-full px-4 py-4 border-t bg-nav-light dark:bg-nav-dark border-light-border dark:border-dark-border">
      <Link
        href="/"
        class={`flex-1 text-center ${getTextColor("/", pathname)}`}
      >
        <div>Home</div>
      </Link>
      <Link
        href="/subs"
        class={`flex-1 text-center ${getTextColor("/subs", pathname)}`}
      >
        <div>Subscriptions</div>
      </Link>
    </div>
  );
};

export default Navbar;
