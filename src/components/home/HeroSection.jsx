import { motion } from "framer-motion";

import { MoveRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[110px] lg:pt-0">
      {/* ======================
          BACKGROUND IMAGE
      ====================== */}

      <motion.img
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
        alt="Luxury Real Estate"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ======================
          OVERLAY
      ====================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,23,42,0.95), rgba(15,23,42,0.65), rgba(15,23,42,0.35))",
        }}
      />

      {/* ======================
          GLOW EFFECTS
      ====================== */}

      <div
        className="
          absolute
          top-[15%]
          left-[5%]
          w-[300px]
          h-[300px]
          rounded-full
          blur-[120px]
          opacity-30
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[250px]
          h-[250px]
          rounded-full
          blur-[120px]
          opacity-20
        "
        style={{
          background: "#ffffff",
        }}
      />

      {/* ======================
          HERO CONTENT
      ====================== */}

      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-10">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          {/* ======================
              LEFT CONTENT
          ====================== */}

          <div>
            {/* TAG */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2
                rounded-full
                border
                mb-8
                backdrop-blur-md
              "
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "var(--white-color)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />
              Premium Real Estate Company
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
              }}
              className="
                text-[42px]
                sm:text-[60px]
                lg:text-[78px]
                leading-[1.05]
                font-bold
                tracking-[-3px]
                max-w-[800px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Find The
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Perfect{" "}
              </span>
              Place To Build Your Dream
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-8
                text-[17px]
                leading-8
                max-w-[650px]
              "
              style={{
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Explore luxury plots, villas, and premium commercial spaces with
              modern amenities, strategic locations, and trusted investment
              opportunities.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-5
                mt-10
              "
            >
              {/* PRIMARY BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.05,
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
                  transition-all
                  duration-300
                  shadow-2xl
                "
                style={{
                  background: "var(--secondary-color)",
                  color: "white",
                }}
              >
                Explore Projects
                <MoveRight size={20} />
              </motion.button>

              {/* SECONDARY BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.05,
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
                  border
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
                style={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "var(--white-color)",
                }}
              >
                <Play size={18} />
                Watch Video
              </motion.button>
            </motion.div>

            {/* STATS */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
              }}
              className="
                flex
                flex-wrap
                gap-10
                mt-16
              "
            >
              {[
                {
                  number: "500+",
                  label: "Happy Clients",
                },
                {
                  number: "20+",
                  label: "Premium Projects",
                },
                {
                  number: "10+",
                  label: "Years Experience",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h2
                    className="text-4xl font-bold"
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  >
                    {item.number}
                  </h2>

                  <p
                    className="mt-2"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ======================
              RIGHT SIDE CARD
          ====================== */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            className="hidden lg:flex justify-end"
          >
            <div
              className="
                w-[420px]
                p-8
                rounded-[32px]
                backdrop-blur-xl
                border
                shadow-2xl
              "
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <h3
                className="text-3xl font-bold"
                style={{
                  color: "var(--white-color)",
                }}
              >
                Premium Living
              </h3>

              <p
                className="mt-4 leading-7"
                style={{
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Discover luxury lifestyle spaces designed with world-class
                infrastructure and future-ready investment opportunities.
              </p>

              {/* FEATURES */}

              <div className="mt-10 space-y-5">
                {[
                  "Luxury Villas",
                  "Premium Plots",
                  "Smart Township",
                  "24/7 Security",
                ].map((item, index) => (
                  <motion.div
                    whileHover={{
                      x: 8,
                    }}
                    key={index}
                    className="
                        flex
                        items-center
                        gap-4
                        p-4
                        rounded-2xl
                        transition-all
                        duration-300
                      "
                    style={{
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      className="
                          w-3
                          h-3
                          rounded-full
                        "
                      style={{
                        background: "var(--secondary-color)",
                      }}
                    />

                    <p
                      style={{
                        color: "var(--white-color)",
                      }}
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
