import "./App.css";
import Header from "./components/custom/Header";
import { MyAccordion } from "./components/custom/MyAccordion";
// import MyButton from "./components/custom/MyButton";

function App() {
  return (
    <main className="bg-[url('./images/burger.jpg')] bg-cover min-h-screen">
      <Header />
      {/* <MyButton
        btnTxt={"Ciick Me"}
        btnStyles="bg-pink-400 font-bold hover:bg-green-400"
      /> */}
    </main>
  );
}

export default App;
