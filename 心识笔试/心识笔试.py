n = int(input())
a = [int(i) for i in input().split()]
a = [abs(a[i + 1] - a[i]) for i in range(n - 1)]

ans = 0
b = [[0, 0] for _ in range(n)]
b[0] = [a[0], 0]
for i in range(1, n - 1):
    b[i][0] = max(a[i], b[i - 1][1] + a[i])
    b[i][1] = b[i - 1][0] - a[i]
    if b[i][0] > ans:
        ans = b[i][0]

print(ans)