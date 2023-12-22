'use client';
import React, { useContext } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AuthContext } from "../auth/authContext";

export default function Header() {
  const user = useContext(AuthContext);
  console.log(user)
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="text-white text-2xl">
          <img src="/logo.png" className="object-contain h-12 w-14" />
          <p className="font-bold text-inherit">Memory Card</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrationss
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {user?
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Your account</Link>
            </NavbarItem>
          </>
        :
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/auth/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        }

      </NavbarContent>
    </Navbar>
  );
}
