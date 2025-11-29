import { Cpu } from 'lucide-react';

interface LocalAISettingsProps {
    isDarkMode: boolean;
}

export function LocalAISettings({ isDarkMode }: LocalAISettingsProps) {
    return (
        <div className="p-8">
            <h1 className="text-[24px] text-slate-900 dark:text-white mb-2">ローカルAI</h1>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-8">
                Local AI Configuration
            </p>

            <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 dark:border-slate-700/60 flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                </div>
                <h3 className="text-[15px] text-slate-900 dark:text-white mb-1">Coming Soon</h3>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 text-center max-w-xs">
                    Local AI settings will be available in a future update.
                </p>
            </div>
        </div>
    );
}
