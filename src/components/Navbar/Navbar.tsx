/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { logo } from "@/assets";
import Content from "@/lib/content";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Container from "@/components/Container";
import IconButton from "../IconButton";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const animations = {
    open: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.5,
      },
    },
    closed: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <Container includeCols={false} className="mt-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Link href="/">
            <div className="hover:opacity-50">
              <Image src={logo} alt="logo" />
            </div>
          </Link>

          {Content.NavItems.map((item) => (
            <NavItem key={item.name} {...item} className="hidden lg:flex" />
          ))}
        </div>

        <div className="flex items-center">
          <Button className="hidden lg:flex">Get Started</Button>
          <IconButton
            icon="IoMenuOutline"
            filled
            className="flex lg:hidden"
            size={24}
            onClick={handleToggle}
          />
        </div>
      </div>
    </Container>
  );
};

interface NavItemProps {
  name: string;
  href: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, className }) => {
  return (
    <Link href={href} className={className}>
      <Text variant="subtitle" className="hover:opacity-50">
        {name}
      </Text>
    </Link>
  );
};

export default NavBar;
