// An array of links for navigation bar
const navBarLinks = [
  { name: "صفحه اصلی", url: "/" },
  { name: "محصولات", url: "/products" },
  { name: "خدمات", url: "/services" },
  { name: "وبلاگ", url: "/blog" },
  { name: "ارتباط با ما", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "اکوسیستم",
    links: [
      { name: "مستندات", url: "/welcome-to-docs/" },
      { name: "لوازم", url: "/products" },
      { name: "خدمات", url: "/services" },
    ],
  },
  {
    section: "شرکت",
    links: [
      { name: "درباره ما", url: "#" },
      { name: "وبلاگ", url: "/blog" },
      { name: "فرصت های شغلی", url: "#" },
      { name: "مشتریان", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
