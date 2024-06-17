import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

import Home from "~/routes/home";

export default component$(() => {
  return (
    <>
      {/* I moved all logic to another file in-case you want to quickly delete and prototype something */}
     <Link href='/news/news1'>Go to news 1</Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};