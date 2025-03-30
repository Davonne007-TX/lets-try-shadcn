import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Nav() {
  return (
    <NavigationMenu className="mx-auto text-white w-full">
      <NavigationMenuList className="flex font-serif mt-4 gap-6 p-4 rounded-full">
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
