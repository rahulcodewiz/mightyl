import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_zDiK7ruh.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BhUxqVxB.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer__viWBuZ6.mjs';
/* empty css                                   */
/* empty css                                 */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("http://mightyloka.com");
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, description, pubDate, tags, readTime } = Astro2.props;
  function generateSlug(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
  }
  function extractHeadings(content) {
    const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
    const headings2 = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, "").trim();
      const slug = generateSlug(text);
      headings2.push({ level, text, slug });
    }
    return headings2;
  }
  const renderedContent = await Astro2.slots.render("default");
  const headings = extractHeadings(renderedContent);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-4dqtj3le": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4dqtj3le": true })} ${maybeRenderHead()}<main class="blog-content" data-astro-cid-4dqtj3le> <div class="blog-container" data-astro-cid-4dqtj3le> <!-- Table of Contents Sidebar --> <aside class="toc-sidebar" data-astro-cid-4dqtj3le> <div class="toc-content" data-astro-cid-4dqtj3le> <h3 data-astro-cid-4dqtj3le>Topics</h3> <nav class="toc-nav" data-astro-cid-4dqtj3le> ${headings.length > 0 ? renderTemplate`<ul data-astro-cid-4dqtj3le> ${headings.map((heading, index) => {
    const nextHeading = headings[index + 1];
    nextHeading && nextHeading.level > heading.level;
    if (heading.level === 2) {
      const children = [];
      for (let i = index + 1; i < headings.length; i++) {
        const child = headings[i];
        if (child.level === 2) break;
        if (child.level === 3) {
          children.push(child);
        }
      }
      return renderTemplate`<li data-astro-cid-4dqtj3le> <a${addAttribute(`#${heading.slug}`, "href")} data-astro-cid-4dqtj3le>${heading.text}</a> ${children.length > 0 && renderTemplate`<ul data-astro-cid-4dqtj3le> ${children.map((child) => renderTemplate`<li data-astro-cid-4dqtj3le> <a${addAttribute(`#${child.slug}`, "href")} data-astro-cid-4dqtj3le>${child.text}</a> </li>`)} </ul>`} </li>`;
    }
    return null;
  })} </ul>` : renderTemplate`<p data-astro-cid-4dqtj3le>No headings found</p>`} </nav> </div> </aside> <!-- Main Article Content --> <article class="main-article" data-astro-cid-4dqtj3le> <header class="blog-header" data-astro-cid-4dqtj3le> <h1 data-astro-cid-4dqtj3le>${title}</h1> <div class="blog-meta" data-astro-cid-4dqtj3le> ${pubDate} <div class="blog-tags" data-astro-cid-4dqtj3le> ${tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-4dqtj3le>#${tag}</span>`)} </div> ${readTime && renderTemplate`<div class="read-time" data-astro-cid-4dqtj3le> <span class="read-time-badge" data-astro-cid-4dqtj3le>⏱️ Read Time: ${readTime}</span> </div>`} </div> </header> <div class="blog-body" data-astro-cid-4dqtj3le> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(renderedContent.replace(/<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/gi, (match, level, attrs, text) => {
    const cleanText = text.replace(/<[^>]*>/g, "").trim();
    const slug = generateSlug(cleanText);
    return `<h${level}${attrs} id="${slug}">${text}</h${level}>`;
  }))}` })} </div> </article> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4dqtj3le": true })} ` })} `;
}, "/workspaces/mightyl/src/layouts/BlogLayout.astro", void 0);

const $$Astro = createAstro("http://mightyloka.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const { title, description, pubDate, tags, readTime } = post.data;
  return renderTemplate`<link rel="stylesheet" href="/assets/style.css">${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": title, "description": description, "pubDate": pubDate, "tags": tags, "readTime": readTime }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/workspaces/mightyl/src/pages/blog/[...slug].astro", void 0);

const $$file = "/workspaces/mightyl/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
