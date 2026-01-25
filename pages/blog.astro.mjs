import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_zDiK7ruh.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer__viWBuZ6.mjs';
/* empty css                              */
import { g as getCollection } from '../chunks/_astro_content_BhUxqVxB.mjs';
/* empty css                             */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => a.data.title.localeCompare(b.data.title));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Mighty Loka", "description": "Read the latest stories and insights from Mighty Loka", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main class="blog-list" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>Blog</h1> <p class="subtitle" data-astro-cid-5tznm7mj>Stories, insights, and updates from Mighty Loka</p> <div class="posts-grid" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}`, "href")} class="post-link" data-astro-cid-5tznm7mj> <div class="post-content" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>${post.data.title}</h2> <p class="post-excerpt" data-astro-cid-5tznm7mj>${post.data.description}</p> <div class="post-meta" data-astro-cid-5tznm7mj> ${post.data.pubDate} <div class="post-tags" data-astro-cid-5tznm7mj> ${post.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-5tznm7mj>#${tag}</span>`)} </div> </div> </div> </a> </article>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/workspaces/mightyl/src/pages/blog/index.astro", void 0);

const $$file = "/workspaces/mightyl/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
