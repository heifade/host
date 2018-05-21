import { Type, Url } from "./dataHelper";

export let types: Type[] = [
  { id: "ALL", text: "全部" },
  { id: "A", text: "搜索引擎" },
  {
    id: "B",
    text: "学习",
    sub: [
      { id: "B01", text: "Flex" },
      { id: "B02", text: "Grid" },
      { id: "B03", text: "Webpack" },
      { id: "B04", text: "Rollup" },
      { id: "B05", text: "travis" },
      { id: "B06", text: "coveralls" },
      { id: "B99", text: "其它" }
    ]
  },
  {
    id: "Tool",
    text: "工具"
  }
];

export let urls: Url[] = [
  { type: "A", text: "Baidu", url: "https://www.baidu.com" },
  { type: "A", text: "Google", url: "https://www.google.com" },
  { type: "B99", text: "ES6", url: "http://es6.ruanyifeng.com/" },
  {
    type: "B01",
    text: "Flex 布局教程：语法篇，阮一峰",
    url: "http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$"
  },
  {
    type: "B01",
    text: "CSS3 Flexbox属性可视化指南",
    url: "http://www.css88.com/archives/5744"
  },
  {
    type: "B02",
    text: "CSS Grid 布局完全指南",
    url: "http://www.css88.com/archives/8510"
  },
  {
    type: "B03",
    text: "Webpack",
    url: "https://www.webpackjs.com/"
  },
  {
    type: "B04",
    text: "Rollup",
    url: "http://www.rollupjs.com/"
  },
  {
    type: "B05",
    text: "travis",
    url: "https://travis-ci.org/"
  },
  {
    type: "B06",
    text: "coveralls",
    url: "https://coveralls.io/repos/new?name=heifade&service=github"
  },
  { type: "B99", text: "Less", url: "http://lesscss.cn/" },
  {
    type: "B99",
    text: "Ant Design",
    url: "https://ant.design/docs/react/introduce-cn"
  },
  { type: "B99", text: "React native", url: "https://reactnative.cn/" },
  { type: "B99", text: "React", url: "https://doc.react-china.org/" },
  { type: "B99", text: "Angular", url: "https://www.angular.cn/" },
  { type: "Tool", text: "Github", url: "https://github.com/" },
  { type: "Tool", text: "npm", url: "https://www.npmjs.com/~heifade" }
];
