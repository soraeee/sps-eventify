import SearchBar from "material-ui-search-bar";

function Search(props) {
  const { query, updateQuery } = props;
  return (
    <SearchBar
      value={query}
      onChange={(newValue) => updateQuery(newValue)}
      onCancelSearch={() => updateQuery("")}
    />
  );
}

export default Search;
