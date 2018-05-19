import * as React from "react";
import { getUrlList } from "./dataHelper";
import { types } from "./data";
import { Menu, Icon } from "antd";
let styles = require("./main.less");

export interface MainProps {
  current?: any[];
  type?: number;
}

export class MainComponent extends React.Component<MainProps, any> {
  constructor(props: any, context: any) {
    super(props, context);

    let menu = types[0];

    this.state = {
      current: String(menu.id),
      currSelectedMenu: String(menu.id)
    };
  }

  onMenuClick = (e: any) => {
    this.setState({
      currSelectedMenu: String(e.key),
      type: String(e.key)
    });
  };

  onUrlClick = (data: any) => {
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
            {types.map(item => (
              <Menu.Item key={item.id}>{item.text}</Menu.Item>
            ))}
          </Menu>
        </header>
        <section>
          {getUrlList(this.state.type).map((item, index) => (
            <div key={index} onClick={() => this.onUrlClick(item)}>
              {item.text}
            </div>
          ))}
        </section>
      </article>
    );
  }
}
