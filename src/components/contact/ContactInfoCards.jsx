import { motion } from "framer-motion";

import { PhoneCall, Mail, MapPin, Clock3 } from "lucide-react";

const contactInfo = [
  {
    icon: <PhoneCall size={30} />,
    title: "Call Us",
    value: "+91 98765 43210",
    desc: "Speak directly with our property consultants.",
  },

  {
    icon: <Mail size={30} />,
    title: "Email Us",
    value: "info@ujjwalbhoomi.com",
    desc: "Send your queries anytime via email.",
  },

  {
    icon: <MapPin size={30} />,
    title: "Visit Office",
    value: "Kanpur, Uttar Pradesh",
    desc: "Meet our team and explore opportunities.",
  },

  {
    icon: <Clock3 size={30} />,
    title: "Working Hours",
    value: "Mon - Sat : 9AM - 7PM",
    desc: "Available for consultation and support.",
  },
];

const ContactInfoCards = () => {
  return (
    <section
      className="section-padding"
      style={{
        background: "var(--primary-color)",
      }}
    >
      <div className="container-custom">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            max-w-[700px]
            mx-auto
            mb-16
          "
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
              mb-6
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
            Contact Information
          </div>

          <h2
            className="
              text-[34px]
              md:text-[52px]
              font-bold
              leading-[1.15]
              tracking-[-2px]
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            Let's Connect &
            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              Start The Conversation
            </span>
          </h2>

          <p
            className="
              mt-6
              text-[15px]
              md:text-[16px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Reach out through any of the channels below. Our team is always
            ready to assist you with property investments and project inquiries.
          </p>
        </motion.div>

        {/* INFO CARDS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                p-8
                group
              "
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
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
                  w-[70px]
                  h-[70px]
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-7
                "
                style={{
                  background: "rgba(200,169,107,0.12)",
                  color: "var(--secondary-color)",
                }}
              >
                {item.icon}
              </div>

              {/* TITLE */}

              <h3
                className="
                  relative
                  z-10
                  text-[24px]
                  font-bold
                  mb-3
                "
                style={{
                  color: "var(--white-color)",
                }}
              >
                {item.title}
              </h3>

              {/* VALUE */}

              <p
                className="
                  relative
                  z-10
                  text-[16px]
                  font-medium
                  mb-3
                "
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {item.value}
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  relative
                  z-10
                  text-[15px]
                  leading-7
                "
                style={{
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
