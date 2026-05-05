import React, {useState, useEffect} from "react";
import img1 from "../assets/vitaly-gariev-HZwcaAeLs54-unsplash.jpg";
import img2 from "../assets/vitaly-gariev-rG5elqddGzo-unsplash.jpg";
import img3 from "../assets/vitaly-gariev-RqR2pnTpmHA-unsplash.jpg";
import Button from "../Constant/Button";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${images[index]})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center text-center gap-6 px-4 sm:px-6 md:px-12 
    lg:px-20"
      style={bgStyle}
    >
      <h1 className="font-heading text-4xl md:text-6xl text-white font-semibold leading-tight">
        Your companion on your healing
        <span className="block">and wellness journey</span>
      </h1>

      <p className="max-w-xl text-white text-base md:text-lg">
        We provide a safe space to support your mental health, growth, and inner
        peace.
      </p>
      <Button variant="primary">Get Started</Button>
  
    </div>
  );
}
