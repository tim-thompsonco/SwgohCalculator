import { minLevel, maxLevel } from '../constants/LevelInfo';

export const validatePlayerLevel = (currentLevel: number): void | Error => {
  if (currentLevel < minLevel) {
    throw new Error('Current level is invalid. Level must be at least 1.');
  }
  
  if (currentLevel > maxLevel) {
    throw new Error('Current level is invalid. Level must be less than or equal to 85.');
  }
};
  