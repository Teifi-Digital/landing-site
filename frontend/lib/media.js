import { getStrapiURL, getStrapiURLNotAPI } from "@/lib/api";

export function getStrapiMedia(url) {
  if (!url)
  {
    return "";
  }
  const imageUrl = url.startsWith("/")
    ? getStrapiURL(url)
    : url;
  // const imageUrl = "";
  return imageUrl;
}

export function getStrapiMediaNotAPI(url) {
  if (!url)
  {
    return "";
  }
  const imageUrl = url.startsWith("/")
    ? getStrapiURLNotAPI(url)
    : url;
  // const imageUrl = "";
  return imageUrl;
}
