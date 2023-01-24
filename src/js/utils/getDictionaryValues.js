export function getDictionaryValues(dict) {
  return Object.keys(dict).map((key) => dict[key]);
}
