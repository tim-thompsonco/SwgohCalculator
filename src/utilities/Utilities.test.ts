import { convertLabelToId } from './Utilities';

describe('convertLabelToId', () => {
  test('A label passed in as pascal case with spaces is formatted correctly', () => {
    const label = 'Starting Level';
    const id = convertLabelToId(label);
          
    expect(id).toBe('starting-level');
  });

  test('A label passed in as lower case with spaces is formatted correctly', () => {
    const label = 'starting level';
    const id = convertLabelToId(label);
          
    expect(id).toBe('starting-level');
  });

  test('A label passed in as upper case with spaces is formatted correctly', () => {
    const label = 'STARTING LEVEL';
    const id = convertLabelToId(label);
          
    expect(id).toBe('starting-level');
  });
});

