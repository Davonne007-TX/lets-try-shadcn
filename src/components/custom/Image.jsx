import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Image({ myImage, alt, imgStyles }) {
  return (
    <Avatar>
      <AvatarImage src={myImage} alt={alt} imgStyles={imgStyles} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
