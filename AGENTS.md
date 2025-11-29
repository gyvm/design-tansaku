# Design-Tansaku プロジェクト技術スタック・ガイド

## 概要

Design-Tansaku は複数の macOS デザイン関連プロジェクトを統合管理するモノレポです。
全プロジェクトで同じ技術スタックを採用し、一貫性を保ちます。

## 推奨技術スタック

### コアテクノロジー

- **React 18.3.1** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite 6.3.5** - 高速ビルドツール
- **Tailwind CSS** - ユーティリティベースのスタイリング

### UIコンポーネント

- **Radix UI** (30+ ライブラリ) - アクセシビリティ考慮済みベースコンポーネント
  - react-accordion, react-alert-dialog, react-avatar, react-button など
- **class-variance-authority** - コンポーネントのバリアント管理
- **tailwind-merge** - Tailwind クラスマージング
- **clsx** - 条件付きクラス名生成

### その他のライブラリ

- **lucide-react** - アイコンライブラリ (487+ アイコン)
- **react-hook-form** - フォーム状態管理
- **recharts** - チャート/グラフ
- **sonner** - トースト通知
- **next-themes** - テーマ切り替え
- **react-day-picker** - 日付ピッカー
- **embla-carousel-react** - カルーセル
- **react-resizable-panels** - リサイズ可能なパネル
- **cmdk** - コマンドパレット

## プロジェクト構成

### ファイル構造（標準テンプレート）

