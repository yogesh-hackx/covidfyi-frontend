import SearchBar from "./SearchBar";

const SearchContainer = (props) => (
  <>
    <div className="heading">Kindly enter your State/UT name:</div>
    <div className="search-container">
      <SearchBar getSelectedState={props.getSelectedState} focusHandler={props.focusHandler} />
    </div>
  </>
);

export default SearchContainer;
