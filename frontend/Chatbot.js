import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(-1); // Start at -1 for language selection
  const [userInput, setUserInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const messagesEndRef = useRef(null);

  // Healthcare professionals database
  const healthcareProfessionals = [
    {
      id: 1,
      name: "Dr. Smith",
      specialty: "Cardiologist",
      expertise: [
        "Heart disease",
        "Hypertension",
        "Heart rhythm disorders",
        "Chest pain",
        "Heart failure"
      ],
      experience: "15 years",
      languages: ["English", "Spanish"],
      availability: "Mon, Wed, Fri",
      urgentCare: true
    },
    {
      id: 2,
      name: "Dr. Johnson",
      specialty: "Dermatologist",
      expertise: [
        "Skin cancer screening",
        "Acne",
        "Eczema",
        "Psoriasis",
        "Skin infections"
      ],
      experience: "10 years",
      languages: ["English"],
      availability: "Tue, Thu",
      urgentCare: false
    },
    {
      id: 3,
      name: "Dr. Williams",
      specialty: "Orthopedist",
      expertise: [
        "Joint pain",
        "Sports injuries",
        "Fractures",
        "Arthritis",
        "Back pain"
      ],
      experience: "20 years",
      languages: ["English", "Mandarin"],
      availability: "Mon, Tue, Thu",
      urgentCare: true
    },
    {
      id: 4,
      name: "Dr. Brown",
      specialty: "Psychiatrist",
      expertise: [
        "Depression",
        "Anxiety",
        "PTSD",
        "Bipolar disorder",
        "Sleep disorders"
      ],
      experience: "12 years",
      languages: ["English", "French"],
      availability: "Wed, Thu, Fri",
      urgentCare: false
    },
    {
      id: 5,
      name: "Dr. Davis",
      specialty: "GP",
      expertise: [
        "Preventive care",
        "General health",
        "Chronic disease management",
        "Minor injuries",
        "Health screenings"
      ],
      experience: "18 years",
      languages: ["English", "Hindi"],
      availability: "Mon-Fri",
      urgentCare: true
    }
  ];

  // Language configurations
  const languages = {
    english: {
      code: 'en',
      name: 'English',
      welcomeMessage: "Hello! Before we begin, please select your preferred language.",
      initialMessage: "Hello! I'm here to help connect you with the right healthcare professional. I'll ask you some questions to understand your needs better. Please provide detailed responses for the most accurate recommendations.",
      analyzing: "Analyzing your responses to find the best healthcare provider match...",
      inputPlaceholder: "Type your message...",
      sendButton: "Send",
      questions: [
        {
          id: 1,
          text: "What is your primary health concern? Please describe your symptoms in detail.",
          type: "open"
        },
        {
          id: 2,
          text: "How long have you been experiencing these symptoms?",
          options: ["Less than a week", "1-4 weeks", "1-6 months", "More than 6 months"]
        },
        {
          id: 3,
          text: "On a scale of 1-10, how severe is your discomfort/pain?",
          options: ["1-3 (Mild)", "4-6 (Moderate)", "7-10 (Severe)"]
        },
        {
          id: 4,
          text: "Do you have any preference for the healthcare provider's language?",
          options: ["English only", "Spanish", "Mandarin", "French", "Hindi", "No preference"]
        },
        {
          id: 5,
          text: "What days of the week work best for you?",
          options: ["Monday/Wednesday/Friday", "Tuesday/Thursday", "Any weekday", "Needs urgent care"]
        }
      ],
      proceedOptions: ["Yes, schedule appointment", "No, I have more questions", "I'd like a different recommendation"]
    },
    spanish: {
      code: 'es',
      name: 'Español',
      welcomeMessage: "¡Hola! Antes de comenzar, seleccione su idioma preferido.",
      initialMessage: "¡Hola! Estoy aquí para ayudarte a conectarte con el profesional de la salud adecuado. Te haré algunas preguntas para entender mejor tus necesidades. Por favor, proporciona respuestas detalladas para obtener las recomendaciones más precisas.",
      analyzing: "Analizando tus respuestas para encontrar el mejor profesional de la salud...",
      inputPlaceholder: "Escribe tu mensaje...",
      sendButton: "Enviar",
      questions: [
        {
          id: 1,
          text: "¿Cuál es tu principal problema de salud? Por favor, describe tus síntomas en detalle.",
          type: "open"
        },
        {
          id: 2,
          text: "¿Cuánto tiempo has estado experimentando estos síntomas?",
          options: ["Menos de una semana", "1-4 semanas", "1-6 meses", "Más de 6 meses"]
        },
        {
          id: 3,
          text: "En una escala del 1 al 10, ¿qué tan severo es tu malestar/dolor?",
          options: ["1-3 (Leve)", "4-6 (Moderado)", "7-10 (Severo)"]
        },
        {
          id: 4,
          text: "¿Tienes alguna preferencia por el idioma del profesional de la salud?",
          options: ["Solo inglés", "Español", "Mandarín", "Francés", "Hindi", "Sin preferencia"]
        },
        {
          id: 5,
          text: "¿Qué días de la semana te funcionan mejor?",
          options: ["Lunes/Miércoles/Viernes", "Martes/Jueves", "Cualquier día entre semana", "Necesito atención urgente"]
        }
      ],
      proceedOptions: ["Sí, programar cita", "No, tengo más preguntas", "Quisiera una recomendación diferente"]
    },
    afrikaans: {
      code: 'af',
      name: 'Afrikaans',
      welcomeMessage: "Hallo! Voor ons begin, kies asseblief u voorkeur taal.",
      initialMessage: "Hallo! Ek is hier om jou te help om met die regte gesondheidswerker in verbinding te kom. Ek sal jou 'n paar vrae vra om jou behoeftes beter te verstaan. Verskaf asseblief gedetailleerde antwoorde vir die akkuraatste aanbevelings.",
      analyzing: "Besig om jou antwoorde te ontleed om die beste gesondheidsorg verskaffer te vind...",
      inputPlaceholder: "Tik jou boodskap...",
      sendButton: "Stuur",
      questions: [
        {
          id: 1,
          text: "Wat is jou primêre gesondheidsprobleem? Beskryf asseblief jou simptome in detail.",
          type: "open"
        },
        {
          id: 2,
          text: "Hoe lank ervaar jy al hierdie simptome?",
          options: ["Minder as 'n week", "1-4 weke", "1-6 maande", "Meer as 6 maande"]
        },
        {
          id: 3,
          text: "Op 'n skaal van 1-10, hoe ernstig is jou ongemak/pyn?",
          options: ["1-3 (Lig)", "4-6 (Matig)", "7-10 (Ernstig)"]
        },
        {
          id: 4,
          text: "Het jy enige voorkeur vir die gesondheidsverskaffer se taal?",
          options: ["Slegs Engels", "Spaans", "Mandaryns", "Frans", "Hindi", "Geen voorkeur"]
        },
        {
          id: 5,
          text: "Watter dae van die week werk die beste vir jou?",
          options: ["Maandag/Woensdag/Vrydag", "Dinsdag/Donderdag", "Enige weeksdag", "Benodig dringende sorg"]
        }
      ],
      proceedOptions: ["Ja, maak 'n afspraak", "Nee, ek het meer vrae", "Ek wil 'n ander aanbeveling hê"]
    }
  };

  // API configuration
  const API_KEY = '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';
  const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        text: "Please select your preferred language / Seleccione su idioma preferido / Kies asseblief u voorkeur taal",
        isBot: true,
        options: Object.values(languages).map(lang => lang.name)
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAnalysisError = () => {
    const errorMessages = {
      english: {
        text: "I apologize, but I'm having trouble analyzing your responses. Would you like to:",
        options: [
          "Start over",
          "Speak with our support team",
          "Try again"
        ]
      },
      spanish: {
        text: "Me disculpo, pero estoy teniendo problemas para analizar tus respuestas. ¿Te gustaría:",
        options: [
          "Empezar de nuevo",
          "Hablar con nuestro equipo de soporte",
          "Intentar de nuevo"
        ]
      },
      afrikaans: {
        text: "Ek vra om verskoning, maar ek ondervind probleme met die ontleding van jou antwoorde. Wil jy:",
        options: [
          "Begin weer",
          "Praat met ons ondersteuningspan",
          "Probeer weer"
        ]
      }
    };

    const errorMessage = selectedLanguage ?
      errorMessages[selectedLanguage.code] :
      errorMessages.english;

    setMessages(prev => [...prev, {
      text: errorMessage.text,
      isBot: true,
      options: errorMessage.options
    }]);
  };

  const handleLanguageSelection = (language) => {
    const selectedLang = Object.entries(languages).find(([_, lang]) => lang.name === language)[1];
    setSelectedLanguage(selectedLang);
    setCurrentQuestion(0);
    setMessages([
      {
        text: selectedLang.initialMessage,
        isBot: true
      },
      {
        text: selectedLang.questions[0].text,
        isBot: true,
        options: selectedLang.questions[0].options,
        type: selectedLang.questions[0].type
      }
    ]);
  };

  const handleErrorOption = (option) => {
    switch (option) {
      case "Start over":
      case "Empezar de nuevo":
      case "Begin weer":
        setCurrentQuestion(0);
        setConversation([]);
        setMessages([
          {
            text: selectedLanguage.initialMessage,
            isBot: true
          },
          {
            text: selectedLanguage.questions[0].text,
            isBot: true,
            options: selectedLanguage.questions[0].options,
            type: selectedLanguage.questions[0].type
          }
        ]);
        break;

      case "Speak with our support team":
      case "Hablar con nuestro equipo de soporte":
      case "Praat met ons ondersteuningspan":
        setMessages(prev => [...prev, {
          text: selectedLanguage ?
            selectedLanguage.code === 'es' ?
              "Serás redirigido a nuestro equipo de soporte en un momento." :
              selectedLanguage.code === 'af' ?
                "Jy sal binnekort na ons ondersteuningspan herlei word." :
                "You will be redirected to our support team shortly." :
            "You will be redirected to our support team shortly.",
          isBot: true
        }]);
        break;

      case "Try again":
      case "Intentar de nuevo":
      case "Probeer weer":
        analyzeResponses(conversation);
        break;

      default:
        break;
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, isBot: false }];
    setMessages(newMessages);

    const updatedConversation = [...conversation, { role: "user", content: userInput }];
    setConversation(updatedConversation);

    if (currentQuestion < selectedLanguage.questions.length - 1) {
      setTimeout(() => {
        setMessages([...newMessages, {
          text: selectedLanguage.questions[currentQuestion + 1].text,
          isBot: true,
          options: selectedLanguage.questions[currentQuestion + 1].options,
          type: selectedLanguage.questions[currentQuestion + 1].type
        }]);
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      analyzeResponses(updatedConversation);
    }

    setUserInput('');
  };

  const handleOptionClick = (option) => {
    if (currentQuestion === -1) {
      handleLanguageSelection(option);
      return;
    }

    // Check if this is an error handling option
    const allErrorOptions = [
      "Start over", "Speak with our support team", "Try again",
      "Empezar de nuevo", "Hablar con nuestro equipo de soporte", "Intentar de nuevo",
      "Begin weer", "Praat met ons ondersteuningspan", "Probeer weer"
    ];

    // If it's an error option, handle it and return
    if (allErrorOptions.includes(option)) {
      handleErrorOption(option);
      return;
    }

    // Handle regular option selection
    const newMessages = [...messages, { text: option, isBot: false }];
    setMessages(newMessages);

    const updatedConversation = [...conversation, { role: "user", content: option }];
    setConversation(updatedConversation);

    if (currentQuestion < selectedLanguage.questions.length - 1) {
      setTimeout(() => {
        setMessages([...newMessages, {
          text: selectedLanguage.questions[currentQuestion + 1].text,
          isBot: true,
          options: selectedLanguage.questions[currentQuestion + 1].options,
          type: selectedLanguage.questions[currentQuestion + 1].type
        }]);
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      analyzeResponses(updatedConversation);
    }
  };

  const analyzeResponses = async (conversationHistory) => {
    setIsAnalyzing(true);

    try {
      const systemPrompt = `You are a medical professional matching assistant. Based on the patient's responses, recommend the most suitable healthcare provider from our database. Respond in ${selectedLanguage.name} and format your response using markdown.

Available healthcare professionals:
${healthcareProfessionals.map(doc => `
${doc.name} (${doc.specialty}):
- Expertise: ${doc.expertise.join(', ')}
- Experience: ${doc.experience}
- Languages: ${doc.languages.join(', ')}
- Availability: ${doc.availability}
- Urgent Care: ${doc.urgentCare ? 'Yes' : 'No'}
`).join('\n')}

Please provide your recommendation in this format:
# Recommended Provider

## Analysis
1. Primary Match Criteria
   - List key matching factors

2. Detailed Assessment
   - Provider's relevant expertise
   - Patient needs alignment
   - Scheduling compatibility

3. Recommendation Basis
   - Key decision factors
   - Urgency assessment

## Next Steps`;

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...conversationHistory,
            { role: "user", content: "Based on the patient's responses, who is the most suitable healthcare provider and why? Please format the response as specified." }
          ],
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      setMessages(prev => [...prev,
      {
        text: aiResponse,
        isBot: true,
        isMarkdown: true
      },
      {
        text: "Would you like to proceed with this recommendation?",
        isBot: true,
        options: selectedLanguage.proceedOptions
      }
      ]);

    } catch (error) {
      console.error('Error:', error);
      handleAnalysisError();
    }

    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-2xl mx-auto h-[600px] bg-white rounded-lg shadow-lg flex flex-col">
      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg">
        <h2 className="text-xl font-semibold">Chatbot</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`rounded-lg p-4 max-w-[80%] ${message.isBot ? 'bg-gray-100' : 'bg-blue-100'
                }`}>
                <div className="font-semibold mb-1">
                  {message.isBot ? 'Assistant' : 'You'}
                </div>
                {message.isMarkdown ? (
                  <div className="markdown-content prose prose-sm max-w-none">
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                ) : (
                  <p>{message.text}</p>
                )}
                {message.options && (
                  <div className="mt-2 space-y-2">
                    {message.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className="w-full p-2 text-left rounded border border-gray-300 hover:bg-gray-100 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isAnalyzing && (
            <div className="text-center text-gray-500">
              {selectedLanguage?.analyzing || "Analyzing your responses..."}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={selectedLanguage?.inputPlaceholder || "Type your message..."}
            className="flex-1 p-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {selectedLanguage?.sendButton || "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;