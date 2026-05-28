import { motion } from "framer-motion";

import { CheckCircle2, ShieldCheck, BadgeCheck, PhoneCall } from "lucide-react";

const benefits = [
  "100% Response Guarantee",
  "Free Property Consultation",
  "Verified Project Guidance",
  "Investment Assistance",
];

const ContactFormSection = () => {
  return (
    <section
      className="section-padding"
      style={{
        background: "var(--primary-color)",
      }}
    >
      <div className="container-custom">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            xl:gap-20
            items-center
          "
        >
          {/* ======================
              LEFT CONTENT
          ====================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />
              Get In Touch
            </div>

            <h2
              className="
                text-[36px]
                md:text-[52px]
                font-bold
                leading-[1.12]
                tracking-[-2px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Let's Discuss Your
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Investment Goals
              </span>
            </h2>

            <p
              className="
                mt-7
                text-[15px]
                md:text-[16px]
                leading-8
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Whether you're looking for a premium plot, township investment, or
              future-ready property opportunity, our experts are here to guide
              you through every step.
            </p>

            {/* BENEFITS */}

            <div className="space-y-5 mt-10">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <CheckCircle2
                    size={20}
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  />

                  <span
                    style={{
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* TRUST CARDS */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-5
                mt-12
              "
            >
              <div
                className="
                  p-6
                  rounded-[24px]
                  border
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <ShieldCheck
                  size={32}
                  style={{
                    color: "var(--secondary-color)",
                  }}
                />

                <h4
                  className="
                    text-xl
                    font-semibold
                    mt-4
                    mb-2
                  "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  Verified Projects
                </h4>

                <p
                  className="text-sm leading-7"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  Transparent documentation and secure investment opportunities.
                </p>
              </div>

              <div
                className="
                  p-6
                  rounded-[24px]
                  border
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <BadgeCheck
                  size={32}
                  style={{
                    color: "var(--secondary-color)",
                  }}
                />

                <h4
                  className="
                    text-xl
                    font-semibold
                    mt-4
                    mb-2
                  "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  Trusted Guidance
                </h4>

                <p
                  className="text-sm leading-7"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  Professional support from inquiry to final booking.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ======================
              CONTACT FORM
          ====================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
                backdropFilter: "blur(20px)",
              }}
            >
              <h3
                className="
                  text-[30px]
                  font-bold
                  mb-3
                "
                style={{
                  color: "var(--white-color)",
                }}
              >
                Send Inquiry
              </h3>

              <p
                className="mb-8"
                style={{
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Fill out the form and our team will contact you shortly.
              </p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      outline-none
                    "
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      outline-none
                    "
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "white",
                    }}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    outline-none
                  "
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                  }}
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    outline-none
                  "
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                  }}
                />

                <textarea
                  rows="5"
                  placeholder="Write Your Message..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    outline-none
                    resize-none
                  "
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                  }}
                />

                <button
                  type="submit"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    py-4
                    rounded-full
                    font-semibold
                    transition-all
                    duration-300
                  "
                  style={{
                    background: "var(--secondary-color)",
                    color: "#fff",
                  }}
                >
                  <PhoneCall size={18} />
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
