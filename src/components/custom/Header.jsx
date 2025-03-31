import MyButton from "./MyButton";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-black text-white p-2">
      <h1 className="font-alfa text-4xl text-red-500 mt-4">
        Slammin Burgers 🍔
      </h1>
      <Nav />
      <MyButton
        btnTxt={"Order Now"}
        btnStyles={"mt-4 text-xl bg-white text-black hover:bg-red-500"}
      />
    </header>
  );
}
