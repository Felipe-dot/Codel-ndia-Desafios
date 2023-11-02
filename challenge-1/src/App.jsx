import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";
import mockData from "./mockData";

function App() {
  return (
    <>
      <Header />
      <Posts mockData={mockData} />
      <Footer />
    </>
  );
}

export default App;
