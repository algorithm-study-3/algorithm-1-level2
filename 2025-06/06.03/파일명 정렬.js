function solution(files) {
  return files
    .map((file, index) => {
      const match = file.match(/^([^0-9]+)([0-9]{1,5})/);
      return {
        original: file,
        head: match[1].toLowerCase(),
        number: parseInt(match[2], 10),
        index,
      };
    })
    .sort((a, b) => {
      if (a.head < b.head) return -1;
      if (a.head > b.head) return 1;
      if (a.number < b.number) return -1;
      if (a.number > b.number) return 1;
      return a.index - b.index;
    })
    .map((item) => item.original);
}
