// src/pages/About.jsx

import {
  ArrowRight,
  Building2,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  HeartHandshake,
  Landmark,
  Target,
  Eye,
  CheckCircle2,
  Users,
  TrendingUp,
  Home,
} from "lucide-react";

const services = [
  {
    icon: <Home size={30} />,
    title: "Residential Plot Development",
    desc: "Premium residential plotting projects developed in fast-growing and future-ready locations.",
  },

  {
    icon: <Building2 size={30} />,
    title: "Township Development",
    desc: "Modern township planning with roads, infrastructure, green zones and community facilities.",
  },

  {
    icon: <TrendingUp size={30} />,
    title: "Investment Consultancy",
    desc: "Professional guidance for secure, transparent and profitable real estate investments.",
  },
];

const values = [
  "Transparency",
  "Integrity",
  "Commitment",
  "Customer First",
  "Innovation",
  "Trust",
];

const process = [
  {
    step: "01",
    title: "Project Selection",
  },

  {
    step: "02",
    title: "Site Visit & Consultation",
  },

  {
    step: "03",
    title: "Documentation & Booking",
  },

  {
    step: "04",
    title: "Registration & Ownership",
  },
];

const About = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* ==================================
          HERO SECTION
      ================================== */}

      <section className="relative section-padding overflow-hidden">
        {/* GLOW EFFECTS */}

        <div
          className="
            absolute
            top-0
            left-0
            w-[450px]
            h-[450px]
            rounded-full
            blur-[140px]
            opacity-10
          "
          style={{
            background: "var(--secondary-color)",
          }}
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[450px]
            h-[450px]
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
              gap-16
              items-center
            "
          >
            {/* LEFT */}

            <div>
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
                  borderColor: "rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "var(--secondary-color)",
                  }}
                />
                ABOUT UJJWAL BHOOMI
              </div>

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
                Building Premium
                <span
                  style={{
                    color: "var(--secondary-color)",
                  }}
                >
                  {" "}
                  Real Estate{" "}
                </span>
                Experiences For Future Generations
              </h1>

              <p
                className="
                  mt-8
                  text-[16px]
                  leading-8
                  max-w-[650px]
                "
                style={{
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                Ujjwal Bhoomi Real Estate Pvt Ltd is dedicated to creating
                premium plotting developments, township projects and investment
                opportunities that combine trust, transparency and long-term
                value.
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                  mt-10
                "
              >
                <button className="primary-btn flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </button>

                <button className="secondary-btn">Contact Us</button>
              </div>

              {/* STATS */}

              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-5
                  mt-14
                "
              >
                {[
                  ["500+", "Happy Clients"],
                  ["100+", "Plots Sold"],
                  ["15+", "Projects"],
                  ["100%", "Legal Compliance"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      p-5
                      rounded-[24px]
                      border
                      text-center
                    "
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <h3
                      className="
                        text-[28px]
                        font-bold
                      "
                      style={{
                        color: "var(--secondary-color)",
                      }}
                    >
                      {item[0]}
                    </h3>

                    <p
                      className="text-sm mt-1"
                      style={{
                        color: "rgba(255,255,255,0.60)",
                      }}
                    >
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}

            <div>
              <div
                className="
                  rounded-[36px]
                  border
                  p-8
                  md:p-10
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="
                    rounded-[30px]
                    overflow-hidden
                    h-[500px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200"
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================
          COMPANY OVERVIEW
      ================================== */}

      <section className="section-padding border-t border-white/10">
        <div className="container-custom">
          <div
            className="
              grid
              lg:grid-cols-2
              gap-16
              items-center
            "
          >
            {/* LEFT */}

            <div>
              <p className="section-subtitle mb-5">COMPANY OVERVIEW</p>

              <h2
                className="
                  text-[34px]
                  md:text-[52px]
                  leading-[1.15]
                  font-bold
                  mb-7
                "
                style={{
                  color: "var(--white-color)",
                }}
              >
                Creating Trust Through Premium Real Estate Developments
              </h2>

              <p
                className="
                  text-[16px]
                  leading-8
                  mb-6
                "
                style={{
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                Ujjwal Bhoomi Real Estate Pvt Ltd focuses on developing premium
                residential plotting projects, investment opportunities and
                future-ready township developments designed for sustainable
                growth.
              </p>

              <p
                className="
                  text-[16px]
                  leading-8
                "
                style={{
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                Our commitment to transparency, legal compliance, customer
                satisfaction and quality infrastructure helps us build long-term
                relationships with home buyers and investors alike.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {[
                  {
                    icon: <ShieldCheck size={24} />,
                    title: "Verified Projects",
                  },

                  {
                    icon: <MapPin size={24} />,
                    title: "Prime Locations",
                  },

                  {
                    icon: <Users size={24} />,
                    title: "Customer Focused",
                  },

                  {
                    icon: <Landmark size={24} />,
                    title: "Legal Compliance",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      p-5
                      rounded-[24px]
                      border
                    "
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        mb-4
                      "
                      style={{
                        background: "rgba(200,169,107,0.12)",
                        color: "var(--secondary-color)",
                      }}
                    >
                      {item.icon}
                    </div>

                    <h4
                      style={{
                        color: "white",
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="grid gap-6">
              {/* MISSION */}

              <div
                className="
                  p-8
                  rounded-[30px]
                  border
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                  style={{
                    background: "rgba(200,169,107,0.12)",
                    color: "var(--secondary-color)",
                  }}
                >
                  <Target size={30} />
                </div>

                <h3
                  className="
                    text-[28px]
                    font-bold
                    mb-5
                  "
                  style={{
                    color: "white",
                  }}
                >
                  Our Mission
                </h3>

                <p
                  className="
                    text-[15px]
                    leading-8
                  "
                  style={{
                    color: "rgba(255,255,255,0.70)",
                  }}
                >
                  To provide secure, transparent and value-driven real estate
                  opportunities that empower families and investors through
                  trusted developments.
                </p>
              </div>

              {/* VISION */}

              <div
                className="
                  p-8
                  rounded-[30px]
                  border
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                  style={{
                    background: "rgba(200,169,107,0.12)",
                    color: "var(--secondary-color)",
                  }}
                >
                  <Eye size={30} />
                </div>

                <h3
                  className="
                    text-[28px]
                    font-bold
                    mb-5
                  "
                  style={{
                    color: "white",
                  }}
                >
                  Our Vision
                </h3>

                <p
                  className="
                    text-[15px]
                    leading-8
                  "
                  style={{
                    color: "rgba(255,255,255,0.70)",
                  }}
                >
                  To become one of India's most trusted real estate brands by
                  developing premium communities and future-ready living
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================
          WHY CHOOSE US
      ================================== */}

      <section className="section-padding border-t border-white/10">
        <div className="container-custom">
          <div className="text-center max-w-[850px] mx-auto mb-16">
            <p className="section-subtitle mb-5">WHY CHOOSE US</p>

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
              Why Investors Trust Ujjwal Bhoomi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <BadgeCheck size={28} />,
                title: "Verified Documentation",
              },

              {
                icon: <MapPin size={28} />,
                title: "Prime Locations",
              },

              {
                icon: <TrendingUp size={28} />,
                title: "Future Growth Potential",
              },

              {
                icon: <HeartHandshake size={28} />,
                title: "Dedicated Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  p-8
                  rounded-[30px]
                  border
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                  style={{
                    background: "rgba(200,169,107,0.12)",
                    color: "var(--secondary-color)",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-xl
                    font-semibold
                  "
                  style={{
                    color: "white",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle mb-5">WHY CHOOSE US</p>

            <h2 className="text-[34px] md:text-[50px] font-bold leading-[1.15]">
              Trusted Name In
              <span className="text-[var(--secondary-color)]">
                {" "}
                Real Estate Development
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Verified Projects",
                desc: "All developments backed with clear documentation and legal transparency.",
              },
              {
                title: "Prime Locations",
                desc: "Strategically selected locations with future growth potential.",
              },
              {
                title: "Modern Infrastructure",
                desc: "Roads, drainage, electricity and township planning standards.",
              },
              {
                title: "Customer Support",
                desc: "Dedicated guidance from booking to final registration process.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-[28px]
                  p-7
                  backdrop-blur-xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[var(--secondary-color)]/10
                    text-[var(--secondary-color)]
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <ShieldCheck size={28} />
                </div>

                <h3 className="text-[22px] font-semibold mb-4">{item.title}</h3>

                <p className="text-slate-400 leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECT HIGHLIGHTS ================= */}

      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-5">PROJECT HIGHLIGHTS</p>

              <h2 className="text-[34px] md:text-[50px] font-bold leading-[1.15] mb-8">
                Building Tomorrow’s
                <span className="text-[var(--secondary-color)]">
                  {" "}
                  Premium Communities
                </span>
              </h2>

              <p className="text-slate-400 leading-8 text-[16px] mb-10">
                Ujjwal Bhoomi Real Estate Pvt Ltd focuses on creating premium
                residential plotting projects, modern township developments and
                long-term investment opportunities designed for future growth
                and better living.
              </p>

              <div className="space-y-5">
                {[
                  "Wide Internal Roads",
                  "Green Landscaped Environment",
                  "Secure Gated Development",
                  "Future Growth Potential",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2
                      size={20}
                      className="text-[var(--secondary-color)]"
                    />

                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                rounded-[36px]
                p-10
                backdrop-blur-xl
              "
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["100%", "Verified Land"],
                  ["500+", "Happy Clients"],
                  ["10+", "Projects"],
                  ["24/7", "Support"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-white/5
                      rounded-[24px]
                      p-6
                      text-center
                    "
                  >
                    <h3
                      className="
                        text-[34px]
                        font-bold
                        text-[var(--secondary-color)]
                      "
                    >
                      {item[0]}
                    </h3>

                    <p className="text-slate-400 mt-2">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="section-padding">
        <div className="container-custom">
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              px-8
              py-16
              md:px-16
              md:py-20
            "
            style={{
              background:
                "linear-gradient(135deg,var(--secondary-color),#b8934d)",
            }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="uppercase tracking-[3px] text-white/80 mb-5">
                START YOUR INVESTMENT JOURNEY
              </p>

              <h2
                className="
                  text-[34px]
                  md:text-[56px]
                  font-bold
                  leading-[1.15]
                  text-white
                  mb-6
                "
              >
                Invest Today In Premium Future Developments
              </h2>

              <p className="text-white/85 text-[16px] leading-8 mb-10">
                Explore premium plotting projects and secure your future with
                trusted real estate investment opportunities.
              </p>

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  gap-4
                "
              >
                <button
                  className="
                    bg-white
                    text-[var(--primary-color)]
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                  "
                >
                  View Projects
                </button>

                <button
                  className="
                    border
                    border-white
                    text-white
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                  "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
