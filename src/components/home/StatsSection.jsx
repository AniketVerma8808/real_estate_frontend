import { motion } from "framer-motion";

import {
  ShieldCheck,
  BadgeCheck,
  MapPinned,
  Building2,
} from "lucide-react";

const stats = [
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

  {
    number: "100%",
    label: "Verified Properties",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    text: "Government Approved",
  },

  {
    icon: BadgeCheck,
    text: "RERA Verified Projects",
  },

  {
    icon: MapPinned,
    text: "Prime Highway Locations",
  },

  {
    icon: Building2,
    text: "Premium Township Planning",
  },
];

const StatsSection = () => {
  return (
    <section
      className="
        relative
        py-14
        md:py-16
        lg:py-20
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* ======================
          BACKGROUND GLOW
      ====================== */}

      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[260px]
          h-[260px]
          rounded-full
          blur-[130px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ======================
            MAIN CARD
        ====================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            md:rounded-[34px]
            border
          "
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* ======================
              TRUST STRIP
          ====================== */}

          <div
            className="
              border-b
              px-5
              md:px-8
              lg:px-10
              py-5
              md:py-6
            "
            style={{
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-5
                lg:gap-8
              "
            >
              {trustPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      sm:justify-start
                      gap-3
                    "
                  >
                    <div
                      className="
                        min-w-[42px]
                        h-[42px]
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        background: "rgba(200,169,107,0.12)",
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
                        font-medium
                        leading-6
                      "
                      style={{
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ======================
              STATS GRID
          ====================== */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
            "
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="
                  relative
                  px-5
                  py-8
                  md:px-8
                  md:py-10
                  lg:px-10
                  lg:py-12
                  text-center
                "
              >
                {/* DESKTOP BORDER */}

                {index !== stats.length - 1 && (
                  <div
                    className="
                      hidden
                      lg:block
                      absolute
                      top-1/2
                      right-0
                      -translate-y-1/2
                      w-[1px]
                      h-[90px]
                    "
                    style={{
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                )}

                {/* MOBILE BORDER */}

                {index < 2 && (
                  <div
                    className="
                      lg:hidden
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-[75%]
                      h-[1px]
                    "
                    style={{
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                )}

                {/* NUMBER */}

                <h2
                  className="
                    text-[34px]
                    sm:text-[42px]
                    md:text-[48px]
                    lg:text-[54px]
                    font-bold
                    leading-none
                    tracking-[-2px]
                  "
                  style={{
                    color: "var(--secondary-color)",
                  }}
                >
                  {item.number}
                </h2>

                {/* LABEL */}

                <p
                  className="
                    mt-3
                    text-[14px]
                    md:text-[15px]
                    leading-7
                    font-medium
                  "
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;