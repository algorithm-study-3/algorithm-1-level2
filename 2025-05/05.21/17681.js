function solution(n, arr1, arr2) {
  const bin1 = arr1.map((x) =>
    x.toString(2).padStart(n, "0").split("").map(Number)
  );
  const bin2 = arr2.map((x) =>
    x.toString(2).padStart(n, "0").split("").map(Number)
  );

  return bin1.map((row, r) => {
    return row
      .map((col, c) => {
        if (col || bin2[r][c]) {
          return "#";
        }

        return " ";
      })
      .join("");
  });
}
