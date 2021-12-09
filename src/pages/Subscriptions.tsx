import { Link } from "solid-app-router";
import { Component } from "solid-js";

const Subscriptions: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center w-full h-full">
      <div class="h-full w-full">Subs content placeholder</div>
      <div class="flex w-full px-4 py-4 border border-t">
        <Link href="/" class="flex-1 text-center">Home</Link>
        <Link href="/subs" class="flex-1 text-center">Subscriptions</Link>
      </div>
    </div>
  );
};

export default Subscriptions;
