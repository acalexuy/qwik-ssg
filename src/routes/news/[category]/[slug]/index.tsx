import { component$ } from "@builder.io/qwik";
import {
  Link,
  type StaticGenerateHandler,
  routeLoader$,
} from "@builder.io/qwik-city";

export const useArticleLoader = routeLoader$(async ({ params }) => {
  const res = await fetch(`http://localhost:3000/news/${params.slug}`);
  const news = await res.json();
  return news;
});

export default component$(() => {
  const data = useArticleLoader().value;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.content}</p>

      <h3>Related News</h3>
      <ul>
        <li>
          <Link href="/news/home-loans/1">Go to news 1</Link>
        </li>
        <li>
          <Link href="/news/home-loans/2">Go to news 2</Link>
        </li>
        <li>
          <Link href="/news/home-loans/3">Go to news 3</Link>
        </li>
        <li>
          <Link href="/news/home-loans/4">Go to news 4</Link>
        </li>
        {data.id === "4" && (
          <li>
            <Link href="/news/home-loans/5">Go to news 5</Link>
          </li>
        )}
      </ul>
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const res = await fetch(`http://localhost:3000/news/`);
  const news: any = await res.json();

  const params = news.map((data: any) => {
    return {
      slug: data.id,
      category: data.category,
    };
  });

  return {
    params,
  };
};
