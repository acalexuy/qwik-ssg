import { component$ } from "@builder.io/qwik";
import { Link, StaticGenerateHandler, routeLoader$ } from "@builder.io/qwik-city";

export const useArticleLoader = routeLoader$(async ({ params, status, url }) => {
  const fakeData = {
    news1: {
      heading: 'The News 1',
      content: 'This is news 1'
    },
    news2: {
      heading: 'The News 2',
      content: 'This is news 2'
    },
    news3: {
      heading: 'The News 3',
      content: 'This is news 3'
    },
    news4: {
      heading: 'The News 4',
      content: 'This is news 4'
    },
  }

  return fakeData[params?.slug as keyof typeof fakeData]
});

export default component$(() => {
  const data = useArticleLoader().value;

  return (
    <>
      <h1>{data.heading}</h1>
      <p>{data.content}</p>

      <h3>Related News</h3>
      <ul>
        <li><Link href="/news/news1">Go to news 1</Link></li>
        <li><Link href="/news/news2">Go to news 2</Link></li>
        <li><Link href="/news/news3">Go to news 3</Link></li>
        <li><Link href="/news/news4">Go to news 4</Link></li>
      </ul>
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs = ['news1', 'news2', 'news3', 'news4']

  const params = slugs?.map((slug) => {
    return {
      slug
    };
  });

  return {
    params,
  };
};