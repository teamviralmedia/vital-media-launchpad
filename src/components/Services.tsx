
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
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              ▶
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
