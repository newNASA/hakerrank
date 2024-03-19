import Navbar from "./components/navbar";
import Header from "./components/header";
import Problem from "./components/problem";
import Interview from "./components/interview";
import Home_links from "./components/home-links";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Problem />
      <Interview />
      <Home_links />
      <Footer />
    </div>
  );
}

export default App;