K = int(input())

totalList = list()
widthMax = 0
heightMax = 0

for _ in range(6) :
  d, n = map(int, input().split())
  totalList.append(n)
  if d >= 3 :
    widthMax = max(widthMax, n)
  else :
    heightMax = max(heightMax, n)

widthIndex = totalList.index(widthMax)
heightIndex = totalList.index(heightMax)

widthMin = widthMax - min(totalList[(heightIndex+1)%6], totalList[(heightIndex-1)%6])
heightMin = heightMax - min(totalList[(widthIndex+1)%6], totalList[(widthIndex-1)%6])

print(K*(widthMax*heightMax - widthMin*heightMin))