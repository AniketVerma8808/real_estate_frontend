import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ======================
          NAVBAR
      ====================== */}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-4 shadow-2xl backdrop-blur-md" : "py-6"
        }`}
        style={{
          background: isScrolled ? "rgba(15, 23, 42, 0.92)" : "transparent",
        }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* LOGO */}

          <Link to="/">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="flex items-center gap-3"
            >
              {/* IMAGE LOGO */}

              <div
                className="
                  w-[60px]
                  h-[60px]
                  rounded-2xl
                  overflow-hidden
                  bg-white
                  shadow-xl
                  border
                  border-white/20
                "
              >
                <img
                  src="logo.jpeg"
                  alt="Ujjwal Bhoomi Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}

              <div className="hidden sm:block">
                <h1
                  className="
                    text-[22px]
                    md:text-[26px]
                    font-bold
                    leading-tight
                    tracking-wide
                  "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  Ujjwal Bhoomi
                </h1>

                <p
                  className="
                    text-[11px]
                    // uppercase
                    tracking-[3px]
                    mt-1
                  "
                  style={{
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Real Estate pvt. ltd.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative
                  text-[14px]
                  uppercase
                  tracking-[2px]
                  font-medium
                  transition-all
                  duration-300
                  ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"}
                `
                }
                style={{
                  color: "var(--white-color)",
                }}
              >
                {link.name}

                {/* UNDERLINE HOVER */}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    w-0
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                  style={{
                    background: "var(--secondary-color)",
                  }}
                />
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">
            {/* CTA BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                hidden
                md:block
                px-7
                py-3
                rounded-full
                text-[14px]
                font-semibold
                transition-all
                duration-300
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              Enquire Now
            </motion.button>

            {/* MOBILE BUTTON */}

            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden"
              style={{
                color: "var(--white-color)",
              }}
            >
              {mobileMenu ? <X size={30} /> : <Menu size={30} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ======================
          MOBILE MENU
      ====================== */}

      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* OVERLAY */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/50 z-[90]"
            />

            {/* MENU */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
              }}
              className="
                  fixed
                  top-0
                  right-0
                  h-screen
                  w-[300px]
                  z-[100]
                  lg:hidden
                "
              style={{
                background: "var(--primary-color)",
              }}
            >
              {/* TOP */}

              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  Menu
                </h2>

                <button
                  onClick={() => setMobileMenu(false)}
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  <X size={30} />
                </button>
              </div>

              {/* LINKS */}

              <div className="flex flex-col p-6 gap-8 mt-10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenu(false)}
                      className="
                            text-[18px]
                            uppercase
                            tracking-[2px]
                            font-medium
                          "
                      style={{
                        color: "var(--white-color)",
                      }}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                {/* BUTTON */}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                      mt-6
                      px-7
                      py-4
                      rounded-full
                      font-semibold
                    "
                  style={{
                    background: "var(--secondary-color)",
                    color: "white",
                  }}
                >
                  Enquire Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
