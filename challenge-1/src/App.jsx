import Header from "./Header/Header";
import Posts from "./Posts/Posts";
import mockData from "./mockData";

function App() {
  return (
    <>
      <Header />
      <Posts mockData={mockData} />
    </>
  );
}

export default App;
