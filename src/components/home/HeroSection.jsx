import { motion } from "framer-motion";

import {
  MoveRight,
  Play,
  ChevronDown,
  ShieldCheck,
  MapPinned,
  Landmark,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    text: "RERA Approved",
  },

  {
    icon: Landmark,
    text: "Bank Loan Available",
  },

  {
    icon: MapPinned,
    text: "Prime Township Locations",
  },
];

const HeroSection = () => {
  return (
    <section
      className="
        relative
        min-h-[92vh]
        overflow-hidden
        flex
        items-center
      "
    >
      {/* ======================
          BACKGROUND IMAGE
      ====================== */}

      <motion.img
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
        alt="Premium Township"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* ======================
          OVERLAY
      ====================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,23,42,0.96), rgba(15,23,42,0.78), rgba(15,23,42,0.45))",
        }}
      />

      {/* ======================
          GLOW EFFECTS
      ====================== */}

      <div
        className="
          absolute
          top-[10%]
          left-[0%]
          w-[260px]
          h-[260px]
          rounded-full
          blur-[120px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div
        className="
          absolute
          bottom-[5%]
          right-[0%]
          w-[220px]
          h-[220px]
          rounded-full
          blur-[120px]
          opacity-10
        "
        style={{
          background: "#ffffff",
        }}
      />

      {/* ======================
          MAIN CONTENT
      ====================== */}

      <div
        className="
          relative
          z-10
          w-full
          pt-[130px]
          pb-16
          lg:pt-[120px]
        "
      >
        <div
          className="
            container-custom
            grid
            lg:grid-cols-2
            gap-14
            items-center
          "
        >
          {/* ======================
              LEFT SIDE
          ====================== */}

          <div>
            {/* TAG */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2.5
                rounded-full
                border
                backdrop-blur-md
                mb-7
              "
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "var(--white-color)",
              }}
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                "
                style={{
                  background: "var(--secondary-color)",
                }}
              />
              Premium Plotting Projects
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="
                text-[38px]
                sm:text-[52px]
                lg:text-[68px]
                leading-[1.08]
                font-bold
                tracking-[-1px]
                lg:tracking-[-2px]
                max-w-[720px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Invest In
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Verified Land{" "}
              </span>
             With Assured Future Appreciation
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
              }}
              className="
                mt-7
                text-[15px]
                sm:text-[16px]
                leading-8
                max-w-[620px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Discover premium gated plotting developments and smart township
              projects with modern infrastructure, strategic locations, and
              secure investment opportunities for the future.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-4
                mt-10
              "
            >
              {/* PRIMARY BUTTON */}

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
                  shadow-2xl
                  transition-all
                  duration-300
                "
                style={{
                  background: "var(--secondary-color)",
                  color: "white",
                }}
              >
                Explore Projects
                <MoveRight size={18} />
              </motion.button>

              {/* SECONDARY BUTTON */}

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
                  border
                  backdrop-blur-md
                  text-[15px]
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
                style={{
                  borderColor: "rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--white-color)",
                }}
              >
                <Play size={17} />
                Watch Video
              </motion.button>
            </motion.div>

            {/* TRUST POINTS */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-5
                mt-14
              "
            >
              {trustPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        backdrop-blur-md
                      "
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon
                        size={18}
                        style={{
                          color: "var(--secondary-color)",
                        }}
                      />
                    </div>

                    <p
                      className="
                        text-[14px]
                        md:text-[15px]
                      "
                      style={{
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ======================
              RIGHT SIDE CARD
          ====================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            className="
              hidden
              lg:flex
              justify-end
            "
          >
            <div
              className="
                relative
                w-[390px]
                overflow-hidden
                rounded-[32px]
                border
                backdrop-blur-xl
                p-6
              "
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[240px]
                  overflow-hidden
                  rounded-[24px]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury Township"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.75), transparent)",
                  }}
                />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                  "
                >
                  <p
                    className="
                      text-sm
                      mb-2
                    "
                    style={{
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Featured Township
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    Smart Premium City
                  </h3>
                </div>
              </div>

              {/* CONTENT */}

              <div className="mt-6">
                <h3
                  className="
                    text-[26px]
                    font-bold
                    leading-tight
                  "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  Secure Your Future Through Smart Investments
                </h3>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-7
                  "
                  style={{
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Premium plotting developments with modern infrastructure,
                  excellent connectivity, and future-ready investment growth.
                </p>

                {/* MINI FEATURES */}

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-4
                    mt-7
                  "
                >
                  {[
                    "Starting From ₹999/Sq.Ft",
                    "200+ Acres Township",
                    "Registry Available",
                    "Bank Loan Assistance",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        p-4
                        rounded-2xl
                        text-center
                      "
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <p
                        className="
                          text-[14px]
                          font-medium
                        "
                        style={{
                          color: "rgba(255,255,255,0.88)",
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ======================
          SCROLL INDICATOR
      ====================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-6
          right-6
          hidden
          lg:flex
          flex-col
          items-center
          gap-3
          z-20
        "
      >
        <p
          className="
            text-[11px]
            uppercase
            tracking-[4px]
            rotate-90
          "
          style={{
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Scroll
        </p>

        <ChevronDown
          size={18}
          style={{
            color: "var(--secondary-color)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
