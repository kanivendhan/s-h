import { useState } from "react";
import Footer from "./Footer";


const data = [
  "Soap",
  "Shampoo",
  "Conditioner",
  "Kerotin",
  "Natural",
  "Coconut",
  "Hair oil",
  "Herbal"
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   <>
      <div className="search-container">
        <h1>Search Page</h1>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="results">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="result-item">{item}</div>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>

      </div>
      <Footer/>
      </>
  );
};

export default Search;