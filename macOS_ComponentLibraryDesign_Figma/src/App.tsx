import React, { ReactNode, useMemo, useState } from 'react';
import {
  AudioLines,
  ChevronRight,
  FileAudio,
  FileOutput,
  LayoutDashboard,
  Moon,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  UploadCloud,
  Wand2,
  Waves,
} from 'lucide-react';

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

function Section({ title, description, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#3A6FF7] to-[#7E8BFE] text-white flex items-center justify-center shadow-lg shadow-[#3A6FF7]/15">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-[#2B2D31] dark:text-white">{title}</h2>
            {description && <p className="text-sm text-[#4B4F56] dark:text-white/70">{description}</p>}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  tone?: 'primary' | 'muted';
  className?: string;
  dark?: boolean;
}

function Card({ title, subtitle, children, tone = 'muted', className = '', dark }: CardProps) {
  const isDark = dark ?? false;
  const surface = tone === 'primary'
    ? isDark
      ? 'bg-gradient-to-br from-[#1A1B23] to-[#12131A] border-white/10'
      : 'bg-gradient-to-br from-white to-[#EAF0FF] border-[#9FB4FF]/60'
    : isDark
      ? 'bg-white/5 border-white/10'
      : 'bg-white border-black/5';

  return (
    <div
      className={`rounded-2xl border shadow-sm shadow-black/5 dark:shadow-black/40 p-6 ${surface} ${
        isDark ? 'text-white' : 'text-[#2B2D31]'
      } ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-4 space-y-1">
          {title && <h3 className="text-base font-semibold tracking-tight">{title}</h3>}
          {subtitle && <p className="text-sm text-[#4B4F56] dark:text-white/70">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

const typographyScale = [
  { label: 'Title', size: '48px/1.1', weight: '700', example: 'Auralog — AI meeting minutes' },
  { label: 'H1', size: '36px/1.2', weight: '700', example: 'Automated insights' },
  { label: 'H2', size: '28px/1.25', weight: '600', example: 'Transcript workspace' },
  { label: 'H3', size: '22px/1.3', weight: '600', example: 'Processing status' },
  { label: 'H4', size: '18px/1.35', weight: '600', example: 'Metadata & tags' },
  { label: 'Body', size: '16px/1.6', weight: '500', example: 'Readable narrative text for transcripts and notes.' },
  { label: 'Caption', size: '13px/1.5', weight: '500', example: 'Timestamps, helper copy, and footnotes.' },
];

const colorTokens = [
  { name: 'Primary', value: '#3A6FF7', role: 'Actions, key accents' },
  { name: 'Primary Gradient', value: 'linear-gradient(135deg, #3A6FF7, #6B5BFF)', role: 'Accent backgrounds & highlights' },
  { name: 'Background', value: '#F5F6F7', role: 'App shell light' },
  { name: 'Surface', value: '#FFFFFF', role: 'Cards, modals, drawers' },
  { name: 'Text', value: '#2B2D31', role: 'Primary text color' },
  { name: 'Border', value: '#D9DCE1', role: 'Dividers & inputs' },
  { name: 'Success', value: '#35C27F', role: 'Completed processing' },
  { name: 'Warning', value: '#F6A53B', role: 'Long processing / caution' },
  { name: 'Error', value: '#E66A6A', role: 'Failed uploads' },
];

const spacingScale = [4, 8, 12, 16, 20, 24, 32];

const responsiveRules = [
  { label: 'Narrow (960px)', detail: 'Sidebar collapses to icons, cards switch to single column, toolbar condenses to overflow menu.' },
  { label: 'Standard (1280px)', detail: 'Two-column layouts for transcript + insights, 3–4 card columns in dashboards.' },
  { label: 'Wide (1600px+)', detail: 'Breathing room with max-width containers, persistent filters, and expanded waveform timeline.' },
];

const buttons = [
  { label: 'Primary', style: 'bg-[#3A6FF7] text-white shadow-lg shadow-[#3A6FF7]/20 hover:translate-y-[-1px]' },
  { label: 'Secondary', style: 'border border-[#3A6FF7]/30 text-[#3A6FF7] bg-white hover:bg-[#3A6FF7]/5' },
  { label: 'Ghost', style: 'text-[#2B2D31] dark:text-white hover:bg-black/5 dark:hover:bg-white/5' },
  { label: 'Destructive', style: 'bg-[#F05252]/10 text-[#E66A6A] border border-[#E66A6A]/30 hover:bg-[#F05252]/15' },
  { label: 'Icon', style: 'h-10 w-10 rounded-full bg-[#3A6FF7]/10 text-[#3A6FF7] hover:bg-[#3A6FF7]/15 flex items-center justify-center' },
];

const systemComponents = [
  { title: 'Modal', desc: 'Soft overlay, centered card with 6–10px radius and elevated shadow.', icon: <Wand2 className="w-4 h-4" /> },
  { title: 'Toast', desc: 'Anchored bottom-right, subtle blur with color-coded accents for states.', icon: <Sparkles className="w-4 h-4" /> },
  { title: 'Progress', desc: 'Both linear and circular with smooth 1s ease animations.', icon: <Waves className="w-4 h-4" /> },
];

const screenCards = [
  {
    title: 'Onboarding / Welcome',
    subtitle: 'Introduce the app and guide imports',
    accent: 'from-[#3A6FF7] to-[#6B5BFF]',
    body: [
      'Centered hero with Auralog logomark and modern illustration',
      'Primary CTA: Import Audio; Secondary: View Sample Project',
      'Subtext: “Convert speech into structured knowledge.”',
    ],
    icon: <UploadCloud className="w-5 h-5" />,
  },
  {
    title: 'Dashboard',
    subtitle: 'Past sessions and projects',
    accent: 'from-[#7E8BFE] to-[#3A6FF7]',
    body: [
      'Sidebar navigation with Dashboard / Projects / Settings / Help',
      'Grid of session cards with duration, speaker count, and transcript status',
      'Sorting chips and quick actions: New Import, Create Folder',
    ],
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    title: 'Recording Import',
    subtitle: 'Upload and configure processing',
    accent: 'from-[#35C27F] to-[#3A6FF7]',
    body: [
      'Drag-and-drop zone with file list and metadata preview',
      'Processing options: language, AI detail level, speaker diarization',
      'Progress bar and ETA once processing starts',
    ],
    icon: <FileAudio className="w-5 h-5" />,
  },
  {
    title: 'Transcript + Notes Workspace',
    subtitle: 'Read, edit, and curate AI output',
    accent: 'from-[#F6A53B] to-[#3A6FF7]',
    body: [
      'Left pane: editable transcript with speaker tags and timestamps',
      'Right pane: AI summary, decisions, action items, and highlights',
      'Top toolbar for search, export, regenerate, highlight speakers; footer waveform synced to text',
    ],
    icon: <FileOutput className="w-5 h-5" />,
  },
  {
    title: 'Settings',
    subtitle: 'Control output and account details',
    accent: 'from-[#E66A6A] to-[#6B5BFF]',
    body: [
      'Output formats: Markdown, DOCX, PDF',
      'AI parameters: temperature, summarization style presets',
      'Storage management and account/API details',
    ],
    icon: <Settings2 className="w-5 h-5" />,
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const pageBackground = useMemo(
    () =>
      darkMode
        ? 'bg-[#0E0F14] text-white'
        : 'bg-[#F5F6F7] text-[#2B2D31]',
    [darkMode]
  );

  return (
    <div
      className={`min-h-screen ${pageBackground} transition-colors duration-300 font-[\"Inter\",_\"SF_Pro\",_\"Segoe_UI\",_sans-serif] ${
        darkMode ? 'dark' : ''
      }`}
    >
      <header className={`sticky top-0 z-20 backdrop-blur-xl border-b ${darkMode ? 'border-white/5 bg-[#0E0F14]/70' : 'border-black/5 bg-[#F5F6F7]/80'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#3A6FF7] to-[#6B5BFF] flex items-center justify-center shadow-lg shadow-[#3A6FF7]/20">
              <AudioLines className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#3A6FF7]">Auralog</p>
              <h1 className="text-xl font-semibold tracking-tight">AI Minutes System</h1>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
              darkMode
                ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                : 'border-black/10 bg-white text-[#2B2D31] hover:bg-black/5'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Hero */}
        <Card tone="primary" className="overflow-hidden relative" dark={darkMode}>
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute -right-24 -top-16 w-80 h-80 bg-gradient-to-br from-[#3A6FF7]/20 to-[#6B5BFF]/20 blur-[80px]" />
            <div className="absolute -left-10 bottom-0 w-64 h-64 bg-gradient-to-tr from-[#35C27F]/20 to-[#3A6FF7]/20 blur-[90px]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10 relative">
            <div className="space-y-4">
              <p
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${
                  darkMode
                    ? 'bg-white/10 border-white/25 text-white'
                    : 'bg-white/70 border-black/5 text-[#2B2D31]'
                }`}
              >
                Cross-platform • Windows & macOS
              </p>
              <h2 className="text-4xl font-semibold tracking-tight leading-tight">Auralog — turn recordings into precise meeting minutes.</h2>
              <p className="text-lg text-[#2B2D31]/80 dark:text-white/80 max-w-2xl">
                Calm, modern, and intelligent interfaces that guide teams from upload to insight. Designed for trust, productivity, and clarity across desktop platforms.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-[#3A6FF7] text-white shadow-lg shadow-[#3A6FF7]/25 hover:-translate-y-[1px] transition">
                  Import Audio
                </button>
                <button className={`px-4 py-2 rounded-xl border text-sm font-medium transition ${
                  darkMode
                    ? 'border-white/20 text-white hover:bg-white/5'
                    : 'border-[#3A6FF7]/30 text-[#3A6FF7] bg-white hover:bg-[#3A6FF7]/5'
                }`}>
                  View Sample Project
                </button>
                <div className="flex items-center gap-2 text-sm text-[#2B2D31]/70 dark:text-white/70">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Security-first transcription</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <Card className="h-full" dark={darkMode}>
                  <p className="text-sm text-[#4B4F56] dark:text-white/60">AI engine</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Sparkles className="w-4 h-4 text-[#3A6FF7]" />
                    <p className="font-semibold">Structured summaries</p>
                  </div>
                </Card>
                <Card className="h-full" dark={darkMode}>
                  <p className="text-sm text-[#4B4F56] dark:text-white/60">Workspace</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Search className="w-4 h-4 text-[#3A6FF7]" />
                    <p className="font-semibold">Searchable transcripts</p>
                  </div>
                </Card>
                <Card className="h-full" dark={darkMode}>
                  <p className="text-sm text-[#4B4F56] dark:text-white/60">Output</p>
                  <div className="flex items-center gap-2 mt-1">
                    <FileOutput className="w-4 h-4 text-[#3A6FF7]" />
                    <p className="font-semibold">Minutes in DOCX, PDF, MD</p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="grid gap-4">
              <Card title="AI transcript preview" className="backdrop-blur-lg" dark={true}>
                <div className="flex items-center justify-between text-sm text-white/70 mb-4">
                  <div className="flex items-center gap-2">
                    <FileAudio className="w-4 h-4" />
                    <span>Product Strategy Sync.aac</span>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-white/10 text-xs">Processing</span>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="font-semibold text-white">00:02 • Sarah (PM)</p>
                  <p className="text-white/80">“Let’s capture themes, decisions, and owners. I want action items clearly separated for leadership.”</p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs uppercase tracking-wide text-white/60 mb-1">AI summary</p>
                    <ul className="space-y-1 text-white text-sm">
                      <li>• Focused on Q3 launch polish and customer feedback loops.</li>
                      <li>• Decisions: Keep single source of truth in Auralog workspace.</li>
                      <li>• Actions: Engineering to finalize diarization tuning by Friday.</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <div className="grid grid-cols-2 gap-3">
                <Card title="Light mode" subtitle="Calm neutral background" className="h-full" dark={false}>
                  <div className="h-24 rounded-xl bg-gradient-to-br from-white to-[#EAF0FF] border border-[#D9DCE1] flex items-center justify-center text-sm text-[#2B2D31]">
                    Minimal chroma, crisp hierarchy
                  </div>
                </Card>
                <Card title="Dark mode" subtitle="Low-glare surfaces" className="h-full" dark={true}>
                  <div className="h-24 rounded-xl bg-gradient-to-br from-[#1A1B23] to-[#0F1117] border border-white/10 flex items-center justify-center text-sm text-white">
                    Deep neutrals with blue accents
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>

        {/* Tokens and systems */}
        <Section title="Design Tokens" description="Color, typography, and spacing foundation for Auralog’s interface.">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card title="Typography scale" subtitle="Use weight 600–700 for headings; 500 for body." dark={darkMode}>
              <div className="grid sm:grid-cols-2 gap-3">
                {typographyScale.map(type => (
                  <div key={type.label} className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                    <p className="text-xs text-[#4B4F56] dark:text-white/60 uppercase tracking-wide">{type.label}</p>
                    <p className="font-semibold">{type.size} • {type.weight}</p>
                    <p className="text-sm text-[#2B2D31]/70 dark:text-white/70">{type.example}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card title="Color tokens" subtitle="Primary accent with calm neutrals and status colors." dark={darkMode}>
              <div className="grid sm:grid-cols-2 gap-3">
                {colorTokens.map(token => (
                  <div key={token.name} className="p-3 rounded-xl border border-black/5 dark:border-white/10 flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-lg border border-black/5 dark:border-white/10"
                      style={{
                        background:
                          token.value.startsWith('linear') ? token.value : undefined,
                        backgroundColor:
                          token.value.startsWith('linear') ? undefined : token.value,
                      }}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{token.name}</p>
                      <p className="text-xs text-[#4B4F56] dark:text-white/60">{token.value}</p>
                      <p className="text-xs text-[#4B4F56] dark:text-white/60">{token.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <Card title="Spacing" subtitle="Scale keeps padding consistent across cards and controls." dark={darkMode}>
              <div className="flex flex-wrap gap-2">
                {spacingScale.map(space => (
                  <div key={space} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    <div className="h-6 w-6 rounded-md bg-[#3A6FF7]/15" />
                    <span className="text-sm">{space}px</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card title="Responsive rules" subtitle="Adaptive layouts for desktop widths." dark={darkMode}>
              <ul className="space-y-3 text-sm">
                {responsiveRules.map(rule => (
                  <li key={rule.label} className="flex gap-3">
                    <div className="mt-1 h-6 w-6 rounded-lg bg-[#3A6FF7]/15 flex items-center justify-center text-xs text-[#3A6FF7]">
                      {rule.label.split(' ')[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{rule.label}</p>
                      <p className="text-[#4B4F56] dark:text-white/60">{rule.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
            <Card title="Motion" subtitle="Minimal, purposeful animations." dark={darkMode}>
              <ul className="space-y-2 text-sm">
                <li>• Hover lifts on buttons (2–4px shadow change)</li>
                <li>• Progress indicators animate with 1s ease for clarity</li>
                <li>• Panel transitions: 180ms fade/slide with reduced blur</li>
                <li>• No distracting infinite loops; pause on inactivity</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* Component library */}
        <Section title="Component Library" description="Core UI kit for Auralog in light and dark themes.">
          <div className="grid lg:grid-cols-2 gap-4">
            <Card title="Buttons" subtitle="Primary, secondary, ghost, destructive, and icon." dark={darkMode}>
              <div className="flex flex-wrap gap-3 items-center">
                {buttons.map(btn => (
                  <button
                    key={btn.label}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition ${btn.style}`}
                  >
                    {btn.label === 'Icon' ? <Sparkles className="w-4 h-4" /> : btn.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs text-[#4B4F56] dark:text-white/60">
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10">Light surfaces pair with 6–10px radii and soft drop shadows.</div>
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10">Dark surfaces use subtle borders and focused blue glows for focus states.</div>
              </div>
            </Card>
            <Card title="Inputs" subtitle="Text fields, dropdowns, sliders, toggles, upload." dark={darkMode}>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <label className="text-xs text-[#4B4F56] dark:text-white/60">Text field</label>
                  <div className={`rounded-xl border px-3 py-2 flex items-center gap-2 ${darkMode ? 'border-white/15 bg-white/5 text-white' : 'border-[#D9DCE1] bg-white'}`}>
                    <Search className="w-4 h-4 text-[#3A6FF7]" />
                    <input className="bg-transparent outline-none flex-1" placeholder="Search transcript" />
                  </div>
                  <label className="text-xs text-[#4B4F56] dark:text-white/60">Dropdown</label>
                  <div className={`rounded-xl border px-3 py-2 flex items-center justify-between ${darkMode ? 'border-white/15 bg-white/5 text-white' : 'border-[#D9DCE1] bg-white'}`}>
                    <span>English (auto)</span>
                    <ChevronRight className="w-4 h-4 text-[#3A6FF7]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-[#4B4F56] dark:text-white/60">Upload zone</label>
                  <div className={`rounded-xl border-2 border-dashed px-4 py-6 text-center ${darkMode ? 'border-white/15 bg-white/5 text-white' : 'border-[#3A6FF7]/30 bg-[#3A6FF7]/5 text-[#2B2D31]'}`}>
                    <UploadCloud className="w-5 h-5 mx-auto mb-2 text-[#3A6FF7]" />
                    <p className="text-sm font-medium">Drag & drop audio</p>
                    <p className="text-xs text-[#4B4F56] dark:text-white/60">AAC, WAV, MP3 up to 2GB</p>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span>AI detail level</span>
                    <div className="flex-1 mx-3 h-1.5 rounded-full bg-black/10 dark:bg-white/10">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#3A6FF7] to-[#6B5BFF]" />
                    </div>
                    <span className="text-[#3A6FF7] font-medium">Balanced</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <Card title="Cards" subtitle="Recording item, processing, and analytics." dark={darkMode}>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Research Interview.wav</p>
                    <p className="text-xs text-[#4B4F56] dark:text-white/60">42m • 2 speakers • Pending transcript</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#3A6FF7]/15 text-[#3A6FF7]">Queued</span>
                </div>
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Processing</p>
                    <span className="text-xs text-[#4B4F56] dark:text-white/60">ETA 02:10</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-black/10 dark:bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#3A6FF7] to-[#6B5BFF]" />
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <p className="font-semibold">Analytics summary</p>
                  <p className="text-xs text-[#4B4F56] dark:text-white/60">Top speakers, sentiment, and keywords surfaced for minutes.</p>
                </div>
              </div>
            </Card>
            <Card title="Navigation" subtitle="Sidebar, top bar, breadcrumbs." dark={darkMode}>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#3A6FF7] to-[#6B5BFF] flex items-center justify-center text-white">
                    <LayoutDashboard className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold">Sidebar</p>
                    <p className="text-xs text-[#4B4F56] dark:text-white/60">Dashboard · Projects · Settings · Help</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                  <p className="font-semibold">Top bar</p>
                  <p className="text-xs text-[#4B4F56] dark:text-white/60">Search, quick actions, account, theme toggle</p>
                </div>
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#3A6FF7]" />
                  <p className="text-xs text-[#4B4F56] dark:text-white/60">Dashboard / Project / Session</p>
                </div>
              </div>
            </Card>
            <Card title="System components" subtitle="Modal, toast, progress in both modes." dark={darkMode}>
              <div className="grid gap-3">
                {systemComponents.map(item => (
                  <div key={item.title} className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-[#3A6FF7]/15 text-[#3A6FF7] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-[#4B4F56] dark:text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#4B4F56] dark:text-white/60">
                <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-white">Light example</div>
                <div className="p-3 rounded-xl border border-white/10 bg-[#12131A] text-white">Dark example</div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Screen design */}
        <Section title="Screen Designs" description="Five core screens with intent and layout guidance.">
          <div className="grid lg:grid-cols-3 gap-4">
            {screenCards.map(card => (
              <Card
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                className="h-full"
                dark={darkMode}
              >
                <div className={`h-28 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center text-white text-sm font-semibold shadow-inner`}> 
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <span>Visual mock block</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[#4B4F56] dark:text-white/70">
                  {card.body.map(line => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Transcript workspace breakdown */}
        <Section title="Transcript + Notes Workspace" description="Detailed split view for reading, editing, and exporting minutes.">
          <Card dark={darkMode}>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-3">
                <div className={`rounded-xl border ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white'} p-4 space-y-3`}>
                  <div className="flex items-center justify-between text-xs text-[#4B4F56] dark:text-white/60">
                    <span>Transcript with speaker tags</span>
                    <span>00:12:05</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-semibold text-[#3A6FF7]">[00:01] Sarah (PM)</p>
                      <p className="text-[#2B2D31]/80 dark:text-white/80">We need to finalize the launch brief and ensure action items route to owners.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#3A6FF7]">[00:02] Daniel (Eng)</p>
                      <p className="text-[#2B2D31]/80 dark:text-white/80">Diarization is stable; next step is summarization style presets.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-[#3A6FF7] to-[#6B5BFF] p-4 text-white flex items-center justify-between shadow-lg shadow-[#3A6FF7]/25">
                  <div>
                    <p className="text-sm uppercase tracking-wide">Toolbar</p>
                    <p className="text-base font-semibold">Search · Export · Regenerate · Highlight speakers</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Versioned changes</span>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-[#3A6FF7]/30 p-4">
                  <p className="text-xs uppercase text-[#4B4F56] dark:text-white/60">Waveform footer</p>
                  <p className="text-sm text-[#2B2D31]/80 dark:text-white/80">Interactive timeline synced to transcript for precise edits.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className={`rounded-xl border ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white'} p-4`}> 
                  <p className="text-xs uppercase tracking-wide text-[#4B4F56] dark:text-white/60">AI notes</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Summary: Q3 polish and customer feedback loop.</li>
                    <li>• Decisions: Keep centralized transcript source.</li>
                    <li>• Actions: Engineering to deliver diarization tuning Friday.</li>
                  </ul>
                </div>
                <div className={`rounded-xl border ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white'} p-4`}> 
                  <p className="text-xs uppercase tracking-wide text-[#4B4F56] dark:text-white/60">Insights & tags</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Action', 'Decision', 'Risk', 'Follow-up'].map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-[#3A6FF7]/10 text-[#3A6FF7] border border-[#3A6FF7]/20">{tag}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-[#4B4F56] dark:text-white/60">Supports speaker highlight mode and search within minutes.</p>
                </div>
                <div className={`rounded-xl border ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white'} p-4 flex items-center justify-between`}> 
                  <div>
                    <p className="font-semibold">Export formats</p>
                    <p className="text-xs text-[#4B4F56] dark:text-white/60">Markdown · DOCX · PDF</p>
                  </div>
                  <button className="px-3 py-2 rounded-xl bg-[#3A6FF7] text-white text-sm">Export</button>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Settings / QA */}
        <Section title="Settings & Preferences" description="Output formats, AI parameters, storage, and account controls.">
          <div className="grid lg:grid-cols-3 gap-4">
            <Card title="Output formats" subtitle="Markdown, DOCX, PDF" dark={darkMode}>
              <div className="flex flex-wrap gap-2 text-sm">
                {['Markdown', 'DOCX', 'PDF'].map(format => (
                  <span key={format} className="px-3 py-2 rounded-xl border border-black/5 dark:border-white/15 bg-black/5 dark:bg-white/5">{format}</span>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#4B4F56] dark:text-white/60">Default to Markdown for collaboration; export retains highlights and speaker tags.</p>
            </Card>
            <Card title="AI parameters" subtitle="Temperature & summarization style" dark={darkMode}>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Temperature</span>
                  <span className="px-2 py-1 rounded-full bg-[#3A6FF7]/15 text-[#3A6FF7]">0.3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Summarization style</span>
                  <span className="text-xs text-[#4B4F56] dark:text-white/60">Concise • Actionable</span>
                </div>
                <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-[#3A6FF7] to-[#6B5BFF]" />
                </div>
              </div>
            </Card>
            <Card title="Storage & account" subtitle="Manage aging sessions and API keys" dark={darkMode}>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Auto-delete after</span>
                  <span className="px-2 py-1 rounded-full bg-[#3A6FF7]/10 text-[#3A6FF7]">90 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Plan</span>
                  <span className="text-xs text-[#4B4F56] dark:text-white/60">Pro • 200 hours / month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>API key</span>
                  <button className="px-3 py-2 rounded-xl border border-[#3A6FF7]/30 text-[#3A6FF7] text-xs">Reveal</button>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </main>
    </div>
  );
}
