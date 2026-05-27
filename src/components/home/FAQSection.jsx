import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Are the plots legally verified?",
    answer:
      "Yes, all our plotting projects come with complete legal verification and transparent documentation support.",
  },

  {
    question: "Do you provide EMI or finance options?",
    answer:
      "Yes, we provide flexible payment plans and bank loan assistance for selected projects.",
  },

  {
    question: "What amenities are included in the township?",
    answer:
      "Projects include wide roads, parks, electricity, drainage systems, water supply, and gated security.",
  },

  {
    question: "Can I visit the project site before booking?",
    answer:
      "Absolutely. We encourage site visits so buyers can experience the location and infrastructure personally.",
  },

  {
    question: "Is this a good investment opportunity?",
    answer:
      "Our projects are located in high-growth areas with excellent appreciation potential and future infrastructure development.",
  },
];

const FAQSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {

    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }

  };

  return (

    <section
      className="
        relative
        py-28
        overflow-hidden
      "
      style={{
        background: "var(--background-color)",
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
          opacity-10
        "
        style={{
          background: "var(--secondary-color)",
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
            max-w-[850px]
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
            "
            style={{
              borderColor: "rgba(15,23,42,0.08)",
              color: "var(--primary-color)",
              background: "rgba(255,255,255,0.7)",
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
              md:text-[55px]
              leading-[1.1]
              font-bold
              tracking-[-2px]
            "
            style={{
              color: "var(--primary-color)",
            }}
          >

            Everything You Need
            To Know Before Investing

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              text-[16px]
              leading-8
            "
            style={{
              color: "var(--paragraph-color)",
            }}
          >

            Get answers to the most commonly asked questions
            about our plotting projects, investment process,
            and township facilities.

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

          {
            faqs.map((faq, index) => {

              const isActive = activeIndex === index;

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
                    rounded-[28px]
                    border
                    overflow-hidden
                  "
                  style={{
                    background: "white",
                    borderColor: "rgba(15,23,42,0.08)",
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

                    <h3
                      className="
                        text-[18px]
                        md:text-[22px]
                        font-bold
                        leading-[1.4]
                      "
                      style={{
                        color: "var(--primary-color)",
                      }}
                    >

                      {faq.question}

                    </h3>

                    <div
                      className="
                        min-w-[48px]
                        h-[48px]
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

                      {
                        isActive
                          ? <Minus size={20} />
                          : <Plus size={20} />
                      }

                    </div>

                  </button>

                  {/* ANSWER */}

                  <AnimatePresence>

                    {
                      isActive && (

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

                          <div className="px-7 pb-7">

                            <p
                              className="
                                text-[15px]
                                leading-8
                                max-w-[760px]
                              "
                              style={{
                                color: "var(--paragraph-color)",
                              }}
                            >

                              {faq.answer}

                            </p>

                          </div>

                        </motion.div>

                      )
                    }

                  </AnimatePresence>

                </motion.div>

              );

            })
          }

        </div>

      </div>

    </section>

  );

};

export default FAQSection;