import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header({ handleInputChange }) {
  return (
    <>
      <div className="container">
        <div className="header">
          <a href="">Codelândia</a>
          <a href="">blog</a>
        </div>
        <div className="search-bar">
          <SearchBar handleInputChange={handleInputChange} />
        </div>
      </div>
    </>
  );
}
