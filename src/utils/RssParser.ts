import { Feed } from "solid-headless";

export interface Feed {
  url?: string;
  title?: string;
  desc?: string;
  link?: string;
  imageURL?: string;
  items: RssItem[];
}

export interface RssItem {
  id: string;
  date?: string;
  feedId?: string;
  title?: string;
  desc?: string;
  link?: string;
  author?: string;
  thumbURL?: string;
  content?: string;
  categories: string[];
}

const parseRss = (doc: Document, url: string): Feed | undefined => {
  const feed: Feed = { items: [], url };
  const titleElem = doc.querySelector("title");
  feed.title = titleElem?.textContent ?? undefined;

  const link = doc.querySelector('link')
  feed.link = link?.getAttribute('href') ?? link?.textContent ?? undefined

  let desc = doc.querySelector("description");
  if (!desc) {
    desc = doc.querySelector("subtitle");
  }
  feed.desc = desc?.textContent ?? undefined;

  let image = doc.querySelector("image");
  if (image) {
    feed.imageURL = image.querySelector("url")?.textContent ?? undefined;
  } else {
    feed.imageURL = doc.querySelector("logo")?.textContent ?? undefined;
  }

  let items: NodeListOf<Element> = doc.querySelectorAll("item");
  if (items.length === 0) {
    items = doc.querySelectorAll("entry");
    if (items.length === 0) {
      return;
    }
  }

  const feedItems: RssItem[] = Array.from(items)
    .map((i) => {
      let ret: RssItem = { categories: [], id: "", feedId: url };

      let id = i.querySelector("guid");
      if (!id) {
        id = i.querySelector("id");
      }
      ret.id = id?.textContent ?? "";

      const summary = i.querySelector('description')
      if (summary) {
        ret.desc = summary.textContent ?? undefined
      } else {
        ret.desc = i.querySelector('summary')?.textContent ?? undefined
      }

      let date = i.querySelector("pubDate");
      if (!date) {
        date = i.querySelector("updated");
      }
      ret.date = new Date(date?.textContent!).toISOString();

      const title = i.querySelector("title");
      ret.title = title?.textContent ?? undefined;

      const link = i.querySelector("link");
      ret.link = link?.getAttribute("href") ?? link?.textContent ?? undefined;

      let desc = i.querySelector("description");
      ret.desc = desc?.textContent ?? undefined;

      const categories = i.querySelectorAll("category");
      ret.categories = Array.from(categories)
        .map((c) => c?.getAttribute("label") ?? c?.textContent ?? "")
        .filter((c) => c !== "");

      let author = i.querySelector("creator");
      if (!author) {
        author = i.querySelector("author");
        ret.author = author?.querySelector("name")?.textContent ?? undefined;
      } else {
        ret.author = author.textContent ?? undefined;
      }

      let thumb = i.querySelector("content[url]");
      if (!thumb) {
        thumb = i.querySelector("thumbnail[url]");
        if (thumb?.textContent !== "") {
          ret.thumbURL = thumb?.textContent ?? undefined;
        } else {
          ret.thumbURL = thumb?.getAttribute("url") ?? undefined;
        }
      } else {
        ret.thumbURL = thumb.getAttribute("url") ?? undefined;
      }

      let content = i.querySelector("encoded");
      if (!content) {
        content = i.querySelector("content");
      }
      ret.content = content?.textContent ?? undefined;

      return ret;
    })
    .filter((i) => i.id !== "");

  feed.items = feedItems;
  return feed;
};

export default parseRss;
