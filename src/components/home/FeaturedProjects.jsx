import { motion } from "framer-motion";

import { MoveRight, MapPin, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const projects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
    title: "Green Valley Plots",
    location: "Lucknow Sultanpur Highway",
    price: "₹12 Lakhs",
    type: "Residential Plots",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Nature Farm Lands",
    location: "Raebareli Road, Lucknow",
    price: "₹8 Lakhs",
    type: "Farm Land",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
    title: "Highway Smart City",
    location: "Ayodhya Highway",
    price: "₹15 Lakhs",
    type: "Township Plots",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
    title: "Golden Investment Zone",
    location: "Kanpur Road, Lucknow",
    price: "₹18 Lakhs",
    type: "Commercial Plots",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      className="py-28 relative overflow-hidden"
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
          top-0
          left-0
          w-[300px]
          h-[300px]
          rounded-full
          blur-[120px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      {/* ======================
          HEADER
      ====================== */}

      <div className="container-custom relative z-10">
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
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--white-color)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />
              Featured Plotting Projects
            </div>

            <h2
              className="

text-[30px]
sm:text-[36px]
md:text-[44px]
lg:text-[52px]
              leading-[1.1]
                font-bold
                tracking-[-2px]
                max-w-[700px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Premium Plotting & Investment Opportunities
            </h2>
          </div>

          {/* RIGHT */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              font-semibold
              w-fit
            "
            style={{
              background: "var(--secondary-color)",
              color: "white",
            }}
          >
            View All Projects
            <MoveRight size={20} />
          </motion.button>
        </motion.div>

        {/* ======================
            PROJECT SLIDER
        ====================== */}

        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                whileHover={{
                  y: -12,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                    group
                    overflow-hidden
                    rounded-[30px]
                    border
                    backdrop-blur-xl
                  "
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {/* IMAGE */}

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                        h-[320px]
                        w-full
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
                        "linear-gradient(to top, rgba(15,23,42,0.95), transparent)",
                    }}
                  />

                  {/* TYPE */}

                  <div
                    className="
                        absolute
                        top-5
                        left-5
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                      "
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                    }}
                  >
                    {project.type}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-7">
                  {/* LOCATION */}

                  <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        mb-4
                      "
                    style={{
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    <MapPin size={16} />

                    {project.location}
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                        text-[24px]
                        md:text-[28px]
                        font-bold
                        leading-tight
                      "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* PRICE */}

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p
                        className="text-sm"
                        style={{
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        Starting Price
                      </p>

                      <h4
                        className="text-2xl font-bold mt-1"
                        style={{
                          color: "var(--secondary-color)",
                        }}
                      >
                        {project.price}
                      </h4>
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
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProjects;
