import * as React from "react";
import { getUrlList, Type } from "./dataHelper";
import { types } from "./data";
import { Menu, Icon } from "antd";
let styles = require("./main.less");

export interface MainProps {
  type?: string;
}

export class MainComponent extends React.Component<MainProps, any> {
  constructor(props: any, context: any) {
    super(props, context);

    let menu = types[0];

    this.state = {
      currSelectedMenu: menu.id,
      type: menu.id
    };
  }

  onMenuClick = (e: any) => {
    this.setState({
      currSelectedMenu: e.key,
      type: e.key
    });
  };

  onUrlClick = (data: any) => {
    window.open(data.url);
  };

  subMenu = (item: Type, index: number): any => {
    if (item.sub && item.sub.length) {
      return (
        <Menu.SubMenu key={index} title={item.text}>
          {item.sub.map((item1, index1) => this.subMenu(item1, index1))}
        </Menu.SubMenu>
      );
    } else {
      return <Menu.Item key={item.id}>{item.text}</Menu.Item>;
    }
  };

  render() {
    return (
      <article className={styles.main}>
        <header>
          <Menu
            onClick={this.onMenuClick}
            selectedKeys={[this.state.currSelectedMenu]}
            mode="horizontal"
          >
            {types.map((item, index) => this.subMenu(item, index))}
          </Menu>
        </header>
        <section>
          {getUrlList(this.state.type).map((item, index) => (
            <div className={styles.btn} key={index} onClick={() => this.onUrlClick(item)}>
              {item.text}
            </div>
          ))}
        </section>
      </article>
    );
  }
}
