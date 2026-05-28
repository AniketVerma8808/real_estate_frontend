import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Landmark,
  ChevronRight,
} from "lucide-react";

const stats = [
  "Verified Projects",
  "Prime Locations",
  "Bank Loan Support",
  "Township Development",
];

const ProjectsHero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        pt-[120px]
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* ======================
          BACKGROUND IMAGE
      ====================== */}

      <motion.img
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
        alt="Projects"
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
            "linear-gradient(to right, rgba(15,23,42,0.97), rgba(15,23,42,0.82), rgba(15,23,42,0.5))",
        }}
      />

      {/* ======================
          GLOW EFFECTS
      ====================== */}

      <div
        className="
          absolute
          top-[10%]
          left-[-80px]
          w-[300px]
          h-[300px]
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
          bottom-[-100px]
          right-[-100px]
          w-[280px]
          h-[280px]
          rounded-full
          blur-[140px]
          opacity-10
        "
        style={{
          background: "#ffffff",
        }}
      />

      {/* ======================
          MAIN CONTENT
      ====================== */}

      <div className="container-custom relative z-10 w-full">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* ======================
              LEFT CONTENT
          ====================== */}

          <div>
            {/* BREADCRUMB */}

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
                mb-8
              "
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Home
              <ChevronRight size={16} />
              Projects
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="
                text-[42px]
                sm:text-[56px]
                md:text-[72px]
                leading-[1.05]
                font-bold
                tracking-[-2px]
                max-w-[760px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Premium Plotting &
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Township{" "}
              </span>
              Projects
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
              }}
              className="
                mt-8
                text-[15px]
                sm:text-[16px]
                leading-8
                max-w-[650px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Explore premium plotting developments, secure investment
              opportunities, and future-ready township projects designed for
              long-term value growth and modern infrastructure living.
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
              {/* PRIMARY */}

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
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                "
                style={{
                  background: "var(--secondary-color)",
                  color: "white",
                }}
              >
                Explore Projects
                <ArrowUpRight size={20} />
              </motion.button>

              {/* SECONDARY */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  backdrop-blur-md
                  font-medium
                "
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--white-color)",
                }}
              >
                Enquire Now
              </motion.button>
            </motion.div>

            {/* STATS */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
              className="
                grid
                sm:grid-cols-2
                gap-5
                mt-14
                max-w-[650px]
              "
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    p-5
                    rounded-2xl
                    border
                    backdrop-blur-md
                  "
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background: "rgba(200,169,107,0.12)",
                    }}
                  >
                    <ShieldCheck
                      size={20}
                      style={{
                        color: "var(--secondary-color)",
                      }}
                    />
                  </div>

                  <p
                    className="
                      text-[15px]
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
                w-[420px]
                rounded-[34px]
                overflow-hidden
                border
                backdrop-blur-xl
                p-6
              "
              style={{
                background: "rgba(255,255,255,0.07)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[260px]
                  overflow-hidden
                  rounded-[26px]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Township"
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
                      "linear-gradient(to top, rgba(15,23,42,0.8), transparent)",
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
                    className="text-sm mb-2"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    Featured Development
                  </p>

                  <h3
                    className="
                      text-[28px]
                      font-bold
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    Smart Township
                  </h3>
                </div>
              </div>

              {/* CONTENT */}

              <div className="mt-7">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <MapPin
                    size={18}
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  />

                  <p
                    style={{
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    Lucknow, Uttar Pradesh
                  </p>
                </div>

                <h3
                  className="
                    mt-5
                    text-[32px]
                    leading-tight
                    font-bold
                  "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  Future-Ready Investment Opportunities
                </h3>

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-8
                  "
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  Premium plotting developments with modern infrastructure,
                  excellent connectivity, and secure investment support.
                </p>

                {/* FEATURES */}

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-4
                    mt-8
                  "
                >
                  {[
                    "Verified Projects",
                    "Bank Loan Support",
                    "Prime Locations",
                    "Modern Township",
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

                {/* BUTTON */}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    mt-8
                    w-full
                    py-4
                    rounded-full
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                  style={{
                    background: "var(--secondary-color)",
                    color: "white",
                  }}
                >
                  View Projects
                  <ArrowUpRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
