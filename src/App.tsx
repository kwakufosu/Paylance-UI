//import Card from "./components/Card";
import Card from "./components/Card";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="px-3 md:px-0 md:max-w-[900px] mx-auto md:grid grid-cols-2 md:space-x-14 items-center mt-10">
        <Checkout />
        <Card />
      </div>
    </div>
  );
}

export default App;
