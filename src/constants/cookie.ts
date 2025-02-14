function encodeBase64UrlSafe(text: string) {
  return btoa(text)
    .replace(/\+/g, '-') // '+' → '-'
    .replace(/\//g, '_') // '/' → '_'
    .replace(/=+$/, ''); // '=' 제거 (패딩 제거)
}

const COOKIE_NAME = {
  memberId: encodeBase64UrlSafe('memberId'),
  bundleId: encodeBase64UrlSafe('bundleId'),
};
Object.freeze(COOKIE_NAME);

export { COOKIE_NAME };
