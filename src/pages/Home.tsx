import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Shield, Clock, Users, Star, ArrowRight, Check } from 'lucide-react';

const Home: React.FC = () => {
  const packages = [
    {
      name: 'Home Basic',
      speed: '25 Mbps',
      price: 'Rp 299,000',
      features: ['Unlimited Usage', '24/7 Support', 'Free Installation', 'WiFi Router Included'],
      popular: false,
    },
    {
      name: 'Home Pro',
      speed: '50 Mbps',
      price: 'Rp 499,000',
      features: ['Unlimited Usage', '24/7 Support', 'Free Installation', 'WiFi Router Included', 'Priority Support'],
      popular: true,
    },
    {
      name: 'Business',
      speed: '100 Mbps',
      price: 'Rp 899,000',
      features: ['Unlimited Usage', '24/7 Support', 'Free Installation', 'Enterprise Router', 'SLA Guarantee', 'Dedicated Support'],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Ahmad Wijaya',
      company: 'Tech Startup',
      content: 'Excellent service and lightning-fast internet. Our business productivity has increased significantly.',
      rating: 5,
    },
    {
      name: 'Sari Indah',
      company: 'Home User',
      content: 'Reliable connection for work from home. Customer service is always helpful and responsive.',
      rating: 5,
    },
    {
      name: 'PT. Global Solutions',
      company: 'Corporate',
      content: 'Professional service with excellent uptime. Their business packages are perfect for our needs.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Connect to the Future with
                <span className="text-blue-300 dark:text-blue-200 block">High-Speed Internet</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">
                Experience reliable, ultra-fast internet connectivity that powers your digital life.
                From streaming to business operations, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  View Plans
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors duration-200 text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-20 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="bg-blue-500 dark:bg-blue-400 p-4 rounded-full inline-block mb-4">
                    <Wifi className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">99.9% Uptime</h3>
                  <p className="text-blue-100 dark:text-blue-200">Guaranteed reliable connection</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-blue-100 dark:text-blue-200">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100 dark:text-blue-200">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-blue-100 dark:text-blue-200">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose PT. Mitra Media Data?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We deliver more than just internet - we provide a complete connectivity solution
              that empowers your digital lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Wifi className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">High-Speed Internet</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ultra-fast fiber optic connections up to 1 Gbps for seamless browsing and streaming.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Reliable & Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                99.9% uptime guarantee with advanced security features to protect your data.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Round-the-clock customer support and technical assistance whenever you need it.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Trusted by Thousands</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Over 50,000 satisfied customers trust us for their internet connectivity needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From basic home internet to enterprise solutions, we have packages
              designed to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 transition-colors duration-200 ${
                  pkg.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 dark:bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{pkg.speed}</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{pkg.price}</div>
                  <div className="text-gray-600 dark:text-gray-300">/month</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Extensive Network Coverage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our fiber optic network spans across major cities in Indonesia,
              providing reliable connectivity where you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 dark:bg-gray-800 h-96 rounded-2xl flex items-center justify-center transition-colors duration-200">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                    <Wifi className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Interactive Coverage Map</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Real coverage map would be integrated here
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Jakarta</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Surabaya</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Bandung</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Medan</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Semarang</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  <span className="text-gray-900 dark:text-white">Yogyakarta</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our network continues to expand with new coverage areas added regularly.
                Check if your area is covered or will be included in our expansion plans.
              </p>
              <Link
                to="/coverage"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                Check Coverage Area
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
              who trust us for their internet needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 transition-colors duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 dark:text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience Fast, Reliable Internet?
          </h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust PT. Mitra Media Data
            for their internet connectivity needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors duration-200"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;