```
project-name/
├── src/
│   ├── components/
│   │   ├── ui/                      # Radix UI ベースコンポーネント (40+)
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── use-mobile.ts
│   │   │   └── utils.ts
│   │   ├── buttons.tsx              # ボタン関連のコンポーネント集
│   │   ├── containers.tsx           # コンテナ/レイアウト
│   │   ├── information.tsx          # 情報表示系
│   │   ├── inputs.tsx               # 入力フォーム系
│   │   └── navigation.tsx           # ナビゲーション系
│   ├── guidelines/
│   │   └── Guidelines.md            # デザインガイドライン
│   ├── styles/
│   │   └── globals.css              # グローバルスタイル
│   ├── App.tsx                      # メインアプリケーション
│   ├── Attributions.md              # 著作権表記
│   ├── index.css                    # インデックススタイル
│   └── main.tsx                     # エントリーポイント
├── index.html                       # HTML テンプレート
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

### 標準 package.json テンプレート

```json
{
  "name": "project-name",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-aspect-ratio": "^1.1.2",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.3",
    "@radix-ui/react-context-menu": "^2.2.6",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-hover-card": "^1.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-navigation-menu": "^1.2.5",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toggle": "^1.1.2",
    "@radix-ui/react-toggle-group": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "*",
    "cmdk": "^1.1.1",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.487.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "sonner": "^2.0.3",
    "tailwind-merge": "*",
    "vaul": "^1.1.2"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "vite": "6.3.5"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

## 開発フロー

### セットアップ

```bash
cd project-name
npm i                # 依存パッケージをインストール
npm run dev          # 開発サーバー起動 (localhost:5173)
```

### ビルド

```bash
npm run build        # 本番環境用ビルド
```

## 命名規則

- **ファイル名**: kebab-case (例: `my-component.tsx`, `use-mobile.ts`)
- **コンポーネント名**: PascalCase (例: `export function MyComponent`)
- **CSS クラス**: Tailwind utilities (Tailwind CSS の組み込み)
- **変数名**: camelCase (例: `const myVariable = ...`)

## スタイリング方針

### 1. Tailwind CSS（ベース）

すべてのスタイルは Tailwind CSS のユーティリティクラスを使用します。

```tsx
<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
  Click me
</button>
```

### 2. class-variance-authority (CVA)（バリアント管理）

コンポーネントのバリアント（variant、size など）は CVA で管理します。

```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/components/ui/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
)

export { Button, buttonVariants }
```

### 3. tailwind-merge（クラス競合回避）

`cn` ユーティリティ（`src/components/ui/utils.ts`）を使用して、Tailwind クラスの競合を自動解決します。

```tsx
import { cn } from "@/components/ui/utils"

// className="px-8" は className="px-4" をオーバーライド
<div className={cn("px-4 py-2", "px-8")} /> // px-8 が適用される
```

### 4. CSS Modules（複雑なレイアウトのみ）

複雑で再利用性の低いレイアウトのみ CSS Modules を使用します。

```tsx
// MyComponent.tsx
import styles from "./MyComponent.module.css"

export function MyComponent() {
  return <div className={styles.container}>...</div>
}
```

## Radix UI の使用方法

### 原則

全コンポーネントは以下の原則に従います：

- **アクセシビリティ**: ARIA属性が自動付与されている
- **キーボード操作**: Tab、Enter、Space、Arrow キーに完全対応
- **カスタマイズ性**: `asChild` prop で別の要素にマップ可能
- **スタイリング**: className で Tailwind クラスを追加可能

### 使用例

```tsx
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export function MyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Open Dialog
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg">
          <Dialog.Title className="text-lg font-semibold">Dialog Title</Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            Dialog description goes here.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 p-1">
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

## コンポーネント設計パターン

### Base UI Component（基本コンポーネント）

`src/components/ui/` 内の各ファイルは、Radix UI のラッパーです。

```tsx
// src/components/ui/button.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/components/ui/utils"

const buttonVariants = cva(...)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Composed Component（合成コンポーネント）

複数の UI コンポーネントを組み合わせた再利用可能なコンポーネント。

```tsx
// src/components/buttons.tsx
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function PrimaryButton(props: React.ComponentProps<typeof Button>) {
  return <Button variant="default" size="default" {...props} />
}

export function SecondaryButton(props: React.ComponentProps<typeof Button>) {
  return <Button variant="outline" size="default" {...props} />
}

export function IconButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button variant="ghost" size="icon" {...props}>
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}
```

## プロジェクト一覧と現在のステータス

| プロジェクト | 説明 | ステータス |
| --- | --- | --- |
| macOS_ComponentLibraryDesign_Figma | macOS Component Library Design | ✅ 完了 |
| macOS_SettingsWindowDesign_Figma | macOS Settings Window Design | ✅ 完了 |
| auralog-design | Auralog Design System | 🔄 統一化中 |
| macOS_BasedAppleBooksStyle_Gemini | macOS Apple Books Style | 🔄 統一化中 |
| macOS_TypoZero_ChatGPT | TypoZero Settings Layout | 🔄 統一化中 |

## 移行・統一化チェックリスト

プロジェクトを統一化する際は、以下のチェックリストを確認してください。

- [ ] React 18.3.1 + TypeScript セットアップ
- [ ] Vite 6.3.5 でビルド可能
- [ ] Radix UI コンポーネント 40+ を `src/components/ui/` に配置
- [ ] Tailwind CSS 設定済み
- [ ] `src/components/` 下に次のファイル群があるか確認:
  - [ ] `buttons.tsx` - ボタン関連
  - [ ] `containers.tsx` - レイアウト/コンテナ
  - [ ] `information.tsx` - 情報表示系
  - [ ] `inputs.tsx` - 入力フォーム系
  - [ ] `navigation.tsx` - ナビゲーション系
- [ ] `Guidelines.md` でデザイン規約を定義
- [ ] `npm i && npm run dev` で動作確認
- [ ] `package.json` のバージョンが統一されているか確認

## トラブルシューティング

### npm install エラー

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm i
```

### Vite 開発サーバーが起動しない

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

### Tailwind CSS が適用されない

`tailwind.config.js` の `content` が正しく設定されているか確認：

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 参考リンク

- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [class-variance-authority](https://cva.style/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## サポート

質問や問題がある場合は、GitHub Issues で報告してください。
