import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    review:
      "Excellent plotting projects with genuine documentation and premium locations. The entire buying process was smooth and professional.",
  },

  {
    id: 2,
    name: "Amit Singh",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
    review:
      "I invested in their township project and the infrastructure quality exceeded my expectations. Highly recommended for safe investment.",
  },

  {
    id: 3,
    name: "Priya Sharma",
    role: "Home Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    review:
      "Very transparent team with premium project planning. The environment, roads, and amenities are truly impressive.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[280px]
          h-[280px]
          rounded-full
          blur-[130px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-center
            max-w-[800px]
            mx-auto
            mb-16
          "
        >
          {/* TAG */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              mb-7
            "
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
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
            Client Reviews
          </div>

          {/* TITLE */}

          <h2
            className="
              text-[34px]
              md:text-[50px]
              leading-[1.1]
              font-bold
              tracking-[-2px]
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            Trusted By Plot Buyers
            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              Across India
            </span>
          </h2>

          {/* RATING */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mt-6
            "
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  style={{
                    color: "var(--secondary-color)",
                  }}
                />
              ))}
            </div>

            <span
              className="text-sm"
              style={{
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Rated 4.9/5 by 500+ happy clients
            </span>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              text-[15px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Real experiences from investors and plot buyers who trusted us for
            secure investments and premium township developments.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                relative
                p-6
                md:p-7
                rounded-[28px]
                border
                overflow-hidden
                group
              "
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* GLOW */}

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
                    "radial-gradient(circle at top left, rgba(200,169,107,0.15), transparent 65%)",
                }}
              />

              {/* QUOTE ICON */}

              <Quote
                size={28}
                className="relative z-10 mb-5"
                style={{
                  color: "var(--secondary-color)",
                }}
              />

              {/* STARS */}

              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  />
                ))}
              </div>

              {/* REVIEW */}

              <p
                className="
                  relative
                  z-10
                  mt-5
                  text-[15px]
                  leading-7
                "
                style={{
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                "{item.review}"
              </p>

              {/* USER */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-4
                  mt-8
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h4
                    className="
                      text-[18px]
                      font-semibold
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    {item.name}
                  </h4>

                  <p
                    className="text-sm mt-1"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
