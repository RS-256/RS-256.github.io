/**
 * Videos shown in the home page Videos section.
 * Add only the YouTube video ID and title to create a card with a thumbnail.
 * Around 3 items fits the layout well in one row.
 */

export const channel = {
  name: "やまゆーのnoteblock製作所",
  url: "https://www.youtube.com/@RS65536"
}

export interface Video {
  /** YouTube video ID, the part after watch?v= */
  id: string
  title: string
}

export const featuredVideos: Video[] = [
  {
    id: "yC8zk51nfH0",
    title: "「ノクティルーカ」をminecraftで作ってみた #音ブロボカロ祭り3"
  },
  {
    id: "1UajZC-nfco",
    title: "「アスノヨゾラ哨戒班」をminecraftで作ってみた"
  },
  {
    id: "_mi5Kmr2HDM",
    title: "「Bunny Girl」をminecraftで作ってみた #音ブロラブソング祭り"
  }
]

export const videoUrl = ( video: Video ) => `https://www.youtube.com/watch?v=${ video.id }`

export const thumbnailUrl = ( video: Video ) => `https://i.ytimg.com/vi/${ video.id }/hqdefault.jpg`
