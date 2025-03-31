import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <NavigationMenu className="text-white mr-20">
      <NavigationMenuList className="flex font-serif mt-4 gap-6 p-2 rounded-full">
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl  px-4 py-2 transparent rounded">
            Menu
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl  px-4 py-2 rounded cursor-pointer">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl  px-4 py-2 rounded cursor-pointer">
            Services
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-2xl px-4 py-2 rounded cursor-pointer">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
