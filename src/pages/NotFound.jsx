import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowLeft, Home, ShieldAlert } from "lucide-react";

const NotFound = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-100px]
          left-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          blur-[140px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          w-[300px]
          h-[300px]
          rounded-full
          blur-[140px]
          opacity-10
          bg-white
        "
      />

      {/* CONTENT */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          w-full
          max-w-[700px]
          text-center
          border
          rounded-[36px]
          p-8
          md:p-12
          backdrop-blur-xl
        "
        style={{
          background: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {/* ICON */}

        <div
          className="
            mx-auto
            w-20
            h-20
            rounded-full
            flex
            items-center
            justify-center
            mb-8
          "
          style={{
            background: "rgba(200,169,107,0.12)",
          }}
        >
          <ShieldAlert
            size={38}
            style={{
              color: "var(--secondary-color)",
            }}
          />
        </div>

        {/* 404 */}

        <h1
          className="
            text-[90px]
            md:text-[130px]
            font-black
            leading-none
            tracking-[-6px]
          "
          style={{
            color: "rgba(255,255,255,0.08)",
          }}
        >
          404
        </h1>

        {/* TITLE */}

        <h2
          className="
            mt-4
            text-[32px]
            md:text-[48px]
            font-bold
            leading-tight
          "
          style={{
            color: "var(--white-color)",
          }}
        >
          Page Not Found
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mt-5
            text-[15px]
            md:text-[16px]
            leading-8
            max-w-[560px]
            mx-auto
          "
          style={{
            color: "rgba(255,255,255,0.72)",
          }}
        >
          The page you are looking for doesn’t exist or may have been moved.
          Explore our premium township projects and investment opportunities
          from the homepage.
        </p>

        {/* BUTTONS */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            mt-10
          "
        >
          {/* HOME BUTTON */}

          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                items-center
                justify-center
                gap-3
                px-7
                py-3.5
                rounded-full
                text-[15px]
                font-semibold
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              <Home size={18} />
              Back To Home
            </motion.button>
          </Link>

          {/* GO BACK */}

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => window.history.back()}
            className="
              flex
              items-center
              justify-center
              gap-3
              px-7
              py-3.5
              rounded-full
              border
              backdrop-blur-md
              text-[15px]
              transition-all
              duration-300
              hover:bg-white/10
            "
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--white-color)",
            }}
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
