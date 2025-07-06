
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
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-8 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-8 left-1/3 w-4 h-4 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[slide-right_3s_ease-in-out_infinite]"></div>
              
              {/* Main play button with animation */}
              <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                <div className="text-8xl font-bold animate-pulse">▶</div>
                <div className="absolute inset-0 rounded-full border-4 border-white/30 scale-150 animate-ping"></div>
              </div>
              
              {/* Floating text */}
              <div className="absolute bottom-6 left-6 text-white/80 text-sm font-medium animate-fade-in">
                Watch Our Work
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg">
              ✨
            </div>
            
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-xl animate-pulse shadow-lg">
              🎬
            </div>
            
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-lg animate-bounce shadow-lg" style={{ animationDelay: '1s' }}>
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
