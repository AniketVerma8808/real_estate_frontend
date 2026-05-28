import React from "react";
import { PhoneCall, Mail, ArrowRight } from "lucide-react";

const CommonCTA = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        overflow-hidden
        border-t
        border-white/10
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          blur-[140px]
          opacity-15
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        <div
          className="
            max-w-[1000px]
            mx-auto
            text-center
            rounded-[36px]
            border
            p-10
            md:p-14
            backdrop-blur-xl
          "
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {/* TAG */}
          <p
            className="text-sm tracking-[3px] uppercase mb-6"
            style={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Get In Touch With Us
          </p>

          {/* HEADING */}
          <h2
            className="
              text-[32px]
              md:text-[52px]
              font-bold
              leading-[1.1]
              mb-6
            "
            style={{
              color: "white",
            }}
          >
            Let’s Build Your{" "}
            <span style={{ color: "var(--secondary-color)" }}>
              Dream Investment
            </span>{" "}
            Together
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[15px]
              md:text-[16px]
              leading-8
              max-w-[750px]
              mx-auto
              mb-10
            "
            style={{
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Whether you are looking for investment guidance, project details, or
            site visits — our team is always ready to assist you with complete
            transparency.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
            "
          >
            {/* CALL */}
            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                font-semibold
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              <PhoneCall size={18} />
              Call Now
            </button>

            {/* EMAIL / CONTACT */}
            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                border
                font-semibold
              "
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "white",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <Mail size={18} />
              Send Inquiry
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonCTA;
