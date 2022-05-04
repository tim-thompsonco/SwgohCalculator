import { maxLevel, minLevel } from '../constants/LevelInfo';
import { calculateLevelingCost, calculateNextLevelCost } from './Calculator';

describe('calculateNextLevelCost', () => {
  test('The correct cost is returned to go from level 1 to 2', () => {
    const playerLevel = 1;
    const nextLevelCost = calculateNextLevelCost(playerLevel);
      
    expect(nextLevelCost).toBe(213);
  });
      
  test('The correct cost is returned to go from level 29 to 30', () => {
    const playerLevel = 29;
    const nextLevelCost = calculateNextLevelCost(playerLevel);
      
    expect(nextLevelCost).toBe(2982);
  });
      
  test('The correct cost is returned to go from level 84 to 85', () => {
    const playerLevel = 84;
    const nextLevelCost = calculateNextLevelCost(playerLevel);
      
    expect(nextLevelCost).toBe(355071);
  });
      
  test('A cost of 0 is returned when player is at max level of 85', () => {
    const playerLevel = 85;
    const nextLevelCost = calculateNextLevelCost(playerLevel);
      
    expect(nextLevelCost).toBe(0);
  });
});

describe('calculateLevelingCost', () => {
  test('Leveling cost is computed correctly for min level to max level', () => {
    const totalCost = calculateLevelingCost(minLevel, maxLevel);
      
    expect(totalCost).toBe(6269655);
  });
      
  test('Leveling cost is computed correctly for level 1 to 60', () => {
    const currentLevel = 1;
    const targetLevel = 60;
    const totalCost = calculateLevelingCost(currentLevel, targetLevel);
        
    expect(totalCost).toBe(1100784);
  });
      
  test('Leveling cost is computed correctly for level 70 to 85', () => {
    const currentLevel = 70;
    const targetLevel = 85;
    const totalCost = calculateLevelingCost(currentLevel, targetLevel);
        
    expect(totalCost).toBe(3855300);
  });
      
  test('Leveling cost is computed correctly when current and target level are the same', () => {
    const currentLevel = 70;
    const targetLevel = 70;
    const totalCost = calculateLevelingCost(currentLevel, targetLevel);
          
    expect(totalCost).toBe(0);
  });
      
  test('A current level greater than target level throws an error', () => {
    const currentLevel = 71;
    const targetLevel = 70;
            
    expect(() => calculateLevelingCost(currentLevel, targetLevel))
      .toThrow('Current level cannot be greater than target level.');
  });
});