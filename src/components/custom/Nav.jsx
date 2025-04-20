import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <NavigationMenu className="text-white hidden md:flex mr-28">
      <NavigationMenuList className="flex font-serif mt-4 gap-6 p-2 rounded-full">
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl transparent rounded">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl rounded cursor-pointer">
            Menu
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl rounded cursor-pointer">
            Catering
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl rounded cursor-pointer">
            Locations
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
