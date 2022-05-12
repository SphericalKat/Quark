import { Link, useLocation } from "solid-app-router";
import { Component } from "solid-js";

const getTextColor = (path: string, currentPath: string) => {
  return path === currentPath ? "text-text-primary" : "text-text-inactive";
};

const Navbar: Component = () => {
  const { pathname } = useLocation();

  return (
    <nav
      class="
        flex
        w-full
        px-3
        py-[1.1rem]
        border-t-[0.25px]
        items-center
        justify-evenly
        bg-background
        border-border
        flex-shrink
        font-medium
        text-center
        text-base
      "
    >
      <Link
        href="/"
        class={`
          flex-1
          ${getTextColor("/", pathname)}
        `}
      >
        <div>Home</div>
      </Link>
      <Link
        href="/subs"
        class={`
          flex-1
          ${getTextColor("/subs", pathname)}
        `}
      >
        <div>Subscriptions</div>
      </Link>
    </nav>
  );
};

export default Navbar;
