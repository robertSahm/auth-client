import React from 'react';
import { Component } from 'react';
import UserList from './user_list'
import CommentBox from './comment_box'

import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CommentBox />
        <UserList />
        {this.props.children}
      </div>
    )
  }
}
