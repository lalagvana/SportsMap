export const isEmpty = (value: boolean | { from: number; to: number }): boolean => {
  if (typeof value === 'boolean') {
    return value;
  }

  return Boolean(value.from || value.to);
};