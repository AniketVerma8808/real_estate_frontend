import { ArrowRight } from "lucide-react";
import React from "react";

const stats = [
  {
    number: "500+",
    label: "Happy Clients",
  },
  {
    number: "100+",
    label: "Plots Sold",
  },
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "100%",
    label: "Legal Compliance",
  },
];

const AboutHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--primary-color)]
        pt-[130px]
        md:pt-[150px]
        pb-20
        md:pb-24
      "
    >
      {/* BLUR EFFECTS */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-100px]
          w-[350px]
          h-[350px]
          rounded-full
          blur-[120px]
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
          w-[350px]
          h-[350px]
          rounded-full
          blur-[120px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2.5
                rounded-full
                border
                mb-7
                backdrop-blur-md
              "
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />

              <span className="text-sm tracking-[2px] font-medium">
                ABOUT UJJWAL BHOOMI
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                text-[38px]
                sm:text-[48px]
                md:text-[58px]
                lg:text-[68px]
                leading-[1.05]
                font-bold
                tracking-[-2px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Building Premium{" "}
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                Real Estate
              </span>{" "}
              Experiences For Future Generations
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                text-[15px]
                md:text-[16px]
                leading-8
                max-w-[650px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Ujjwal Bhoomi Real Estate Pvt Ltd is dedicated to creating premium
              plotting developments, township projects, and investment
              opportunities that combine trust, transparency, and long-term
              value for families and investors.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="primary-btn flex items-center gap-2 group">
                View Projects
                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button className="secondary-btn">Contact Us</button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[24px]
                    border
                    p-5
                    text-center
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <h3
                    className="text-[28px] font-bold"
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  >
                    {item.number}
                  </h3>

                  <p
                    className="text-sm mt-1"
                    style={{
                      color: "rgba(255,255,255,0.60)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* BACKGROUND SHAPE */}
            <div
              className="
                absolute
                -top-6
                -right-6
                w-full
                h-full
                rounded-[36px]
                hidden
                md:block
              "
              style={{
                background: "var(--secondary-color)",
                opacity: "0.08",
              }}
            />

            {/* MAIN IMAGE CARD */}
            <div
              className="
                relative
                rounded-[36px]
                overflow-hidden
                border
                p-3
                backdrop-blur-md
              "
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="
                  rounded-[28px]
                  overflow-hidden
                  h-[320px]
                  sm:h-[420px]
                  lg:h-[560px]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200"
                  alt="Real Estate"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
