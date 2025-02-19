export const checkLetter = (name: string) => {
  const charCode = name.charCodeAt(name.length - 1);
  const consonantCode = (charCode - 44032) % 28;

  // 받침 없으면
  if (consonantCode === 0) {
    return false;
  }
  return true;
};
