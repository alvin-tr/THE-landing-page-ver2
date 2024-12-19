export function removeFalsyItemArray(array = []) {
  return array.filter((item) => Boolean(item));
}
