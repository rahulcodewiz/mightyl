import { d as createAstro, c as createComponent, a as renderTemplate, j as renderSlot, k as renderHead, b as addAttribute, m as maybeRenderHead, i as renderScript } from './astro/server_zDiK7ruh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                      */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://mightyloka.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><link rel="icon" type="image/svg+xml" href="/ml.jpg"><meta name="generator"', "><title>", `</title><!-- Preload critical fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" as="style"><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Font Awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- Schema.org markup for Google --><script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rashmi Mardur",
        "jobTitle": "Children's Book Author",
        "description": "Rashmi Mardur is a passionate children's book author dedicated to inspiring young minds through magical stories and creative adventures."
      }
    <\/script>`, "</head> <body> <!-- Removed custom cursor element --> ", " <!-- Removed custom cursor JavaScript --> </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/workspaces/mightyl/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const basePath = "";
  const navItems = [
    { href: `${basePath}/`, text: "Home" },
    { href: `${basePath}/#books`, text: "Books" },
    { href: `${basePath}/#about`, text: "About" },
    { href: `${basePath}/blog`, text: "Blog" },
    //{ href: '#resources', text: 'Resources' },
    { href: `${basePath}/#social`, text: "Subscribe" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <nav class="nav-container" data-astro-cid-3ef6ksr2> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <a${addAttribute(`${basePath}/`, "href")} class="logo" data-astro-cid-3ef6ksr2> <span class="author-name" data-astro-cid-3ef6ksr2>Mighty Loka</span> </a> <button class="mobile-menu-button" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <span class="hamburger" data-astro-cid-3ef6ksr2></span> </button> <ul class="nav-links" data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")} class="nav-link" data-astro-cid-3ef6ksr2>${item.text}</a> </li>`)} </ul> </nav> </header>  ${renderScript($$result, "/workspaces/mightyl/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/mightyl/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <!--
    <div class="footer-content">
      
      <div class="footer-section">
        <h3 class="footer-title">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="/#books">Books</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#resources">Resources</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">Resources</h3>
        <ul class="footer-links">
          <li><a href="/reading-guides">Reading Guides</a></li>
          <li><a href="/activities">Activities</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/events">Events</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-title">Legal</h3>
        <ul class="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>
    
      
    </div>
--> <div class="footer-bottom" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <p class="copyright" data-astro-cid-sz7xmlte>
© ${currentYear} MightyLoka. All rights reserved.
</p> </div> <div data-astro-cid-sz7xmlte> <a href="mailto:rashmimardur@gmail.com" aria-label="Email Rashmi Mardur" class="contact-link" data-astro-cid-sz7xmlte> <i class="fas fa-envelope" data-astro-cid-sz7xmlte></i> <span class="sr-only" data-astro-cid-sz7xmlte>Email Rashmi Mardur</span> </a> </div> <!--
      <div class="footer-social">
        <a href="https://instagram.com/RashmiMardur" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/RashmiMardur" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/RashmiMardur" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
      </div>--> </div> </div> </footer> `;
}, "/workspaces/mightyl/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b };
