import { maxLevel } from '../constants/LevelInfo';
import { levelingCosts } from '../constants/LevelingCost';
import { validatePlayerLevel } from './Validation';

export const calculateLevelingCost = (currentLevel: number, desiredLevel: number): number => {
  validatePlayerLevel(currentLevel);
  validatePlayerLevel(desiredLevel);

  if (currentLevel > desiredLevel) {
    throw new Error('Current level cannot be greater than desired level.');
  }

  let totalCost = 0;
  for (let i = currentLevel; i < desiredLevel; i++) {
    const currentLevel = i;
    totalCost += calculateNextLevelCost(currentLevel);
  }

  return totalCost;
};

export const calculateNextLevelCost = (currentLevel: number): number => {
  validatePlayerLevel(currentLevel);
  
  if (currentLevel === maxLevel) {
    return 0;
  }
  
  return levelingCosts[currentLevel];
};
