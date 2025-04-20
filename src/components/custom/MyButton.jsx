import React from "react";
import { Button } from "@/components/ui/button";

export default function MyButton({ btnTxt, btnStyles, onClick }) {
  return (
    <Button className={`${btnStyles} hover:cursor-pointer`} onClick={onClick}>
      {btnTxt}
    </Button>
  );
}
