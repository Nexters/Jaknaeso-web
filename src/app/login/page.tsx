'use client';

import { Button } from '@/components/button';
import { redirectUri } from '@/libs';

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };
  const handleAppleLogin = async () => {
    const data = await window.AppleID.auth.signIn();
    const idToken = data.authorization.id_token;
    console.log(idToken);
  };
  return (
    <>
      <Button label="kakao login" onClick={handleKakaoLogin} />
      <Button label="apple Login" onClick={handleAppleLogin} />
    </>
  );
}
