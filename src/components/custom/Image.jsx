import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Image({ myImage, alt }) {
  return (
    <Avatar>
      <AvatarImage src={myImage} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
