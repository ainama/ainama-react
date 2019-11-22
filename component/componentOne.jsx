import React from 'react';

import '../sass/component/componentOne.scss';

export default class Page1 extends React.Component {
  constructor(props,context) {
    super(props, context)
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    let list = this.state.list;
    for (let i = 0; i < 3; i++) {
      list.push('注意: React.lazy 和 Suspense 技术还不支持服务端渲染。如果你想要在使用服务端渲染的应用中使用，我们推荐 Loadable Components 这个库。它有一个很棒的服务端渲染打包指南。');
    }
    this.setState({
      list
    });
  }

  render() {
    return (
      <div className = 'component-one'>
        {
          this.state.list.map((item, i) => {
            return (
              <div key = { i }>{ item }</div>
            )
          })
        }
      </div>
    );
  }
};
