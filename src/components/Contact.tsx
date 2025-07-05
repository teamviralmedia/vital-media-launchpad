import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_0qbx758', // Service ID
        'template_kjlfy98', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'TeamVitalMedia',
        },
        'LK1I6dNw5bnuf5gNJ' // Public Key
      );

      console.log('EmailJS result:', result);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your personal brand with powerful short-form content? 
            Let's discuss how we can help you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">hello@teamvitalmedia.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+91 9863857150</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">💬</span>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-300">+91 9863857150</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-green-400">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white font-bold">IG</span>
                </div>
                <div className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white font-bold">LI</span>
                </div>
                <div className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white font-bold">YT</span>
                </div>
                <div className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white font-bold">TT</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                  required
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your project..." 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-32" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
