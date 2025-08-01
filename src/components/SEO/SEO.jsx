import { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  ogLocale = "en_US",
  twitterCard = "summary_large_image",
}) => {
  useEffect(() => {
    const setMetaTag = (name, content, attr = "name") => {
      if (!content) return;

      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Title
    if (title) {
      document.title = title;
      setMetaTag("og:title", title, "property");
      setMetaTag("twitter:title", title);
    }

    // Description
    if (description) {
      setMetaTag("description", description);
      setMetaTag("og:description", description, "property");
      setMetaTag("twitter:description", description);
    }

    // Keywords
    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    // Canonical
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);

      setMetaTag("og:url", canonical, "property");
    }

    // OG Tags
    setMetaTag("og:type", ogType, "property");
    setMetaTag("og:locale", ogLocale, "property");

    // OG Image
    if (ogImage) {
      setMetaTag("og:image", ogImage, "property");
      setMetaTag("twitter:image", ogImage);
    }

    // Twitter Card
    setMetaTag("twitter:card", twitterCard);
  }, [
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType,
    ogLocale,
    twitterCard,
  ]);

  return null;
};

export default SEO;
