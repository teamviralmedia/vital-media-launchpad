
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="text-green-600">TEAM</span>
            <span className="block">VITAL</span>
            <span className="text-green-600">MEDIA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
            Helping entrepreneurs build profitable personal brands through short-form content.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Work With Us
          </Button>
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <div className="w-80 h-80 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-200 shadow-2xl">
            <img 
              src="/lovable-uploads/b4b9e609-4461-4a8e-98f6-a8fb2e070494.png" 
              alt="TeamVitalMedia Profile" 
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
