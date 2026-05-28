import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactMapSection = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        border-t
        border-white/10
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
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

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* ================= LEFT - MAP ================= */}
          <div
            className="
              relative
              rounded-[32px]
              overflow-hidden
              border
              backdrop-blur-xl
            "
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
              className="w-full h-[420px] md:h-[520px]"
              loading="lazy"
            ></iframe>

            {/* FLOATING PIN */}
            <div
              className="
                absolute
                top-6
                left-6
                animate-bounce
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                backdrop-blur-xl
                border
              "
              style={{
                background: "rgba(0,0,0,0.4)",
                borderColor: "rgba(255,255,255,0.1)",
                color: "white",
              }}
            >
              <MapPin size={16} color="var(--secondary-color)" />
              Our Location
            </div>
          </div>

          {/* ================= RIGHT - INFO ================= */}
          <div>
            <p className="section-subtitle mb-5">FIND US</p>

            <h2
              className="
                text-[34px]
                md:text-[52px]
                font-bold
                leading-[1.15]
                mb-6
              "
              style={{
                color: "white",
              }}
            >
              Visit Our Office For
              <span style={{ color: "var(--secondary-color)" }}>
                {" "}
                Personal Consultation
              </span>
            </h2>

            <p
              className="
                text-[16px]
                leading-8
                mb-10
              "
              style={{
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Meet our real estate experts in person for project details,
              investment guidance, and site visit planning.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-5">
              {/* ADDRESS */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  p-5
                  rounded-[22px]
                  border
                  backdrop-blur-xl
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <MapPin className="text-[var(--secondary-color)]" />
                <div>
                  <h4 className="text-white font-semibold">Office Address</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  p-5
                  rounded-[22px]
                  border
                  backdrop-blur-xl
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Phone className="text-[var(--secondary-color)]" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-slate-400 text-sm mt-1">+91 98765 43210</p>
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  p-5
                  rounded-[22px]
                  border
                  backdrop-blur-xl
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Mail className="text-[var(--secondary-color)]" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    info@ujjwalbhoomi.com
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                  p-5
                  rounded-[22px]
                  border
                  backdrop-blur-xl
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Clock className="text-[var(--secondary-color)]" />
                <div>
                  <h4 className="text-white font-semibold">Working Hours</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Mon - Sat: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
