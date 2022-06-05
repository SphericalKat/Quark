import { Component, createEffect, createSignal } from "solid-js";

import Navbar from "../components/Navbar";
import { db } from "../utils/db";
import { Feed, RssItem } from "../utils/RssParser";

const Subscriptions: Component = () => {
  const [feeds, setFeeds] = createSignal<Feed[]>([]);

  createEffect(() => {
    db.feeds.toArray().then(setFeeds);
  });

  return (
    <div class="page-container">
      <div class="page-content">
        {feeds().length !== 0 ? (
          <div class="flex flex-1 flex-col w-full h-full items-stretch">
            <div className="flex w-full justify-center">
              <h1 class="text-4xl py-4">Subscriptions</h1>
            </div>
            <div class="overflow-x-auto overflow-y-auto px-8">
              {feeds().map((f) => (
                <a href={f.link}>
                  <div id={f.url} class="flex bg-card p-4 rounded-xl mb-4">
                    {f.imageURL && <img class="w-16 md:w-32 lg:w-48 object-scale-down" src={f.imageURL} />}
                    <div class="ml-4">
                      <h2 class="text-xl font-semibold">{f.title}</h2>
                      {f.desc && <p class="text-sm mt-2">{f.desc}</p>}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div>No feeds</div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Subscriptions;
