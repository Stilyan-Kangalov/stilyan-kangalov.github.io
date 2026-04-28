import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublishedSortedPosts(): Promise<
  CollectionEntry<"blog">[]
> {
  const blogEntries = await getCollection("blog");
  return blogEntries
    .filter((post) => post.data && post.data.pubDate)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getUniqueTags(): Promise<string[]> {
  const posts = await getPublishedSortedPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

export async function getPostsByTag(
  tag: string,
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getPublishedSortedPosts();
  return posts.filter((post) => post.data.tags?.includes(tag));
}

export async function getPostsGroupedByYear(): Promise<
  Array<{ year: number; posts: CollectionEntry<"blog">[] }>
> {
  const posts = await getPublishedSortedPosts();
  const map = new Map<number, CollectionEntry<"blog">[]>();

  posts.forEach((post) => {
    const year = post.data.pubDate.getUTCFullYear();
    const list = map.get(year) ?? [];
    list.push(post);
    map.set(year, list);
  });

  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, yearPosts]) => ({ year, posts: yearPosts }));
}
