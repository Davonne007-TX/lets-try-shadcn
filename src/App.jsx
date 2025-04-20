import "./App.css";
import ClassicFavorites from "./components/custom/ClassicFavorites";
import Header from "./components/custom/Header";
import MyCard from "./components/custom/MyCard";

function App() {
  return (
    <main>
      <section className="bg-[url('./burger.jpg')] bg-cover min-h-screen pb-10">
        <Header />
        <MyCard />
      </section>

      <ClassicFavorites />
    </main>
  );
}

export default App;
