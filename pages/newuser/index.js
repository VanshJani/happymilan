import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Carousel() {

  const carouselData = [
    {
      id: 1,
      title: "Add your General Details",
      subtitle: "for better matches",
      buttonText: "Add Details",
    },
    {
      id: 2,
      title: "Complete Your Profile",
      subtitle: "to get accurate results",
      buttonText: "Complete Now",
    },
    {
      id: 3,
      title: "Verify Your Email",
      subtitle: "to stay secure",
      buttonText: "Verify",
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "LEFT") {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "RIGHT") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe support on desktop
  });

  return (
    <div
      {...handlers} // Attach swipe handlers
      className="flex justify-center items-center h-[250px] w-[300px] bg-white border rounded-lg shadow-md"
    >
      {/* Carousel Item */}
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-4 bg-purple-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-purple-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m9 12h1.125c.621 0 1.125-.504 1.125-1.125v-3.375a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v3.375c0 .621.504 1.125 1.125 1.125H15m0 0v-5.25A2.25 2.25 0 0012.75 13.5h-1.5a2.25 2.25 0 00-2.25 2.25V21"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold">
          {carouselData[currentIndex].title}
        </h3>
        <p className="text-sm text-gray-500">{carouselData[currentIndex].subtitle}</p>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-purple-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        {/* Button */}
        <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          {carouselData[currentIndex].buttonText}
        </button>
      </div>
    </div>
  );
}
