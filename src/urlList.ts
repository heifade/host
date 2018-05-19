export enum Type {
  All = "全部",
  SearchEngines = "搜索引擎"
}

export interface UrlData {
  text: string;
  url: string;
  type: Type;
}

let urlList: Array<UrlData> = [
  { text: "Google", url: "https://www.google.com", type: Type.SearchEngines },
  { text: "Baidu", url: "https://www.baidu.com", type: Type.SearchEngines }
];

export interface SearchData {
  type?: Type;
}

export function getUrlList(searchData: SearchData) {
  let list = urlList;
  if (searchData.type) {
    if (searchData.type !== Type.All) {
      list = urlList.filter(item => item.type == searchData.type);
    }
  }
  return list;
}

export function getTypeList() {
  let list = [];
  for (let key in Type) {
    list.push({
      key,
      value: Type[key]
    });
  }
  return list;
}
