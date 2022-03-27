import { levelingCosts } from '../constants/LevelingCost';
import { maxLevel } from '../constants/LevelInfo';
import { validatePlayerLevel } from './Validation';

export const calculateLevelingCost = (startingLevel: number, desiredLevel: number) => {
  validatePlayerLevel(startingLevel);
  validatePlayerLevel(desiredLevel);

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
