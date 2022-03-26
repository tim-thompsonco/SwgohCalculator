import { levelingCosts } from '../constants/LevelingCost';

export const calculateNextLevelCost = (currentLevel: number): number => {
  if (currentLevel < 1) {
    throw new Error('Current level is invalid. Level must be at least 1.');
  }

  if (currentLevel > 85) {
    throw new Error('Current level is invalid. Level must be less than or equal to 85.');
  }

  // 85 is the current max level in SWGOH
  if (currentLevel === 85) {
    return 0;
  }

  return levelingCosts[currentLevel];
};