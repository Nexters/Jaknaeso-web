/**
 * @description 캐릭터 타입 enum
 */
export enum CHARACTER_TYPE {
  achievement = 'SUCCESS', // 성공(성취)
  adventure = 'ADVENTURE', // 모험
  free = 'SELF_DIRECTION', // 자기 주도(자율)
  generality = 'UNIVERSALISM', // 보편
  philanthropy = 'BENEVOLENCE', // 박애
  safety = 'SECURITY', // 안전
  stability = 'STABILITY', // 안정
}
export type CharacterKeys = keyof typeof CHARACTER_TYPE;
