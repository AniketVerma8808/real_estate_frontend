import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "Happy Families",
  },

  {
    number: "20+",
    label: "Projects Delivered",
  },

  {
    number: "10+",
    label: "Years Of Trust",
  },
];

const AboutSection = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--background-color)",
      }}
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
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
              IMAGE SIDE
          ====================== */}

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
                card-shadow
              "
              style={{
                borderColor: "rgba(15,23,42,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop"
                alt="Ujjwal Bhoomi"
                className="
                  w-full
                  h-[350px]
                  md:h-[500px]
                  lg:h-[620px]
                  object-cover
                "
              />
            </div>

            {/* FLOATING CARD */}

            <div
              className="
                absolute
                bottom-5
                left-5
                md:bottom-8
                md:left-8
                px-6
                py-5
                rounded-[24px]
              "
              style={{
                background: "rgba(15,23,42,0.92)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="
                  text-[34px]
                  md:text-[42px]
                  font-bold
                  leading-none
                "
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                500+
              </h3>

              <p
                className="
                  mt-2
                  text-[14px]
                  font-medium
                "
                style={{
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Happy Families
              </p>
            </div>
          </motion.div>

          {/* ======================
              CONTENT SIDE
          ====================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* BADGE */}

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
                borderColor: "rgba(15,23,42,0.08)",
                color: "var(--primary-color)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />

              About Ujjwal Bhoomi
            </div>

            {/* TITLE */}

            <h2
              className="
                text-[32px]
                md:text-[48px]
                font-bold
                leading-[1.1]
                tracking-[-2px]
                max-w-[700px]
              "
              style={{
                color: "var(--primary-color)",
              }}
            >
              Building Trust Through
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Premium Real Estate Investments
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                text-[15px]
                md:text-[16px]
                leading-8
                max-w-[620px]
              "
              style={{
                color: "var(--paragraph-color)",
              }}
            >
              Ujjwal Bhoomi Real Estate Pvt. Ltd. is dedicated to
              creating secure, transparent, and future-focused
              property investment opportunities. We specialize in
              premium plotting developments, township projects,
              and legally verified land solutions designed to
              deliver long-term value.
            </p>

            <p
              className="
                mt-5
                text-[15px]
                md:text-[16px]
                leading-8
                max-w-[620px]
              "
              style={{
                color: "var(--paragraph-color)",
              }}
            >
              With a strong focus on trust, infrastructure quality,
              and customer satisfaction, we help families and
              investors secure properties in high-growth locations
              with excellent connectivity and appreciation
              potential.
            </p>

            {/* MINI STATS */}

            <div
              className="
                grid
                grid-cols-3
                gap-4
                mt-10
              "
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    p-5
                    rounded-[20px]
                    border
                    text-center
                  "
                  style={{
                    background: "rgba(15,23,42,0.03)",
                    borderColor: "rgba(15,23,42,0.08)",
                  }}
                >
                  <h3
                    className="
                      text-[22px]
                      md:text-[30px]
                      font-bold
                    "
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      md:text-[14px]
                      leading-5
                    "
                    style={{
                      color: "var(--paragraph-color)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
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
              Learn More About Us

              <MoveRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;