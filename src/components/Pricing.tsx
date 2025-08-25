const Pricing = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "₹25,000",
      period: "/month",
      videos: "8 videos/month (2 per week)",
      features: [
        "Basic editing (cuts, captions, simple transitions)",
        "1 Thumbnail per video",
        "Delivery: 48 hours"
      ],
      popular: false,
      gradient: "from-green-400 to-green-500"
    },
    {
      name: "Growth Package", 
      price: "₹50,000",
      period: "/month",
      videos: "20 videos/month (5 per week)",
      features: [
        "Advanced editing (motion graphics, SFX, dynamic captions)",
        "Custom thumbnails",
        "Priority delivery (24–36 hours)"
      ],
      popular: true,
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Authority Package",
      price: "₹90,000", 
      period: "/month",
      videos: "30 videos/month (daily content)",
      features: [
        "High-end editing (storytelling cuts, cinematic effects)",
        "Custom thumbnails",
        "Dedicated editor + designer",
        "Delivery: under 24 hours"
      ],
      popular: false,
      gradient: "from-green-600 to-green-700"
    }
  ];

  const benefits = [
    {
      icon: "👥",
      title: "Dedicated Editors & Designer",
      description: "Your own creative team"
    },
    {
      icon: "⚡",
      title: "High Quality & Fast Delivery", 
      description: "Premium content on time"
    },
    {
      icon: "📈",
      title: "Scalable Packages as You Grow",
      description: "Upgrade as your needs evolve"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TeamViralMedia – Client Packages
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package to scale your content and grow your audience
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-green-500 ring-opacity-50 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <div className="text-2xl text-white">🎬</div>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 text-lg">{pkg.period}</span>
                  </div>
                  <div className="text-green-600 font-semibold text-lg mb-6">
                    {pkg.videos}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${pkg.gradient} hover:shadow-xl text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 transform`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TeamViralMedia?
            </h3>
            <div className="w-16 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Let's make your content go viral 🚀
              </h4>
              <p className="text-gray-700 mb-6">
                Ready to transform your content strategy and reach millions?
              </p>
              <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;