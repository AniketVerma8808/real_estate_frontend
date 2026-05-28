import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
    title: "Luxury Township",
    category: "Residential Plots",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    title: "Farm Land",
    category: "Farm Projects",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Plotting",
    category: "Investment Zone",
  },
];

const GalleryCard = ({ item, large = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        ${large ? "h-[600px]" : "h-[286px]"}
      `}
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
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

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(2,6,23,0.95), rgba(2,6,23,0.35), transparent)",
        }}
      />

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
        "
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, rgba(200,169,107,0.15), transparent 80%)",
        }}
      />

      <div
        className="
          absolute
          top-6
          left-6
          px-4
          py-2
          rounded-full
          flex
          items-center
          gap-2
          backdrop-blur-xl
        "
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "white",
        }}
      >
        <ImageIcon size={15} />
        <span className="text-sm">{item.category}</span>
      </div>

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
          gap-5
        "
      >
        <div>
          <p
            className="
              text-[12px]
              uppercase
              tracking-[2px]
              mb-2
            "
            style={{
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Premium Development
          </p>

          <h3
            className="
              text-[24px]
              md:text-[30px]
              font-bold
              leading-tight
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            {item.title}
          </h3>
        </div>

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          className="
            min-w-[56px]
            h-[56px]
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
        </motion.div>
      </div>
    </motion.div>
  );
};

const GalleryPreview = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-28
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      <div
        className="
          absolute
          top-[-100px]
          right-[-100px]
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
        {/* HEADER */}

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
            gap-8
            mb-16
          "
        >
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
                mb-6
              "
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--white-color)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--secondary-color)",
                }}
              />

              Project Gallery
            </div>

            <h2
              className="
                text-[34px]
                sm:text-[42px]
                md:text-[54px]
                font-bold
                leading-[1.08]
                tracking-[-2px]
                max-w-[760px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Explore Our
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                Premium{" "}
              </span>
              Developments
            </h2>
          </div>

          <p
            className="
              max-w-[500px]
              text-[15px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Discover premium plotting projects, township developments,
            farm lands, and investment-ready opportunities designed for
            long-term growth.
          </p>
        </motion.div>

        {/* GALLERY */}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LARGE */}

          <GalleryCard
            item={galleryImages[0]}
            large
          />

          {/* RIGHT */}

          <div className="grid gap-8">
            <GalleryCard item={galleryImages[1]} />

            <GalleryCard item={galleryImages[2]} />
          </div>
        </div>

        {/* BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                px-8
                py-4
                rounded-full
                font-semibold
                flex
                items-center
                gap-3
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              View Full Gallery

              <ArrowUpRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;