import React from 'react';
import { Award, Target, Eye, Users, Calendar, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2008', event: 'Company founded in Jakarta', icon: Calendar },
    { year: '2010', event: 'First 1000 customers milestone', icon: Users },
    { year: '2015', event: 'Fiber optic network expansion', icon: Target },
    { year: '2020', event: 'ISO certification achieved', icon: Award },
    { year: '2023', event: '50,000+ customers served', icon: Trophy },
  ];

  const team = [
    {
      name: 'Budi Santoso',
      position: 'Chief Executive Officer',
      experience: '15+ years in telecommunications',
      education: 'MBA from University of Indonesia',
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Chief Technology Officer',
      experience: '12+ years in network engineering',
      education: 'MS in Computer Networks from ITB',
    },
    {
      name: 'Ahmad Rahman',
      position: 'VP of Operations',
      experience: '10+ years in ISP operations',
      education: 'BS in Electrical Engineering from UI',
    },
    {
      name: 'Maya Indira',
      position: 'Head of Customer Success',
      experience: '8+ years in customer relations',
      education: 'MBA in Business Management from UGM',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 27001:2013 Information Security',
    'KOMINFO ISP License',
    'Fiber Optic Association Certification',
    'Indonesian ISP Association Member',
  ];

  return (
    <div className="pt-16 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About PT. Mitra Media Data
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              For over 15 years, we've been Indonesia's trusted partner in delivering
              high-quality internet connectivity solutions to homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Founded in 2008, PT. Mitra Media Data began with a simple mission:
                to bridge the digital divide in Indonesia by providing reliable,
                high-speed internet connectivity to communities across the archipelago.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                What started as a small local ISP has grown into one of Indonesia's
                most trusted internet service providers, serving over 50,000 customers
                across major cities with state-of-the-art fiber optic infrastructure.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Today, we continue to innovate and expand our services, always keeping
                our customers' needs at the heart of everything we do.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 h-96 rounded-2xl flex items-center justify-center transition-colors duration-200">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-full inline-block mb-4">
                  <Users className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">15+ Years of Excellence</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Serving Indonesia's digital future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 transition-colors duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-6">
                <Eye className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be Indonesia's leading digital infrastructure provider, empowering
                communities and businesses through reliable, innovative connectivity
                solutions that drive economic growth and social development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 transition-colors duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-6">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To deliver exceptional internet connectivity services through
                cutting-edge technology, outstanding customer support, and
                sustainable business practices that create value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our customers
              and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in every aspect of our service delivery
                and customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our customers are at the heart of everything we do, driving our
                innovation and service improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Target className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace new technologies and continuously evolve to meet
                changing digital needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <Trophy className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct business with honesty, transparency, and ethical
                practices in all our relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones that mark our growth and evolution as Indonesia's
              trusted internet service provider.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-200">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">{milestone.event}</div>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 p-3 rounded-full">
                    <milestone.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && (
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-200">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">{milestone.event}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the experienced leaders who drive our company's vision and
              ensure exceptional service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-200">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                  <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.position}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to quality and excellence is recognized through
              various industry certifications and awards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex items-center transition-colors duration-200">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;