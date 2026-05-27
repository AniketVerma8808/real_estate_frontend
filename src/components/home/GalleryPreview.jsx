import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Township",
    size: "large",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Green Landscape",
    size: "small",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
    title: "Luxury Plotting",
    size: "small",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
    title: "Smart Investment Zone",
    size: "large",
  },
];

const GalleryPreview = () => {

  return (

    <section
      className="
        relative
        py-28
        overflow-hidden
      "
      style={{
        background: "var(--background-color)",
      }}
    >

      {/* ======================
          BACKGROUND GLOW
      ====================== */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[300px]
          h-[300px]
          rounded-full
          blur-[140px]
          opacity-10
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">

        {/* ======================
            SECTION HEADER
        ====================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-10
            mb-20
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
                mb-7
              "
              style={{
                borderColor: "rgba(15,23,42,0.08)",
                color: "var(--primary-color)",
                background: "rgba(255,255,255,0.7)",
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

              Project Gallery

            </div>

            <h2
              className="
                text-[40px]
                md:text-[55px]
                leading-[1.1]
                font-bold
                tracking-[-2px]
                max-w-[700px]
              "
              style={{
                color: "var(--primary-color)",
              }}
            >

              Explore Our
              Premium Plotting Projects

            </h2>

          </div>

          {/* RIGHT */}

          <p
            className="
              max-w-[450px]
              text-[16px]
              leading-8
            "
            style={{
              color: "var(--paragraph-color)",
            }}
          >

            Experience thoughtfully designed township
            developments with modern infrastructure,
            greenery, and future-ready investment spaces.

          </p>

        </motion.div>

        {/* ======================
            GALLERY GRID
        ====================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {
            galleryImages.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  ${item.size === "large"
                    ? "h-[600px]"
                    : "h-[420px]"
                  }
                `}
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                  "
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,23,42,0.92), transparent 60%)",
                  }}
                />

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-8
                    flex
                    items-end
                    justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-sm
                        mb-3
                      "
                      style={{
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Premium Development
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-bold
                      "
                      style={{
                        color: "var(--white-color)",
                      }}
                    >

                      {item.title}

                    </h3>

                  </div>

                  {/* BUTTON */}

                  <motion.button
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      w-14
                      h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background: "var(--secondary-color)",
                      color: "white",
                    }}
                  >

                    <ArrowUpRight size={22} />

                  </motion.button>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );

};

export default GalleryPreview;