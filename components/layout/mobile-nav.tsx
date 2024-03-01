"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { MainNavItem, SidebarNavItem } from "@/types";
import { ViewVerticalIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Palmtree } from "lucide-react";
import { CC } from "@/app/[cc]/page";

interface MobileNavProps {
  mainNavItems: MainNavItem[];
  lang: CC;
  //   sidebarNavItems: SidebarNavItem[];
}

export function MobileNav({ mainNavItems, lang }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex md:hidden justify-between w-full">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <ViewVerticalIcon className="size-6" aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pl-1 pr-0">
          <div className="px-7">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Palmtree className="size-6" />
              <span className="font-bold">
                {lang === "cn" ? siteConfig.nameCn : siteConfig.name}
              </span>
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="pl-1 pr-7">
              <Accordion
                type="multiple"
                defaultValue={mainNavItems.map((item) =>
                  lang === "cn" ? item.titleCn : item.title
                )}
                className="w-full"
              >
                {mainNavItems?.map((item, index) => (
                  <AccordionItem
                    value={lang === "cn" ? item.titleCn : item.title}
                    key={index}
                  >
                    <AccordionTrigger className="text-sm capitalize">
                      {lang === "cn" ? item.titleCn : item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.items?.map((subItem, index) =>
                          subItem.href ? (
                            <MobileLink
                              key={index}
                              href={String(subItem.href)}
                              segment={String(segment)}
                              setIsOpen={setIsOpen}
                              disabled={subItem.disabled}
                            >
                              {lang === "cn" ? subItem.titleCn : subItem.title}
                            </MobileLink>
                          ) : (
                            <div
                              key={index}
                              className="text-foreground/70 transition-colors"
                            >
                              {lang === "cn" ? item.titleCn : item.title}
                            </div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
      <Link
        href="/"
        className="mr-auto flex items-center space-x-2 md:hidden min-w-20 ml-12"
      >
        <Palmtree className="size-6" />
        <span className=" font-bold  inline-block md:hidden">
          {lang === "cn" ? siteConfig.nameCn : siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link>
    </div>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
