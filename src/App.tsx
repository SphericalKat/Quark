import { Component, createEffect, createSignal } from "solid-js";

import logo from "./logo.svg";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log("Count is now:", count());
  });

  return (
    <main class="w-full h-full bg-gray-50 text-[#121212] dark:bg-gray-900 dark:text-[#f5f5f5]">
      <header class="h-full flex flex-col gap-2 items-center justify-center w-full">
        <img src={logo} class="h-32" alt="logo" />
        <p>Count: {count}</p>
        <button
          onClick={(_) => {
            setCount((count) => count + 1);
          }}
        >
          Click Me
        </button>
        <a
          class=""
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </main>
  );
};

export default App;
