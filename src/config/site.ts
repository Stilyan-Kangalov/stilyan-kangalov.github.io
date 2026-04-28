import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Stilyan's Dev Lab",
  description:
    "Master modern web development with practical guides, coding tips, and best practices. Explore full-stack solutions and industry trends to level up your technical skill.",
  url: "https://stilyan.com",
  lang: "en",
  locale: "en_US",
  author: "Stilyan Kangalov",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/Stilyan-Kangalov",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
