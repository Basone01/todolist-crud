/**
 * filter array1 item that are exists in array2
 * @param array1 array to be filter
 * @param array2 array to lookup
 */
export function filterArrayByArray(
  array1: Array<number>,
  array2: Array<number>
) {
  const array2Set = new Set(array2);

  const isInArray2 = (item: number) => array2Set.has(item);

  return array1.filter(isInArray2);
}
