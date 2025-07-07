
const Services = () => {
  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                End-to-End Short-Form Video Editing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From script-cutting and motion graphics to subtitles and publishing-ready clips, 
                we handle everything to create content optimized for Instagram Reels, TikTok, 
                and YouTube Shorts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">Script Cutting</div>
                <p className="text-sm text-gray-600">Professional editing</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">Motion Graphics</div>
                <p className="text-sm text-gray-600">Eye-catching visuals</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">Subtitles</div>
                <p className="text-sm text-gray-600">Accessibility focused</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">Publishing Ready</div>
                <p className="text-sm text-gray-600">Platform optimized</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            {/* Main animated container */}
            <div className="w-full h-96 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl flex items-center justify-center text-white shadow-2xl relative overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer">
              
              {/* Video editing timeline bars */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-16 left-8 right-8 h-2 bg-white/40 rounded-full">
                  <div className="h-full w-3/4 bg-white rounded-full animate-[scale-x_2s_ease-in-out_infinite]"></div>
                </div>
                <div className="absolute top-24 left-12 right-16 h-1.5 bg-white/30 rounded-full">
                  <div className="h-full w-1/2 bg-white/80 rounded-full animate-[scale-x_2.5s_ease-in-out_infinite] animation-delay-500"></div>
                </div>
                <div className="absolute top-32 left-6 right-12 h-1.5 bg-white/30 rounded-full">
                  <div className="h-full w-5/6 bg-white/60 rounded-full animate-[scale-x_3s_ease-in-out_infinite] animation-delay-1000"></div>
                </div>
              </div>
              
              {/* Floating motion graphics elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-white rounded-full animate-[spin_4s_linear_infinite]"></div>
                <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-white/40 transform rotate-45 animate-[spin_3s_linear_infinite_reverse]"></div>
                <div className="absolute bottom-1/4 left-1/3 w-4 h-8 bg-white/30 rounded animate-[bounce_2s_infinite] animation-delay-700"></div>
              </div>
              
              {/* Dynamic gradient sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[slide-right_4s_ease-in-out_infinite]"></div>
              
              {/* Central editing interface mockup */}
              <div className="relative z-10 flex flex-col items-center space-y-4">
                {/* Video preview frame */}
                <div className="w-32 h-20 bg-white/20 rounded-lg border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 text-white/80 animate-pulse">▶</div>
                </div>
                
                {/* Editing controls */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="w-8 h-3 bg-white/40 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="w-6 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
                
                {/* Motion graphics indicator */}
                <div className="text-xs text-white/70 font-medium tracking-wider animate-fade-in">
                  MOTION GRAPHICS • VIDEO EDITING
                </div>
              </div>
              
              {/* Corner waveform visualization */}
              <div className="absolute bottom-6 right-6 flex space-x-1 opacity-40">
                <div className="w-1 bg-white animate-[bounce_1s_infinite] h-4"></div>
                <div className="w-1 bg-white animate-[bounce_1s_infinite] h-6 animation-delay-100"></div>
                <div className="w-1 bg-white animate-[bounce_1s_infinite] h-3 animation-delay-200"></div>
                <div className="w-1 bg-white animate-[bounce_1s_infinite] h-8 animation-delay-300"></div>
                <div className="w-1 bg-white animate-[bounce_1s_infinite] h-5 animation-delay-400"></div>
                <div className="w-1 bg-white animate-[bounce_1s_infinite] h-7 animation-delay-500"></div>
              </div>
            </div>
            
            {/* Floating editing tool icons */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg">
              ✂️
            </div>
            
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-xl animate-pulse shadow-lg">
              🎬
            </div>
            
            <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-lg animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
              ⚡
            </div>
            
            <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-sm animate-pulse shadow-lg" style={{ animationDelay: '1.5s' }}>
              🎨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
