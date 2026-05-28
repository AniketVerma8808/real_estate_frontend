import { motion } from "framer-motion";

import {
  Landmark,
  BadgeIndianRupee,
  WalletCards,
  ShieldCheck,
  ArrowUpRight,
  CircleDollarSign,
} from "lucide-react";

const financePlans = [
  {
    icon: BadgeIndianRupee,
    title: "Flexible EMI Plans",
    description:
      "Flexible payment structures designed for premium plotting and township investments.",
  },

  {
    icon: Landmark,
    title: "Bank Loan Assistance",
    description:
      "Dedicated support for bank loan assistance and smooth financing processes.",
  },

  {
    icon: WalletCards,
    title: "Investment Support",
    description:
      "Professional guidance for secure real estate investments and payment planning.",
  },

  {
    icon: ShieldCheck,
    title: "Transparent Documentation",
    description:
      "Verified documentation and transparent processes for secure property transactions.",
  },
];

const FinanceSection = () => {
  return (
    <section
      className="
        relative
        py-16
        md:py-20
        lg:py-28
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
          top-0
          right-0
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
          bottom-[-100px]
          left-[-100px]
          w-[260px]
          h-[260px]
          rounded-full
          blur-[120px]
          opacity-10
        "
        style={{
          background: "#ffffff",
        }}
      />

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
          "
        >
          {/* ======================
              LEFT SIDE CARDS
          ====================== */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-6
            "
          >
            {financePlans.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    p-7
                    md:p-8
                    border
                    backdrop-blur-xl
                    transition-all
                    duration-500
                  "
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {/* CARD GLOW */}

                  <div
                    className="
                      absolute
                      top-[-50px]
                      right-[-50px]
                      w-[140px]
                      h-[140px]
                      rounded-full
                      blur-[90px]
                      opacity-20
                    "
                    style={{
                      background: "var(--secondary-color)",
                    }}
                  />

                  {/* ICON */}

                  <div
                    className="
                      w-[68px]
                      h-[68px]
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mb-7
                    "
                    style={{
                      background: "rgba(200,169,107,0.12)",
                    }}
                  >
                    <Icon
                      size={30}
                      style={{
                        color: "var(--secondary-color)",
                      }}
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-[24px]
                      md:text-[28px]
                      font-bold
                      leading-[1.3]
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

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
                    {item.description}
                  </p>

                  {/* ARROW */}

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      mt-8
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* ======================
              RIGHT CONTENT
          ====================== */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* TAG */}

            <div
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
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
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
              EMI & Finance Plans
            </div>

            {/* HEADING */}

            <h2
              className="
                text-[34px]
                sm:text-[42px]
                md:text-[52px]
                lg:text-[64px]
                font-bold
                leading-[1.08]
                tracking-[-2px]
                max-w-[700px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Flexible
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Payment Plans{" "}
              </span>
              For Premium Plot Investments
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                text-[15px]
                md:text-[16px]
                leading-8
                max-w-[620px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Easy financing solutions with bank loan assistance, flexible
              payment structures, and transparent investment support.
            </p>

            {/* FINANCE BOX */}

            <div
              className="
                mt-10
                rounded-[30px]
                p-7
                border
                backdrop-blur-xl
              "
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="
                    w-[65px]
                    h-[65px]
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                  style={{
                    background: "rgba(200,169,107,0.12)",
                  }}
                >
                  <CircleDollarSign
                    size={30}
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[24px]
                      font-bold
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    Flexible EMI Plans Available
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-7
                    "
                    style={{
                      color: "rgba(255,255,255,0.68)",
                    }}
                  >
                    Premium plotting and township investment opportunities with
                    flexible payment options and dedicated financing assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-10
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              Explore Finance Options
              <ArrowUpRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
