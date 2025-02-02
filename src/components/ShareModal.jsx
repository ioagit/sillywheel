import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaWhatsapp, 
  FaTelegram, 
  FaReddit, 
  FaPinterest, 
  FaEnvelope,
  FaLink,
  FaShareAlt
} from 'react-icons/fa';

export default function ShareModal({ onClose, participants }) {
  const [listName, setListName] = useState('');
  const [listDesc, setListDesc] = useState('');
  const [sharedLink, setSharedLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRandomId = () => Math.random().toString(36).substr(2, 8);

  
  const shareUrl = window.location.href;
  const title = "Random Name Picker Wheel Kids - Free Online Tool";
  const description = "Check out this awesome random name picker wheel! Perfect for classroom activities, team building, and decision making.";

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-[#1877f2] text-2xl" />,
      color: "bg-[#1877f2]/10 hover:bg-[#1877f2]/20",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-[#1da1f2] text-2xl" />,
      color: "bg-[#1da1f2]/10 hover:bg-[#1da1f2]/20",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-[#0a66c2] text-2xl" />,
      color: "bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-[#25d366] text-2xl" />,
      color: "bg-[#25d366]/10 hover:bg-[#25d366]/20",
      url: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="text-[#0088cc] text-2xl" />,
      color: "bg-[#0088cc]/10 hover:bg-[#0088cc]/20",
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
    },
    {
      name: "Reddit",
      icon: <FaReddit className="text-[#ff4500] text-2xl" />,
      color: "bg-[#ff4500]/10 hover:bg-[#ff4500]/20",
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`
    },
    {
      name: "Pinterest",
      icon: <FaPinterest className="text-[#e60023] text-2xl" />,
      color: "bg-[#e60023]/10 hover:bg-[#e60023]/20",
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(description)}`
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-gray-400 text-2xl" />,
      color: "bg-gray-500/10 hover:bg-gray-500/20",
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + "\n\n" + shareUrl)}`
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    // You could add a toast notification here
  };

  return (
    <>
      <Helmet>
        <title>Share Random Name Picker Wheel Kids</title>
        <meta name="description" content="Share this random name picker wheel with your friends and colleagues. Perfect for teachers, event planners, and team leaders." />
        
        {/* Primary Meta Tags */}
        <meta name="keywords" content="share wheel picker, social share, random picker share, wheel spinner share, share classroom tool" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Share Random Name Picker Wheel Kids" />
        <meta property="og:description" content="Share this amazing tool with your network!" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Share Random Name Picker Wheel Kids" />
        <meta name="twitter:description" content="Share this random name picker wheel with your network!" />
      </Helmet>

      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
        style={{ position: 'fixed', zIndex: 9999 }}
      >
        <div 
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-xl w-full mx-4 shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <FaShareAlt className="text-4xl text-white/90" />
            Share
          </h2>
          <p className="text-white/80 mb-6">
            Share this wheel with your friends and colleagues
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} rounded-xl p-4 text-center 
                  transition-all duration-200 hover:scale-105 group`}
              >
                <div className="text-3xl block mb-2 group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
                <span className="text-white font-medium">
                  {platform.name}
                </span>
              </a>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-4 flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white"
            />
            <button
              onClick={copyToClipboard}
              className="bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-white 
                transition-colors flex items-center gap-2"
            >
              <FaLink className="text-xl" />
              Copy
            </button>
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