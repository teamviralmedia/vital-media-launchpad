
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50/30 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Content Creation Specialists
          </div>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight">
              <span className="block text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                TEAM
              </span>
              <span className="block relative">
                VITAL
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full transform scale-x-0 animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left"></div>
              </span>
              <span className="block text-green-600 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                MEDIA
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl leading-relaxed font-light">
            Helping entrepreneurs build 
            <span className="font-semibold text-gray-900"> profitable personal brands</span> 
            <br />through short-form content.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-500 font-medium">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50M+</div>
              <div className="text-sm text-gray-500 font-medium">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-sm text-gray-500 font-medium">Client Satisfaction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold group"
            >
              Work With Us
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              View Portfolio
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            {/* Main image container */}
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-green-100 to-green-50 rounded-3xl flex items-center justify-center border border-green-200/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-200/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-300/20 rounded-full"></div>
              
              <img 
                src="/lovable-uploads/b4b9e609-4461-4a8e-98f6-a8fb2e070494.png" 
                alt="TeamVitalMedia Profile" 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
              <span className="text-2xl">🎬</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-xl shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-xl">✨</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
