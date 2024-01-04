function solution(tickets) {
  function DFS(airport) {
    const routes = path[airport];

    while (routes && routes.length > 0) {
      const nextAirport = routes.shift();
      DFS(nextAirport);
    }

    result.push(airport);
  }

  const result = [];
  const path = {};

  for (const [from, to] of tickets) {
    if (!path[from]) {
      path[from] = [];
    }
    path[from].push(to);
  }

  for (const airport in path) {
    path[airport].sort();
  }

  DFS("ICN"); //인천공항에서 출발

  return result.reverse();
}

const tickets = [
  ["HND", "ATL"],
  ["ATL", "JFK"],
  ["ICN", "HND"],
];

// const tickets = [
//   ["ICN", "FUK"],
//   ["ICN", "JFK"],
//   ["FUK", "PEK"],
//   ["PEK", "ICN"],
//   ["JFK", "LAX"],
// ];

const result = solution(tickets);

console.log("- 이동경로: ", result);
