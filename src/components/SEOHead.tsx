import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
}: SEOHeadProps) => {
  useEffect(() => {
    const defaultTitle = "Angeli Gardens - Premium Landscaping & Garden Services | London, Surrey & Berkshire | Checkatrade Approved";
    const defaultDescription = "Angeli Gardens - Checkatrade approved landscaping experts. Transform your outdoor space with expert garden maintenance, patios, decking, fencing, and landscaping across London, Surrey & Berkshire. 9.75/10 rating. Free quotes.";
    const defaultKeywords = "landscaping London, garden maintenance Surrey, landscaping services Berkshire, garden design, patios, decking, turfing, hedge trimming, tree pruning, garden clearance, luxury landscaping, Checkatrade approved landscaper, Checkatrade gardener, landscaping near me, garden services London, garden maintenance Surrey, landscaping Berkshire";
    const defaultCanonical = "https://www.angeligardens.co.uk";
    const defaultOgImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/1dJXwWZnvEdNuQxJzmejokIQllD2/social-images/social-1763163107906-logo.jpg";

    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update description
    updateMetaTag("description", description || defaultDescription);
    updateMetaTag("og:description", description || defaultDescription, "property");
    updateMetaTag("twitter:description", description || defaultDescription);

    // Update keywords
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Update title meta tags
    if (title) {
      updateMetaTag("og:title", title, "property");
      updateMetaTag("twitter:title", title);
    }

    // Update canonical
    if (canonical) {
      let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag("og:image", ogImage, "property");
      updateMetaTag("twitter:image", ogImage);
    }

    // Update OG URL
    const currentUrl = canonical || window.location.href;
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("twitter:url", currentUrl);
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEOHead;

