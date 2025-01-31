import React from 'react';
import { Helmet } from 'react-helmet';

export default function UpdatesModal({ onClose }) {
  const updates = [
    {
      version: "2.0.0",
      date: "November 2024",
      type: "major",
      icon: "🚀",
      title: "Major Design Overhaul",
      highlights: [
        "Complete UI redesign with modern glass morphism",
        "New animation system for smoother transitions",
        "Enhanced accessibility features",
        "Improved mobile responsiveness"
      ],
      changes: [
        { type: "feature", text: "Added customizable themes and color schemes" },
        { type: "feature", text: "Introduced new victory sound effects" },
        { type: "feature", text: "Added Magic Lists preset system" },
        { type: "improvement", text: "Optimized wheel spinning performance" },
        { type: "improvement", text: "Enhanced sound control system" }
      ]
    },
    {
      version: "1.5.0",
      date: "December 2024",
      type: "feature",
      icon: "✨",
      title: "Feature Update",
      highlights: [
        "New animation speed controls",
        "Adjustable wheel size options",
        "Improved sound effects system"
      ],
      changes: [
        { type: "feature", text: "Added multiple spinning animation speeds" },
        { type: "feature", text: "Introduced responsive wheel sizing" },
        { type: "improvement", text: "Enhanced audio playback quality" },
        { type: "fix", text: "Fixed mobile touch interaction issues" }
      ]
    },
    {
      version: "1.2.0",
      date: "January 2025",
      type: "enhancement",
      icon: "⚡",
      title: "Performance Update",
      highlights: [
        "Faster wheel spinning",
        "Reduced memory usage",
        "Smoother animations"
      ],
      changes: [
        { type: "improvement", text: "Optimized rendering performance" },
        { type: "improvement", text: "Reduced initial load time" },
        { type: "fix", text: "Fixed memory leak in animation system" }
      ]
    }
  ];

  const getChangeIcon = (type) => {
    switch (type) {
      case "feature": return "🎯";
      case "improvement": return "⚡";
      case "fix": return "🔧";
      default: return "✨";
    }
  };

  return (
    <>
      <Helmet>
        <title>Latest Updates - Random Name Picker Wheel Changelog</title>
        <meta name="description" content="Stay up to date with the latest features and improvements to our random name picker wheel. New themes, animations, sound effects, and more!" />
        
        {/* Primary Meta Tags */}
        <meta name="keywords" content="wheel updates, new features, random picker updates, wheel spinner changelog, name picker improvements, classroom tool updates" />
        <meta name="author" content="Wheel of Names" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What's New - Random Name Picker Wheel Updates" />
        <meta property="og:description" content="Discover the latest features and improvements in our random name picker wheel. Enhanced user experience with new themes and animations." />
        <meta property="article:section" content="Updates" />
        <meta property="article:tag" content="Feature Updates" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Random Name Picker Wheel - Latest Updates" />
        <meta name="twitter:description" content="Check out what's new in our random name picker wheel. Regular updates for better user experience." />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Random Name Picker Wheel",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "releaseNotes": {
              "@type": "CreativeWork",
              "name": "Version History",
              "text": updates.map(u => `Version ${u.version}: ${u.title}`).join(", ")
            }
          })}
        </script>
      </Helmet>

      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
          onClick={e => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">🔄</span>
            Latest Updates
          </h2>
          <p className="text-white/80 mb-6">
            Stay up to date with our latest features and improvements
          </p>

          <div className="space-y-8">
            {updates.map((update) => (
              <div key={update.version} className="bg-white/5 rounded-xl p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{update.icon}</span>
                      <h3 className="text-xl font-semibold text-white">
                        {update.title}
                      </h3>
                    </div>
                    <div className="text-white/60 text-sm">
                      Version {update.version} • {update.date}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    update.type === 'major' ? 'bg-purple-500/20 text-purple-200' :
                    update.type === 'feature' ? 'bg-green-500/20 text-green-200' :
                    'bg-blue-500/20 text-blue-200'
                  }`}>
                    {update.type}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {update.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-3">
                      <p className="text-white/90">{highlight}</p>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mt-4">
                  {update.changes.map((change, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/80">
                      <span className="text-lg">{getChangeIcon(change.type)}</span>
                      <span>{change.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 
                text-white transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 