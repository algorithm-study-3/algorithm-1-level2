function solution(sizes) {
  let maxW = 0; // 지갑의 가로(최대 명함 긴쪽)
  let maxH = 0; // 지갑의 세로(최대 명함 짧은쪽)

  sizes.forEach(([w, h]) => {
    const width = Math.max(w, h);
    const height = Math.min(w, h);
    if (width > maxW) maxW = width;
    if (height > maxH) maxH = height;
  });

  return maxW * maxH;
}
