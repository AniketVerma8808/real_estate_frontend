import { motion } from "framer-motion";

import {
  Trees,
  ShieldCheck,
  Waves,
  CarFront,
  Lightbulb,
  Building2,
  ArrowRight,
} from "lucide-react";

const amenities = [
  {
    icon: Trees,
    title: "Green Parks",
    desc: "Beautiful landscaped parks and open green spaces for peaceful living.",
  },

  {
    icon: ShieldCheck,
    title: "24/7 Security",
    desc: "Gated township with modern security systems and surveillance support.",
  },

  {
    icon: Waves,
    title: "Water Supply",
    desc: "Continuous water availability with proper underground pipeline systems.",
  },

  {
    icon: CarFront,
    title: "Wide Roads",
    desc: "Well-planned 30ft & 40ft wide roads for smooth and premium connectivity.",
  },

  {
    icon: Lightbulb,
    title: "Street Lighting",
    desc: "Modern street lighting infrastructure for safety and convenience.",
  },

  {
    icon: Building2,
    title: "Commercial Zone",
    desc: "Dedicated commercial areas designed for future business growth.",
  },
];

const AmenitiesSection = () => {

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
          top-0
          left-0
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

      <div className="container-custom relative z-10">

        {/* ======================
            TOP CONTENT
        ====================== */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
            mb-20
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
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
              "
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--white-color)",
                background: "rgba(255,255,255,0.03)",
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

              Premium Township Amenities

            </div>

            {/* HEADING */}

            <h2
              className="
                text-[40px]
                md:text-[55px]
                leading-[1.1]
                font-bold
                tracking-[-2px]
                max-w-[700px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >

              Modern Infrastructure
              For Comfortable Living

            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                text-[16px]
                leading-8
                max-w-[650px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >

              Our plotting projects are designed with
              premium infrastructure, green surroundings,
              and modern facilities that ensure a secure,
              comfortable, and future-ready lifestyle.

            </p>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
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
                w-fit
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >

              Explore Amenities

              <ArrowRight size={20} />

            </motion.button>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div
              className="
                overflow-hidden
                rounded-[35px]
                border
              "
              style={{
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                alt="Amenities"
                className="
                  w-full
                  h-[600px]
                  object-cover
                "
              />

            </div>

            {/* FLOATING CARD */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-8
                right-8
                p-6
                rounded-[28px]
                border
                backdrop-blur-xl
                max-w-[260px]
              "
              style={{
                background: "rgba(15,23,42,0.78)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >

              <h3
                className="
                  text-4xl
                  font-bold
                "
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                25+
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                "
                style={{
                  color: "rgba(255,255,255,0.72)",
                }}
              >

                Premium amenities designed for modern
                township and smart living experiences.

              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* ======================
            AMENITIES GRID
        ====================== */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {
            amenities.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    relative
                    p-8
                    rounded-[30px]
                    border
                    overflow-hidden
                    group
                  "
                  style={{
                    background: "rgba(15,23,42,0.7)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                  }}
                >

                  {/* HOVER GLOW */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                    "
                    style={{
                      background:
                        "radial-gradient(circle at top left, rgba(200,169,107,0.15), transparent 60%)",
                    }}
                  />

                  {/* ICON */}

                  <div
                    className="
                      relative
                      z-10
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mb-7
                    "
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--secondary-color)",
                    }}
                  >

                    <Icon size={30} />

                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      relative
                      z-10
                      text-2xl
                      font-bold
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >

                    {item.title}

                  </h3>

                  {/* DESC */}

                  <p
                    className="
                      relative
                      z-10
                      mt-5
                      text-[15px]
                      leading-8
                    "
                    style={{
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >

                    {item.desc}

                  </p>

                </motion.div>

              );

            })
          }

        </div>

      </div>

    </section>

  );

};

export default AmenitiesSection;