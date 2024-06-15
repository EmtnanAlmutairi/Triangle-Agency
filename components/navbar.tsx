import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-zinc-300 text-2xl font-['Montserrat']">
              Triangle Agency{" "}
            </p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start flex-grow">
          <NavbarItem>
            <NextLink
              href="/#about-us"
              className="text-lg font-normal font-['Monda']"
            >
              about us
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              href="/#services"
              className="text-lg font-normal font-['Monda']"
            >
              Services
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink
              href="/#our-projects"
              className="text-lg font-normal font-['Monda']"
            >
              our projects
            </NextLink>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <NavbarItem>
              <NextLink
                href="/#about-us"
                className="text-white text-lg font-normal font-['Monda']"
              >
                about us
              </NextLink>
            </NavbarItem>
            <NavbarItem>
              <NextLink
                href="/#services"
                className="text-white text-lg font-normal font-['Monda']"
              >
                Services
              </NextLink>
            </NavbarItem>
            <NavbarItem>
              <NextLink
                href="/#our-projects"
                className="text-white text-lg font-normal font-['Monda']"
              >
                our projects
              </NextLink>
            </NavbarItem>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
