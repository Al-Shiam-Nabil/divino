import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Container from "../UI/Container";

// ১. ডাটা টাইপ ডিফাইন করা
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Graphic & Visual Design",
    description:
      "We create strong visual systems that communicate clearly and consistently.",
    features: [
      "Brand identity & visual guidelines",
      "Marketing visuals & social media design",
      "Print & digital design assets",
    ],
  },
  {
    id: 2,
    title: "Digital & Web Design Support",
    description:
      "We design and support digital experiences that are functional, clean, and user-focused.",
    features: [
      "Website UI/UX design support",
      "Landing pages & web visuals",
      "Ongoing design and content support",
    ],
  },
  {
    id: 3,
    title: "Marketing & Content Production Support",
    description:
      "We help brands communicate better through meaningful content.",
    features: [
      "Marketing visuals and creatives",
      "Content planning & production support",
      "Digital campaign support",
    ],
  },
  {
    id: 4,
    title: "SEO & Website Visibility Support",
    description: "We support the technical and content side of visibility.",
    features: [
      "SEO-related tasks and optimizations",
      "Content structure & on-page support",
      "Website performance & visibility assistance",
    ],
  },
  {
    id: 5,
    title: "Image, Video & Digital Asset Production",
    description: "We produce and manage visual content for digital platforms.",
    features: [
      "Image creation & editing",
      "Video and motion content support",
      "Digital asset preparation for web & marketing",
    ],
  },
];

const ServicesSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full my-20 lg:my-30 bg-white">
      <Container>
        <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* বাম পাশের টেক্সট (স্ক্রিনশট অনুযায়ী) */}
          <div className="lg:w-1/2">
            <p className="text-[24px] md:text-[32px] mt-8 font-medium leading-[1.3] text-[#111111]">
              We build transformative digital experiences for the world's
              leading brands by blending design, content, and technology.
            </p>
          </div>

          {/* ডান পাশের সার্ভিসেস একর্ডিয়ন */}
          <div className="lg:w-1/2 flex flex-col">
            {servicesData.map((service) => (
              <div key={service.id} className="border-b border-gray-100">
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group hover:opacity-70 transition-all cursor-pointer"
                >
                  <span className="text-[24px] md:text-[32px] font-bold text-[#111111] tracking-tight">
                    {service.title}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 md:w-8 md:h-8 text-gray-400 transition-transform duration-300 ${openId === service.id ? "rotate-180" : ""}`}
                  />
                </button>

                {/* কলাপসিবল কন্টেন্ট এরিয়া */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === service.id
                      ? "max-h-[500px] pb-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[18px] md:text-[20px] text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-[16px] md:text-[18px] text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
