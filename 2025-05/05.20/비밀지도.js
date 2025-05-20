function solution(n, arr1, arr2) {
  const map1 = arr1.map((number) => number.toString(2).padStart(n, "0"))
  const map2 = arr2.map((number) => number.toString(2).padStart(n, "0"))
      
  const answer = map1.map((line, index1) => {
      const line1 = map1[index1].split("");
      const line2 = map2[index1].split("");
      return line1.map((value1, index2) => {
          const value2 = line2[index2];
          return (value1 === "1" || value2 === "1")  ? "#" : " "
      }).join("")
  })

  return answer;
}