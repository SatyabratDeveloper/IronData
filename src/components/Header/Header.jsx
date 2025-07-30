import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { navItems } from "../../constants";
import logo from "../../assets/logo/image.png";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // State to manage which collapsible item is open in the mobile sheet
  const [openCollapsible, setOpenCollapsible] = useState(null);

  /**
   * Function to toggle collapsible state for a given item name
   *
   * @param {String} name
   */
  const toggleCollapsible = (name) => {
    setOpenCollapsible(openCollapsible === name ? null : name);
  };

  return (
    <div className="sticky bg-white top-0 left-0 w-full z-50 transition-all duration-300 shadow-xl">
      <nav className="max-w-7xl px-2 sm:px-3 md:px-5 lg:mx-auto py-0.5 flex justify-between items-center">
        {/* Logo or Brand Name - Visible on all screens */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="h-12 sm:h-16" src={logo} alt="Iron Data Logo" />
          </Link>
        </div>

        {/* Desktop Navigation - Hide on small screens, show on large screens */}
        <div className="hidden lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {/* If items exist, render a dropdown menu otherwise just show the link */}
              {navItems.map(({ label, to, items }) =>
                items && items.length > 0 ? (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuTrigger className="">
                      {to ? <Link to={to}>{label}</Link> : label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      {/* If items exist, render a dropdown menu */}
                      <NavigationMenuList className="flex-col">
                        {items.map((item) => (
                          <NavigationMenuItem key={item.label}>
                            <NavigationMenuLink
                              asChild
                              className="w-40 py-3 text-center"
                            >
                              <Link to={item.to}>{item.label}</Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuLink asChild className="">
                      <Link to={to}>{label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation - Show on small, hide on large screens */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-none"
              >
                <Menu className="size-6 text-gray-900" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <Link to="/" className="">
                  <img className="h-12" src={logo} alt="Iron Data Logo" />
                </Link>
              </SheetHeader>

              <nav className="flex flex-col space-y-6 pt-2">
                {navItems.map(({ label, to, items }) => (
                  <div key={label}>
                    {items && items.length > 0 ? (
                      // Collapsible for items with sub-menus
                      <Collapsible
                        open={openCollapsible === label}
                        onOpenChange={() => toggleCollapsible(label)}
                        className=""
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-md font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200">
                          {/* If 'to' is defined, link the trigger, otherwise just show name */}
                          {to ? (
                            <Link
                              to={to}
                              onClick={(e) => {
                                // Prevent link navigation if it's meant to be a collapsible trigger
                                if (items && items.length > 0)
                                  e.preventDefault();
                                toggleCollapsible(label); // Toggle collapsible
                              }}
                            >
                              {label}
                            </Link>
                          ) : (
                            <span>{label}</span>
                          )}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              openCollapsible === label ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-6 mt-2 flex flex-col space-y-2 transition-all duration-300 ease-in-out">
                          {items.map((item) => (
                            <SheetClose asChild key={item.label}>
                              <Link
                                to={item.to}
                                className="font-semibold text-gray-800 hover:text-gray-600 py-1"
                                onClick={() => setIsSheetOpen(false)} // Close sheet on click
                              >
                                {item.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      // Simple Link for items without sub-menus
                      <SheetClose asChild>
                        <Link
                          to={to}
                          className="text-md font-semibold text-gray-900 hover:text-gray-700"
                          onClick={() => setIsSheetOpen(false)} // Close sheet on click
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Header;
