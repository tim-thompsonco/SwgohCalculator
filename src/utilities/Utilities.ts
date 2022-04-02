export const convertLabelToId = (label: string): string => {
  const labelParts = label.toLowerCase().split(' ');
  const id = labelParts.join('-');

  return id;
};