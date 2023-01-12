import React from "react";
import { Component } from "react";
import css from "./Searchbar.module.css"


class Searchbar extends Component {
  state = {
        query: '',
    }

    handlerChange = (e) => {
        this.setState({ query: e.target.value});
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
  
        onSubmit(this.state.query);

        this.reset();
    }

    reset = () => {
        this.setState({ query: ''});
    }
    
    
    render() {
      const { query } = this.state;  

        return (
    <header className={css.Searchbar}>
    <form className={css.SearchForm}  onSubmit={this.handlerSubmit}>
    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handlerChange}
      value={query}
      />
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>
  </form>
</header>
)}
    
}

export default Searchbar;