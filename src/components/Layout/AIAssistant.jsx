import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userPreferences, setUserPreferences] = useState({});
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [showingRecommendations, setShowingRecommendations] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const whatsappNumber = '917816072525';

  // Interior design questionnaire (static, step-by-step)
  const questionnaire = [
    {
      question: "Which room are you designing?",
      options: [
        "Living Room",
        "Bedroom",
        "Kitchen",
        "Bathroom",
        "Home Office",
        "Dining Room"
      ]
    },
    {
      question: "What's your preferred style?",
      options: [
        "Modern",
        "Minimalist",
        "Scandinavian",
        "Traditional",
        "Bohemian",
        "Industrial",
        "Coastal"
      ]
    },
    {
      question: "What's your primary color palette?",
      options: [
        "Neutral",
        "Warm",
        "Cool",
        "Earthy",
        "Monochrome",
        "Pastels"
      ]
    },
    {
      question: "What's your budget level?",
      options: ["Budget", "Mid-range", "Premium"]
    },
    {
      question: "What materials do you prefer?",
      options: [
        "Wood",
        "Metal",
        "Glass",
        "Natural Fibers",
        "Fabric",
        "Mixed"
      ]
    },
    {
      question: "How bold should the accents be?",
      options: ["Subtle", "Balanced", "Bold"]
    }
  ];

  // Progress helpers
  const totalSteps = questionnaire.length;
  const answeredSteps = Object.keys(userPreferences).length;
  const progressPercent = Math.min(100, Math.round((answeredSteps / totalSteps) * 100));
  const currentStepLabel = answeredSteps >= totalSteps
    ? 'Completed'
    : `Step ${Math.min(answeredSteps + 1, totalSteps)} of ${totalSteps}`;

  // Avatars
  const AssistantAvatar = () => (
    <div className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow">
      <i className="fas fa-hexagon text-xs"></i>
    </div>
  );
  const UserAvatar = () => (
    <div className="shrink-0 h-8 w-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shadow">
      <i className="fas fa-user text-xs"></i>
    </div>
  );

  // Sample interior design recommendation catalog
  const products = [
    {
      name: "Modern Living Room Starter Set",
      room: "Living Room",
      style: "Modern",
      palette: "Neutral",
      materials: ["Wood", "Fabric"],
      budget: "Mid-range",
      accents: "Balanced",
      price: "₹₹ Mid-range",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Minimalist Bedroom Retreat",
      room: "Bedroom",
      style: "Minimalist",
      palette: "Monochrome",
      materials: ["Wood", "Fabric"],
      budget: "Budget",
      accents: "Subtle",
      price: "₹ Budget",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Industrial Home Office Setup",
      room: "Home Office",
      style: "Industrial",
      palette: "Cool",
      materials: ["Metal", "Glass"],
      budget: "Mid-range",
      accents: "Bold",
      price: "₹₹ Mid-range",
      image:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Scandinavian Dining Nook",
      room: "Dining Room",
      style: "Scandinavian",
      palette: "Warm",
      materials: ["Wood", "Natural Fibers"],
      budget: "Budget",
      accents: "Subtle",
      price: "₹ Budget",
      image:
        "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Traditional Kitchen Upgrade",
      room: "Kitchen",
      style: "Traditional",
      palette: "Warm",
      materials: ["Wood", "Glass"],
      budget: "Premium",
      accents: "Balanced",
      price: "₹₹₹ Premium",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Bohemian Living Room Mix",
      room: "Living Room",
      style: "Bohemian",
      palette: "Earthy",
      materials: ["Natural Fibers", "Fabric"],
      budget: "Budget",
      accents: "Bold",
      price: "₹ Budget",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Coastal Bathroom Refresh",
      room: "Bathroom",
      style: "Coastal",
      palette: "Cool",
      materials: ["Glass", "Natural Fibers"],
      budget: "Mid-range",
      accents: "Subtle",
      price: "₹₹ Mid-range",
      image:
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Modern Compact Kitchen",
      room: "Kitchen",
      style: "Modern",
      palette: "Neutral",
      materials: ["Metal", "Glass"],
      budget: "Mid-range",
      accents: "Balanced",
      price: "₹₹ Mid-range",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  // Scroll to bottom function with smooth animation
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto scroll when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // History feature removed

  const handleOptionSelect = (option) => {
    setIsHome(false);
    const currentQuestion = questionnaire[currentStep];
    setUserPreferences(prev => ({
      ...prev,
      [currentQuestion.question]: option
    }));

    // Only add the user's answer
    setMessages(prev => [
      ...prev,
      { text: option, sender: 'user', id: Date.now() + 1 }
    ]);

    if (currentStep < questionnaire.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setMessages(prev => [
          ...prev,
          { text: questionnaire[currentStep + 1].question, sender: 'assistant', id: Date.now() }
        ]);
      }, 500);
    } else {
      // Completed questionnaire
      setCurrentStep(totalSteps);
    }
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Hi! I would like to chat about interior design.');
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  // Build a concise WhatsApp message from the user's selections
  const formatWhatsAppMessageFromPreferences = (preferences) => {
    const labelMap = {
      "Which room are you designing?": "Room",
      "What's your preferred style?": "Style",
      "What's your primary color palette?": "Color Palette",
      "What's your budget level?": "Budget",
      "What materials do you prefer?": "Preferred Material",
      "How bold should the accents be?": "Accent Boldness"
    };

    const lines = [];
    lines.push("DDG Assistant Inquiry");
    lines.push(`Date: ${new Date().toLocaleString()}`);
    lines.push("");
    lines.push("Selections:");
    Object.keys(labelMap).forEach((key) => {
      if (preferences[key]) {
        lines.push(`- ${labelMap[key]}: ${preferences[key]}`);
      }
    });

    return encodeURIComponent(lines.join("\n"));
  };

  const handleSendToTeam = () => {
    const text = formatWhatsAppMessageFromPreferences(userPreferences);
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  // No free-typing flow; keep handler but prevent submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isHome) return;
    return;
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMaximized(false);
    setCurrentStep(0);
    setMessages([]);
    setUserPreferences({});
    setIsHome(true);
  };

  const handleShowMore = () => {
    setCurrentStep(0);
    setMessages([{ text: questionnaire[0].question, sender: 'assistant', id: Date.now() }]);
    setUserPreferences({});
    setIsHome(false);
  };

  const handleNewChat = () => {
    setCurrentStep(0);
    setMessages([]);
    setUserPreferences({});
    setIsHome(true);
  };
  // History handlers removed

  const handleToggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const containerPositionClass = isOpen && isMaximized
    ? 'fixed inset-0 z-50'
    : 'fixed bottom-24 right-4 md:bottom-22 md:right-8 z-50';

  return (
    <div className={`${containerPositionClass}`}>
      {isOpen ? (
        <div className={`relative ${isMaximized ? 'w-screen h-screen max-w-none rounded-none' : 'w-[92vw] max-w-[420px] h-[72vh] md:w-[420px] md:h-[640px] rounded-2xl'} bg-white shadow-xl flex flex-col border border-gray-200`}>
          {/* Message Tail */}
          {!isMaximized && (
            <div className="absolute bottom-[-9px] right-8 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-200 shadow-sm rounded-sm"></div>
          )}
          {/* Header */}
          <div className={`px-4 pt-3 pb-2 ${isMaximized ? '' : 'rounded-t-2xl'} border-b border-gray-100 bg-white/80 backdrop-blur relative z-30`}>            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow">
                  <i className="fas fa-couch text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">DDG </div>
                  <div className="text-[11px] text-gray-500">{currentStepLabel}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleNewChat}
                  className="group inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 shadow-sm hover:bg-gray-900 transition-colors"
                  title="Clear conversation"
                >
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white/10 border border-white/20">
                    <i className="fas fa-times text-[10px] text-red-500"></i>
                  </span>
                  <span className="text-sm font-medium">Clear</span>
                </button>
                <button
                  type="button"
                  onClick={handleToggleMaximize}
                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
                  title={isMaximized ? 'Exit full screen' : 'Full screen'}
                >
                  <i className={`${isMaximized ? 'fas fa-compress-arrows-alt' : 'fas fa-expand-arrows-alt'}`}></i>
                </button>
                <button 
                  onClick={handleClose}
                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 text-gray-600"
                  aria-label="Close"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-3">
              <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content / Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth bg-white thin-scrollbar"
          >
            {isHome ? (
              <div className="h-full flex flex-col items-center justify-start pt-6 text-center">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow-md">
                  <i className="fas fa-hexagon"></i>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Welcome to Interior Design Assistant</h3>
                <p className="mt-2 text-sm text-gray-600 max-w-[320px]">
                  We'll ask a few quick questions and suggest room setups tailored to you.
                </p>
                <button
                  onClick={handleShowMore}
                  className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
                >
                  <i className="fas fa-play"></i>
                  Get started
                </button>
                <div className="grid grid-cols-2 gap-3 mt-6 w-full">
                  {["Design my living room","Set up a home office"].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={handleShowMore}
                      className="text-left rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 p-3 text-sm text-gray-700 shadow-sm"
                    >
                      <div className="flex items-center gap-2 text-violet-600 mb-1">
                        <i className="fas fa-wand-magic-sparkles"></i>
                        <span className="font-medium">Example</span>
                      </div>
                      <div>{label}</div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleWhatsAppChat}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow"
                >
                  <i className="fab fa-whatsapp"></i>
                  Chat with us 
                </button>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2 animate-fade-in`}
                    style={{
                      animation: 'fadeIn 0.3s ease-in-out forwards',
                      opacity: 0,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {message.sender === 'assistant' ? <AssistantAvatar /> : <></>}
                    <div
                      className={`max-w-[78%] rounded-2xl px-4 py-3 shadow-sm border transition-colors ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white border-transparent'
                          : 'bg-white text-gray-800 border-gray-200'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-[13px] leading-relaxed">{message.text}</div>
                    </div>
                    {message.sender === 'user' ? <UserAvatar /> : <></>}
                  </div>
                ))}

                {/* Inline options as chips under the current question */}
                {currentStep < questionnaire.length && (
                  <div className="mt-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">Choose an option</div>
                    <div className="flex flex-wrap gap-2">
                      {questionnaire[currentStep].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-sm text-gray-700"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {currentStep >= questionnaire.length && (
                  <div className="mt-3">
                    <button
                      onClick={handleSendToTeam}
                      className="w-full px-4 py-2 rounded-lg text-white shadow bg-emerald-600 hover:bg-emerald-700"
                    >
                      Send to Team 
                    </button>
                  </div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer helper */}
          <div className="p-3 border-t bg-white">
            <div className="text-[11px] text-gray-500 text-center">
              Tip: You can switch to full screen or start a new chat anytime.
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
            // Open to welcome screen first
            setIsHome(true);
            setCurrentStep(0);
            setUserPreferences({});
            setShowingRecommendations(false);
            setMessages([]);
          }}
          className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white rounded-full shadow-lg 
            hover:opacity-90 hover:scale-110 active:scale-95
            transition-all duration-300 ease-in-out
            flex items-center justify-center
            text-xl
            opacity-80 hover:opacity-100
            border-2 border-transparent hover:border-white
            animate-bounce-slow"
        >
          <i className="fas fa-robot"></i>
        </button>



      )}

      <button
  onClick={() =>
    window.open(
      "https://api.whatsapp.com/send?phone=+917816072525&text=How%20can%20the%20Design%20and%20Decor%20team%20help%20you%3F",
      "_blank"
    )
  }
  className="unique-whatsapp-btn fixed bottom-8 left-8 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg
    hover:bg-green-600 hover:scale-110 active:scale-95
    transition-all duration-300 ease-in-out
    flex items-center justify-center
    text-2xl
    opacity-90 hover:opacity-100
    border-2 border-transparent hover:border-white
    animate-pulse"
  aria-label="Contact via WhatsApp"
>
  <i className="fab fa-whatsapp w-6 h-6" />
</button>


      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      <style jsx>{`
        /* Thin, subtle scrollbar for WebKit */
        .thin-scrollbar::-webkit-scrollbar {
          width: 3px; /* thinner */
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(107, 114, 128, 0.28); /* subtle */
          border-radius: 9999px;
        }
        /* Firefox */
        .thin-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(107, 114, 128, 0.35) transparent;
        }
      `}</style>
    </div>
  );
};

export default AIAssistant; 