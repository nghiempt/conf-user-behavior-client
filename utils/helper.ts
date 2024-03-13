export const example = (example: any) => {
  return true;
};

// limit string
export const limitString = (str: string, limit: any) => {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
};
