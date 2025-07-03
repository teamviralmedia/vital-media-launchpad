
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          gallery
        </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-12"></div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 md:p-16 shadow-lg">
          <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="text-4xl text-green-600">🚀</div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Coming Soon
          </h3>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            See how we've helped brands grow their audience and conversions through 
            compelling short-form content that drives real results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Sample Project 1</span>
              </div>
              <p className="text-sm text-gray-600">Client testimonials coming soon</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Sample Project 2</span>
              </div>
              <p className="text-sm text-gray-600">Success stories coming soon</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Sample Project 3</span>
              </div>
              <p className="text-sm text-gray-600">Case studies coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
