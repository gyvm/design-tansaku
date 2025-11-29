import { useState } from 'react';
import { Info, Keyboard, AlertTriangle } from 'lucide-react';

interface GeneralSettingsProps {
  isDarkMode: boolean;
}

export function GeneralSettings({ isDarkMode }: GeneralSettingsProps) {
  const [proofreadingLevel, setProofreadingLevel] = useState<'light' | 'standard' | 'strict'>('standard');
  const [language, setLanguage] = useState('japanese');
  const [autoCopy, setAutoCopy] = useState(true);

  // Shortcuts state
  const [isRecording, setIsRecording] = useState(false);
  const [currentShortcut, setCurrentShortcut] = useState('⌘ + Shift + P');

  const handleRecordShortcut = () => {
    setIsRecording(true);
    // Simulate recording for demo purposes
    setTimeout(() => {
      setIsRecording(false);
    }, 2000);
  };

  return (
    <div className="p-8">
      <h1 className="text-[24px] text-slate-900 dark:text-white mb-8">一般</h1>

      {/* Proofreading Level */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-4">校正レベル</h3>

          <div className="flex bg-slate-200/60 dark:bg-slate-700/40 rounded-lg p-1">
            {(['light', 'standard', 'strict'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setProofreadingLevel(level)}
                className={`flex-1 py-2 px-4 rounded-md text-[13px] transition-all duration-200 ${proofreadingLevel === level
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {level === 'light' && '軽量'}
                {level === 'standard' && '標準'}
                {level === 'strict' && '厳格'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Language Preference */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-4">言語設定</h3>

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
                校正されたテキストを自動的にクリップボードにコピーします
              </p>
            </div>
            <button
              onClick={() => setAutoCopy(!autoCopy)}
              className={`relative w-12 h-7 rounded-full transition-colors duration-200 ${autoCopy ? 'bg-slate-500 dark:bg-slate-400' : 'bg-slate-300 dark:bg-slate-600'
                }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${autoCopy ? 'translate-x-6' : 'translate-x-1'
                  }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Shortcuts Section */}
      <div className="mb-6">
        <h2 className="text-[18px] text-slate-900 dark:text-white mb-4 mt-8">ショートカット</h2>

        {/* Current Shortcut Display */}
        <div className="mb-6">
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
            <h3 className="text-[15px] text-slate-900 dark:text-white mb-4">現在のショートカット</h3>

            <div className="flex items-center justify-center py-8 px-6 bg-slate-100/60 dark:bg-slate-700/30 rounded-lg border border-slate-200 dark:border-slate-600">
              <div className="flex items-center gap-3">
                <Keyboard className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                <span className="text-[28px] text-slate-900 dark:text-white tracking-wider">
                  {isRecording ? '...' : currentShortcut}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Record New Shortcut */}
        <div className="mb-6">
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
            <h3 className="text-[15px] text-slate-900 dark:text-white mb-4">ショートカットを変更</h3>

            <button
              onClick={handleRecordShortcut}
              disabled={isRecording}
              className={`w-full px-6 py-3 rounded-lg text-[13px] transition-all duration-200 ${isRecording
                ? 'bg-slate-400 dark:bg-slate-600 text-white cursor-not-allowed'
                : 'bg-slate-500 dark:bg-slate-600 text-white hover:bg-slate-600 dark:hover:bg-slate-500 shadow-sm hover:shadow-md'
                }`}
            >
              {isRecording ? '記録中... キーの組み合わせを押してください' : 'ショートカットを記録'}
            </button>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 text-center">
              ボタンをクリックして、希望のキーの組み合わせを押してください
            </p>
          </div>
        </div>

        {/* Shortcut Examples */}
        <div className="mb-6">
          <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
            <h3 className="text-[15px] text-slate-900 dark:text-white mb-4">推奨ショートカット</h3>

            <div className="space-y-2">
              {[
                { keys: '⌘ + Shift + P', desc: '推奨設定' },
                { keys: '⌘ + Option + P', desc: '代替設定' },
                { keys: '⌃ + Shift + P', desc: 'Controlキーを使用' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100/60 dark:hover:bg-slate-700/30 transition-colors cursor-pointer"
                >
                  <span className="text-[13px] text-slate-600 dark:text-slate-400">{item.desc}</span>
                  <span className="text-[13px] text-slate-900 dark:text-white tracking-wide">
                    {item.keys}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning Note */}
        <div className="bg-amber-50/60 dark:bg-amber-900/20 backdrop-blur-sm rounded-xl p-4 border border-amber-200/60 dark:border-amber-800/60">
          <div className="flex gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] text-amber-900 dark:text-amber-200">
                他のアプリケーションと競合するショートカットは避けてください。システムショートカットとの重複は動作しない場合があります。
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
