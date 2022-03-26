import { calculateNextLevelCost } from './Calculator';

test('An invalid player level less than 1 throws an exception', () => {
  const playerLevel = 0;

  expect(() => calculateNextLevelCost(playerLevel))
    .toThrow('Current level is invalid. Level must be at least 1.');
});

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

test('An invalid player level greater than 85 throws an exception', () => {
  const playerLevel = 86;

  expect(() => calculateNextLevelCost(playerLevel))
    .toThrow('Current level is invalid. Level must be less than or equal to 85.');
});