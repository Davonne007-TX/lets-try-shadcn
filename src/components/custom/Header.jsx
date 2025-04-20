import MyButton from "./MyButton";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-black text-white p-4">
      <h1 className="font-alfa text-3xl text-red-500">Slammin Burgers 🍔</h1>

      <div className="flex-1 flex justify-center">
        <Nav />
      </div>

      <MyButton
        btnTxt={"Order Now"}
        btnStyles={"text-xl bg-white text-black hover:bg-red-500"}
      />
    </header>
  );
}
