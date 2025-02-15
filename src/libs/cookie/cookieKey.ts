function encodeBase64UrlSafe(text: string) {
  return btoa(text)
    .replace(/\+/g, '-') // '+' → '-'
    .replace(/\//g, '_') // '/' → '_'
    .replace(/=+$/, ''); // '=' 제거 (패딩 제거)
}

const CookieKey = {
  accessToken: encodeBase64UrlSafe('accessToken'),
  refreshToken: encodeBase64UrlSafe('refreshToken'),
  memberId: encodeBase64UrlSafe('memberId'),
  bundleId: encodeBase64UrlSafe('bundleId'),
} as const;

export { CookieKey };
export type TCookieKey = (typeof CookieKey)[keyof typeof CookieKey];
