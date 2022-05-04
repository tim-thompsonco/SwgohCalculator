import { maxLevel } from '../constants/LevelInfo';
import { levelingCosts } from '../constants/LevelingCost';
import { validatePlayerLevel } from './Validation';

export const calculateLevelingCost = (currentLevel: number, targetLevel: number): number => {
  validatePlayerLevel(currentLevel);
  validatePlayerLevel(targetLevel);

  if (currentLevel > targetLevel) {
    throw new Error('Current level cannot be greater than target level.');
  }

  let totalCost = 0;
  for (let i = currentLevel; i < targetLevel; i++) {
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
