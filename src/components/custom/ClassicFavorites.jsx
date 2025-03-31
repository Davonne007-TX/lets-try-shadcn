import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "./Image";
import Price from "./Price";

export default function ClassicFavorites() {
  return (
    <section className="max-w-5xl mx-auto pb-20 mt-20">
      <h2 className="text-center text-5xl text-red-500 py-10 font-alfa">
        Classic Favorites <br />
        <span className="text-center text-xl font-alfa text-red-500">
          All orders comes with a side of Large Fry and Drink
        </span>
      </h2>

      <Card className="">
        <CardHeader>
          <section className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Double Cheeseburger</CardTitle>
              <CardDescription className="text-2xl">
                Nothing beats a classic Double Cheeseburger. With our secret
                sauce your going to want another burger. Comes with two grilled
                patties, secret sauce, lettuce, tomato, pickles, american
                cheese, and onions. Toast your buns for the ultimate
                cheeseburger experience.
              </CardDescription>

              <Price price="12.99" />
            </div>
            <Image
              myImage="./images/double.jpg"
              alt="Cheesebuger with special sause and toppings, Photo by amirali mirhashemian on Unsplash"
            />
          </section>
        </CardHeader>

        <CardHeader>
          <section className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Extra Crispy Fries</CardTitle>
              <CardDescription className="text-2xl">
                {" "}
                Hear the crunch? That is the sound of our golden Fries. Made
                fresh to order, grantee hot fries, and extra crispy. Served in
                our custom basket, given to every customer. Choose from our
                sauces, hot buffalo, ranch, ketchup, honey mustard, spicy ranch,
                and our very own Slammin Sauce. Free side of fries after 9pm..!
              </CardDescription>

              <Price price="3.99" />
            </div>
            <Image
              myImage="./images/fries.jpg"
              alt="Cheesebuger with special sause and toppings, Photo by amirali mirhashemian on Unsplash"
            />
          </section>
        </CardHeader>

        <CardHeader>
          <section className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Hot Wings</CardTitle>
              <CardDescription className="text-2xl">
                {" "}
                As much as we love burgers, we love us some hot wings! Whether
                it is game day or your craving some wings, we have you covered.
                Choose from our traditional wings and boneless wings, with your
                favorite sauces. Buffalo Hot, Lemon Pepper, Mango Habenero,
                Spicy Garlic, Slammin Hot, to the ultimate Slammin on Fire.
              </CardDescription>

              <Price price="7.99" />
            </div>
            <Image
              myImage="./images/wings.jpg"
              alt="Cheesebuger with special sause and toppings, Photo by amirali mirhashemian on Unsplash"
            />
          </section>
        </CardHeader>
      </Card>
    </section>
  );
}
