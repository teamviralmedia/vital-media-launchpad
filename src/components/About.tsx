
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            about
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            We help Coaches/Consultants, SaaS & Tech Founders build profitable personal brands through short-form content.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            As college dropouts, we gained invaluable hands-on experience working with two marketing agencies, 
            where we developed real-world skills that can't be taught in classrooms.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our approach is content-driven, results-focused, and built on a deep understanding of personal 
            brand growth in today's digital landscape. We turn your expertise into engaging content that 
            converts followers into customers.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Real-World Experience
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Content-Driven Results
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Personal Brand Growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
