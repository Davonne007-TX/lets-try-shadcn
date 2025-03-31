import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "./Image";
import Price from "./Price";

export default function Burgers() {
  return (
    <section className="max-w-5xl mx-auto pb-20 mt-20">
      <h2 className="text-center text-5xl text-red-500 py-10 font-alfa">
        Classic Favorites
      </h2>
      <Card>
        <CardHeader>
          <section className="flex gap-10">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Double Cheeseburger</CardTitle>
              <CardDescription className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lectus sapien, pretium sit amet augue sit amet,
                volutpat porttitor erat. Vestibulum lectus sapien, pretium sit
                amet augue sit amet, volutpat porttitor erat.
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
          <section className="flex gap-10">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Extra Crispy Fries</CardTitle>
              <CardDescription className="text-2xl">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lectus sapien, pretium sit amet augue sit amet,
                volutpat porttitor erat. Vestibulum lectus sapien, pretium sit
                amet augue sit amet, volutpat porttitor erat
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
          <section className="flex gap-10">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">Hot Wings</CardTitle>
              <CardDescription className="text-2xl">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lectus sapien, pretium sit amet augue sit amet,
                volutpat porttitor erat. Vestibulum lectus sapien, pretium sit
                amet augue sit amet, volutpat porttitor erat
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
