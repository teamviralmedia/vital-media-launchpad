
const Portfolio = () => {
  const videos = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/rGJE79C9pPU",
      title: "Short Video 1"
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/3UZsG7QwHG4",
      title: "Short Video 2"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/efsOerrZbjo",
      title: "Short Video 3"
    },
    {
      id: 4,
      embedUrl: "https://www.youtube.com/embed/EyUy6d2Qih8",
      title: "Short Video 4"
    },
    {
      id: 5,
      embedUrl: "https://www.youtube.com/embed/-QTgRj_nf5s",
      title: "Short Video 5"
    },
    {
      id: 6,
      embedUrl: "https://www.youtube.com/embed/A7XYiASNxnY",
      title: "Short Video 6"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            gallery
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped brands grow their audience and conversions through 
            compelling short-form content that drives real results.
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Video Container with 9:16 aspect ratio */}
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="absolute inset-0 w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Short-form Content</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl text-green-600">🚀</div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Next Viral Video?
            </h3>
            <p className="text-gray-700 mb-6">
              Let's work together to build your personal brand through compelling short-form content.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
