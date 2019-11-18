import React, { Suspense, lazy } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/index.js';

import '../sass/page/app.scss';

const ComponentOne = lazy(() => import('../component/componentOne.jsx'));
const ComponentTwo = lazy(() => import('../component/componentTwo.jsx'));

class App extends React.Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      todoValue: '',
      showComponentOne: false,
      showComponentTwo: false
    };
  }

  _handleTodoChange(e) {
    this.setState({
      todoValue: e.target.value
    });
  }

  _addTodoClick() {
    this.props.actions.addTodoAction(this.state.todoValue);
    this.setState({ todoValue: '' });
  }

  _timeFormat(time) {
    let _date = new Date(time);
    let _month = _date.getMonth() + 1;
    let _day = _date.getDate();
    return _month + '月' + _day + '日';
  }

  _todoClick(i) {
    this.props.actions.selectTodoAction(i);
  }

  showComponent(name, number) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  render() {
    let { todoValue } = this.state;
    let { store } = this.props;
    return (
      <div>

        <div className = 'form'>
          <input
            className = 'input'
            placeholder = '请输入TODO内容'
            value = { todoValue }
            onChange = { (e) => this._handleTodoChange(e) } />
          <div className = 'btn' onClick = { () => this._addTodoClick() }>按钮</div>
        </div>

        {
          store.todoList.map((item, i) => {
            return (
              <div className = 'item' key = { i } onClick = { () => this._todoClick(i) }>
                <div className = 'flex'>
                  <div className = { item.isSelect ? 'item-select' : 'item-un-select' } />
                  <div className = { item.isSelect ? 'item-todo-active' : 'item-todo' }>
                    { item.todo }
                  </div>
                </div>
                <div className = 'item-time'>{ this._timeFormat(item.time) }</div>
              </div>
            );
          })
        }

        <button onClick = { () => this.showComponent('showComponentOne', 1) }>显示/隐藏组件1</button>
        <button onClick = { () => this.showComponent('showComponentTwo', 2) }>显示/隐藏组件2</button>

        {
          this.state.showComponentOne && (
            <Suspense fallback = { null }>
              <ComponentOne />
            </ Suspense>
          )
        }

        {
          this.state.showComponentTwo && (
            <Suspense fallback = { null }>
              <ComponentTwo />
            </ Suspense>
          )
        }

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
