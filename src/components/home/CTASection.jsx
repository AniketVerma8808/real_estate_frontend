import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-[-120px]
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
          bottom-[-120px]
          right-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          blur-[140px]
          opacity-10
        "
        style={{
          background: "#ffffff",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            max-w-[1000px]
            mx-auto
            text-center
            rounded-[32px]
            border
            px-6
            py-14
            md:px-12
            md:py-16
            lg:px-16
            lg:py-20
            backdrop-blur-xl
          "
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
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
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
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
            Start Your Investment Journey
          </div>

          {/* HEADING */}

          <h2
            className="
              text-[34px]
              sm:text-[42px]
              md:text-[56px]
              lg:text-[64px]
              font-bold
              leading-[1.08]
              tracking-[-2px]
              max-w-[850px]
              mx-auto
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            Ready To Own Your
            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              Dream Plot
            </span>
            ?
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-[700px]
              mx-auto
              text-[15px]
              md:text-[16px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Get complete project details, pricing information, site visit
            assistance, and expert guidance to help you make the right
            investment decision.
          </p>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-5
              mt-10
            "
          >
            {/* PRIMARY */}

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                font-semibold
                min-w-[220px]
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              Book Site Visit
              <MoveRight size={20} />
            </motion.button>

            {/* SECONDARY */}

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
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                border
                min-w-[220px]
              "
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "var(--white-color)",
              }}
            >
              <PhoneCall size={18} />
              Call Now
            </motion.button>
          </div>

          {/* TRUST TEXT */}

          <p
            className="
              mt-8
              text-sm
            "
            style={{
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Trusted by hundreds of investors for secure and transparent real
            estate investments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
