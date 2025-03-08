import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import CreateProject from "../UI COMPONENTS/LoginPage";

export default function Page1() {
  return (
    <>
       <h1 className="text-white text-4xl bg-black text-center pt-10 font-bold">Buildin Components</h1>
      <section className="relative w-full min-h flex flex-wrap gap-4 items-start pt-6 justify-center bg-black text-white px-4">
        {/* Navbar / Header */}
     
        {/* Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-gray-900 p-6 rounded-2xl flex flex-col md:flex-row items-center w-full max-w-2xl shadow-lg"
        >
          {/* Product Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-2">
            <img
              src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6d85bb90-62e7-453c-b193-fad7fb02c3c1/NIKE+TERRASCOUT+%28GS%29.png"
              alt="Nike Shoes"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Nike Adapt BB 2.0
              </h2>
              <StarIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            </div>
            <p className="text-gray-400 text-sm mt-1">
              Consistent, customized fit, game-changing.
            </p>
            <div className="flex items-center mt-2">
              <span className="text-lg font-bold text-white">$279.97</span>
              <span className="text-gray-500 line-through mx-2">$350</span>
              <span className="text-green-400 text-sm">20% off</span>
            </div>

            {/* Sizes */}
            <div className="flex space-x-2 mt-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 bg-gray-800 rounded-md text-white text-sm cursor-pointer"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
                Buy now
              </button>
              <button className="border border-blue-600 px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition">
                Add to bag
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-900 rounded-xl text-green-400 text-sm w-full max-w-lg shadow-lg"
        >
          <pre className="whitespace-pre-wrap">
            {`

module.exports = {
  plugins: [
    webbyui({
     bootstrap,
     tailwindCss
    }),
  ],
};`}
          </pre>
        </motion.div>

        <h1 className="text-4xl text-center font-bold mt-16">Just Copy And Paste</h1>
      </section>
    </>
  );
}
