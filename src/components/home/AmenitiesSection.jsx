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
      className="py-24 lg:py-28 relative overflow-hidden"
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* Background Glow */}

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
        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
          "
        >
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
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
                  h-[420px]
                  md:h-[550px]
                  object-cover
                "
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-6
                left-6
                p-5
                rounded-[22px]
                border
                backdrop-blur-xl
              "
              style={{
                background: "rgba(15,23,42,0.82)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="
                  text-[34px]
                  font-bold
                  leading-none
                "
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                25+
              </h3>

              <p
                className="
                  mt-2
                  text-[14px]
                "
                style={{
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                Modern Lifestyle Amenities
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                mb-7
              "
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--white-color)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />

              Premium Township Amenities
            </div>

            {/* TITLE */}

            <h2
              className="
                text-[34px]
                md:text-[48px]
                font-bold
                leading-[1.15]
                tracking-[-1px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Modern Infrastructure For
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Comfortable Living
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                text-[15px]
                md:text-[16px]
                leading-8
                max-w-[620px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Our plotting developments feature premium infrastructure,
              landscaped surroundings, wide roads, and essential facilities
              designed to provide a secure and future-ready lifestyle.
            </p>

            {/* AMENITIES LIST */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-5
                mt-10
              "
            >
              {amenities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    className="
                      flex
                      items-start
                      gap-4
                      p-5
                      rounded-[22px]
                      border
                    "
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="
                        min-w-[48px]
                        h-[48px]
                        rounded-xl
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        background: "rgba(200,169,107,0.12)",
                        color: "var(--secondary-color)",
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[18px]
                          font-semibold
                        "
                        style={{
                          color: "var(--white-color)",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[14px]
                          leading-7
                        "
                        style={{
                          color: "rgba(255,255,255,0.68)",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                px-7
                py-4
                rounded-full
                font-semibold
              "
              style={{
                background: "var(--secondary-color)",
                color: "#fff",
              }}
            >
              Explore Amenities
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;