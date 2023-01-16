import Link from "next/link";
import Image from "next/image";

import { logo } from "@/assets";
import Content from "@/lib/content";
import Text from "@/components/Text";
import Container from "@/components/Container";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Container includeCols={false} className="mt-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Image src={logo} alt="logo" />

          {Content.NavItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </div>
        <div></div>
      </div>
    </Container>
  );
};

interface NavItemProps {
  name: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
  return (
    <Link href={href}>
      <Text variant="subtitle" className="hover:opacity-50">
        {name}
      </Text>
    </Link>
  );
};

export default NavBar;