import type { ImageMetadata } from "astro";
import infinoteIcon from "../assets/works/infinote.png";
import histreeIcon from "../assets/works/histree.png";

/**
 * 作品データの一元管理ファイル。
 * 作品を追加するときはこのファイルの works 配列に 1 エントリ追記するだけでよい。
 * featured: true の作品(4件推奨)がトップページに表示される。
 * icon を省略するとタイトル頭文字のグラデーションタイルが表示される。
 * 画像を使う場合は src/assets/works/ に置いて import し、icon に渡す。
 */

export const categories = [
  {
    id: "minecraft-mods",
    label: "Minecraft Mods",
    description: "Minecraft(Fabric)向けに開発している Mod",
  },
  {
    id: "web-tools",
    label: "Web Tools",
    description: "ブラウザで動作するツール",
  },
  {
    id: "apps-extensions",
    label: "Apps & Extensions",
    description: "ブラウザ拡張機能やデスクトップアプリ",
  },
  {
    id: "scripts",
    label: "Scripts",
    description: "Carpet Script などのスクリプト類",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export interface WorkLinks {
  /** ソースコード(GitHub など)→ View Source チップ */
  source?: string;
  /** 配布ページ(Modrinth / ストアなど)→ Download チップ */
  download?: string;
  /** そのまま利用できるサイト → Open Site チップ */
  site?: string;
}

export interface Work {
  id: string;
  title: string;
  /** カード用の短い説明(1〜2文) */
  description: string;
  /** ポップアップ用の詳しい説明(省略時は description を表示) */
  details?: string;
  links: WorkLinks;
  category: CategoryId;
  /** トップページの Featured Works に表示する(4件推奨) */
  featured?: boolean;
  /** 作品アイコン画像(省略時は頭文字タイル) */
  icon?: ImageMetadata;
  /** ドット絵アイコンをぼかさず拡大表示する */
  pixelated?: boolean;
}

export const works: Work[] = [
  // ---- Featured ----
  {
    id: "infinote",
    title: "Infinote",
    description:
      "ノートブロックを拡張するサーバーサイド Fabric Mod。カスタム音源の追加、ほぼ無制限のピッチシフト、音量調整に対応。",
    details:
      "サーバーサイドで動作するノートブロック拡張 Fabric Mod。カスタム音源の追加、バニラの制限を超えるピッチシフト、音量コントロールに対応します。音源はサーバー側リソースパックで配布できるため、クライアントは Mod なしでも演奏を聴けます(導入すればピッチ制限も拡張されます)。マルチプレイでの合奏・ゲーム内演奏の基盤になる Mod です。",
    links: {
      source: "https://github.com/RS-256/infinote",
      download: "https://modrinth.com/mod/infinote",
    },
    category: "minecraft-mods",
    featured: true,
    icon: infinoteIcon,
    pixelated: true,
  },
  {
    id: "mc-animator",
    title: "mc animator",
    description:
      "Vue + Three.js 製の Minecraft 風アニメーションレンダラー。ブラウザ上でレンダリングし、PNG 連番や MP4 などで書き出せる。",
    details:
      "Vue + TypeScript + Three.js 製の Minecraft 風アニメーションレンダラー。ブラウザだけでキーフレームアニメーションを作成し、PNG 連番・MP4(H.264 / H.265 / AV1)・ロスレス MKV(FFV1)で書き出せます。エンコードには WebCodecs と ffmpeg.wasm を使用。インストール不要でブラウザからそのまま使えます。",
    links: {
      source: "https://github.com/RS-256/mc_animator",
      site: "https://rs-256.github.io/mc_animator/",
    },
    category: "web-tools",
    featured: true,
  },
  {
    id: "dnw",
    title: "DNW — Note Block DAW",
    description:
      "Minecraft ノートブロックのための DAW。Infinote と連携し、ゲーム内での楽曲演奏をゴールにしたプロジェクト。",
    details:
      "Minecraft ノートブロックのための DAW(Note Block DAW)。1 ティック = 1 ゲームティックのタイムラインで、ゲームに書き出してもズレない譜面を作れます。ピアノロール、テンポトラック、トラックごとの音量・パン・ミュート・ソロ、オニオンスキン表示などを備え、Infinote と組み合わせたゲーム内演奏をゴールにしています。",
    links: {
      source: "https://github.com/RS-256/DNW",
    },
    category: "web-tools",
    featured: true,
  },
  {
    id: "histree",
    title: "histree",
    description:
      "各タブの閲覧履歴をツリーで管理する Chrome / Edge 拡張。分岐した履歴もサイドパネルからワンクリックで戻れる。",
    details:
      "各タブの閲覧履歴をツリー構造で管理する Chrome / Edge 拡張。ページ遷移が分岐しても履歴が失われず、サイドパネルのツリーから任意のページへワンクリックで戻れます。ノードは favicon 表示でコンパクト、現在位置はリングでハイライトされ、タブを切り替えるとツリーも自動で切り替わります。",
    links: {
      source: "https://github.com/RS-256/histree",
    },
    category: "apps-extensions",
    featured: true,
    icon: histreeIcon,
  },
  // ---- Minecraft Mods ----
  {
    id: "crosspatch",
    title: "CrossPatch",
    description:
      "Litematica・ItemScroller・TweakerMore まわりの互換パッチと QoL 機能を追加するクライアントサイド Fabric Mod。",
    links: {
      source: "https://github.com/RS-256/CrossPatch",
    },
    category: "minecraft-mods",
  },
  {
    // TODO: 説明を確認して書き直す(README が未整備だったため仮の説明)
    id: "carpet-suppression",
    title: "CarpetSuppression",
    description: "開発中の Fabric Mod。",
    links: {
      source: "https://github.com/RS-256/CarpetSuppression",
    },
    category: "minecraft-mods",
  },
  {
    // TODO: 説明を確認して書き直す(README が未整備だったため仮の説明)
    id: "worldedit-regex-support",
    title: "worldEdit-RegexSupport",
    description: "WorldEdit に正規表現サポートを追加する開発中の Fabric Mod。",
    links: {
      source: "https://github.com/RS-256/worldEdit-RegexSupport",
    },
    category: "minecraft-mods",
  },
  // ---- Apps & Extensions ----
  {
    id: "audio-to-midi-converter",
    title: "Audio to MIDI Converter",
    description:
      "WAV / MP4 音源を MIDI に変換するローカルアプリ。Demucs でステム分離し、Basic Pitch で採譜してピアノロールでプレビューできる。",
    links: {
      source: "https://github.com/RS-256/audio-to-midi-converter",
    },
    category: "apps-extensions",
  },
  {
    // TODO: 説明を確認して書き直す(README が未整備だったため仮の説明)
    id: "minecraft-server-launcher",
    title: "minecraft-server-launcher",
    description: "Minecraft サーバーの起動を補助するランチャー。",
    links: {
      source: "https://github.com/RS-256/minecraft-server-launcher",
    },
    category: "apps-extensions",
  },
  // ---- Scripts ----
  {
    id: "script-collection",
    title: "scriptCollection",
    description:
      "自作 Carpet Script をまとめたスクリプト集。bot.sc など、サーバー内での作業を補助するスクリプト群(1.20.1 でテスト済み)。",
    links: {
      source: "https://github.com/RS-256/scriptCollection",
    },
    category: "scripts",
  },
];

export const featuredWorks = works.filter((w) => w.featured);

/** /works 用: カテゴリ定義順に、そのカテゴリの作品をまとめて返す */
export function worksByCategory() {
  return categories
    .map((category) => ({
      category,
      items: works.filter((w) => w.category === category.id),
    }))
    .filter((group) => group.items.length > 0);
}
