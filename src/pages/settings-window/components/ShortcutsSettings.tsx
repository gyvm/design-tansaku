import { useState } from 'react';
import { Keyboard, AlertTriangle } from 'lucide-react';

interface ShortcutsSettingsProps {
  isDarkMode: boolean;
}

export function ShortcutsSettings({ isDarkMode }: ShortcutsSettingsProps) {
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
      <h1 className="text-[24px] text-slate-900 dark:text-white mb-2">ショートカット</h1>
      <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-8">
        Keyboard shortcut settings
      </p>

      {/* Current Shortcut Display */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-1">現在のショートカット</h3>
          <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-4">
            Current Shortcut Key
          </p>
          
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
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-1">ショートカットを変更</h3>
          <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-4">
            Record New Shortcut
          </p>
          
          <button
            onClick={handleRecordShortcut}
            disabled={isRecording}
            className={`w-full px-6 py-3 rounded-lg text-[13px] transition-all duration-200 ${
              isRecording
                ? 'bg-slate-400 dark:bg-slate-600 text-white cursor-not-allowed'
                : 'bg-slate-500 dark:bg-slate-600 text-white hover:bg-slate-600 dark:hover:bg-slate-500 shadow-sm hover:shadow-md'
            }`}
          >
            {isRecording ? '記録中... Press any key combination' : 'ショートカットを記録 / Record Shortcut'}
          </button>
          
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 text-center">
            Click the button and press your desired key combination
          </p>
        </div>
      </div>

      {/* Shortcut Examples */}
      <div className="mb-6">
        <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60">
          <h3 className="text-[15px] text-slate-900 dark:text-white mb-4">推奨ショートカット</h3>
          
          <div className="space-y-2">
            {[
              { keys: '⌘ + Shift + P', desc: 'Recommended default' },
              { keys: '⌘ + Option + P', desc: 'Alternative option' },
              { keys: '⌃ + Shift + P', desc: 'Control-based option' },
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
            <p className="text-[12px] text-amber-900 dark:text-amber-200 mt-2">
              Avoid shortcuts that conflict with other applications. Overlapping with system shortcuts may not work properly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
