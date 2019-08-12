import React from "react";
import "./Search.scss";
import { FiSearch } from "react-icons/fi";
const Search = props => {
  let textInput = React.createRef();

  const handleChange = e => {
    props.setSearchText(e.target.value);
  };

  return (
    <div className="dashboard__tags--search">
      <form>
        <input
          className="dashboard__tags--search-input"
          type="text"
          placeholder="Tag name"
          ref={textInput}
          onChange={e => handleChange(e)}
        />
        <FiSearch className="dashboard__tags--search-icon" />
      </form>
    </div>
  );
};

export default Search;
