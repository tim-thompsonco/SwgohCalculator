import { convertLabelToId } from './Utilities';

describe('convertLabelToId', () => {
  test('A label passed in as pascal case with spaces is formatted correctly', () => {
    const label = 'Current Level';
    const id = convertLabelToId(label);
          
    expect(id).toBe('current-level');
  });

  test('A label passed in as lower case with spaces is formatted correctly', () => {
    const label = 'current level';
    const id = convertLabelToId(label);
          
    expect(id).toBe('current-level');
  });

  test('A label passed in as upper case with spaces is formatted correctly', () => {
    const label = 'CURRENT LEVEL';
    const id = convertLabelToId(label);
          
    expect(id).toBe('current-level');
  });
});

