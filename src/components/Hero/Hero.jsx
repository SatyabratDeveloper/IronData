import BgImage from "../../assets/images/5.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-68px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="-z-10">
        <img
          src={BgImage}
          alt="High-performance secure data center infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="flex flex-col justify-center items-center w-full px-6 sm:px-10 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 bg-white/50 text-gray-900 text-center backdrop-blur-md rounded-lg mx-4 max-w-5xl space-y-5 sm:space-y-6">
        <div className="space-y-2 text-3xl sm:text-4xl md:text-5xl leading-tight">
          <h1 className="font-bold">Secure. Reliable. Scalable.</h1>
          <h2 className="font-semibold">Data Center Solutions</h2>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 max-w-3xl">
          Your Colocation Partner in Digital Resilience — Where Fortified
          Infrastructure Meets Strategic Investment.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
          Engineered for high-performance computing, enterprise-grade security,
          and uninterrupted connectivity.
        </p>

        <Button asChild variant="secondary" size="lg" className="mt-4">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
