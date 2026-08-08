from collections import defaultdict
import sys
sys.setrecursionlimit(10**6)
N, K = map(int, input().split())
keys = list(map(int, input().split()))
graph = defaultdict(list)
for _ in range(N - 1):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)
count = 0
def dfs(node, parent, xor_value):
    global count
    current_xor = xor_value ^ keys[node - 1]
    if current_xor >= K:
        count += 1
    for child in graph[node]:
        if child != parent:
            dfs(child, node, current_xor)
dfs(1, 0, 0)
print("Number of trusted server in the network is:", count)