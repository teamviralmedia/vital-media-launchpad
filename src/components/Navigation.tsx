
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-gray-900">
            <span className="text-green-600">Team</span>ViralMedia
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 rounded-full"
          >
            Get Started
          </Button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-700 transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-700 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-700 transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
