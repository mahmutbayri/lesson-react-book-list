import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectBook } from "../actions";
import { bindActionCreators } from "redux";

class BookList extends Component {
  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  selectBook: PropTypes.func.isRequired
};

// store connections...
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
