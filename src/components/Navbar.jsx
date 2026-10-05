import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Mountain,
  Menu,
  X,
  Sun,
  Moon,
  Calendar,
  Hotel,
  ChevronDown,
  Castle,
  Waves,
  MapPin,
} from "lucide-react";

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_LINKS = [
  { name: "Home", href: "/" },

  { name: "About", href: "/about" },

  {
    name: "Explore",
    dropdown: [
      {
        name: "Morni Fort",
        href: "/explore",
        icon: Castle,
        description: "Historic hilltop fort",
      },

      {
        name: "Tikkar Taal",
        href: "/explore/tikkar-taal",
        icon: Waves,
        description: "Lakeside & boating",
      },

      {
        name: "Resorts & Stays",
        href: "/stay",
        icon: Hotel,
        description: "Hotels & peaceful stays",
      },

      // {
      //   name: "Nearby Places",
      //   href: "/nearby",
      //   icon: MapPin,
      //   description: "Places around Morni",
      // },
    ],
  },

  {
    name: "Experience",
    href: "/experience",
  },

  // {
  //   name: "Stay",
  //   href: "/stay",
  // },

  {
    name: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   NAVBAR COMPONENT
========================================================= */

export default function Navbar({ darkMode, setDarkMode, onOpenPlanner }) {
  const location = useLocation();

  // console.log("Dark mode toggled:", darkMode, setDarkMode)

  /* =======================================================
     STATE
  ======================================================= */

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [mobileDropdown, setMobileDropdown] = useState(null);

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */
  // console.log("Dark mode toggled:", typeof setDarkMode);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     CLOSE MENU AFTER ROUTE CHANGE
  ======================================================= */

  React.useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  /* =======================================================
     MOBILE DROPDOWN
  ======================================================= */

  const handleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  /* =======================================================
     CHECK ACTIVE PAGE
  ======================================================= */

  const isActivePage = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(href);
  };

  /* =======================================================
     CLOSE MENUS
  ======================================================= */

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          transition-all
          duration-500
          ease-out

          ${
            isScrolled
              ? `
                bg-black/[0.18]
                backdrop-blur-[26px]

                border-b
                border-white/[0.12]

                shadow-[0_10px_40px_rgba(0,0,0,0.16)]

                py-3
              `
              : `
                bg-gradient-to-b
                from-black/55
                via-black/20
                to-transparent

                py-5
              `
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* =================================================
              MAIN NAVIGATION
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMenus}
              className="
                flex
                items-center
                gap-2.5

                group
                cursor-pointer
                select-none

                drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)]
              "
            >
              {/* LOGO ICON */}

              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  bg-gradient-to-br
                  from-morni-primary
                  to-morni-secondary/80

                  flex
                  items-center
                  justify-center

                  text-white

                  shadow-lg
                  shadow-morni-primary/25

                  transition-all
                  duration-500
                  ease-out

                  group-hover:scale-105
                "
              >
                <Mountain
                  className="
                    w-5
                    h-5

                    transition-transform
                    duration-500

                    group-hover:-translate-y-0.5
                  "
                />
              </div>

              {/* LOGO TEXT */}

              <div>
                <span
                  className="
                    font-serif

                    text-xl
                    sm:text-2xl

                    font-bold

                    tracking-wider

                    text-white

                    flex
                    items-center
                    gap-1.5
                  "
                >
                  MORNI
                  <span
                    className="
                      text-morni-accent

                      font-sans
                      font-light

                      text-sm

                      tracking-widest

                      uppercase
                    "
                  >
                    Hills
                  </span>
                </span>

                <span
                  className="
                    hidden
                    sm:block

                    text-[10px]

                    tracking-widest

                    uppercase

                    text-morni-secondary/90

                    -mt-1

                    font-medium
                  "
                >
                  Haryana Tourism
                </span>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                xl:flex

                items-center

                space-x-1
              "
            >
              {NAV_LINKS.map((link) => {
                const hasDropdown = Boolean(link.dropdown);

                const isActive = link.href ? isActivePage(link.href) : false;

                return (
                  <div
                    key={link.name}
                    className={`
                      relative

                      ${hasDropdown ? "explore-dropdown" : ""}
                    `}
                    onMouseEnter={() => {
                      if (hasDropdown) {
                        setOpenDropdown(link.name);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hasDropdown) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    {/* =================================================
                        NORMAL NAV LINK
                    ================================================= */}

                    {!hasDropdown ? (
                      <Link
                        to={link.href}
                        onClick={closeMenus}
                        className={`
                          relative

                          px-3.5
                          py-2

                          flex
                          items-center

                          text-xs

                          font-medium

                          uppercase

                          tracking-wider

                          transition-all
                          duration-300
                          ease-out

                          drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]

                          ${
                            isActive
                              ? `
                                text-morni-accent
                                font-bold
                              `
                              : `
                                text-white/85
                                hover:text-white
                              `
                          }
                        `}
                      >
                        <span>{link.name}</span>

                        {isActive && (
                          <span
                            className="
                              absolute

                              bottom-0

                              left-3.5
                              right-3.5

                              h-[2px]

                              rounded-full

                              bg-morni-accent

                              transition-all
                              duration-300
                            "
                          />
                        )}
                      </Link>
                    ) : (
                      /* =================================================
                         EXPLORE BUTTON
                      ================================================= */

                      <button
                        type="button"
                        aria-expanded={openDropdown === link.name}
                        className={`
                          relative

                          px-3.5
                          py-2

                          flex
                          items-center

                          gap-1

                          text-xs

                          font-medium

                          uppercase

                          tracking-wider

                          transition-all
                          duration-300
                          ease-out

                          drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]

                          cursor-default

                          ${
                            location.pathname.startsWith("/explore")
                              ? `
                                text-morni-accent
                                font-bold
                              `
                              : `
                                text-white/85
                                hover:text-white
                              `
                          }
                        `}
                      >
                        <span>{link.name}</span>

                        <ChevronDown
                          className={`
                            w-3.5
                            h-3.5

                            transition-transform
                            duration-300

                            ${openDropdown === link.name ? "rotate-180" : ""}
                          `}
                        />

                        {location.pathname.startsWith("/explore") && (
                          <span
                            className="
                              absolute

                              bottom-0

                              left-3.5
                              right-3.5

                              h-[2px]

                              rounded-full

                              bg-morni-accent
                            "
                          />
                        )}
                      </button>
                    )}

                    {/* =================================================
                        DROPDOWN
                    ================================================= */}

                    {hasDropdown && (
                      <div
                        className={`
                          absolute

                          top-full

                          left-1/2

                          -translate-x-1/2

                          z-50

                          pt-4

                          transition-all
                          duration-300
                          ease-out

                          ${
                            openDropdown === link.name
                              ? `
                                visible
                                opacity-100
                                translate-y-0
                                pointer-events-auto
                              `
                              : `
                                invisible
                                opacity-0
                                -translate-y-2
                                pointer-events-none
                              `
                          }
                        `}
                      >
                        {/* GLASS CARD */}

                        <div
                          className="
                            relative

                            w-[270px]

                            overflow-hidden

                            rounded-[18px]

                            border
                            border-white/45

                            bg-white/[0.72]

                            backdrop-blur-[30px]

                            shadow-[0_20px_55px_rgba(0,0,0,0.22)]

                            ring-1
                            ring-black/[0.04]

                            p-1.5
                          "
                        >
                          {/* GLASS REFLECTION */}

                          <div
                            className="
                              pointer-events-none

                              absolute
                              inset-0

                              bg-gradient-to-br

                              from-white/70

                              via-white/30

                              to-white/[0.08]
                            "
                          />

                          {/* TOP LIGHT */}

                          <div
                            className="
                              pointer-events-none

                              absolute

                              top-0

                              left-8
                              right-8

                              h-px

                              bg-gradient-to-r

                              from-transparent

                              via-white

                              to-transparent
                            "
                          />

                          {/* SOFT GLOW */}

                          <div
                            className="
                              pointer-events-none

                              absolute

                              -top-16

                              left-1/2

                              -translate-x-1/2

                              w-32
                              h-32

                              rounded-full

                              bg-morni-accent/10

                              blur-3xl
                            "
                          />

                          {/* DROPDOWN ITEMS */}

                          <div
                            className="
                              relative

                              flex
                              flex-col

                              gap-0.5
                            "
                          >
                            {link.dropdown.map((item) => {
                              const Icon = item.icon;

                              return (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  onClick={closeMenus}
                                  className="
                                      group

                                      flex
                                      items-center

                                      gap-3

                                      rounded-xl

                                      px-3
                                      py-2.5

                                      text-slate-900

                                      transition-all
                                      duration-300

                                      hover:bg-black/[0.05]

                                      hover:translate-x-[2px]
                                    "
                                >
                                  {/* ICON */}

                                  <div
                                    className="
                                        flex

                                        h-8
                                        w-8

                                        shrink-0

                                        items-center
                                        justify-center

                                        rounded-lg

                                        bg-white/55

                                        border
                                        border-white/60

                                        shadow-[0_3px_12px_rgba(0,0,0,0.05)]

                                        transition-all
                                        duration-300

                                        group-hover:bg-morni-accent/15

                                        group-hover:border-morni-accent/30

                                        group-hover:scale-105
                                      "
                                  >
                                    <Icon
                                      className="
                                          w-4
                                          h-4

                                          text-slate-700

                                          transition-colors
                                          duration-300

                                          group-hover:text-morni-primary
                                        "
                                      strokeWidth={1.8}
                                    />
                                  </div>

                                  {/* TEXT */}

                                  <div
                                    className="
                                        min-w-0
                                        flex-1
                                      "
                                  >
                                    <span
                                      className="
                                          block

                                          text-[13px]

                                          font-semibold

                                          leading-tight

                                          tracking-wide

                                          text-slate-900

                                          transition-colors
                                          duration-300

                                          group-hover:text-morni-primary
                                        "
                                    >
                                      {item.name}
                                    </span>

                                    <span
                                      className="
                                          block

                                          mt-[3px]

                                          text-[10px]

                                          leading-tight

                                          text-slate-500
                                        "
                                    >
                                      {item.description}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP RIGHT CONTROLS
            ================================================= */}

            <div
              className="
                hidden
                sm:flex

                items-center

                gap-3
              "
            >
              {/* DARK MODE */}

              <button
                type="button"
                onClick={() => {
                  setDarkMode(!darkMode);
                  console.log("Dark mode toggled:", !darkMode);
                }}
                aria-label="Toggle dark mode"
                className="
                  p-2.5

                  rounded-full

                  bg-white/[0.08]

                  hover:bg-white/[0.15]

                  text-white

                  backdrop-blur-xl

                  border
                  border-white/20

                  shadow-[0_8px_25px_rgba(0,0,0,0.12)]

                  transition-all
                  duration-300

                  hover:scale-105

                  cursor-pointer
                "
              >
                {darkMode ? (
                  <Sun
                    className="
                      w-4
                      h-4

                      text-morni-accent
                    "
                  />
                ) : (
                  <Moon
                    className="
                      w-4
                      h-4

                      text-morni-secondary
                    "
                  />
                )}
              </button>

              {/* PLAN YOUR VISIT */}

              {/* <Link
                to="/contact"
                onClick={(event) => {
                  closeMenus();
                  if (onOpenPlanner) {
                    event.preventDefault();
                    onOpenPlanner();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold

                  text-xs

                  uppercase

                  tracking-wider

                  text-white

                  bg-white/[0.09]

                  hover:bg-morni-accent

                  hover:text-morni-dark

                  backdrop-blur-xl

                  border
                  border-white/25

                  shadow-[0_8px_28px_rgba(0,0,0,0.15)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5

                  cursor-pointer

                  group
                "
              >
                
              </Link> */}
            </div>

            {/* =================================================
                MOBILE CONTROLS
            ================================================= */}

            <div
              className="
                flex
                xl:hidden

                items-center

                gap-2
              "
            >
              {/* MOBILE DARK MODE */}

              <button
                type="button"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                aria-label="Toggle dark mode"
                className="
                  p-2

                  rounded-full

                  bg-white/10

                  text-white

                  backdrop-blur-xl

                  border
                  border-white/15

                  transition-all
                  duration-300

                  hover:bg-white/20
                "
              >
                {darkMode ? (
                  <Sun
                    className="
                      w-4
                      h-4

                      text-morni-accent
                    "
                  />
                ) : (
                  <Moon
                    className="
                      w-4
                      h-4

                      text-morni-secondary
                    "
                  />
                )}
              </button>

              {/* MOBILE MENU */}

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                className="
                  p-2.5

                  rounded-xl

                  bg-white/10

                  hover:bg-white/20

                  text-white

                  backdrop-blur-xl

                  border
                  border-white/15

                  transition-all
                  duration-300
                "
              >
                {mobileMenuOpen ? (
                  <X
                    className="
                      w-5
                      h-5
                    "
                  />
                ) : (
                  <Menu
                    className="
                      w-5
                      h-5
                    "
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            xl:hidden

            overflow-hidden

            transition-all
            duration-500
            ease-out

            ${
              mobileMenuOpen
                ? `
                  max-h-[800px]
                  opacity-100
                `
                : `
                  max-h-0
                  opacity-0
                  pointer-events-none
                `
            }
          `}
        >
          <div
            className="
              bg-black/[0.35]

              backdrop-blur-[30px]

              px-6
              py-6

              border-b
              border-white/15

              shadow-[0_25px_60px_rgba(0,0,0,0.30)]
            "
          >
            {/* MOBILE LINKS */}

            <div
              className="
                flex
                flex-col

                gap-1
              "
            >
              {NAV_LINKS.map((link) => {
                const hasDropdown = Boolean(link.dropdown);

                const isActive = link.href ? isActivePage(link.href) : false;

                return (
                  <div key={link.name}>
                    {/* NORMAL LINK */}

                    {!hasDropdown ? (
                      <Link
                        to={link.href}
                        onClick={closeMenus}
                        className={`
                          flex
                          items-center
                          justify-between

                          px-4
                          py-3

                          rounded-xl

                          text-xs

                          font-medium

                          uppercase

                          tracking-wider

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? `
                                text-morni-accent
                                bg-white/10
                                font-bold
                              `
                              : `
                                text-white/90
                                hover:text-morni-accent
                                hover:bg-white/10
                              `
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <>
                        {/* MOBILE EXPLORE */}

                        <button
                          type="button"
                          onClick={() => handleMobileDropdown(link.name)}
                          className={`
                            w-full

                            flex
                            items-center
                            justify-between

                            px-4
                            py-3

                            rounded-xl

                            text-xs

                            font-medium

                            uppercase

                            tracking-wider

                            transition-all
                            duration-300

                            ${
                              location.pathname.startsWith("/explore")
                                ? `
                                  text-morni-accent
                                  bg-white/10
                                  font-bold
                                `
                                : `
                                  text-white/90
                                  hover:text-morni-accent
                                  hover:bg-white/10
                                `
                            }
                          `}
                        >
                          <span>{link.name}</span>

                          <ChevronDown
                            className={`
                              w-4
                              h-4

                              transition-transform
                              duration-300

                              ${
                                mobileDropdown === link.name ? "rotate-180" : ""
                              }
                            `}
                          />
                        </button>

                        {/* MOBILE SUBMENU */}

                        <div
                          className={`
                            overflow-hidden

                            transition-all
                            duration-300
                            ease-out

                            ${
                              mobileDropdown === link.name
                                ? `
                                  max-h-[500px]
                                  opacity-100
                                `
                                : `
                                  max-h-0
                                  opacity-0
                                `
                            }
                          `}
                        >
                          <div className=" ml-4 mt-1 pl-3 border-l border-morni-accent/30 flex flex-col gap-0.5">
                            {link.dropdown.map((item) => {
                              const Icon = item.icon;

                              return (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  onClick={closeMenus}
                                  className="
                                      flex
                                      items-center

                                      gap-3

                                      px-3
                                      py-2.5

                                      rounded-lg

                                      text-white/70

                                      hover:text-white

                                      hover:bg-white/10

                                      transition-all
                                      duration-300
                                    "
                                >
                                  <Icon
                                    className="
                                        w-4
                                        h-4

                                        text-morni-accent
                                      "
                                  />

                                  <span>{item.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* =================================================
                MOBILE PLAN BUTTON
            ================================================= */}

            <div
              className="
                pt-4
                mt-4

                border-t
                border-white/10
              "
            >
              <Link
                to="/contact"
                onClick={(event) => {
                  closeMenus();

                  if (onOpenPlanner) {
                    event.preventDefault();
                    onOpenPlanner();
                  }
                }}
                className="
                  w-full

                  py-3

                  rounded-full

                  text-center

                  text-xs

                  uppercase

                  tracking-wider

                  font-semibold

                  flex
                  items-center
                  justify-center

                  gap-2

                  bg-morni-accent

                  text-morni-dark

                  hover:brightness-105

                  transition-all
                  duration-300

                  shadow-lg
                "
              >
                <Calendar
                  className="
                    w-4
                    h-4
                  "
                />

                <span>Plan Your Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
