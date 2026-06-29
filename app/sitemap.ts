import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://portfolio.g0dr.pt";
    return [
        { url: base,                   lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${base}/projects`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/experience`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/tools`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ];
}