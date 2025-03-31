import "./App.css";
import Header from "./components/custom/Header";
import MyCard from "./components/custom/MyCard";

function App() {
  return (
    <main className="bg-[url('./images/burger.jpg')] bg-cover min-h-screen">
      <Header />
      <MyCard />
    </main>
  );
}

export default App;
