# Auralog Design System

A modern, intelligent design system for a cross-platform desktop application that automatically generates detailed meeting minutes from imported audio recordings using AI.

Built with **React 18.3.1 + TypeScript**, **Vite 6.3.5**, and **Tailwind CSS** following the Design-Tansaku technology stack.

## Overview

Auralog is designed to feel **modern, calm, and intelligent**, avoiding playful or childish patterns. The application communicates trust, productivity, and precision through a semi-professional aesthetic similar to Notion, Linear, or Raycast.

## 🎨 Design Direction

### Visual Style
- **Aesthetic:** Minimal but not cold
- **Rounded corners:** Medium (6–10px)
- **Shadows:** Soft and subtle
- **Icons:** Thin, consistent line icons
- **Animation:** Minimal and purposeful

### Color Palette
- **Primary:** #3A6FF7 (soft blue accent)
- **Secondary:** Neutral gray scale
  - Background: #F5F6F7 (light) / #1A1B1E (dark)
  - Text: #2B2D31 (light) / #E9ECEF (dark)
- **Gradient Accent:** Blue → Indigo (very subtle)

## 📁 Project Structure

```
auralog-design/
├── src/
│   ├── components/
│   │   ├── ui/                  # Radix UI ベースコンポーネント
│   │   ├── buttons.tsx
│   │   ├── containers.tsx
│   │   ├── information.tsx
│   │   ├── inputs.tsx
│   │   └── navigation.tsx
│   ├── guidelines/
│   │   └── Guidelines.md
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Installation & Setup

```bash
npm i                # Install dependencies
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
```

Navigate to the development server URL shown in your terminal.
Toggle between light and dark mode using the theme switcher (top-right corner).

## 📐 Design System Components

### Foundation
- **Typography Scale:** Display, H1–H4, body text, captions
- **Color Tokens:** Primary, semantic colors, neutral palette
- **Spacing System:** 8px-based grid (--space-1 through --space-20)
- **Border Radius:** 5 sizes from 4px to 14px plus full radius
- **Shadows:** 4 elevation levels (sm, md, lg, xl)

### UI Components

#### Buttons
- Primary (filled)
- Secondary (outline)
- Ghost / subtle
- Destructive
- Icon buttons (with/without label)
- Multiple sizes (sm, md, lg)

#### Inputs
- Text fields
- Search inputs
- File upload drag-and-drop zone
- Dropdowns / Selects
- Toggle switches
- Radio buttons
- Sliders

#### Cards
- Recording item card
- AI processing status card
- Analytics summary card
- Plan/subscription card

#### Navigation
- Sidebar navigation
- Top bar with breadcrumbs
- Tabs
- Dropdown menus

#### System Components
- Modal dialogs
- Toast notifications
- Progress indicators (circular and bar)
- Badges and tags
- Audio player with waveform

## 🖥️ Screen Designs

### 1. Onboarding / Welcome Screen
**Purpose:** Introduce the app and guide users to import audio

**Elements:**
- App branding (logo + product name)
- Tagline: "Convert speech into structured knowledge"
- CTA buttons (Import Audio, View Sample Project)
- Animated waveform illustration
- Feature highlights

### 2. Dashboard Screen
**Purpose:** Display past imported sessions and projects

**Elements:**
- Sidebar navigation
- Analytics cards (total recordings, duration, storage)
- Project grid with recording cards
- Sorting and filtering options
- Search functionality
- Quick action buttons

### 3. Recording Import Screen
**Purpose:** Upload audio files and configure processing settings

**Elements:**
- Drag & drop upload zone
- File list with metadata preview
- Language selection
- AI detail level slider
- Advanced processing options:
  - Speaker diarization toggle
  - Extract action items toggle
  - Generate timestamps toggle
  - Smart punctuation toggle
- Progress view with step indicators

### 4. Transcript + Notes Workspace
**Purpose:** Read and edit generated transcripts

**Layout:**
- **Left Panel:** Editable transcript with speaker tags and timestamps
- **Right Panel:** AI-generated summary, action items, key points
- **Top Toolbar:** Search, Export, Regenerate options
- **Footer:** Synchronized audio player with waveform

**Features:**
- Speaker identification and avatars
- Clickable transcript blocks
- Tabbed summary view (Summary, Action Items, Notes)
- Time-synced playback
- Playback speed control

### 5. Settings Screen
**Purpose:** Configure application preferences

**Sections:**
- **Profile Information:** Name, email, language
- **Subscription Plan:** Current plan details and upgrade options
- **Export Preferences:** Default format (Markdown, DOCX, PDF)
- **AI Processing:** Summarization style, auto-generation toggles
- **Storage Management:** Usage monitoring, auto-delete settings
- **API Access:** API key management
- **Danger Zone:** Delete data, delete account

## 🎭 Theme Support

All designs include **complete light and dark mode** support:

- Automatic theme detection based on user preference
- Manual theme toggle available on all screens
- Theme preference persisted in localStorage
- All color tokens adapt automatically

### Switching Themes

Click the moon/sun icon in the top-right corner of any page to toggle between light and dark mode.

## 📱 Responsive Guidelines

### Desktop-First Approach
- **Minimum Width:** 1024px (narrow laptop)
- **Optimal Width:** 1440px (standard desktop)
- **Maximum Content Width:** 1400px for readability
- **Ultra-Wide Support:** Centered content with max-width constraints

### Layout Patterns
1. **Sidebar + Content:** Dashboard, Settings (240px sidebar)
2. **Split Panel:** Workspace (flexible transcript + 400px summary)
3. **Centered Content:** Onboarding, Import (max 900px)

## 🎬 Motion Design

### Animation Principles
1. **Purposeful:** Every animation serves a functional purpose
2. **Subtle:** Enhance, don't distract
3. **Fast:** Keep durations short (150-350ms)
4. **Natural:** Use easing functions for realistic motion

### Transition Speeds
- `--transition-fast`: 150ms - Hover effects, color changes
- `--transition-normal`: 250ms - Component entrance/exit, slides
- `--transition-slow`: 350ms - Complex animations, modals

### Easing Function
All transitions use Material Design standard easing:
```css
cubic-bezier(0.4, 0, 0.2, 1)
```

## ♿ Accessibility

### Standards Compliance
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper semantic HTML

### Key Features
- High contrast ratios (7:1 for primary text)
- Focus indicators on all interactive elements
- ARIA labels where needed
- Respects `prefers-reduced-motion`

## 🛠️ Implementation Notes

See `AGENTS.md` for comprehensive technology stack details including:
- Tailwind CSS utilities
- Radix UI component patterns
- CVA (class-variance-authority) usage
- Theme configuration with next-themes
- TypeScript best practices

### Typography
Use Tailwind CSS classes for consistent typography:

```tsx
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  Heading 1
</h1>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  Body text
</p>
<span className="text-sm font-medium leading-none">Caption</span>
```

### Theme Management
Theme toggling is handled by `next-themes` package:

## 📋 Design Principles

1. **Clarity First:** Every interface element should have a clear purpose
2. **Calm Intelligence:** Feel intelligent without being overwhelming
3. **Consistency Across Platforms:** Maintain visual consistency while respecting OS conventions
4. **Progressive Disclosure:** Show information when needed

## 🎯 Use Cases

This design system supports the following workflows:

1. **Import Audio** → Configure AI settings → Process recording
2. **View Dashboard** → Browse recordings → Open transcript
3. **Edit Transcript** → Review AI summary → Export document
4. **Manage Settings** → Configure preferences → Adjust AI parameters

## 📄 File Formats Supported

The design accommodates these audio formats:
- MP3
- WAV
- M4A
- FLAC
- OGG

## 📤 Export Formats

The application supports exporting to:
- Markdown (.md)
- Microsoft Word (.docx)
- PDF (.pdf)

## 🔑 Key Features Highlighted in Design

- ✅ AI-powered transcription with high accuracy
- ✅ Automatic speaker identification
- ✅ Smart summarization and action item extraction
- ✅ Synchronized audio playback with transcript
- ✅ Multi-format export options
- ✅ Cloud storage with offline access
- ✅ API access for integrations

## 👥 Target Users

- **Professionals:** Business meetings, client calls
- **Researchers:** Interviews, focus groups
- **Students:** Lectures, study sessions
- **Content Creators:** Podcast editing, video production

## 🌐 Platform Support

Designed for cross-platform desktop deployment:
- **Windows:** Windows 10/11
- **macOS:** macOS 11 (Big Sur) and later

## 📞 Support & Documentation

- Design Guidelines: `src/guidelines/Guidelines.md`
- Main Application: `src/App.tsx`
- Component Library: `src/components/`

## 🔄 Version

**Version:** 0.1.0
**Last Updated:** 2025

## 📝 License

This design system is created for the Auralog desktop application.

---

**Built with React 18.3.1 + TypeScript**, powered by **Vite**, **Tailwind CSS**, and **Radix UI**.
