import {
  Eye,
  Landmark,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import React from "react";
const features = [
  { icon: <ShieldCheck size={24} />, title: "Verified Projects" },
  { icon: <MapPin size={24} />, title: "Prime Locations" },
  { icon: <Users size={24} />, title: "Customer Focused" },
  { icon: <Landmark size={24} />, title: "Legal Compliance" },
];
const CompanyOverview = () => {
  return (
    <section
      className=" relative py-20 md:py-24 border-t "
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {" "}
      <div className="container-custom">
        {" "}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {" "}
          {/* LEFT CONTENT */}{" "}
          <div>
            {" "}
            <p className="section-subtitle mb-5"> COMPANY OVERVIEW </p>{" "}
            <h2
              className=" text-[34px] md:text-[52px] leading-[1.15] font-bold mb-7 "
              style={{ color: "var(--white-color)" }}
            >
              {" "}
              Creating Trust Through Premium Real Estate Developments{" "}
            </h2>{" "}
            <p
              className=" text-[16px] leading-8 mb-6 "
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              {" "}
              Ujjwal Bhoomi Real Estate Pvt Ltd focuses on developing premium
              residential plotting projects, investment opportunities, and
              future-ready township developments designed for sustainable
              growth.{" "}
            </p>{" "}
            <p
              className=" text-[16px] leading-8 "
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              {" "}
              Our commitment to transparency, legal compliance, customer
              satisfaction, and quality infrastructure helps us build long-term
              relationships with home buyers and investors alike.{" "}
            </p>{" "}
            {/* FEATURES */}{" "}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {" "}
              {features.map((item, index) => (
                <div
                  key={index}
                  className=" p-5 rounded-[24px] border transition-all duration-300 hover:-translate-y-1 "
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {" "}
                  <div
                    className=" w-12 h-12 rounded-xl flex items-center justify-center mb-4 "
                    style={{
                      background: "rgba(200,169,107,0.12)",
                      color: "var(--secondary-color)",
                    }}
                  >
                    {" "}
                    {item.icon}{" "}
                  </div>{" "}
                  <h4
                    className="text-[18px] font-semibold"
                    style={{ color: "white" }}
                  >
                    {" "}
                    {item.title}{" "}
                  </h4>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* RIGHT CONTENT */}{" "}
          <div className="grid gap-6">
            {" "}
            {/* MISSION */}{" "}
            <div
              className=" p-7 md:p-8 rounded-[30px] border "
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {" "}
              <div
                className=" w-16 h-16 rounded-2xl flex items-center justify-center mb-6 "
                style={{
                  background: "rgba(200,169,107,0.12)",
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                <Target size={30} />{" "}
              </div>{" "}
              <h3
                className=" text-[28px] font-bold mb-5 "
                style={{ color: "white" }}
              >
                {" "}
                Our Mission{" "}
              </h3>{" "}
              <p
                className=" text-[15px] leading-8 "
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                {" "}
                To provide secure, transparent and value-driven real estate
                opportunities that empower families and investors through
                trusted developments.{" "}
              </p>{" "}
            </div>{" "}
            {/* VISION */}{" "}
            <div
              className=" p-7 md:p-8 rounded-[30px] border "
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {" "}
              <div
                className=" w-16 h-16 rounded-2xl flex items-center justify-center mb-6 "
                style={{
                  background: "rgba(200,169,107,0.12)",
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                <Eye size={30} />{" "}
              </div>{" "}
              <h3
                className=" text-[28px] font-bold mb-5 "
                style={{ color: "white" }}
              >
                {" "}
                Our Vision{" "}
              </h3>{" "}
              <p
                className=" text-[15px] leading-8 "
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                {" "}
                To become one of India's most trusted real estate brands by
                developing premium communities and future-ready living
                environments.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default CompanyOverview;
