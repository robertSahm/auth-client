import React from 'react';
import { Component } from 'react';
import UserList from './user_list'

import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserList />
        {this.props.children}
      </div>
    )
  }
}
