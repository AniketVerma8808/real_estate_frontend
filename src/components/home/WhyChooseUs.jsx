import { motion } from "framer-motion";

import {
  ShieldCheck,
  BadgeCheck,
  MapPinned,
  Landmark,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Legal Projects",
    desc: "All plots come with verified documentation and secure registry support for complete peace of mind.",
  },

  {
    icon: MapPinned,
    title: "Prime Growth Locations",
    desc: "Projects strategically located near highways, smart cities, and fast-growing investment corridors.",
  },

  {
    icon: Landmark,
    title: "High ROI Investment",
    desc: "Carefully selected plotting opportunities with strong future appreciation and investment returns.",
  },

  {
    icon: BadgeCheck,
    title: "Trusted By Families",
    desc: "Building trust through transparency, premium service, and successful property handovers.",
  },
];

const WhyChooseUs = () => {

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
          top-[-100px]
          left-[-100px]
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
          bottom-[-140px]
          right-[-120px]
          w-[350px]
          h-[350px]
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
            TOP HEADER
        ====================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
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

            Why Choose Ujjwal Bhoomi

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
              color: "var(--white-color)",
            }}
          >

            Trusted Real Estate Solutions
            For Smart Property Investments

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              text-[16px]
              leading-8
              max-w-[750px]
              mx-auto
            "
            style={{
              color: "rgba(255,255,255,0.7)",
            }}
          >

            We deliver premium plotting opportunities
            with transparent documentation, strategic
            locations, and future-focused investment
            planning designed for long-term value growth.

          </p>

        </motion.div>

        {/* ======================
            MAIN CONTENT
        ====================== */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >

          {/* ======================
              LEFT IMAGE
          ====================== */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
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
               src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
                alt="Real Estate"
                className="
                  w-full
                  h-[650px]
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
                left-8
                p-6
                rounded-[28px]
                border
                backdrop-blur-xl
                max-w-[280px]
              "
              style={{
                background: "rgba(15,23,42,0.75)",
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
                10+
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

                Years of trusted experience in premium
                plotting and land investment solutions.

              </p>

            </motion.div>

          </motion.div>

          {/* ======================
              RIGHT CONTENT
          ====================== */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-7
            "
          >

            {
              features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
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
                        leading-tight
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

        {/* ======================
            BOTTOM CTA
        ====================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-24
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              p-10
              lg:p-14
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-10
            "
            style={{
              background: "rgba(15,23,42,0.75)",
              borderColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >

            {/* GLOW */}

            <div
              className="
                absolute
                top-0
                right-0
                w-[250px]
                h-[250px]
                rounded-full
                blur-[120px]
                opacity-20
              "
              style={{
                background: "var(--secondary-color)",
              }}
            />

            {/* TEXT */}

            <div className="relative z-10">

              <h3
                className="
                  text-[34px]
                  md:text-[44px]
                  font-bold
                  leading-[1.1]
                  tracking-[-2px]
                  max-w-[700px]
                "
                style={{
                  color: "var(--white-color)",
                }}
              >

                Ready To Invest In
                Premium Property Opportunities?

              </h3>

              <p
                className="
                  mt-5
                  text-[16px]
                  leading-8
                  max-w-[650px]
                "
                style={{
                  color: "rgba(255,255,255,0.72)",
                }}
              >

                Connect with our experts and discover
                premium plots designed for future growth
                and secure investment returns.

              </p>

            </div>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative
                z-10
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                font-semibold
                whitespace-nowrap
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >

              <PhoneCall size={20} />

              Contact Us

              <ArrowRight size={18} />

            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>

  );

};

export default WhyChooseUs;