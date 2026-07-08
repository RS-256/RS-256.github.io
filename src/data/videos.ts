/**
 * トップページの Videos セクションに表示する動画。
 * YouTube の動画 ID とタイトルを書くだけでサムネイル付きカードになる。
 * 3 件程度がレイアウト的にきれい(1 行に収まる)。
 */

export const channel = {
  name: "やまゆーのnoteblock製作所",
  url: "https://www.youtube.com/@RS65536",
};

export interface Video {
  /** YouTube の動画 ID(watch?v= の後ろの部分) */
  id: string;
  title: string;
}

export const featuredVideos: Video[] = [
  {
    id: "yC8zk51nfH0",
    title: "「ノクティルーカ」をminecraftで作ってみた #音ブロボカロ祭り3",
  },
  {
    id: "1UajZC-nfco",
    title: "「アスノヨゾラ哨戒班」をminecraftで作ってみた",
  },
  {
    id: "_mi5Kmr2HDM",
    title: "「Bunny Girl」をminecraftで作ってみた #音ブロラブソング祭り",
  },
];

export const videoUrl = (video: Video) =>
  `https://www.youtube.com/watch?v=${video.id}`;

export const thumbnailUrl = (video: Video) =>
  `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
