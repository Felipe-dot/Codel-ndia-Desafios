import "./SearchBar.css";

export default function SearchBar({ handleInputChange }) {
  return (
    <>
      <div className="input-container">
        <i className="iconSearch">
          <img
            src="src/assets/ant-design_search-outlined.svg"
            alt="search logo"
          />
        </i>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Pesquisar no blog"
        />
      </div>
    </>
  );
}
