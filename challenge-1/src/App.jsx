import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";
import mockData from "./mockData";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  var handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <>
      <Header handleInputChange={handleInputChange} />
      <Posts mockData={mockData} inputValue={inputValue} />
      <Footer />
    </>
  );
}

export default App;
