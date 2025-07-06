import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, User, Building } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      message: '',
    });
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const offices = [
    {
      name: 'Jakarta Head Office',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
      phone: '(021) 555-0123',
      email: 'jakarta@mitramediadata.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
    {
      name: 'Surabaya Office',
      address: 'Jl. Pemuda No. 456, Surabaya 60271',
      phone: '(031) 555-0456',
      email: 'surabaya@mitramediadata.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
    {
      name: 'Bandung Office',
      address: 'Jl. Asia Afrika No. 789, Bandung 40111',
      phone: '(022) 555-0789',
      email: 'bandung@mitramediadata.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
  ];

  const supportChannels = [
    {
      name: 'Customer Service',
      description: 'General inquiries and account support',
      contact: '(021) 555-0123',
      email: 'support@mitramediadata.com',
      hours: '24/7',
      icon: Phone,
    },
    {
      name: 'Technical Support',
      description: 'Technical issues and troubleshooting',
      contact: '(021) 555-0124',
      email: 'tech@mitramediadata.com',
      hours: '24/7',
      icon: MessageSquare,
    },
    {
      name: 'Sales Team',
      description: 'New service inquiries and quotes',
      contact: '(021) 555-0125',
      email: 'sales@mitramediadata.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      icon: User,
    },
    {
      name: 'Business Solutions',
      description: 'Enterprise and corporate services',
      contact: '(021) 555-0126',
      email: 'business@mitramediadata.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      icon: Building,
    },
  ];

  return (
    <div className="pt-16 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              Get in touch with our team for any questions about our services,
              technical support, or to request a quote for your internet needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="(021) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Internet</option>
                    <option value="business">Business Internet</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your internet needs or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're here to help! Contact us through any of these channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">Customer Service: (021) 555-0123</p>
                    <p className="text-gray-600 dark:text-gray-300">Technical Support: (021) 555-0124</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@mitramediadata.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@mitramediadata.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Jl. Sudirman No. 123<br />
                      Jakarta Pusat 10110<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Support Channels
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center transition-colors duration-200">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                  <channel.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{channel.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{channel.contact}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{channel.email}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{channel.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit us at any of our office locations across Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 transition-colors duration-200">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{office.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-1" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{office.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{office.email}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{office.hours}</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay connected with us on social media for updates and support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="#"
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Facebook</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Follow for updates</p>
            </a>

            <a
              href="#"
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Twitter</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Latest news</p>
            </a>

            <a
              href="#"
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">LinkedIn</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Business updates</p>
            </a>

            <a
              href="#"
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Instagram</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Behind the scenes</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;