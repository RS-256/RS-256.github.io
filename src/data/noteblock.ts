/**
 * Data for the /noteblock page.
 * Pipeline steps reference works.yaml entries by id, so card contents and
 * links stay in sync with the works data automatically.
 */

import type { Video } from "./videos";

/** One step of the noteblock production pipeline, in display order. */
export interface PipelineStep {
  /** works.yaml entry id; the step card opens this work's dialog. */
  workId: string;
  title: string;
  /** One-line summary shown in the compact step card. */
  description: string;
  /** Lucide icon used when the work has no icon image. */
  icon: string;
}

export const pipelineSteps: PipelineStep[] = [
  {
    workId: "audio-to-midi-converter",
    title: "音源を MIDI にする",
    description: "WAV / MP4 をステム分離して自動採譜。手持ちの MIDI があればスキップ。",
    icon: "lucide:file-music",
  },
  {
    workId: "dnw",
    title: "譜面をつくる",
    description: "gametick ベースのタイムラインで、ゲームに書き出してもズレない譜面を制作。",
    icon: "lucide:piano",
  },
  {
    workId: "infinote",
    title: "ゲーム内で演奏する",
    description: "カスタム音源・ピッチ拡張・音量調整。クライアント Mod なしでも聴ける。",
    icon: "lucide:box",
  },
  {
    workId: "flashback-lossless-audio-exporter",
    title: "演奏を収録する",
    description: "Flashback の録画と同時に、TPS の影響を受けないロスレス WAV を書き出し。",
    icon: "lucide:video",
  },
];

/** Feature chips for the できること section. */
export const capabilities = [
  { icon: "lucide:music", label: "カスタム音源の追加" },
  { icon: "lucide:audio-waveform", label: "バニラの制限を超えるピッチ" },
  { icon: "lucide:sliders-horizontal", label: "トラックごとの音量・パン" },
  { icon: "lucide:timer", label: "tick 単位でズレない譜面" },
  { icon: "lucide:users", label: "クライアント Mod なしで聴ける" },
  { icon: "lucide:file-music", label: "音源からの自動採譜" },
  { icon: "lucide:mic", label: "ズレないロスレス録音" },
];

/**
 * Link to the how-to article on /notes.
 * null hides the guide banner on /noteblock; once the article is published,
 * set e.g. { href: "/notes/noteblock-guide", title: "使い方ガイドを読む" }.
 */
export const guide: { href: string; title: string } | null = null;

/**
 * Videos demonstrating the pipeline (tools actually in use).
 * Empty for now: the section on /noteblock renders only when this has items,
 * so just add entries here once the first video is out.
 */
export const noteblockVideos: Video[] = [];
