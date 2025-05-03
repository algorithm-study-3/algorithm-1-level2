import sys

n=int(sys.stdin.readline())
m=int(sys.stdin.readline())

arr=sys.stdin.readline().rstrip()

start=0
end=3

answer=0
cnt=0
while end<=m: 
    if arr[start:end]=='IOI':
        cnt+=1
        start+=2 
        end+=2
        if cnt==n: 
            answer+=1
            cnt-=1
        continue
    cnt=0 
    start+=1
    end+=1 

print(answer)