"use client"

import * as React from "react"
import Link from "next/link"
import navbar_items from "@/constants/nav-footer-lists/navbar-lists";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/layout/navbar"

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
          {navbar_items.map((item, index) => (
            <NavigationMenuItem key={index}>
                {/*First we check if there are any dropdownItems. If yes, map down again.*/}
                {typeof item.dropdownItems !== 'undefined' ? (
                    <><NavigationMenuTrigger>
                          {item.title}
                      </NavigationMenuTrigger><NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                                  {item.dropdownItems.map(({title, link}, index) => (
                                      <ListItem
                                          key={title+index}
                                          title={title}
                                          href={link}
                                      />
                                  ))}
                              </ul>
                          </NavigationMenuContent></>
                ) : (
                    <Link href={item.link} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {item.title}
                        </NavigationMenuLink>
                    </Link>
                )}
            </NavigationMenuItem>
          )
          )
          }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
// {typeof item.dropdownItems !== 'undefined' ? (
{/* <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link> */}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
