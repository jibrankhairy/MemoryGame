import Footer from "./components/Footer";
import Header from "./components/Header";
import MemoryGame from "./components/MemoryGame";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <MemoryGame />
      <Footer />
    </div>
  );
}

export default App;
