import { validatePlayerLevel } from '../services/Validation';

describe('validatePlayerLevel', () => {
  test('An invalid player level less than 1 throws an error', () => {
    const playerLevel = 0;
        
    expect(() => validatePlayerLevel(playerLevel))
      .toThrow('Current level is invalid. Level must be at least 1.');
  });
        
  test('An invalid player level greater than 85 throws an error', () => {
    const playerLevel = 86;
          
    expect(() => validatePlayerLevel(playerLevel))
      .toThrow('Current level is invalid. Level must be less than or equal to 85.');
  });
});
