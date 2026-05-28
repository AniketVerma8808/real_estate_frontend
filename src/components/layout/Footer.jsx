import { Link } from "react-router-dom";

import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: "var(--primary-color)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* Glow */}

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          blur-[150px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* TOP */}

        <div
          className="
            py-20
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
          "
        >
          {/* COMPANY */}

          <div>
            <h2
              className="
                text-[30px]
                font-bold
                mb-5
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Ujjwal Bhoomi
            </h2>

            <p
              className="
                text-[15px]
                leading-8
                max-w-[320px]
              "
              style={{
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Premium plotting projects, township developments, and secure
              investment opportunities designed for long-term growth and
              future-ready living.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div
                  key={index}
                  className="
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      transition-all
                      duration-300
                    "
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--white-color)",
                  }}
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3
              className="
                text-xl
                font-semibold
                mb-6
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {["Home", "About", "Projects", "Gallery", "Blogs", "Contact"].map(
                (item, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="
                    transition-all
                    duration-300
                    hover:translate-x-1
                  "
                    style={{
                      color: "rgba(255,255,255,0.68)",
                    }}
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* PROJECTS */}

          <div>
            <h3
              className="
                text-xl
                font-semibold
                mb-6
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Projects
            </h3>

            <div className="flex flex-col gap-4">
              {[
                "Residential Plots",
                "Township Projects",
                "Farm Land",
                "Investment Zones",
                "Commercial Plots",
              ].map((item, index) => (
                <span
                  key={index}
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h3
              className="
                text-xl
                font-semibold
                mb-6
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <Phone size={18} color="var(--secondary-color)" />

                <span
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-4">
                <Mail size={18} color="var(--secondary-color)" />

                <span
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  info@ujjwalbhoomi.com
                </span>
              </div>

              <div className="flex gap-4">
                <MapPin size={18} color="var(--secondary-color)" />

                <span
                  style={{
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  Lucknow, Uttar Pradesh, India
                </span>
              </div>
            </div>

            {/* CTA */}

            <button
              className="
                mt-8
                flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                font-semibold
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              Enquire Now
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
    py-6
    border-t
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    gap-4
  "
          style={{
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
            }}
          >
            © 2026 Ujjwal Bhoomi Real Estate. All Rights Reserved.
          </p>

          <a
            href="https://ankora-technologies.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
      transition-all
      duration-300
      hover:opacity-100
    "
            style={{
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Designed & Developed By
            <span
              className="ml-1 font-medium"
              style={{
                color: "var(--secondary-color)",
              }}
            >
              Ankora Technologies
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
