import React from "react";
import { Component } from "react";

class Searchbar extends Component {
  state = {
        filter: '',
    }

    handleChange = (e) => {
        this.setState({ filter: e.target.value.toLowerCase() });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { filter} = this.state;

      const data = filter;

      onSubmit(data);
      
        this.reset();
    }

    reset = () => {
this.setState({ filter: ''});
    }
    
    
    render() {
      const { filter } = this.state;  


        return (
    <header className="searchbar">
  <form className="form"  onSubmit={this.handleSubmit}>
    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
        placeholder="Search images and photos"
                onChange={this.handleChange}
                value={filter}
                    />
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>
  </form>
</header>
)}
    
}

export default Searchbar;