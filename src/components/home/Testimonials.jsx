import { motion } from "framer-motion";

import { Star } from "lucide-react";

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
        py-28
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >

      {/* ======================
          BACKGROUND GLOW
      ====================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
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

        {/* ======================
            HEADER
        ====================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-center
            max-w-[850px]
            mx-auto
            mb-20
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
              mb-8
            "
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "var(--white-color)",
              background: "rgba(255,255,255,0.03)",
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

            Client Testimonials

          </div>

          {/* TITLE */}

          <h2
            className="
              text-[40px]
              md:text-[55px]
              leading-[1.1]
              font-bold
              tracking-[-2px]
            "
            style={{
              color: "var(--white-color)",
            }}
          >

            Trusted By Hundreds
            Of Happy Investors

          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              text-[16px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >

            Hear what our clients say about their investment
            journey, project quality, and premium township
            experience with us.

          </p>

        </motion.div>

        {/* ======================
            TESTIMONIAL GRID
        ====================== */}

        <div
          className="
            grid
            lg:grid-cols-3
            gap-8
          "
        >

          {
            testimonials.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  relative
                  p-8
                  rounded-[32px]
                  border
                  overflow-hidden
                  group
                "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >

                {/* HOVER EFFECT */}

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
                      "radial-gradient(circle at top left, rgba(200,169,107,0.18), transparent 60%)",
                  }}
                />

                {/* STARS */}

                <div className="flex items-center gap-1 relative z-10">

                  {
                    [...Array(5)].map((_, i) => (

                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        style={{
                          color: "var(--secondary-color)",
                        }}
                      />

                    ))
                  }

                </div>

                {/* REVIEW */}

                <p
                  className="
                    relative
                    z-10
                    mt-7
                    text-[15px]
                    leading-8
                  "
                  style={{
                    color: "rgba(255,255,255,0.75)",
                  }}
                >

                  “{item.review}”

                </p>

                {/* USER */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                    mt-10
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-16
                      h-16
                      rounded-full
                      object-cover
                    "
                  />

                  <div>

                    <h4
                      className="
                        text-xl
                        font-bold
                      "
                      style={{
                        color: "var(--white-color)",
                      }}
                    >

                      {item.name}

                    </h4>

                    <p
                      className="mt-1 text-sm"
                      style={{
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >

                      {item.role}

                    </p>

                  </div>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );

};

export default Testimonials;