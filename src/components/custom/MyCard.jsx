import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MyButton from "./MyButton";

export default function MyCard() {
  return (
    <Card className="mt-40 ml-20 max-w-sm md:max-w-xl bg-white rounded-2xl border border-gray-300 p-6 transition-transform duration-300 hover:scale-105">
      <CardHeader className="text-left">
        <CardTitle className="text-5xl font-alfa text-red-500 drop-shadow-md">
          Best Burgers in Town
        </CardTitle>
        <CardDescription className="text-3xl font-serif text-gray-600 mt-2">
          Cooked to perfection every single time. Come get the best Burger in
          town. Customize your to your liking, with our variety of toppings.
          Free sides after 9pm..!
        </CardDescription>
      </CardHeader>

      <section className="flex justify-center font-serif mt-4 gap-4">
        <MyButton
          btnTxt={"See Menu"}
          btnStyles="w-40 bg-black rounded-full text-lg hover:bg-gray-900 hover:scale-110 text-white px-4 py-2 transition"
        />
        <MyButton
          btnTxt={"Order Now"}
          btnStyles="w-40 bg-red-500 rounded-full text-lg hover:bg-red-600 hover:scale-110 text-white px-4 py-2 transition"
        />
      </section>
    </Card>
  );
}
