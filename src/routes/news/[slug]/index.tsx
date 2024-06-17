import { component$ } from "@builder.io/qwik";
import { Link, StaticGenerateHandler, routeLoader$ } from "@builder.io/qwik-city";

export const useArticleLoader = routeLoader$(async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const product = await res.json();
  return product;
});

export default component$(() => {
  const data = useArticleLoader().value;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>

      <h3>Related News</h3>
      <ul>
        <li><Link href="/news/1">Go to news 1</Link></li>
        <li><Link href="/news/2">Go to news 2</Link></li>
        <li><Link href="/news/3">Go to news 3</Link></li>
        <li><Link href="/news/4">Go to news 4</Link></li>
      </ul>
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs = ['1', '2', '3', '4']

  const params = slugs?.map((slug) => {
    return {
      slug
    };
  });

  return {
    params,
  };
};