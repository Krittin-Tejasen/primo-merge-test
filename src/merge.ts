function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const ascCol3: number[] = [];
  for(let i = collection_3.length - 1; i >= 0; i--){
    ascCol3.push(collection_3[i]!);
  }

  const mergedCol12 = mergeCol(collection_1, collection_2);
  return mergeCol(mergedCol12, ascCol3);
}

function mergeCol(firstCol: number[], secondCol: number[]): number[] {
  let i = 0, j = 0;
  const merged: number[] = [];
  while(i < firstCol.length && j < secondCol.length){
    if(firstCol[i] <= secondCol[j]){
      merged.push(firstCol[i]);
      i++;
    } else {
      merged.push(secondCol[j]);
      j++;
    }
    
    
  }

  while(i < firstCol.length){
    merged.push(firstCol[i]);
    i++;
  }
  while(j < secondCol.length){
    merged.push(secondCol[j]);
    j++;
  }

  return merged;
}

module.exports = {merge}