# 🎳 社内ボウリング大会 スコア管理システム

iPhone Safari から使える、日本語のボウリング大会スコア管理 Web アプリです。
GitHub Pages で公開して、URL を開くだけで利用できます。ホーム画面追加で PWA としても動作します。

## 公開URL（GitHub Pages 有効化後）

```
https://haruto0925.github.io/bowling-score-system/
```

## 主な機能

- 👥 メンバー登録・削除（人数制限なし）
- ⚙️ 大会作成（大会名・日付・参加者選択・チーム分け／自動チーム分け）
- 📝 スコア入力（1G/2G/3G、スマホで入力しやすいUI）
- 🏆 個人順位（MAX + ハンデ）、チーム順位（2G・3G平均 + ハンデ）
- 📚 大会履歴、選手別成績とハンデ推移
- 💾 localStorage による自動保存
- 📱 PWA 対応（ホーム画面に追加でアプリのように起動）

## ハンデ計算ルール

- 基準点：**150**
- 直近 **3大会** の全ゲーム平均から算出
- `ハンデ = max(0, 150 - 平均)`
- 大会開始時点で確定し、大会中は変動しません
- 過去データが3大会未満の場合はある分だけで計算

## ファイル構成

```
bowling-score-system/
├── index.html          … アプリ本体（SPA、CSS/JSインライン）
├── manifest.json       … PWA マニフェスト
├── service-worker.js   … オフライン対応
└── icons/
    ├── icon-180.png
    ├── icon-192.png
    ├── icon-512.png
    └── icon-maskable-512.png
```

## GitHub Pages の有効化手順

1. GitHub のリポジトリページを開く
2. **Settings**（設定）タブ
3. 左メニューの **Pages**
4. **Source** を `Deploy from a branch` に
5. **Branch** を `main` / `/ (root)` に設定 → **Save**
6. 数分後に上記URLで公開されます

## iPhone Safari でアプリのように使う

1. Safari で公開URLを開く
2. 下の共有ボタン（□に↑）をタップ
3. 「ホーム画面に追加」を選択
4. ホーム画面のアイコンから起動できます

---

© 2026 社内ボウリング大会システム
