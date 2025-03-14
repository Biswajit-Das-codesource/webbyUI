import { FaArrowRight } from "react-icons/fa";
import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";
import GradientText from "../blocks/TextAnimations/GradientText/GradientText";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function HeroSection() {
  const items = [
    {
      user: "@pratik",
      text: "Create a leaderboard in Redis and add some seed data to it.",
      color: "text-red-400",
    },
    {
      user: "@atharv",
      text: "Fetch federal rates for last 20 years and visualize it.",
      color: "text-yellow-400",
    },
    {
      user: "@max",
      text: "Create a Twitter clone and insert 100 tweets into it.",
      color: "text-blue-400",
    },
    {
      user: "@sam",
      text: "Build an AI chatbot with OpenAI and Firebase.",
      color: "text-green-400",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-gray-950 text-white text-center px-4">
      {/* Top Badge */}
      <div className="bg-gray-800 text-gray-300 text-sm px-4 py-1 rounded-full flex items-center space-x-2 mb-4 mt-18">
        <span>🚀 Introducing  WebbyUI</span>
        <FaArrowRight className="text-xs" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-100 mt-2">
        <TrueFocus
          sentence="Make beautiful websites"
          manualMode={false}
          blurAmount={1}
          borderColor="aqua"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        regardless of your design experience.
      </h1>
      {/* <SplashCursor /> */}
      {/* Subtitle */}

      <p className="text-gray-400 mt-6 max-w-2xl text-[1rem]">
        <GradientText
          colors={["#40ffba", "#fff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={100}
          showBorder={false}
          className="custom-class"
        >
          Beautiful, fast and modern HTML,CSS,React UI library for building
          accessible and customizable web applications.
        </GradientText>
      </p>

      {/* Buttons */}
      <div className="mt-12 flex space-x-4 ">
        <button className="bg-white text-black px-4 py-3 rounded-3xl cursor-pointer text-base flex items-center space-x-2 shadow-lg font-medium">
         <Link to="/components/accordion"> <span>Browse Components</span> </Link>
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-6 flex space-x-6 text-4xl">
        <SiReact className="text-blue-400" />
        <SiTypescript className="text-white bg-gray-900 p-1 rounded" />
        <SiTailwindcss className="text-blue-300" />
      </div>

      {/* Floating Cards (Dummy Content) */}
      <div className="relative w-full overflow-hidden mt-8">
        <motion.div
          className="flex space-x-4"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed
            repeat: Infinity,
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-4 rounded-xl min-w-[280px] flex flex-col items-start"
            >
              <span className={`${item.color}`}>{item.user}</span>
              <p className="text-gray-300 mt-1">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech Icons */}
    </section>
  );
}
