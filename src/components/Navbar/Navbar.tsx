import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../lib/utils";
import { schoolLinks, productItems } from "../Data/Data.jsx";

function Navbar({
  className,
  schoolLinks,
  productItems,
}) {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleLinkClick = (href) => {
    navigate(href);
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem
          item="Home"
          setActive={setActive}
          onClick={() => handleLinkClick('/home')}  // Navigate to home page on click
        >
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Schools">
          <div className="flex flex-col space-y-4 text-sm">
            {schoolLinks.map((link) => (
              <HoveredLink
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-400"
              >
                {link.label}
              </HoveredLink>
            ))}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Links">
          <div className="text-sm grid grid-cols-1 gap-10 p-4">
            {productItems.map((product) => (
              <ProductItem
                key={product.href}
                title={product.title}
                href={product.href}
                src={product.src}
                description={product.description}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem 
          setActive={setActive}
          item="Developers"
          onClick={() => handleLinkClick('/home/developers')}
        >
          {/* This MenuItem now acts as a button to navigate to the Developers page */}
        </MenuItem>
      </Menu>
    </div>
  );
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar
        className="top-2"
        schoolLinks={schoolLinks}
        productItems={productItems}
      />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

export default NavbarDemo;
