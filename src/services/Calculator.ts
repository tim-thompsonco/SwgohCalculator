import { maxLevel } from '../constants/LevelInfo';
import { levelingCosts } from '../constants/LevelingCost';
import { validatePlayerLevel } from './Validation';

export const calculateLevelingCost = (startingLevel: number, desiredLevel: number): number => {
  validatePlayerLevel(startingLevel);
  validatePlayerLevel(desiredLevel);

  if (startingLevel > desiredLevel) {
    throw new Error('Starting level cannot be greater than desired level.');
  }

  let totalCost = 0;
  for (let i = startingLevel; i < desiredLevel; i++) {
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
