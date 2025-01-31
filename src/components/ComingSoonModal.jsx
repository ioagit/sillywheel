import React from 'react';
import { Helmet } from 'react-helmet';

export default function ComingSoonModal({ type, onClose }) {
  const content = {
    save: {
      icon: "💾",
      title: "Save Current List",
      description: "Coming soon! Save and manage your custom lists",
      features: [
        "Save unlimited custom lists",
        "Cloud synchronization",
        "Easy list management",
        "Quick access to favorites"
      ],
      seo: {
        title: "Save Custom Lists - Random Name Picker Wheel",
        description: "Coming soon! Save and manage your custom wheel lists. Cloud synchronization, unlimited saves, and easy management features.",
        keywords: "save lists, custom wheel lists, name picker saves, wheel configuration, save wheel settings",
        type: "Feature",
        section: "Save Feature"
      }
    },
    export: {
      icon: "📤",
      title: "Export List",
      description: "Coming soon! Export your lists in multiple formats",
      features: [
        "Export to CSV, Excel, PDF",
        "Share via email or link",
        "Print-friendly format",
        "Data backup options"
      ],
      seo: {
        title: "Export Wheel Lists - Random Name Picker Wheel",
        description: "Coming soon! Export your wheel lists in multiple formats. Share, print, and backup your data easily.",
        keywords: "export lists, share wheel lists, download wheel data, print wheel lists, backup wheel configuration",
        type: "Tool",
        section: "Export Tools"
      }
    },
    contact: {
      icon: "📧",
      title: "Contact Us",
      description: "Coming soon! Get in touch with our team",
      features: [
        "24/7 support system",
        "Feature requests",
        "Bug reporting",
        "Feedback submission"
      ],
      seo: {
        title: "Contact Support - Random Name Picker Wheel",
        description: "Coming soon! Get in touch with our support team. Submit feedback, report issues, or request new features.",
        keywords: "contact support, wheel feedback, feature requests, bug reports, customer service",
        type: "ContactPage",
        section: "Support"
      }
    }
  };

  const info = content[type];

  return (
    <>
      <Helmet>
        <title>{info.seo.title}</title>
        <meta name="description" content={info.seo.description} />
        
        {/* Primary Meta Tags */}
        <meta name="keywords" content={info.seo.keywords} />
        <meta name="author" content="Wheel of Names" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={info.seo.type.toLowerCase()} />
        <meta property="og:title" content={info.seo.title} />
        <meta property="og:description" content={info.seo.description} />
        <meta property="article:section" content={info.seo.section} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={info.seo.title} />
        <meta name="twitter:description" content={info.seo.description} />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": info.seo.type,
            "name": info.title,
            "description": info.seo.description,
            "applicationCategory": "WebApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": info.features
          })}
        </script>
      </Helmet>

      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center">
            <span className="text-6xl animate-bounce-subtle block mb-4">
              {info.icon}
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">
              {info.title}
            </h2>
            <p className="text-white/80 mb-8">
              {info.description}
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>✨</span>
              Upcoming Features
            </h3>
            <ul className="space-y-3">
              {info.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <span className="text-green-400">⭐</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-white/60 mb-6">
              We're working hard to bring you these features soon!
              Stay tuned for updates.
            </p>
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