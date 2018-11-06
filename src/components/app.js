import React, { Component } from "react";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";
import Header from '../components/header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-6">
            <BookList />
          </div>
          <div className="col-md-6">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}
