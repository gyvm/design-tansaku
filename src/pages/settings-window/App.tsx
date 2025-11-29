import { useState } from 'react';
import { GeneralSettings } from './components/GeneralSettings';
import { ShortcutsSettings } from './components/ShortcutsSettings';
import { LocalAISettings } from './components/LocalAISettings';
import { CustomPromptSettings } from './components/CustomPromptSettings';
import { DictionarySettings } from './components/DictionarySettings';
import { AboutSettings } from './components/AboutSettings';

type Screen = 'general' | 'shortcuts' | 'local-ai' | 'custom-prompt' | 'dictionary' | 'about';

type NavItem = {
  type: 'item';
  id: Screen;
  label: string;
  sublabel?: string;
};

type NavHeader = {
  type: 'header';
  label: string;
};

type NavEntry = NavItem | NavHeader;

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('general');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navStructure: NavEntry[] = [
    { type: 'item', id: 'general', label: '一般', sublabel: 'General' },
    { type: 'item', id: 'shortcuts', label: 'ショートカット', sublabel: 'Shortcuts' },
    { type: 'header', label: '拡張設定' },
    { type: 'item', id: 'local-ai', label: 'ローカルAI', sublabel: 'Local AI' },
    { type: 'item', id: 'custom-prompt', label: 'カスタムプロンプト', sublabel: 'Custom Prompt' },
    { type: 'item', id: 'dictionary', label: '辞書・置換', sublabel: 'Dictionary' },
    { type: 'header', label: 'TypZeroについて' },
    { type: 'item', id: 'about', label: 'このアプリについて', sublabel: 'About' },
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-8 right-8 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all"
        >
          {isDarkMode ? '☀️' : '🌙'} {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>

        {/* Window Container */}
        <div className="w-[700px] h-[500px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden">
          {/* Traffic Light Buttons */}
          <div className="h-[52px] flex items-center px-4 border-b border-slate-200/60 dark:border-slate-700/60 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
            <div className="flex-1 text-center pr-16">
              <span className="text-[13px] text-slate-700 dark:text-slate-300">TypoZero</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[calc(100%-52px)]">
            {/* Sidebar */}
            <div className="w-[180px] bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-md border-r border-slate-200/60 dark:border-slate-700/60 p-3">
              <nav className="space-y-1">
                {navStructure.map((entry, index) => {
                  if (entry.type === 'header') {
                    return (
                      <div key={`header-${index}`} className="px-3 pt-4 pb-2">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {entry.label}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={entry.id}
                      onClick={() => setActiveScreen(entry.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 ${activeScreen === entry.id
                          ? 'bg-slate-400/30 dark:bg-slate-600/40 text-slate-900 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-300/20 dark:hover:bg-slate-700/30'
                        }`}
                    >
                      <div className="text-[13px]">{entry.label}</div>
                      {entry.sublabel && (
                        <div className="text-[11px] opacity-60">{entry.sublabel}</div>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {activeScreen === 'general' && <GeneralSettings isDarkMode={isDarkMode} />}
              {activeScreen === 'shortcuts' && <ShortcutsSettings isDarkMode={isDarkMode} />}
              {activeScreen === 'local-ai' && <LocalAISettings isDarkMode={isDarkMode} />}
              {activeScreen === 'custom-prompt' && <CustomPromptSettings isDarkMode={isDarkMode} />}
              {activeScreen === 'dictionary' && <DictionarySettings isDarkMode={isDarkMode} />}
              {activeScreen === 'about' && <AboutSettings isDarkMode={isDarkMode} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
