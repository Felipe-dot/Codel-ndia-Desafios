import "./Posts.css";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Post from "../Post/Post";

export default function Posts({ mockData, inputValue }) {
  const [searchResults, setSearchResults] = useState(mockData);

  const options = {
    keys: ["title"],
    includeScore: true,
  };

  const fuse = new Fuse(mockData, options);

  useEffect(() => {
    const term = inputValue;

    if (inputValue === "") {
      setSearchResults(mockData);
      return;
    }

    if (term.length > 0) {
      const results = fuse.search(term);
      var teste = results.map((e) => e.item);
      setSearchResults(teste);
    } else {
      setSearchResults([]);
    }
  }, [inputValue]);

  const iconToggle = (teste) => {
    const icon = document.querySelector(teste);

    icon.onclick = () => {
      icon.classList.toggle("filled");
    };
  };

  return (
    <>
      <div className="posts">
        {searchResults.map((e, idx) => (
          <Post
            key={idx}
            id={idx}
            date={e.date}
            title={e.title}
            content={e.content}
            iconToggle={iconToggle}
          />
        ))}
      </div>
    </>
  );
}
