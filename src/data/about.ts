/**
 * Content for the home page About section.
 * TODO: The copy and skills are drafts; edit them freely to match the actual profile.
 * Icons can be selected from simple-icons for brands or lucide for general icons.
 * color sets the chip icon color. For black brands, specify a lighter darkColor.
 */

/** Paragraphs describing what this person does; one item equals one paragraph. */
export const aboutParagraphs = [
  "Minecraft のノートブロック演奏を軸に、演奏動画の制作と、それを支える Mod・ツールの開発をしています。",
  "演奏に必要な道具を自分で作るうちに開発そのものが好きになり、ノートブロック拡張 Mod の Infinote、専用 DAW の DNW、アニメーションレンダラーの mc animator など、「作るための道具」を作り続けています。",
];

export interface Skill {
  name: string;
  icon: string;
  /** Icon color; falls back to the theme muted color when omitted. */
  color?: string;
  /** Dark-theme color, useful for black brands. */
  darkColor?: string;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "よく使う言語",
    skills: [
      { name: "Java", icon: "simple-icons:openjdk", color: "#437291", darkColor: "#7ba7c7" },
      { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178c6", darkColor: "#5c9fe8" },
      { name: "JavaScript", icon: "simple-icons:javascript", color: "#d4b830", darkColor: "#f7df1e" },
      { name: "Python", icon: "simple-icons:python", color: "#3776ab", darkColor: "#6aa8d8" },
      { name: "Scarpet", icon: "lucide:scroll-text" },
    ],
  },
  {
    label: "使ったことのあるフレームワーク・ツール",
    skills: [
      { name: "Fabric", icon: "lucide:blocks" },
      { name: "Vue", icon: "simple-icons:vuedotjs", color: "#4fc08d" },
      { name: "Three.js", icon: "simple-icons:threedotjs", color: "#000000", darkColor: "#ffffff" },
      { name: "Vite", icon: "simple-icons:vite", color: "#646cff", darkColor: "#8a90ff" },
      { name: "Astro", icon: "simple-icons:astro", color: "#bc52ee" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss", color: "#06b6d4" },
      { name: "FFmpeg", icon: "simple-icons:ffmpeg", color: "#007808", darkColor: "#4caf50" },
    ],
  },
];
