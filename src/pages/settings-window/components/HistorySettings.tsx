interface HistorySettingsProps {
    isDarkMode: boolean;
}

export function HistorySettings({ isDarkMode }: HistorySettingsProps) {
    return (
        <div className="p-8">
            <h1 className="text-[24px] text-slate-900 dark:text-white mb-8">履歴</h1>
            <div className="text-slate-500 dark:text-slate-400">
                履歴設定は現在開発中です。
            </div>
        </div>
    );
}
