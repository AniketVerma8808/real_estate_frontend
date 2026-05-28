import React from "react";
import {
  ShieldCheck,
  MapPin,
  Users,
  Landmark,
  BadgeCheck,
  TrendingUp,
  HeartHandshake,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Legal Projects",
    desc: "All developments are fully verified with proper documentation, approvals, and legal clarity.",
  },
  {
    icon: MapPin,
    title: "Prime Development Zones",
    desc: "Strategic locations near highways, growth corridors, and future smart city expansions.",
  },
  {
    icon: TrendingUp,
    title: "Strong Investment Growth",
    desc: "Projects designed for long-term appreciation and stable real estate returns.",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    desc: "Built on trust, transparency, and successful delivery of real estate commitments.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    desc: "Premium infrastructure planning with high construction and layout standards.",
  },
  {
    icon: Landmark,
    title: "Legal Compliance",
    desc: "Complete compliance with government regulations and RERA guidelines.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First Approach",
    desc: "Dedicated support at every step from inquiry to final possession.",
  },
  {
    icon: Building2,
    title: "Premium Developments",
    desc: "High-value plotting and township projects designed for modern living.",
  },
];

const WhyChooseUsAbout = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        border-t
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
          blur-[140px]
          opacity-10
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-[850px] mx-auto mb-14">
          <p className="section-subtitle mb-5">WHY TRUST US</p>

          <h2
            className="
              text-[34px]
              md:text-[52px]
              leading-[1.15]
              font-bold
            "
            style={{
              color: "white",
            }}
          >
            Strong Reasons Why Investors Choose
            <span style={{ color: "var(--secondary-color)" }}>
              {" "}
              Ujjwal Bhoomi
            </span>
          </h2>

          <p
            className="
              mt-6
              text-[16px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.70)",
            }}
          >
            We focus on trust, transparency, legal safety, and high-value real
            estate development to ensure long-term satisfaction for our clients.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  p-7
                  rounded-[28px]
                  border
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  overflow-hidden
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
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
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--secondary-color)",
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    z-10
                    text-lg
                    md:text-xl
                    font-semibold
                    mb-3
                  "
                  style={{
                    color: "white",
                  }}
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    relative
                    z-10
                    text-[14px]
                    md:text-[15px]
                    leading-7
                  "
                  style={{
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsAbout;
