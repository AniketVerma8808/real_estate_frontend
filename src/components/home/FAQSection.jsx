import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Plus, Minus, ShieldCheck, Landmark, MapPinned } from "lucide-react";

const faqs = [
  {
    icon: ShieldCheck,
    question: "Are the plots legally verified?",
    answer:
      "Yes, every plotting project is legally verified with transparent documentation, registry support, and complete ownership clarity.",
  },

  {
    icon: Landmark,
    question: "Do you provide EMI or finance options?",
    answer:
      "Yes, we offer flexible installment plans and selected projects are eligible for bank loan assistance and financing support.",
  },

  {
    icon: MapPinned,
    question: "What amenities are included in the township?",
    answer:
      "Projects include wide roads, gated entry, green parks, electricity connection, drainage systems, water supply, and modern infrastructure.",
  },

  {
    icon: ShieldCheck,
    question: "Can I visit the project site before booking?",
    answer:
      "Absolutely. Site visits are encouraged so buyers can personally inspect location advantages and project development quality.",
  },

  {
    icon: Landmark,
    question: "Is this a good investment opportunity?",
    answer:
      "Our projects are located in rapidly developing corridors with strong future appreciation and long-term investment potential.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="
        relative
        py-28
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
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          blur-[160px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div
        className="
          absolute
          bottom-[-140px]
          left-[-120px]
          w-[300px]
          h-[300px]
          rounded-full
          blur-[160px]
          opacity-10
        "
        style={{
          background: "#ffffff",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ======================
            HEADER
        ====================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-center
            max-w-[900px]
            mx-auto
            mb-20
          "
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
              backdrop-blur-xl
            "
            style={{
              borderColor: "rgba(255,255,255,0.1)",
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
            Frequently Asked Questions
          </div>

          {/* TITLE */}

          <h2
            className="
              text-[40px]
              md:text-[58px]
              leading-[1.05]
              font-bold
              tracking-[-2px]
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            Everything You Need To Know Before
            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              Investing
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              text-[16px]
              leading-8
              max-w-[760px]
              mx-auto
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Find answers related to legal documentation, payment plans, township
            amenities, site visits, and investment opportunities in our premium
            plotting projects.
          </p>
        </motion.div>

        {/* ======================
            FAQ LIST
        ====================== */}

        <div
          className="
            max-w-[950px]
            mx-auto
            space-y-6
          "
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            const Icon = faq.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="
                  rounded-[30px]
                  border
                  overflow-hidden
                  backdrop-blur-xl
                  group
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {/* QUESTION */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-5
                    text-left
                    px-7
                    py-6
                  "
                >
                  {/* LEFT */}

                  <div className="flex items-center gap-5">
                    {/* ICON */}

                    <div
                      className="
                        min-w-[54px]
                        h-[54px]
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        background: "rgba(200,169,107,0.12)",
                        color: "var(--secondary-color)",
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    {/* QUESTION */}

                    <h3
                      className="
                        text-[18px]
                        md:text-[22px]
                        font-bold
                        leading-[1.4]
                      "
                      style={{
                        color: "var(--white-color)",
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* TOGGLE */}

                  <motion.div
                    animate={{
                      rotate: isActive ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      min-w-[50px]
                      h-[50px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background: "var(--secondary-color)",
                      color: "white",
                    }}
                  >
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.div>
                </button>

                {/* ANSWER */}

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="px-7 pb-7 pl-[96px]">
                        <p
                          className="
                            text-[15px]
                            leading-8
                            max-w-[760px]
                          "
                          style={{
                            color: "rgba(255,255,255,0.72)",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
