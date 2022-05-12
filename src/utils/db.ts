import Dexie from "dexie";
import dexieRelationships from "dexie-relationships";
import { Feed, RssItem } from "./RssParser";

class QuarkDb extends Dexie {
  feeds!: Dexie.Table<Feed, string>;
  items!: Dexie.Table<RssItem, string>;

  constructor() {
    super("subscriptions", { addons: [dexieRelationships] });

    this.version(1).stores({
      feeds: "url",
      items: "id, feedUrl -> feeds.url",
    });
  }
}

export const db = new QuarkDb()