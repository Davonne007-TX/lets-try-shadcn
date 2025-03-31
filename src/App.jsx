import "./App.css";
import Burgers from "./components/custom/Burgers";
import Header from "./components/custom/Header";
import MyCard from "./components/custom/MyCard";

function App() {
  return (
    <main>
      <section className="bg-[url('./images/burger.jpg')] bg-cover min-h-screen pb-10">
        <Header />
        <MyCard />
      </section>

      <Burgers />
    </main>
  );
}

export default App;
