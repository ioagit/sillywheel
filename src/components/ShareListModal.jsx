import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareListModal = ({ show, onHide, listData }) => {
  const [name, setName] = useState("My PickerWheel List");
  const [description, setDescription] = useState(
    "A fun list created with PickerWheel Kids!"
  );
  const [shareLink, setShareLink] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateShareLink = async () => {
    setIsLoading(true);
    setError("");

    const payload = {
      id: uuidv4(),
      name,
      des: description,
      data: listData,
      site: window.location.hostname,
    };

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save list");
      }

      const shareUrl = `http://pickerwheelkids.com/s/${payload.id}`;
      setShareLink(shareUrl);
    } catch (err) {
      setError("Failed to create shareable link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShareLink("");
    setError("");
    setName("My PickerWheel List");
    setDescription("A fun list created with PickerWheel Kids!");
    onHide();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateShareLink();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl w-full max-w-md shadow-2xl transform transition-all">
        <div className="relative">
          {/* Fun decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce-slow opacity-75"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce-slow opacity-75 delay-150"></div>

          {/* Header */}
          <div className="flex flex-col items-center pt-8 px-6 pb-4">
            <h2 className="text-2xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Time to Share the Fun! 🎉
              </span>
            </h2>
            <p className="text-gray-600 text-center text-sm mb-4">
              Let's make this list extra special ✨
            </p>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 pt-0">
            {!shareLink ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <span>✏️ List Name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:border-purple-300 
                      focus:ring focus:ring-purple-200 focus:ring-opacity-50 transition-all
                      placeholder-gray-400 bg-white hover:border-purple-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                    <span>📝 Description</span>
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:border-purple-300 
                      focus:ring focus:ring-purple-200 focus:ring-opacity-50 transition-all
                      placeholder-gray-400 bg-white hover:border-purple-200 resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-xl text-white font-medium
                    transform transition-all duration-200 relative overflow-hidden
                    ${
                      isLoading
                        ? "bg-purple-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-[1.02] hover:shadow-lg"
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Magic... ✨
                    </span>
                  ) : (
                    "Share the Joy! 🎈"
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Woohoo! Your List is Ready! 🎉
                  </h3>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
                    <a
                      href={shareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 break-all hover:underline"
                    >
                      {shareLink}
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Share the excitement with friends! 🌟
                  </p>
                  <div className="flex justify-center gap-4">
                    <FacebookShareButton
                      url={shareLink}
                      quote={`Check out my awesome list: ${name} ✨`}
                      className="transform transition-transform hover:scale-110"
                    >
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>

                    <TwitterShareButton
                      url={shareLink}
                      title={`Check out my awesome list: ${name} ✨`}
                      className="transform transition-transform hover:scale-110"
                    >
                      <TwitterIcon size={40} round />
                    </TwitterShareButton>

                    <WhatsappShareButton
                      url={shareLink}
                      title={`Check out my awesome list: ${name} ✨`}
                      className="transform transition-transform hover:scale-110"
                    >
                      <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareListModal;
