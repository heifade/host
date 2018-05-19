import { types, urls } from "./data";

export interface Type {
  id: number;
  text: string;
}

export interface Url {
  type: number;
  text: string;
  url: string;
}

export function getUrlList(type: number) {
  let list = urls;
  if (type && Number(type)) {
    list = urls.filter(item => item.type == type);
  }

  return list;
}
