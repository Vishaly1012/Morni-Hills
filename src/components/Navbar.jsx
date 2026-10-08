import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
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
  Home,
  Info,
  Compass,
  Utensils,
  Sparkles,
  Images,
  Mail,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },

  {
    name: "About",
    href: "/about",
    icon: Info,
  },

  {
    name: "Explore",
    icon: Compass,
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
    ],
  },

  {
    name: "Stay",
    href: "/stay",
    icon: Hotel,
  },

  {
    name: "Eat",
    href: "/eat",
    icon: Utensils,
  },

  {
    name: "Experience",
    href: "/experience",
    icon: Sparkles,
  },


  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

/* =========================================================
   MORNI HILLS LOGO
========================================================= */

function MorniLogo({ small = false }) {
  return (
    <div className="flex items-center gap-2">
      {/* Mountain Emblem */}
      <div
        className={`
          flex
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#d8ad5c]/70
          bg-[#245441]/90
          shadow-[0_4px_18px_rgba(0,0,0,0.20)]
          backdrop-blur-md
          transition-all
          duration-300
          ${
            small
              ? "h-8 w-8"
              : "h-8 w-8 sm:h-9 sm:w-9"
          }
        `}
      >
        <svg
          viewBox="0 0 50 50"
          className={
            small
              ? "h-4 w-4"
              : "h-[17px] w-[17px]"
          }
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 36L19 18L26 27L34 14L42 36H9Z"
            stroke="#E4B95E"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M19 18L23 24"
            stroke="#E4B95E"
            strokeWidth="2.7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div
          className={`
            font-serif
            font-bold
            leading-none
            tracking-[0.17em]
            text-white
            drop-shadow-[0_2px_7px_rgba(0,0,0,0.45)]
            ${
              small
                ? "text-sm"
                : "text-[19px] sm:text-[21px] md:text-[23px]"
            }
          `}
        >
          MORNI
        </div>

        <div
          className={`
            mt-0.5
            text-center
            font-medium
            uppercase
            tracking-[0.42em]
            text-[#e4b95e]
            ${
              small
                ? "text-[5px]"
                : "text-[6px] sm:text-[7px]"
            }
          `}
        >
          HILLS
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   NAVBAR COMPONENT
========================================================= */

export default function Navbar({
  darkMode,
  setDarkMode,
  onOpenPlanner,
}) {
  const location = useLocation();

  /* =======================================================
     STATE
  ======================================================= */

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  /* =======================================================
     RESTORE SAVED THEME
  ======================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("morni-theme");

    if (savedTheme === "dark" && !darkMode) {
      setDarkMode?.(true);
    }

    if (savedTheme === "light" && darkMode) {
      setDarkMode?.(false);
    }
  }, []);

  /* =======================================================
     SAVE THEME
  ======================================================= */

  useEffect(() => {
    if (typeof darkMode === "boolean") {
      localStorage.setItem(
        "morni-theme",
        darkMode ? "dark" : "light"
      );
    }
  }, [darkMode]);

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setExploreOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =======================================================
     CLOSE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMenuOpen(false);
    setExploreOpen(false);
  }, [location.pathname]);

  /* =======================================================
     ACTIVE PAGE
  ======================================================= */

  const isActivePage = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(href);
  };

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
    setExploreOpen(false);
  };

  /* =======================================================
     THEME TOGGLE
  ======================================================= */

  const handleThemeToggle = () => {
    const nextTheme = !darkMode;

    setDarkMode?.(nextTheme);

    localStorage.setItem(
      "morni-theme",
      nextTheme ? "dark" : "light"
    );
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
          left-0
          right-0
          top-0
          z-[9999]
          w-full
          transition-all
          duration-500
          ease-out

          ${
            isScrolled
              ? `
                border-b
                border-white/10
                bg-[#10201c]/80
                py-1.5
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                backdrop-blur-2xl
              `
              : `
                bg-gradient-to-b
                from-black/60
                via-black/20
                to-transparent
                py-2
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1400px]
            px-4
            sm:px-8
            lg:px-10
          "
        >
          {/* Three-column layout keeps logo perfectly centered */}

          <div
            className="
              grid
              w-full
              grid-cols-3
              items-center
            "
          >
            {/* =================================================
                LEFT — MENU
            ================================================= */}

            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-3
                  py-2
                  text-white
                  shadow-[0_6px_24px_rgba(0,0,0,0.14)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:border-[#d8ad5c]/60
                  hover:bg-white/15
                  active:scale-95
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                  "
                >
                  <Menu
                    className="
                      h-[16px]
                      w-[16px]
                      transition-transform
                      duration-300
                      group-hover:rotate-3
                    "
                    strokeWidth={1.8}
                  />
                </span>

                <span
                  className="
                    hidden
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    sm:block
                  "
                >
                  Menu
                </span>
              </button>
            </div>

            {/* =================================================
                CENTER — MORNI HILLS LOGO
            ================================================= */}

            <div className="flex justify-center">
              <Link
                to="/"
                onClick={closeMenu}
                aria-label="Morni Hills Home"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  select-none
                "
              >
                <MorniLogo />
{/* 
                <span
                  className="
                    absolute
                    mt-[51px]
                    hidden
                    whitespace-nowrap
                    text-[6px]
                    font-medium
                    uppercase
                    tracking-[0.34em]
                    text-white/55
                    md:block
                  "
                > */}
                  {/* Haryana Tourism */}
                {/* </span> */}
              </Link>
            </div>

            {/* =================================================
                RIGHT — THEME
            ================================================= */}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleThemeToggle}
                aria-label={
                  darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="
                  group
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  shadow-[0_6px_24px_rgba(0,0,0,0.14)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[#d8ad5c]/60
                  hover:bg-white/15
                  active:scale-95
                  sm:h-10
                  sm:w-10
                "
              >
                {darkMode ? (
                  <Sun
                    className="
                      h-[17px]
                      w-[17px]
                      text-[#e4b95e]
                      transition-all
                      duration-500
                      group-hover:rotate-45
                    "
                    strokeWidth={1.7}
                  />
                ) : (
                  <Moon
                    className="
                      h-[17px]
                      w-[17px]
                      text-white
                      transition-all
                      duration-500
                      group-hover:-rotate-12
                    "
                    strokeWidth={1.7}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          z-[10000]
          bg-black/55
          backdrop-blur-[4px]
          transition-all
          duration-500

          ${
            menuOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDE DRAWER
      ===================================================== */}

      <aside
        aria-label="Main navigation"
        className={`
          fixed
          bottom-0
          left-0
          top-0
          z-[10001]
          w-[88%]
          max-w-[470px]
          overflow-y-auto
          overscroll-contain
          border-r
          border-white/10
          bg-[#10201c]
          shadow-[20px_0_70px_rgba(0,0,0,0.40)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* ===================================================
            DRAWER HEADER
        =================================================== */}

        <div
          className="
            sticky
            top-0
            z-20
            border-b
            border-white/10
            bg-[#10201c]/95
            px-6
            pb-5
            pt-5
            backdrop-blur-2xl
            sm:px-8
          "
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              className="group"
            >
              <MorniLogo small />

              <div
                className="
                  mt-2
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Haryana Tourism
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white/80
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-white/10
                hover:text-white
                active:scale-95
              "
            >
              <X
                className="h-[18px] w-[18px]"
                strokeWidth={1.7}
              />
            </button>
          </div>
        </div>

        {/* ===================================================
            DRAWER CONTENT
        =================================================== */}

        <div className="px-6 py-8 sm:px-8">
          {/* Intro */}

          <div className="mb-8">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#e4b95e]
              "
            >
              Discover Morni
            </p>

            <h2
              className="
                mt-2
                font-serif
                text-2xl
                font-semibold
                leading-tight
                text-white
                sm:text-3xl
              "
            >
              Explore the beauty
              <br />
              of the hills.
            </h2>
          </div>

          {/* =================================================
              NAVIGATION LINKS
          ================================================= */}

          <nav className="space-y-1">
            {NAV_LINKS.map((link, index) => {
              const Icon = link.icon;
              const hasDropdown = Boolean(link.dropdown);

              const isActive = link.href
                ? isActivePage(link.href)
                : location.pathname.startsWith("/explore");

              {/* =================================================
                  NORMAL LINK
              ================================================= */}

              if (!hasDropdown) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMenu}
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-3.5
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-white/10 text-[#e4b95e]"
                          : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                      }
                    `}
                  >
                    <span
                      className="
                        w-5
                        text-[9px]
                        tracking-widest
                        text-white/25
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      className={`
                        h-[18px]
                        w-[18px]
                        shrink-0
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "text-[#e4b95e]"
                            : "text-white/40 group-hover:text-[#e4b95e]"
                        }

                        group-hover:translate-x-0.5
                      `}
                      strokeWidth={1.7}
                    />

                    <span
                      className="
                        flex-1
                        text-sm
                        font-medium
                        tracking-wide
                      "
                    >
                      {link.name}
                    </span>

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        -translate-x-2
                        text-[#e4b95e]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                      strokeWidth={1.7}
                    />
                  </Link>
                );
              }

              {/* =================================================
                  EXPLORE
              ================================================= */}

              return (
                <div key={link.name}>
                  <button
                    type="button"
                    onClick={() =>
                      setExploreOpen((prev) => !prev)
                    }
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-3.5
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-white/10 text-[#e4b95e]"
                          : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                      }
                    `}
                  >
                    <span
                      className="
                        w-5
                        text-[9px]
                        tracking-widest
                        text-white/25
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      className={`
                        h-[18px]
                        w-[18px]

                        ${
                          isActive
                            ? "text-[#e4b95e]"
                            : "text-white/40"
                        }
                      `}
                      strokeWidth={1.7}
                    />

                    <span
                      className="
                        flex-1
                        text-left
                        text-sm
                        font-medium
                        tracking-wide
                      "
                    >
                      {link.name}
                    </span>

                    <ChevronDown
                      className={`
                        h-4
                        w-4
                        transition-transform
                        duration-300

                        ${
                          exploreOpen
                            ? "rotate-180 text-[#e4b95e]"
                            : "text-white/40"
                        }
                      `}
                      strokeWidth={1.7}
                    />
                  </button>

                  {/* Explore submenu */}

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300

                      ${
                        exploreOpen
                          ? "max-h-[300px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        ml-9
                        space-y-1
                        border-l
                        border-[#e4b95e]/20
                        pl-4
                      "
                    >
                      {link.dropdown.map((item) => {
                        const ItemIcon = item.icon;

                        const active =
                          location.pathname === item.href;

                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={closeMenu}
                            className={`
                              group
                              flex
                              items-center
                              gap-3
                              rounded-lg
                              px-3
                              py-3
                              transition-all
                              duration-300

                              ${
                                active
                                  ? "bg-[#e4b95e]/10 text-[#e4b95e]"
                                  : "text-white/55 hover:bg-white/5 hover:text-white"
                              }
                            `}
                          >
                            <ItemIcon
                              className="
                                h-4
                                w-4
                                shrink-0
                                text-[#e4b95e]
                              "
                              strokeWidth={1.7}
                            />

                            <div className="flex-1">
                              <div className="text-xs font-medium">
                                {item.name}
                              </div>

                              <div className="mt-0.5 text-[9px] text-white/35">
                                {item.description}
                              </div>
                            </div>

                            <ArrowRight
                              className="
                                h-3.5
                                w-3.5
                                -translate-x-1
                                text-[#e4b95e]
                                opacity-0
                                transition-all
                                duration-300
                                group-hover:translate-x-0
                                group-hover:opacity-100
                              "
                              strokeWidth={1.7}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* =================================================
              PLAN YOUR VISIT
          ================================================= */}

          {onOpenPlanner && (
            <div
              className="
                mt-8
                border-t
                border-white/10
                pt-7
              "
            >
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenPlanner();
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#e4b95e]
                  px-5
                  py-3.5
                  text-[#10201c]
                  shadow-[0_10px_35px_rgba(216,168,91,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:brightness-105
                  active:scale-[0.98]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-black/10
                    "
                  >
                    <Calendar
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="text-left">
                    <div
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        opacity-60
                      "
                    >
                      Start your journey
                    </div>

                    <div className="mt-0.5 text-sm font-bold">
                      Plan Your Visit
                    </div>
                  </div>
                </div>

                <ArrowRight
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  strokeWidth={1.8}
                />
              </button>
            </div>
          )}

          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="mt-8 text-center">
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Discover • Explore • Experience
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}