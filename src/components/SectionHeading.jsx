import React from "react";
import { motion } from "framer-motion";
import PartnershipBadge from "./PartnershipBadge";

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <div className="mb-4">
          <PartnershipBadge text={badge} icon={badgeIcon} />
        </div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4"
      >
        {title}{" "}
        {highlight && (
          <span className="text-gradient-blue inline-block">{highlight}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
