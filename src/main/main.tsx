import * as React from "react";
import { getUrlList, Type, getTypeList, UrlData } from "../urlList";
import { Menu, Icon } from "antd";
let styles = require("./main.less");

export interface MainProps {
  current?: any[];
  type?: Type;
}

export class MainComponent extends React.Component<MainProps, any> {
  constructor(props: any, context: any) {
    super(props, context);

    let menu = getTypeList()[0];

    this.state = {
      current: menu.key,
      currSelectedMenu: menu.key
    };
  }

  onMenuClick = (e: any) => {
    this.setState({
      currSelectedMenu: e.key,
      type: Type[e.key]
    });
  };

  onUrlClick = (data: UrlData) => {
    window.open(data.url);
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
            {getTypeList().map(item => (
              <Menu.Item key={item.key}>{item.value}</Menu.Item>
            ))}
          </Menu>
        </header>
        <section>
          {getUrlList({ type: this.state.type }).map((item, index) => (
            <div key={index} onClick={() => this.onUrlClick(item)}>
              {item.text}
            </div>
          ))}
        </section>
      </article>
    );
  }
}
