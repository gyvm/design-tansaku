import { useState } from 'react';
import { Info } from 'lucide-react';

interface GeneralSettingsProps {
  isDarkMode: boolean;
}

export function GeneralSettings({ isDarkMode }: GeneralSettingsProps) {
  const [proofreadingLevel, setProofreadingLevel] = useState<'light' | 'standard' | 'strict'>('standard');
  const [language, setLanguage] = useState('japanese');
  const [autoCopy, setAutoCopy] = useState(true);

  return (
    <div className="p-8">
      <h1 className="text-[24px] text-slate-900 dark:text-white mb-2">一般</h1>
      <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-8">
        Basic settings for TypoZero
      </p>

      {/* Proofreading Level */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-1">校正レベル</h3>
          <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-4">
            Proofreading Level
          </p>
          
          <div className="flex bg-slate-200/60 dark:bg-slate-700/40 rounded-lg p-1">
            {(['light', 'standard', 'strict'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setProofreadingLevel(level)}
                className={`flex-1 py-2 px-4 rounded-md text-[13px] transition-all duration-200 ${
                  proofreadingLevel === level
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {level === 'light' && 'Light'}
                {level === 'standard' && 'Standard'}
                {level === 'strict' && 'Strict'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Language Preference */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-1">言語設定</h3>
          <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-4">
            Language Preference
          </p>
          
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500"
          >
            <option value="japanese">日本語 (Japanese)</option>
            <option value="english">English</option>
            <option value="chinese">中文 (Chinese)</option>
            <option value="korean">한국어 (Korean)</option>
          </select>
        </div>
      </div>

      {/* Auto-copy */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[15px] text-slate-900 dark:text-white mb-1">自動コピー</h3>
              <p className="text-[12px] text-slate-500 dark:text-slate-400">
                Automatically copy corrected text
              </p>
            </div>
            <button
              onClick={() => setAutoCopy(!autoCopy)}
              className={`relative w-12 h-7 rounded-full transition-colors duration-200 ${
                autoCopy ? 'bg-slate-500 dark:bg-slate-400' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  autoCopy ? 'translate-x-6' : 'translate-x-1'
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50/60 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-4 border border-blue-200/60 dark:border-blue-800/60">
        <div className="flex gap-3">
          <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] text-blue-900 dark:text-blue-200">
              TypoZeroは選択されたレベルに基づいて文章を校正します。Lightは軽微な誤字のみ、Standardは一般的な誤り、Strictは厳格な文法チェックを行います。
            </p>
            <p className="text-[12px] text-blue-900 dark:text-blue-200 mt-2">
              TypoZero proofreads based on the selected level. Light checks minor typos, Standard checks common errors, and Strict performs rigorous grammar checking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
