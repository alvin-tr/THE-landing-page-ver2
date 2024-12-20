export function removeFalsyItemArray(array = []) {
  return array.filter((item) => Boolean(item));
}

export function isDuplicate(value, array) {
  if (!value) return false;
  let count = 0;
  for (let item of array) {
    if (item === value) {
      count++;
    }
    if (count > 1) {
      return true; // Trả về true ngay khi đếm được hơn 1 lần
    }
  }
  return false; // Không tìm thấy giá trị xuất hiện hơn 1 lần
}

export function hasDuplicates(array) {
  const uniqueElements = new Set(array);
  return uniqueElements.size !== array.length;
}
