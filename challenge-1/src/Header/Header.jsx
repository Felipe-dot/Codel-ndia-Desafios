import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <a>Codelândia</a>
          <a>blog</a>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </>
  );
}
