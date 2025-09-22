import React, { useState, useRef, useEffect } from 'react';
import aiChatbot from '../../assets/aichatbot.png';
import ddgLogo from '../../components/Common/ddglogo.png';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userPreferences, setUserPreferences] = useState({});
  const [isWaitingForOther, setIsWaitingForOther] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const otherInputRef = useRef(null);
    // Removed fileInputRef as we will use manual text input instead
  const [showingRecommendations, setShowingRecommendations] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [whatsappPayload, setWhatsappPayload] = useState(null);
  const whatsappNumber = '918618877807';

  // Interior design questionnaire (static, step-by-step)
  const questionnaire = [
    {
      question: "Which location are you looking for?",
      options: ["Visakhapatnam", "Hyderabad", "Other"]
    },
    {
      question: "What is your requirement?",
      options: ["Apartment", "Individual house", "Villa", "Office interiors"]
    },
    {
      question: "Share your floor plan.",
      isFileInput: true
    },
    {
      question: "Send your details to our team.",
      isSubmit: true
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
    <div className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center shadow">
      <img src={aiChatbot} alt="AI" className="h-5 w-5 object-contain" />
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

  // Focus the "Other" text input when it's shown
  useEffect(() => {
    if (isWaitingForOther && otherInputRef.current) {
      otherInputRef.current.focus();
    }
  }, [isWaitingForOther]);

  // History feature removed

  const handleOptionSelect = (option) => {
    setIsHome(false);
    const currentQuestion = questionnaire[currentStep];

    // Add the user's answer message
    setMessages(prev => [
      ...prev,
      { text: option, sender: 'user', id: Date.now() + 1 }
    ]);

    // If user selected "Other" for the location question, prompt for free text
    if (option === 'Other' && currentQuestion && currentQuestion.question === 'Which location are you looking for?') {
      setIsWaitingForOther(true);
      // Prompt assistant to ask for the location text
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: 'Please specify your location.', sender: 'assistant', id: Date.now() }
        ]);
        // After the assistant message is added, attempt to focus the input and scroll
        setTimeout(() => {
          otherInputRef.current?.focus();
          scrollToBottom();
        }, 80);
      }, 300);
      return;
    }

    // Save selection and advance
    setUserPreferences(prev => ({
      ...prev,
      [currentQuestion.question]: option
    }));

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

  // Handle file selection for the floor plan step
    // (file upload removed) We'll collect floor-plan as manual text input instead

  // Build a WhatsApp message including questionnaire answers and user messages
  const buildWhatsAppMessage = (preferences = {}, allMessages = []) => {
    const lines = [];
    lines.push('DDG Assistant Inquiry');
    lines.push(`Date: ${new Date().toLocaleString()}`);
    lines.push('');

    // Selections in questionnaire order
    lines.push('Selections:');
    questionnaire.forEach((q) => {
      const answer = preferences[q.question];
      if (answer) {
        const display = typeof answer === 'string' ? answer : JSON.stringify(answer);
        lines.push(`- ${q.question}: ${display}`);
      }
    });

    // Include all user-typed messages
    const userMessages = (allMessages || []).filter(m => m.sender === 'user').map(m => m.text).filter(Boolean);
    if (userMessages.length) {
      lines.push('');
      lines.push('User messages:');
      userMessages.forEach((m, i) => lines.push(`${i + 1}. ${m}`));
    }

    lines.push('');
    lines.push('Please contact the user for next steps.');

    const plain = lines.join('\n');
    return {
      plain,
      encoded: encodeURIComponent(plain)
    };
  };

  const handleSendToTeam = () => {
    // Use stored payload if available, otherwise build from current state
    const built = whatsappPayload || buildWhatsAppMessage(userPreferences, messages);
    const encoded = built.encoded;

    // Copy plain text to clipboard for convenience
    if (navigator?.clipboard && built.plain) {
      try { navigator.clipboard.writeText(built.plain); } catch (e) { /* ignore */ }
    }

    // choose URL based on platform (web vs mobile)
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    const url = `${baseUrl}?phone=${whatsappNumber}&text=${encoded}`;

  window.open(url, '_blank');
  };

  // Form submit handler — handles typed "Other" location input
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputMessage.trim();
    if (!text) return;

    // Add user's typed message
    setMessages(prev => [...prev, { text, sender: 'user', id: Date.now() }]);
    setInputMessage('');

    if (isWaitingForOther) {
      const currentQuestion = questionnaire[currentStep];
      // Save typed location
      setUserPreferences(prev => ({ ...prev, [currentQuestion.question]: text }));
      setIsWaitingForOther(false);

      // Advance to next step and show it
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      if (nextStep < questionnaire.length) {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { text: questionnaire[nextStep].question, sender: 'assistant', id: Date.now() }
          ]);
        }, 400);
      }
    } else if (questionnaire[currentStep]?.isFileInput) {
      const currentQuestion = questionnaire[currentStep];
      // For floor plan input, format the user message
      setMessages(prev => [...prev, { text: `Floor plan: ${text}`, sender: 'user', id: Date.now() }]);
      setUserPreferences(prev => ({ ...prev, [currentQuestion.question]: text }));
      setInputMessage('');

      const completedStep = questionnaire.length;
      setCurrentStep(completedStep);

      const built = buildWhatsAppMessage({
        ...userPreferences,
        [currentQuestion.question]: text
      }, [...messages, { text: `Floor plan: ${text}`, sender: 'user', id: Date.now() }]);
      setWhatsappPayload(built);

      setTimeout(() => {
        const lastMsg = questionnaire[questionnaire.length - 1]?.question || 'Thank you for the details.';
        setMessages(prev => [...prev, { text: lastMsg, sender: 'assistant', id: Date.now() }]);
      }, 400);
    }
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
    : `fixed bottom-28 right-4 md:bottom-32 md:right-8 z-50`;

  return (
    <div className={containerPositionClass}>
      {isOpen ? (
        <div className={`relative ${isMaximized ? 'w-screen h-screen max-w-none rounded-none' : 'w-[92vw] max-w-[380px] h-[72vh] md:w-[380px] md:h-[580px] rounded-2xl'} bg-white shadow-xl flex flex-col border border-gray-200`}>
          {/* Message Tail */}
          {!isMaximized && (
            <div className="absolute bottom-[-9px] right-8 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-200 shadow-sm rounded-sm"></div>
          )}
          {/* Header */}
          <div className={`px-4 pt-3 pb-2 ${isMaximized ? '' : 'rounded-t-2xl'} border-b border-gray-100 bg-white/80 backdrop-blur relative z-30`}>            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow overflow-hidden">
                  <img src={ddgLogo} alt="DDG" className="h-full w-full object-contain" />
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
                  className="h-full bg-gradient-to-r from-black to-gray-700"
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
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Welcome to Interior Design Assistant</h3>
                <p className="mt-2 text-sm text-gray-600 max-w-[320px]">
                  We'll ask a few quick questions and suggest room setups tailored to you.
                </p>
                <button
                  onClick={handleShowMore}
                  className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 font-semibold"
                >
                  <i className="fas fa-play"></i>
                  Get started
                </button>
                <div className="grid grid-cols-2 gap-3 mt-6 w-full">
                  {["Design my living room","Set up a home office"].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={handleShowMore}
                      className="text-left rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 p-3 text-sm text-gray-700 shadow-sm font-semibold"
                    >
                      <div className="flex items-center gap-2 text-gray-800 mb-1">
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
                          ? 'bg-gray-900 text-white border-transparent font-medium'
                          : 'bg-white text-gray-900 border-gray-200'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-[14px] leading-relaxed">{message.text}</div>
                    </div>
                    {message.sender === 'user' ? <UserAvatar /> : <></>}
                  </div>
                ))}

                {/* Inline options as chips under the current question */}
                {currentStep < questionnaire.length && (
                  <div className="mt-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">Choose an option</div>
                    {/* If waiting for "Other", show a text input instead of option chips */}
                    {isWaitingForOther && questionnaire[currentStep] && questionnaire[currentStep].question === 'Which location are you looking for?' ? (
                      <form onSubmit={handleSubmit} className="mt-2 flex gap-2 items-center">
                        <input
                          ref={otherInputRef}
                          type="text"
                          autoFocus={false}
                          enterKeyHint="send"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Type your location..."
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                        <button type="submit" className="px-3 py-2 bg-gray-800 text-white rounded-lg">Send</button>
                      </form>
                    ) : questionnaire[currentStep].isFileInput ? (
                      <form onSubmit={(e) => {
                        e.preventDefault();
                        const text = inputMessage.trim();
                        if (!text) return;
                        // Add user message
                        setMessages(prev => [...prev, { text: `Floor plan: ${text}`, sender: 'user', id: Date.now() }]);
                        // Save to preferences
                        const currentQuestion = questionnaire[currentStep];
                        setUserPreferences(prev => ({ ...prev, [currentQuestion.question]: text }));
                        setInputMessage('');
                        // Mark flow as completed so Send button is shown
                        const completedStep = questionnaire.length; // index beyond last
                        setCurrentStep(completedStep);
                        // Build and store WhatsApp payload including the latest answer
                        const built = buildWhatsAppMessage({
                          ...userPreferences,
                          [currentQuestion.question]: text
                        }, [...messages, { text: `Floor plan: ${text}`, sender: 'user', id: Date.now() }]);
                        setWhatsappPayload(built);
                        // Add assistant final message (submit/thank you) and confirmation
                        setTimeout(() => {
                          // If the questionnaire had a closing message, show it
                          const lastMsg = questionnaire[questionnaire.length - 1]?.question || 'Thank you for the details.';
                          setMessages(prev => [...prev, { text: lastMsg, sender: 'assistant', id: Date.now() }]);
                        }, 400);
                      }} className="mt-2 flex gap-2 items-center">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Share your floor plan details or link..."
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                        <button type="submit" className="px-3 py-2 bg-gray-800 text-white rounded-lg">Send</button>
                      </form>
                    ) : (
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
                    )}
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
          className="professional-chatbot-btn w-14 h-14 md:w-16 md:h-16 rounded-full
            hover:scale-105 active:scale-98
            transition-all duration-200 ease-out
            flex items-center justify-center
            border-2 border-blue-500 hover:border-blue-600
            relative overflow-hidden group
            shadow-sm hover:shadow-md"
        >
          <img src={aiChatbot} alt="AI Assistant" className="robot-red-fill w-8 h-8 md:w-9 md:h-9 object-contain relative z-10" />
          <div className="absolute inset-0 professional-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>



      )}

      <button
  onClick={() =>
    window.open(
      "https://api.whatsapp.com/send?phone=+918618877807&text=How%20can%20the%20Design%20and%20Decor%20team%20help%20you%3F",
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
        
        /* Attractive Red-Dominant Chatbot Button */
        .chatbot-red-gradient-btn {
          background: linear-gradient(135deg, #DC2626 0%, #EF4444 25%, #F87171 50%, #3B82F6 65%, #DC2626 100%);
          background-size: 300% 300%;
          animation: redWaveShift 4s ease-in-out infinite;
          position: relative;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }
        
        .chatbot-red-gradient-btn:hover {
          background: linear-gradient(135deg, #B91C1C 0%, #DC2626 20%, #EF4444 40%, #2563EB 60%, #B91C1C 100%);
          background-size: 300% 300%;
          animation: redWaveShift 2s ease-in-out infinite;
          transform: scale(1.15) translateY(-3px);
          box-shadow: 0 12px 30px rgba(220, 38, 38, 0.5), 0 6px 15px rgba(59, 130, 246, 0.2);
        }
        
        .chatbot-red-gradient-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #FCA5A5, #EF4444, #DC2626, #60A5FA, #EF4444);
          background-size: 400% 400%;
          border-radius: inherit;
          opacity: 0.7;
          z-index: -1;
          animation: redWaveShift 4s ease-in-out infinite;
          filter: blur(2px);
        }
        
        .chatbot-red-gradient-btn:hover::before {
          opacity: 1;
          animation: redWaveShift 2s ease-in-out infinite;
          filter: blur(3px);
        }
        
        .chatbot-red-gradient-btn::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%);
          border-radius: inherit;
          z-index: 1;
        }
        
        @keyframes redWaveShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 25%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 25% 0%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <style jsx>{`
        /* Blue Border Only */
        .professional-chatbot-btn {
          background: transparent;
          border-color: rgb(48,149,213) !important;
        }
        
        .professional-chatbot-btn:hover {
          border-color: rgb(38,129,193) !important;
          box-shadow: 0 0 8px rgba(48,149,213, 0.3);
        }
        
        /* Red Robot Fill Only - Using exact rgb(125,15,15) */
        .robot-red-fill {
          filter: brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7471%) hue-rotate(356deg) brightness(94%) contrast(108%);
          -webkit-filter: brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7471%) hue-rotate(356deg) brightness(94%) contrast(108%);
          transition: all 0.3s ease;
        }
        
        .professional-chatbot-btn:hover .robot-red-fill {
          filter: brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7471%) hue-rotate(356deg) brightness(104%) contrast(118%);
          -webkit-filter: brightness(0) saturate(100%) invert(13%) sepia(95%) saturate(7471%) hue-rotate(356deg) brightness(104%) contrast(118%);
          drop-shadow: 0 0 6px rgba(125,15,15, 0.7);
        }
        
        /* Alternative method using color overlay */
        .robot-red-fill {
          position: relative;
        }
        
        .robot-red-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(125,15,15);
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        
        /* Red Chatbot Icon Filter */
        .chatbot-red-icon {
          filter: sepia(1) hue-rotate(340deg) saturate(3) brightness(0.9);
          -webkit-filter: sepia(1) hue-rotate(340deg) saturate(3) brightness(0.9);
          transition: all 0.3s ease;
        }
        
        .professional-chatbot-btn:hover .chatbot-red-icon {
          filter: sepia(1) hue-rotate(335deg) saturate(4) brightness(1.1) drop-shadow(0 0 8px rgba(220, 38, 38, 0.8));
          -webkit-filter: sepia(1) hue-rotate(335deg) saturate(4) brightness(1.1) drop-shadow(0 0 8px rgba(220, 38, 38, 0.8));
        }
        
        /* Red fill overlay for the robot */
        .chatbot-red-icon {
          position: relative;
        }
        
        .chatbot-red-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #DC2626;
          mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='45'/%3E%3C/svg%3E");
          -webkit-mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='45'/%3E%3C/svg%3E");
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
          opacity: 0.8;
          mix-blend-mode: color;
          transition: opacity 0.3s ease;
        }
        
        .professional-chatbot-btn:hover .chatbot-red-icon::before {
          opacity: 1;
          background: #B91C1C;
        }
        
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