import React from "react";
import { CheckCircle2 } from "lucide-react";

const ProjectHighlights = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        border-b
        border-white/10
      "
    >
      {/* GLOW BACKGROUND */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[420px]
          h-[420px]
          rounded-full
          blur-[150px]
          opacity-10
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <p className="section-subtitle mb-5">PROJECT HIGHLIGHTS</p>

            <h2
              className="
                text-[34px]
                md:text-[52px]
                font-bold
                leading-[1.15]
                mb-7
              "
              style={{
                color: "white",
              }}
            >
              Building Tomorrow’s{" "}
              <span style={{ color: "var(--secondary-color)" }}>
                Premium Communities
              </span>
            </h2>

            <p
              className="
                text-[16px]
                leading-8
                mb-10
              "
              style={{
                color: "rgba(255,255,255,0.70)",
              }}
            >
              Ujjwal Bhoomi Real Estate Pvt Ltd focuses on creating premium
              residential plotting projects, modern township developments and
              long-term investment opportunities designed for future growth and
              better living standards.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-5">
              {[
                "Wide Internal Roads",
                "Green Landscaped Environment",
                "Secure Gated Community",
                "High Future Appreciation Potential",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    group
                  "
                >
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-white/5
                      border
                      border-white/10
                      group-hover:border-[var(--secondary-color)]
                      transition-all
                      duration-300
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[var(--secondary-color)]"
                    />
                  </div>

                  <span className="text-slate-300 text-[15px] md:text-[16px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT STATS ================= */}
          <div
            className="
              relative
              p-6
              md:p-10
              rounded-[36px]
              border
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
            "
            style={{
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            {/* INNER GLOW */}
            <div
              className="
                absolute
                -top-10
                -right-10
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

            <div className="grid grid-cols-2 gap-5 relative z-10">
              {[
                ["100%", "Verified Land"],
                ["500+", "Happy Clients"],
                ["10+", "Projects"],
                ["24/7", "Support"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    text-center
                    p-6
                    rounded-[26px]
                    bg-white/5
                    border
                    border-white/10
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  <h3
                    className="
                      text-[30px]
                      md:text-[34px]
                      font-bold
                      text-[var(--secondary-color)]
                    "
                  >
                    {item[0]}
                  </h3>

                  <p className="text-slate-400 mt-2 text-[14px] md:text-[15px]">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
