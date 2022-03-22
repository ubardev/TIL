N, M, K = map(int, input().split())
data = list(map(int, input().split()))
data.sort()

first = data[N - 1]
second = data[N - 2]

firstCount  = int(M / (K + 1)) * K
firstCount += int(M % (K + 1))

result = (firstCount * first) + ((M - firstCount) * second)

print(result)