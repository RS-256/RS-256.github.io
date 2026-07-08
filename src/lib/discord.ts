/**
 * Discord 招待リンクの公開情報をビルド時に取得する。
 * 認証不要の公開 API を使い、サーバー名・アイコン・メンバー数を返す。
 * 取得に失敗した場合は null を返し、呼び出し側は手書きのラベルへフォールバックする
 * (ネットワークや招待リンクの失効でビルドが落ちないようにするため)。
 */

const INVITE_PATTERN = /(?:discord\.gg|discord(?:app)?\.com\/invite)\/([\w-]+)/i;

export interface DiscordInviteInfo {
  name: string;
  iconUrl?: string;
  memberCount?: number;
  onlineCount?: number;
}

// 同じ招待コードを複数回フェッチしないためのキャッシュ(ビルドプロセス内で有効)
const cache = new Map<string, Promise<DiscordInviteInfo | null>>();

/** URL が Discord 招待リンクなら公開情報を取得する。それ以外は null。 */
export function fetchDiscordInvite(
  url: string,
): Promise<DiscordInviteInfo | null> {
  const code = INVITE_PATTERN.exec(url)?.[1];
  if (!code) return Promise.resolve(null);
  let promise = cache.get(code);
  if (!promise) {
    promise = fetchInviteInfo(code);
    cache.set(code, promise);
  }
  return promise;
}

async function fetchInviteInfo(
  code: string,
): Promise<DiscordInviteInfo | null> {
  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${code}?with_counts=true`,
    );
    if (!res.ok) {
      console.warn(
        `[discord] 招待コード ${code} の取得に失敗 (HTTP ${res.status})。手書きラベルで表示します。`,
      );
      return null;
    }
    const data = await res.json();
    const guild = data?.guild;
    if (!guild?.name) return null;
    return {
      name: guild.name,
      iconUrl: guild.icon
        ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=96`
        : undefined,
      memberCount: data.approximate_member_count,
      onlineCount: data.approximate_presence_count,
    };
  } catch (err) {
    console.warn(`[discord] 招待コード ${code} の取得に失敗:`, err);
    return null;
  }
}
