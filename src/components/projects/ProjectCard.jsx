import { motion } from "framer-motion";

import { MapPin, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
      "
      style={{
        background: "rgba(255,255,255,0.04)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* IMAGE */}

      <div className="relative h-[320px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
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
              "linear-gradient(to top, rgba(15,23,42,0.95), rgba(15,23,42,0.1))",
          }}
        />

        {/* STATUS */}

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
            background: "var(--secondary-color)",
            color: "white",
          }}
        >
          {project.status}
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-7">
        <p
          className="
            text-sm
            uppercase
            tracking-[2px]
          "
          style={{
            color: "var(--secondary-color)",
          }}
        >
          {project.type}
        </p>

        <h3
          className="
            mt-3
            text-[28px]
            font-bold
            leading-tight
          "
          style={{
            color: "var(--white-color)",
          }}
        >
          {project.title}
        </h3>

        <div
          className="
            flex
            items-center
            gap-2
            mt-4
          "
        >
          <MapPin
            size={18}
            style={{
              color: "var(--secondary-color)",
            }}
          />

          <span
            style={{
              color: "rgba(255,255,255,0.68)",
            }}
          >
            {project.location}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h4
            className="
              text-[22px]
              font-bold
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            {project.price}
          </h4>

          <motion.button
            whileHover={{
              rotate: 45,
            }}
            className="
              w-12
              h-12
              rounded-full
              flex
              items-center
              justify-center
            "
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "var(--secondary-color)",
            }}
          >
            <ArrowUpRight size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
