import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Buttons } from './components/buttons';
import { InputControls } from './components/inputs';
import { InformationDisplay } from './components/information';
import { Navigation } from './components/navigation';
import { Containers } from './components/containers';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-[#1c1c1e]' : 'bg-[#f5f5f7]'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 border-b ${darkMode ? 'bg-[#1c1c1e]/80 border-white/10' : 'bg-white/80 border-black/10'} backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className={`text-3xl tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>TypoZero</h1>
            <p className={`mt-1 ${darkMode ? 'text-white/60' : 'text-black/60'}`}>macOS Component Library</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full transition-all ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/15 text-white' 
                : 'bg-black/5 hover:bg-black/10 text-black'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        <Buttons darkMode={darkMode} />
        <InputControls darkMode={darkMode} />
        <InformationDisplay darkMode={darkMode} />
        <Navigation darkMode={darkMode} />
        <Containers darkMode={darkMode} />
      </div>
    </div>
  );
}
