import React from 'react';
import { Check, Wifi, Building, Home, Shield, Clock, Users, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const residentialPlans = [
    {
      name: 'Home Starter',
      speed: '15 Mbps',
      price: 'Rp 199,000',
      features: ['Unlimited Data', 'WiFi Router', 'Free Installation', 'Email Support'],
      ideal: 'Light browsing, email, social media',
    },
    {
      name: 'Home Basic',
      speed: '25 Mbps',
      price: 'Rp 299,000',
      features: ['Unlimited Data', 'WiFi Router', 'Free Installation', '24/7 Support', 'Streaming HD'],
      ideal: 'HD streaming, video calls, multiple devices',
      popular: true,
    },
    {
      name: 'Home Pro',
      speed: '50 Mbps',
      price: 'Rp 499,000',
      features: ['Unlimited Data', 'Premium Router', 'Free Installation', '24/7 Support', '4K Streaming', 'Gaming Optimized'],
      ideal: '4K streaming, gaming, smart home devices',
    },
    {
      name: 'Home Ultra',
      speed: '100 Mbps',
      price: 'Rp 799,000',
      features: ['Unlimited Data', 'Premium Router', 'Free Installation', '24/7 Support', '4K Streaming', 'Gaming Optimized', 'Priority Support'],
      ideal: 'Large households, heavy streaming, gaming',
    },
  ];

  const businessPlans = [
    {
      name: 'Business Starter',
      speed: '50 Mbps',
      price: 'Rp 899,000',
      features: ['Unlimited Data', 'Enterprise Router', 'Free Installation', '24/7 Support', 'Static IP', 'SLA 99.5%'],
      ideal: 'Small offices, 5-10 users',
    },
    {
      name: 'Business Pro',
      speed: '100 Mbps',
      price: 'Rp 1,599,000',
      features: ['Unlimited Data', 'Enterprise Router', 'Free Installation', '24/7 Support', 'Static IP', 'SLA 99.8%', 'Dedicated Support'],
      ideal: 'Medium offices, 10-25 users',
      popular: true,
    },
    {
      name: 'Business Enterprise',
      speed: '200 Mbps',
      price: 'Rp 2,999,000',
      features: ['Unlimited Data', 'Enterprise Router', 'Free Installation', '24/7 Support', 'Static IP', 'SLA 99.9%', 'Dedicated Support', 'Load Balancing'],
      ideal: 'Large offices, 25+ users',
    },
    {
      name: 'Enterprise Plus',
      speed: '500 Mbps',
      price: 'Custom Quote',
      features: ['Unlimited Data', 'Enterprise Router', 'Free Installation', '24/7 Support', 'Static IP', 'SLA 99.9%', 'Dedicated Support', 'Load Balancing', 'Redundancy'],
      ideal: 'Enterprise, mission-critical operations',
    },
  ];

  const additionalServices = [
    {
      name: 'Network Security',
      description: 'Advanced firewall and security solutions',
      icon: Shield,
    },
    {
      name: 'Managed Services',
      description: 'Complete network management and monitoring',
      icon: Users,
    },
    {
      name: 'Cloud Connectivity',
      description: 'Direct connection to major cloud providers',
      icon: Wifi,
    },
    {
      name: 'Backup Solutions',
      description: 'Redundant internet connections for business continuity',
      icon: Clock,
    },
  ];

  return (
    <div className="pt-16 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Internet Services
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              From home internet to enterprise solutions, we provide high-speed,
              reliable connectivity tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Wifi className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fiber Optic Network</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ultra-fast fiber optic infrastructure delivering speeds up to 1 Gbps
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Shield className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">99.9% Uptime</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Guaranteed service level agreements with minimal downtime
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Clock className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Round-the-clock technical support and customer service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Professional Installation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert technicians for seamless installation and setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Plans */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Home className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Residential Plans
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Perfect internet solutions for your home and family needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {residentialPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 transition-colors duration-200 ${
                  plan.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 dark:bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{plan.speed}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan.price}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">/month</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Ideal for:</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{plan.ideal}</div>
                </div>

                <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Business Plans
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional internet solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 border transition-colors duration-200 ${
                  plan.popular ? 'border-blue-500 dark:border-blue-400 transform scale-105' : 'border-gray-200 dark:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 dark:bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{plan.speed}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{plan.price}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">/month</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">Ideal for:</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{plan.ideal}</div>
                </div>

                <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to enhance your connectivity experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 text-center transition-colors duration-200">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold inline-flex items-center transition-colors duration-200">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Installation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get connected in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Call or visit our website to choose your plan and schedule installation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Site Survey</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our technicians visit your location to assess installation requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Installation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional installation of fiber optic connection and equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Activation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Service activation and testing to ensure optimal performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Service Level Agreement
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to reliable service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 text-center transition-colors duration-200">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Uptime Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Guaranteed network availability with minimal downtime
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 text-center transition-colors duration-200">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">&lt;4h</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maximum response time for technical support issues
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 text-center transition-colors duration-200">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous network monitoring and proactive maintenance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;