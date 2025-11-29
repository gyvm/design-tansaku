
  # macOS Settings Window Design

A modern settings window interface design for macOS applications.

Built with **React 18.3.1 + TypeScript**, **Vite 6.3.5**, and **Tailwind CSS** following the Design-Tansaku technology stack.

The original design is available at https://www.figma.com/design/nUU63LgzgswuA3jo3uMYYj/macOS-Settings-Window-Design.

## Getting Started

### Installation & Setup

```bash
npm i                # Install dependencies
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
```

Navigate to the development server URL shown in your terminal.

## Project Structure

```
macOS_SettingsWindowDesign_Figma/
├── src/
│   ├── components/
│   │   ├── ui/                  # Radix UI ベースコンポーネント
│   │   ├── buttons.tsx
│   │   ├── containers.tsx
│   │   ├── information.tsx
│   │   ├── inputs.tsx
│   │   ├── navigation.tsx
│   │   ├── AboutSettings.tsx
│   │   ├── AdvancedSettings.tsx
│   │   ├── GeneralSettings.tsx
│   │   └── ShortcutsSettings.tsx
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

## Technology Stack

See `AGENTS.md` (in the root directory) for comprehensive details about:
- React 18.3.1 + TypeScript
- Vite 6.3.5 (Build tool)
- Radix UI components
- Tailwind CSS styling
- Theme management with next-themes

## Features

- Modern settings window interface design
- Light and dark mode support
- Responsive component library
- Accessible UI components (Radix UI)
- High performance with Vite
- Multiple settings sections (General, Advanced, About, Shortcuts)

## Support & Documentation

- Design Guidelines: `src/guidelines/Guidelines.md`
- Main Application: `src/App.tsx`
- Component Library: `src/components/`

## Version

**Version:** 0.1.0
**Last Updated:** 2025
  