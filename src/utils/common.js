export const range = (start, end) => {
  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}