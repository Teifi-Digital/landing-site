import { API_URL, NEXT_URL } from "@/config/index";

export function getStrapiURL(path = "") {
    console.log('=====', `${API_URL}/api${path}`)
  return `${API_URL}/api${path}`;
}

export function getStrapiURLNotAPI(path = "") {
  return `${API_URL}${path}`;
}