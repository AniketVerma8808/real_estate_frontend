// src/pages/About.jsx

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe2,
  BarChart3,
  ShieldCheck,
  Users2,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={28} />,
    title: "Real Estate Software",
    desc: "Advanced management system for plots, finance, leads and customer operations.",
  },
  {
    icon: <Globe2 size={28} />,
    title: "Dynamic Website",
    desc: "Responsive SEO-friendly website with admin dashboard and modern UI experience.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Digital Branding",
    desc: "Professional social media marketing and digital growth solutions.",
  },
];

const features = [
  "Plot & Customer Management",
  "Lead & Sales Tracking",
  "Finance & Account Management",
  "Responsive Premium UI",
];

const About = () => {
  return (
    <div className="bg-[var(--primary-color)] text-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative section-padding overflow-hidden border-b border-white/10">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[var(--secondary-color)]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[var(--secondary-color)]/10 blur-[120px] rounded-full"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="section-subtitle mb-5">ABOUT COMPANY</p>

              <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[58px] leading-[1.15] font-bold mb-7 max-w-3xl">
                Smart Digital Solutions For Modern Real Estate Businesses
              </h1>

              <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.9] text-slate-400 mb-10 max-w-2xl">
                We create premium real estate software, responsive websites and
                branding solutions that help businesses automate operations,
                generate leads and build a strong digital presence.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="primary-btn flex items-center justify-center gap-2">
                  Explore Services
                  <ArrowRight size={18} />
                </button>

                <button className="secondary-btn">Contact Us</button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
                {[
                  ["120+", "Projects"],
                  ["500+", "Clients"],
                  ["10+", "Experience"],
                  ["24/7", "Support"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 text-center"
                  >
                    <h3 className="text-[28px] md:text-[32px] font-bold text-[var(--secondary-color)]">
                      {item[0]}
                    </h3>

                    <p className="text-[13px] md:text-[14px] text-slate-400 mt-1">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-5 sm:p-7 md:p-8">
                {/* TOP CARD */}
                <div className="bg-[#111827] border border-white/10 rounded-[28px] p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-10">
                    <div>
                      <p className="text-[13px] text-slate-400 uppercase tracking-[2px] mb-3">
                        Premium Solution
                      </p>

                      <h3 className="text-[26px] md:text-[32px] leading-[1.3] font-bold">
                        Real Estate <br /> Management System
                      </h3>
                    </div>

                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[var(--secondary-color)] flex items-center justify-center shrink-0">
                      <Layers3 size={28} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {features.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-2xl px-4 py-5"
                      >
                        <p className="text-[13px] md:text-[14px] text-slate-300 leading-6">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTTOM CARD */}
                <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--secondary-color)]/15 flex items-center justify-center text-[var(--secondary-color)] shrink-0">
                      <BadgeCheck size={26} />
                    </div>

                    <div>
                      <h4 className="text-[22px] md:text-[24px] font-semibold mb-3">
                        Trusted Technology Partner
                      </h4>

                      <p className="text-[15px] leading-[1.9] text-slate-400">
                        Scalable software solutions with premium UI design and
                        long-term support for business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            {/* LEFT CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* CARD */}
              <div className="bg-white/5 border border-white/10 rounded-[30px] p-7 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)] mb-6">
                  <Building2 size={28} />
                </div>

                <h3 className="text-[22px] font-semibold mb-4">
                  Real Estate CRM
                </h3>

                <p className="text-[15px] leading-[1.9] text-slate-400">
                  Manage plots, customers, leads, attendance and finance from
                  one powerful dashboard.
                </p>
              </div>

              {/* CARD */}
              <div className="bg-[var(--secondary-color)] rounded-[30px] p-7 hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                  <Globe2 size={28} />
                </div>

                <h3 className="text-[22px] font-semibold mb-4">
                  Dynamic Website
                </h3>

                <p className="text-[15px] leading-[1.9] text-white/80">
                  Responsive business website with SEO integration and admin
                  management system.
                </p>
              </div>

              {/* BIG CARD */}
              <div className="sm:col-span-2 bg-white/5 border border-white/10 rounded-[30px] p-7 backdrop-blur-xl">
                <h3 className="text-[28px] md:text-[32px] leading-[1.3] font-bold mb-5">
                  Complete Digital Ecosystem
                </h3>

                <p className="text-[15px] md:text-[16px] leading-[1.9] text-slate-400">
                  We combine premium UI design, automation and scalable
                  technology to help real estate businesses create strong
                  digital branding and seamless management experiences.
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="section-subtitle mb-5">WHY CHOOSE US</p>

              <h2 className="text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.2] font-bold mb-7">
                Premium Solutions Crafted For Business Growth
              </h2>

              <p className="text-[15px] md:text-[17px] leading-[1.9] text-slate-400 mb-10">
                Our digital solutions are designed to simplify workflows,
                improve customer engagement and strengthen your online presence
                with modern technology and premium design.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: <ShieldCheck size={22} />,
                    title: "Secure & Reliable System",
                  },
                  {
                    icon: <Users2 size={22} />,
                    title: "Multi User Login Panels",
                  },
                  {
                    icon: <BarChart3 size={22} />,
                    title: "Advanced Analytics & Reports",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)] shrink-0">
                      {item.icon}
                    </div>

                    <h4 className="text-[17px] md:text-[18px] font-medium">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  "SEO Friendly Website",
                  "Responsive Premium Design",
                  "Lead Management System",
                  "Business Growth Support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[var(--secondary-color)]"
                    />

                    <span className="text-[15px] text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="section-padding border-b border-white/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle mb-5">OUR SERVICES</p>

            <h2 className="text-[32px] sm:text-[38px] md:text-[46px] leading-[1.2] font-bold mb-6">
              Everything You Need In One Platform
            </h2>

            <p className="text-[15px] md:text-[17px] leading-[1.9] text-slate-400">
              Powerful digital solutions crafted with modern UI, scalability and
              performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] p-7 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--secondary-color)]/10 text-[var(--secondary-color)] flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-[22px] font-semibold mb-4">{item.title}</h3>

                <p className="text-[15px] leading-[1.9] text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--secondary-color)] px-6 py-14 sm:px-10 md:px-16 md:py-20">
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="text-white/80 uppercase tracking-[3px] text-[13px] font-semibold mb-5">
                START YOUR DIGITAL JOURNEY
              </p>

              <h2 className="text-[32px] sm:text-[40px] md:text-[52px] leading-[1.2] font-bold text-white mb-6">
                Build Your Premium Digital Presence Today
              </h2>

              <p className="text-[15px] md:text-[17px] leading-[1.9] text-white/80 mb-10">
                Powerful software, modern websites and branding solutions
                designed for long-term business growth.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Get Started
                </button>

                <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300">
                  Talk To Team
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
