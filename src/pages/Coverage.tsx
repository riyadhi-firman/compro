import React, { useState } from 'react';
import { MapPin, Search, Check, Clock, ArrowRight } from 'lucide-react';

const Coverage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchResult, setSearchResult] = useState<{
    available: boolean;
    location: string;
    message: string;
  } | null>(null);

  const coveredAreas = [
    {
      city: 'Jakarta',
      regions: ['Central Jakarta', 'South Jakarta', 'West Jakarta', 'East Jakarta', 'North Jakarta'],
      status: 'Available',
      speeds: ['25 Mbps', '50 Mbps', '100 Mbps', '200 Mbps', '500 Mbps'],
    },
    {
      city: 'Surabaya',
      regions: ['Surabaya City', 'Gresik', 'Sidoarjo', 'Mojokerto'],
      status: 'Available',
      speeds: ['25 Mbps', '50 Mbps', '100 Mbps', '200 Mbps'],
    },
    {
      city: 'Bandung',
      regions: ['Bandung City', 'Cimahi', 'Bandung Regency'],
      status: 'Available',
      speeds: ['25 Mbps', '50 Mbps', '100 Mbps'],
    },
    {
      city: 'Medan',
      regions: ['Medan City', 'Deli Serdang', 'Binjai'],
      status: 'Available',
      speeds: ['25 Mbps', '50 Mbps', '100 Mbps'],
    },
    {
      city: 'Semarang',
      regions: ['Semarang City', 'Kendal', 'Demak'],
      status: 'Available',
      speeds: ['25 Mbps', '50 Mbps', '100 Mbps'],
    },
    {
      city: 'Yogyakarta',
      regions: ['Yogyakarta City', 'Sleman', 'Bantul'],
      status: 'Available',
      speeds: ['25 Mbps', '50 Mbps', '100 Mbps'],
    },
  ];

  const upcomingAreas = [
    {
      city: 'Bali',
      regions: ['Denpasar', 'Badung', 'Gianyar'],
      expectedDate: 'Q2 2024',
    },
    {
      city: 'Makassar',
      regions: ['Makassar City', 'Gowa', 'Maros'],
      expectedDate: 'Q3 2024',
    },
    {
      city: 'Palembang',
      regions: ['Palembang City', 'Ogan Ilir'],
      expectedDate: 'Q4 2024',
    },
  ];

  const handleSearch = () => {
    if (!searchLocation.trim()) return;

    // Simple mock search logic
    const found = coveredAreas.find(area => 
      area.city.toLowerCase().includes(searchLocation.toLowerCase()) ||
      area.regions.some(region => region.toLowerCase().includes(searchLocation.toLowerCase()))
    );

    if (found) {
      setSearchResult({
        available: true,
        location: searchLocation,
        message: `Great news! Our service is available in ${searchLocation}. You can choose from speeds up to ${found.speeds[found.speeds.length - 1]}.`
      });
    } else {
      const upcoming = upcomingAreas.find(area => 
        area.city.toLowerCase().includes(searchLocation.toLowerCase()) ||
        area.regions.some(region => region.toLowerCase().includes(searchLocation.toLowerCase()))
      );

      if (upcoming) {
        setSearchResult({
          available: false,
          location: searchLocation,
          message: `${searchLocation} is coming soon! Expected launch: ${upcoming.expectedDate}. We'll notify you when service becomes available.`
        });
      } else {
        setSearchResult({
          available: false,
          location: searchLocation,
          message: `We're not currently serving ${searchLocation}, but we're continuously expanding. Contact us to express interest in your area.`
        });
      }
    }
  };

  return (
    <div className="pt-16 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Network Coverage Area
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
              Discover if our high-speed internet service is available in your area
              and explore our expanding network coverage across Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Checker */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Check Service Availability
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enter your location to see if our service is available in your area
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-200">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter your city or district..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Check Coverage
                </button>
              </div>

              {searchResult && (
                <div className={`p-6 rounded-lg ${
                  searchResult.available 
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                    : 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800'
                }`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-4 ${
                      searchResult.available ? 'bg-green-100 dark:bg-green-800/30' : 'bg-orange-100 dark:bg-orange-800/30'
                    }`}>
                      {searchResult.available ? (
                        <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                      ) : (
                        <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${
                        searchResult.available ? 'text-green-800 dark:text-green-300' : 'text-orange-800 dark:text-orange-300'
                      }`}>
                        {searchResult.available ? 'Service Available!' : 'Coming Soon'}
                      </h3>
                      <p className={`${
                        searchResult.available ? 'text-green-700 dark:text-green-400' : 'text-orange-700 dark:text-orange-400'
                      }`}>
                        {searchResult.message}
                      </p>
                      {searchResult.available && (
                        <button className="mt-4 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                          Get Quote
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Network Coverage Map
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visual representation of our current network coverage and expansion plans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 h-96 flex items-center justify-center transition-colors duration-200">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-full inline-block mb-4">
                    <MapPin className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interactive Coverage Map</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time coverage map showing available areas and network status
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Interactive map integration would be implemented here
                  </p>
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 transition-colors duration-200">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Map Legend</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Service Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Coming Soon</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Fiber Infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Planned Expansion</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 transition-colors duration-200">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Cities Covered</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Districts</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Fiber Length</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">1,500 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Active Customers</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">50,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Serving Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our fiber optic network currently covers these major cities and regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coveredAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 transition-colors duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{area.city}</h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    {area.status}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Covered Regions:</h4>
                  <ul className="space-y-1">
                    {area.regions.map((region, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Check className="h-3 w-3 text-green-500 dark:text-green-400 mr-2" />
                        {region}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Available Speeds:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.speeds.map((speed, idx) => (
                      <span key={idx} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        {speed}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expansion Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're continuously expanding our network to serve more areas across Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingAreas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 transition-colors duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{area.city}</h3>
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                    {area.expectedDate}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Planned Regions:</h4>
                  <ul className="space-y-1">
                    {area.regions.map((region, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="h-3 w-3 text-orange-500 dark:text-orange-400 mr-2" />
                        {region}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-orange-600 dark:bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center">
                  <span>Get Notified</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Infrastructure */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Network Infrastructure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge fiber optic technology for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1,500</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Kilometers of Fiber</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Extensive fiber optic network spanning across major cities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Network Uptime</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Guaranteed service availability with redundant connections
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Network Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous monitoring and proactive maintenance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1 Gbps</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Maximum Speed</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ultra-fast speeds for demanding applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;