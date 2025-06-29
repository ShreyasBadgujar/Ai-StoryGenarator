import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { jsPDF } from 'jspdf';

const StoryGeneration = () => {
  const [title, setTitle] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [message, setMessage] = useState('');
  const [wordCount, setWordCount] = useState(300);
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState('');
  const [  response,setResponse]=useState('')

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const generateStory = async () => {
    setLoading(true);
    setStory('');
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              { text: "hi\n" },
            ],
          },
          {
            role: "model",
            parts: [
              { text: "Hi there! What can I do for you today?\n" },
            ],
          },
        ],
      });

      const userPrompt = `Generate a story with the title "${title}". The main character is described as: ${characterDescription}. Additionally, ${message}. The story should be ${wordCount} words long in simple vocabulary.`;

      const result = await chatSession.sendMessage(userPrompt);
      setStory(result.response.text());
    } catch (error) {
      console.error('Error generating story:', error);
      setStory('An error occurred while generating the story. Please try again.');
    }
    setLoading(false);
  };
  
  const fetchStoryAndImage = async (retryCount = 3) => {
  setLoading(true);
  setImageSrc(null);
  setError('');
  setResponse('');

  try {
    
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt); // assume prompt is defined
    const response = await result.response;
    const storyText = await response.text();

    setResponse(storyText); 
    const imageResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GEMINI_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: storyText }),
      }
    );

    if (!imageResponse.ok) {
      const errorDetail = await imageResponse.json();
      console.error('Hugging Face Error detail:', errorDetail);
      throw new Error(`HTTP error! status: ${imageResponse.status}`);
    }

    const blob = await imageResponse.blob();
    const imageUrl = URL.createObjectURL(blob);
    setImageSrc(imageUrl);
  } catch (error) {
    console.error('Error generating story/image:', error);
    if (retryCount > 0) {
      console.log(`Retrying... (${3 - retryCount + 1})`);
      fetchStoryAndImage(retryCount - 1);
    } else {
      setError('An error occurred while generating the story or image. Please try again.');
    }
  }

  setLoading(false);
};

  // const fetchImage = async (retryCount = 3) => {
  //   setLoading(true);
  //   setImageSrc(null);
  //   setError('');

  //   try {
  //     const response = await fetch(
  //       "https://api-inference.huggingface.co/models/mann-e/Mann-E_Dreams",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ inputs: story }),
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorDetail = await response.json();
  //       console.error('Error detail:', errorDetail);
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const blob = await response.blob();
  //     const imageUrl = URL.createObjectURL(blob);
  //     setImageSrc(imageUrl);
  //   } catch (error) {
  //     console.error('Error generating image:', error);
  //     if (retryCount > 0) {
  //       console.log(`Retrying... (${3 - retryCount + 1})`);
  //       fetchImage(retryCount - 1);
  //     } else {
  //       setError('An error occurred while generating the image. Please try again.');
  //     }
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    if (story) {
      fetchStoryAndImage();
    }
  }, [story]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(title, 20, 30);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(story, 20, 50, { maxWidth: 170 });

    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        doc.addPage();
        doc.addImage(img, 'JPEG', 15, 40, 180, 160); // Adjust the dimensions and position as needed
        doc.save(`${title}.pdf`);
      };
    } else {
      doc.save(`${title}.pdf`);
    }
  };

 return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-300 to-indigo-300">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center  my-12 mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-1 py-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Story Weaver
          </h1>
          <p className="text-xl text-gray-600 mt-10 max-w-2xl mx-auto">
            Transform your imagination into captivating stories with AI-powered creativity
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
          <div className="grid gap-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label htmlFor="title" className="flex items-center text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                Story Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-3 text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                placeholder="Enter an enchanting title for your story..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Character Description */}
            <div className="space-y-2">
              <label htmlFor="characterDescription" className="flex items-center text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Main Character
              </label>
              <input
                type="text"
                id="characterDescription"
                className="w-full px-4 py-3 text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                placeholder="Describe your protagonist (e.g., a brave young knight, a curious little fox)..."
                value={characterDescription}
                onChange={(e) => setCharacterDescription(e.target.value)}
              />
            </div>

            {/* Additional Details */}
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Story Details & Plot
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 text-gray-900 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                placeholder="Add plot points, settings, themes, or any specific elements you'd like in your story..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Word Count */}
            <div className="space-y-2">
              <label htmlFor="wordCount" className="flex items-center text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Word Count: {wordCount}
              </label>
              <input
                type="range"
                id="wordCount"
                className="w-full h-2 bg-gradient-to-r from-emerald-200 to-emerald-400 rounded-lg appearance-none cursor-pointer slider"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                min="50"
                max="1000"
                step="50"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>50 words</span>
                <span>1000 words</span>
              </div>
            </div>

            {/* Note about image loading */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-sm text-amber-700">
                  <strong>Note:</strong> Image generation may take 1-2 minutes due to server processing time.
                </p>
              </div>
            </div>

            {/* Generate Button */}
            <button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              onClick={generateStory}
              disabled={!title || !characterDescription || !message || loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Crafting Your Story...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Generate Story
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Loading Animation */}
        {loading && !story && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <div className="animate-pulse">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                <div className="h-6 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full w-48"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-full"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-5/6"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-4/5"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-full"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        )}

        {/* Story Display */}
        {story && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {title}
              </h2>
              <button
                onClick={downloadPDF}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download PDF
              </button>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap font-medium">
                {story}
              </p>
            </div>
          </div>
        )}

        {/* Generated Image */}
        {imageSrc && (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Story Illustration
            </h3>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={imageSrc} 
                alt="AI Generated Story Illustration" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryGeneration;

