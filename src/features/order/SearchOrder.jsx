import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const nav = useNavigate();

  // we want to make it so that the form does not refresh
  // then take the given given query and nav to the Order page
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    nav(`/order/${query}`);
    //set it back to empty
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order Number"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchOrder;
