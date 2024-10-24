import React, { useEffect, useState } from "react";
import { Navbar, Collapse, Typography, Button, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Bars4Icon, GlobeAmericasIcon, NewspaperIcon, PhoneIcon, RectangleGroupIcon, SquaresPlusIcon, SunIcon, TagIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import './styleHeader.css'
import Cart from "../../../Pages/Public/ArtworkStore/components/cart";
import UserAvatar from "./UserAvatar";

const navListMenuItems = [
  {
    title: "Paintings",
    description: "Discover stunning paintings that elevate your space.",
    icon: SquaresPlusIcon,
    to: "/painting",
  },
  {
    title: "Digital Art",
    description: "Explore our commitment to innovative digital artwork.",
    icon: UserGroupIcon,
    to: "/digitalart",
  },
  {
    title: "Drawings",
    description: "Find unique drawings that inspire and captivate.",
    icon: Bars4Icon,
    to: "/drawings",
  },
  {
    title: "Sculpture",
    description: "Learn how our sculptures can add depth to your collection.",
    icon: SunIcon,
    to: "/sculpture",
  },
];


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, to }, key) => (
      <NavLink to={to} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm font-bold text-[#222] dark:text-white"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </NavLink>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-[#222] dark:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Artwork
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={'/'}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        <Typography
          variant="small"
          className="font-medium text-[#222] dark:text-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 listitem">
            Home
          </ListItem>
        </Typography>
      </NavLink>
      <NavLink
        to={'/about'}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        <Typography
          variant="small"
          className="font-medium text-[#222] dark:text-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 listitem">
            About
          </ListItem>
        </Typography>
      </NavLink>
      <NavLink
        to={'/gallery'}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        <Typography
          variant="small"
          className="font-medium text-[#222] dark:text-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 listitem">
            Gallery
          </ListItem>
        </Typography>
      </NavLink>
      <NavListMenu />
      <NavLink
        to={'/contact'}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        <Typography
          variant="small"
          className="font-medium text-[#222] dark:text-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 listitem">
            Contact us
          </ListItem>
        </Typography>
      </NavLink>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [user, setUser] = useState(null);

  const CheckData = JSON.parse(localStorage.getItem('data'));

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    const userData = data?.user;
    setUser(userData);  
  }, [CheckData]);


  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  
  
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}></div>
        </div>
        <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Explore Masterpieces:</strong> 200+ Unique Artworks and Paintings by Talented Artists – Now Available!
          </p>
          <NavLink to={"/register"} className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Register now <span aria-hidden="true">&rarr;</span></NavLink>
        </div>
        <div className="flex flex-1 justify-end">
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="mt-5 mb-5 max-w-[289px] md:max-w-[600px]" src="https://www.allduniv.ac.in/assets/frontend/img/home/au_logo.png" alt="logo" id="main_logo" />
      </div>
      <Navbar className="sticky top-0 max-w-full px-4 py-2 bg-[#f3f3f3cc] dark:bg-[#222] z-50 dark:border-t-white dark:border-t-2 dark:border-b-[#222] dark:border-l-[#222] dark:border-r-[#222]" style={{ borderRadius: "unset" }}>
        <div className="flex items-center justify-between text-blue-gray-900 dark:text-white max-w-[1700px] mx-auto">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            LOGO
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex items-center">
            {
              user && user?.role ? <>
                <Cart />
                <UserAvatar />
              </>
                : <>
                  <NavLink to={"/login"}>
                    {/* <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log In</button> */}
                    <Button variant="text" size="sm" color="blue-gray" style={{ width: "auto" }}>
                      Log In
                    </Button>
                  </NavLink>
                  <NavLink to={"/register"}>
                    {/* <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Register</button> */}
                    <Button variant="gradient" size="sm" style={{ width: "auto" }}>
                      Register
                    </Button>
                  </NavLink>
                </>
            }
            <button onClick={() => darkModeHandler()}>
              {

                dark && <NightlightRoundIcon />
              }
              {
                !dark && <WbSunnyIcon />
              }
            </button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            {
              user && user?.role ? <>
                <Cart />
                <UserAvatar />
              </>
                : <>
                  <NavLink to={"/login"}>
                    <Button variant="text" size="sm" color="blue-gray" style={{ width: "auto" }}>
                      Log In
                    </Button>
                  </NavLink>
                  <NavLink to={"/register"}>
                    <Button variant="gradient" size="sm" style={{ width: "auto" }}>
                      Register
                    </Button>
                  </NavLink>
                </>
            }
            <button onClick={() => darkModeHandler()}>
              {

                dark && <NightlightRoundIcon />
              }
              {
                !dark && <WbSunnyIcon />
              }
            </button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}