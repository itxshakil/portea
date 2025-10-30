import { useEffect } from "react";
import Logo from "../assets/logo.png"

interface MetaOptions {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export function usePageMeta({
                                title,
                                description,
                                keywords,
                                image,
                                url,
                            }: MetaOptions) {
    useEffect(() => {
        // --- Title ---
        if (title) document.title = title;
        if(!image) {
            image = Logo;
        }

        // Helper to set or update meta tag
        const setMeta = (attr: "name" | "property", key: string, value?: string) => {
            if (!value) return;

            // remove any old duplicates first
            document
                .querySelectorAll(`meta[${attr}="${key}"]`)
                .forEach((el) => el.remove());

            const meta = document.createElement("meta");
            meta.setAttribute(attr, key);
            meta.setAttribute("content", value);
            document.head.appendChild(meta);
        };

        // --- Standard meta ---
        setMeta("name", "description", description);
        setMeta("name", "keywords", keywords);
        setMeta("name", "subject", title);
        setMeta("name", "url", url);
        setMeta("name", "identifier-URL", url);
        setMeta("name", "apple-mobile-web-app-title", title);
        setMeta("name", "twitter:image:alt", title);

        // --- Open Graph meta ---
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:type", "website");
        setMeta("property", "og:url", url || window.location.href);
        setMeta("property", "og:image", image);

        // --- Twitter meta ---
        setMeta("name", "twitter:card", "summary_large_image");
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);
        setMeta("name", "twitter:image", image);

        // Cleanup old meta tags when component unmounts
        return () => {
            [
                "description",
                "keywords",
                "og:title",
                "og:description",
                "og:type",
                "og:url",
                "og:image",
                "twitter:card",
                "twitter:title",
                "twitter:description",
                "twitter:image",
            ].forEach((key) => {
                document
                    .querySelectorAll(`meta[name="${key}"], meta[property="${key}"]`)
                    .forEach((el) => el.remove());
            });
        };
    }, [title, description, keywords, image, url]);
}
