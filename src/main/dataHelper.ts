import { types, urls } from "./data";

export interface Type {
  id: string;
  text: string;
  sub?: Type[];
}

export interface Url {
  type: string;
  text: string;
  url: string;
}

export function getUrlList(type: string) {
  let list = urls;
  if (type !== "ALL") {
    list = urls.filter(item => item.type == type);
  }

  return list;
}
