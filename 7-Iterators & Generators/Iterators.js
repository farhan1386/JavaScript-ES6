// The for loop issues

let ranks = ["A", "B", "C", "D"];
for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i]);
}

// The for loop with of
for (rank of ranks) {
  console.log(rank);
}
