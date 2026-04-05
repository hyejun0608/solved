# https://www.acmicpc.net/problem/1260
#   1260번: DFS와 BFS

from queue import Queue;

# input 입력받기
N, M, V = map(int, input().split())

# graph 리스트 만들기
graph = [[] for _ in range(N + 1)]

for _ in range(M):
    X, Y = map(int, input().split())
    graph[X].append(Y)
    graph[Y].append(X)

dfs = []
bfs = []

# DFS
def DFS(edge):
  dfs.append(str(edge))

  for a in sorted(graph[edge]):
    if str(a) not in dfs:
      DFS(a)

DFS(V)

# BFS
q = Queue()
q.put(V)
visited = set()

while not q.empty():
  edge = q.get()

  if edge not in visited:
    visited.add(edge)
    bfs.append(str(edge))

  for a in sorted(graph[edge]):
    if a not in visited:
      q.put(a)

# 정답 출력
print(" ".join(dfs))
print(" ".join(bfs))