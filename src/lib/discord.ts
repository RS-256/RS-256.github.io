/**
 * Fetch public Discord invite information at build time.
 * Uses the unauthenticated public API and returns the server name, icon, and member counts.
 * Returns null on failure so callers can fall back to manually written labels
 * without breaking the build when the network is unavailable or an invite has expired.
 */

const INVITE_PATTERN = /(?:discord\.gg|discord(?:app)?\.com\/invite)\/([\w-]+)/i;

export interface DiscordInviteInfo {
  name: string;
  iconUrl?: string;
  memberCount?: number;
  onlineCount?: number;
}

// Cache invite lookups within the build process to avoid fetching the same code repeatedly.
const cache = new Map<string, Promise<DiscordInviteInfo | null>>();

/** Fetch public info when the URL is a Discord invite; otherwise return null. */
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
