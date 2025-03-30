import React from "react";
import { Button } from "@/components/ui/button";

export default function MyButton({ btnTxt, btnStyles }) {
  return (
    <Button className={`${btnStyles} hover:cursor-pointer`}>{btnTxt}</Button>
  );
}
