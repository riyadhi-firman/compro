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
                <span className="text-blue-300 dark:text-blue-200 block">Internet Berkecepatan Tinggi</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">
                Rasakan konektivitas internet yang andal dan super cepat yang mendukung kehidupan digital Anda.
                Dari streaming hingga operasi bisnis, kami siap melayani Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Lihat Paket
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors duration-200 text-center"
                >
                  Minta Penawaran
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
                  <p className="text-blue-100 dark:text-blue-200">Koneksi andal terjamin</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-blue-100 dark:text-blue-200">Pelanggan Puas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100 dark:text-blue-200">Dukungan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-blue-100 dark:text-blue-200">Tahun Pengalaman</div>
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
              Mengapa Memilih PT. Mitra Media Data?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kami menghadirkan lebih dari sekadar internet - kami menyediakan solusi konektivitas lengkap
              yang mendukung gaya hidup digital Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Wifi className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">High-Speed Internet</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Koneksi fiber optik super cepat hingga 1 Gbps untuk browsing dan streaming yang lancar.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Reliable & Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Jaminan uptime 99.9% dengan fitur keamanan canggih untuk melindungi data Anda.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dukungan pelanggan dan bantuan teknis 24 jam kapan pun Anda membutuhkannya.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg dark:hover:shadow-gray-800/25 transition-shadow duration-200">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Trusted by Thousands</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lebih dari 50.000 pelanggan puas mempercayai kami untuk kebutuhan konektivitas internet mereka.
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
              Pilih Paket yang Tepat untuk Anda
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dari internet rumah dasar hingga solusi enterprise, kami memiliki paket
              yang dirancang untuk memenuhi kebutuhan spesifik Anda.
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
                      Paling Populer
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
                  Pilih Paket
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
              Jangkauan Jaringan yang Luas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jaringan fiber optik kami tersebar di kota-kota besar di Indonesia,
              menyediakan konektivitas andal di mana Anda membutuhkannya.
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
                    Peta jangkauan real akan diintegrasikan di sini
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Area yang Kami Layani</h3>
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
                Jaringan kami terus berkembang dengan area jangkauan baru yang ditambahkan secara berkala.
                Periksa apakah area Anda sudah terjangkau atau akan dimasukkan dalam rencana ekspansi kami.
              </p>
              <Link
                to="/coverage"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
              >
                Periksa Area Jangkauan
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
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jangan hanya percaya kata kami - dengarkan dari pelanggan puas kami
              yang mempercayai kami untuk kebutuhan internet mereka.
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
            Siap Merasakan Internet Cepat dan Andal?
          </h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Bergabunglah dengan ribuan pelanggan puas yang mempercayai PT. Mitra Media Data
            untuk kebutuhan konektivitas internet mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Mulai Hari Ini
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-colors duration-200"
            >
              Lihat Semua Paket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;