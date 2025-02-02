import React from 'react';
import { Helmet } from 'react-helmet';

export default function HowToUseModal({ onClose }) {
  const sections = [
    {
      id: 'basics',
      title: '🎯 Getting Started',
      icon: '🚀',
      steps: [
        'Add names or items to the wheel using the input field',
        'Click the spin button to randomly select a winner',
        'Watch the wheel spin with exciting animations and sounds',
        'The winner is indicated by the yellow pointer at the top'
      ]
    },
    {
      id: 'features',
      title: '✨ Special Features',
      icon: '🎮',
      steps: [
        'Use Magic Lists to quickly load preset categories',
        'Customize wheel size to fit your screen perfectly',
        'Adjust animation speed for dramatic effect',
        'Choose from various spinning and victory sounds'
      ]
    },
    {
      id: 'tips',
      title: '💡 Pro Tips',
      icon: '🎓',
      steps: [
        'Double-click names to edit them directly',
        'Use the spacebar as a shortcut to spin',
        'Save your custom lists for future use',
        'Share your wheel configuration with others'
      ]
    },
    {
      id: 'uses',
      title: '🎪 Common Uses',
      icon: '🎯',
      items: [
        { name: 'Classroom Activities', desc: 'Student selection, group assignments, role distribution' },
        { name: 'Team Building', desc: 'Ice breakers, task allocation, team formation' },
        { name: 'Decision Making', desc: 'Random selection, fair choice, tournament matchups' },
        { name: 'Event Planning', desc: 'Prize draws, game organization, activity selection' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>How to Use Random Name Picker Wheel Kids - Complete Guide</title>
        <meta name="description" content="Learn how to use our random name picker wheel for classroom activities, team building, decision making, and more. Comprehensive guide with tips and best practices." />
        
        {/* Primary Meta Tags */}
        <meta name="keywords" content="random name picker, wheel spinner, classroom tool, team picker, random selector, decision maker, random generator, name picker wheel, random wheel, spin wheel" />
        <meta name="author" content="Wheel of Names" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Use Random Name Picker Wheel Kids- Complete Guide" />
        <meta property="og:description" content="Master the random name picker wheel with our comprehensive guide. Perfect for teachers, team leaders, and event organizers." />
        <meta property="article:section" content="Tutorial" />
        <meta property="article:tag" content="Education Technology" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Random Name Picker Wheel Kids Guide" />
        <meta name="twitter:description" content="Complete guide to using our random name picker wheel for various activities and purposes." />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Use Random Name Picker Wheel Kids",
            "description": "Complete guide to using the random name picker wheel for classroom activities, team building, and decision making.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Add Participants",
                "text": "Enter names or items into the wheel using the input field"
              },
              {
                "@type": "HowToStep",
                "name": "Customize Settings",
                "text": "Adjust wheel size, animation speed, and sound effects"
              },
              {
                "@type": "HowToStep",
                "name": "Spin the Wheel",
                "text": "Click the spin button or use spacebar to randomly select a winner"
              }
            ],
            "tool": {
              "@type": "Tool",
              "name": "Random Name Picker Wheel Kids",
              "description": "Interactive wheel for random selection and decision making"
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
            <span className="text-4xl">📖</span>
            How to Use
          </h2>
          <p className="text-white/80 mb-6">
            Welcome to Wheel of Names! Learn how to make the most of our random picker wheel.
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} className="bg-white/5 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <span className="text-2xl">{section.icon}</span>
                  {section.title}
                </h3>
                {section.steps && (
                  <ul className="space-y-3">
                    {section.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/90">
                        <span className="bg-white/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.items && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-1">{item.name}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
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