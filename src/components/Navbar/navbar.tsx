"use client";

import { Navbar, NavBody, NavItems, NavbarButton, NavbarLogo, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "./resizable-navbar";
import { useState } from "react";

export default function NavbarDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { name: "Ana Sayfa", link: "/" },
    { name: "Hizmetler", link: "/hizmetler" },
    { name: "İletişim", link: "/iletisim" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={items} />
        <NavbarButton variant="dark">Teklif Al</NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {items.map((item) => (
            <a key={item.name} href={item.link} className="text-black dark:text-white px-4 py-2">
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
