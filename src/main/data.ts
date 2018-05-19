import { Type, Url } from "./dataHelper";

export let types: Type[] = [
  { id: 0, text: "全部" },
  { id: 1, text: "搜索引擎" },
  { id: 2, text: "学习" },
];

export let urls: Url[] = [
  { type: 1, text: "Baidu", url: "https://www.baidu.com" },
  { type: 1, text: "Google", url: "https://www.google.com" },
  { type: 2, text: "ES6", url: "http://es6.ruanyifeng.com/" },
  { type: 2, text: "Flex", url: "http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$" },
  { type: 2, text: "Less", url: "http://lesscss.cn/" },
  { type: 2, text: "Ant Design", url: "http://ant.design/index-cn" },
  { type: 2, text: "React native", url: "https://reactnative.cn/" },
  { type: 2, text: "React", url: "https://doc.react-china.org/" },
  { type: 2, text: "Angular", url: "https://www.angular.cn/" },
  
];
