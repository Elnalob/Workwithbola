import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const websites = [
    {
      name: 'HDI Website',
      url: 'https://www.hdigrouphq.org',
      image: '/HDI Website.webp',
      linkText: 'View Live Site'
    },
    {
      name: 'Bayla Sear Website',
      url: 'https://www.baylasear.com',
      image: '/Bayla sear website.webp',
      linkText: 'View Live Site'
    },
    {
      name: 'Inspired',
      url: 'https://inspiredafrica54.org/',
      image: '/Inspired charity logo.webp',
      linkText: 'View Live Site'
    }
  ];

  const digitalSolutions = [
    {
      name: 'Professional ID Cards',
      image: '/id card.webp'
    },
    {
      name: 'Investor-Ready Presentations',
      image: '/HDi Company Profile Presentation.webp'
    }
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50 relative">
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 via-blue-900/0 to-emerald-900/0 dark:from-purple-900/10 dark:via-blue-900/5 dark:to-emerald-900/10 transition-all duration-1000"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            See My Work
          </h2>
        </div>

        {/* Websites Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Websites I've Built:</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websites.map((website, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={website.image}
                    alt={website.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {website.name}
                  </h4>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {website.linkText}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Solutions Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Digital Solutions I've Created:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {digitalSolutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {solution.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-3xl p-8 lg:p-12 shadow-xl">
            <p className="text-2xl text-white mb-6">Want something like this?</p>
            <a
              href="https://calendly.com/hello-workwithbola/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-white text-blue-600 dark:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Meeting to See How This Works for You
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;