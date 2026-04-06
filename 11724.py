# https://www.acmicpc.net/problem/11724
# 11724번: 연결 요소의 개수

import sys
input = sys.stdin.readline

from collections import deque

N, M = map(int, input().split())

# graph 만들기 (정점 갯수 만큼)
graph = [[] for _ in range (N + 1)]

# 간선
for _ in range(M):
  X, Y = map(int, input().split())
  graph[X].append(Y)
  graph[Y].append(X)

visited = set()
cnt = 0

#BFS
for i in range(N):
  v = i + 1

  if v not in visited:
    cnt += 1
    q = deque([v])
    visited.add(v)

    while q:
      edge = q.popleft()
      
      for visitable in graph[edge]:
        if visitable not in visited:
          q.append(visitable)
          visited.add(visitable)

print(cnt)