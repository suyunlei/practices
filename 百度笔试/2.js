let q = parseInt(readline());
// let q = 3;
// let line = "101";
while ((line = readline()) && q) {
  // while (q) {
  let a = { 1: "0", 0: "1" };
  let t = [...line];
  for (let i = 0; i < t.length - 1; i++) {
    if (t[i] == "1") {
      t[i + 1] = a[t[i + 1]];
    }
  }
  if (t[t.length - 1] == "0") {
    console.log("Yes");
    continue;
  }
  let p = [...line];
  for (let i = 0; i < p.length - 1; i++) {
    if (p[i] == "0") {
      p[i + 1] = a[p[i + 1]];
    }
  }
  if (p[p.length - 1] == "1") {
    console.log("Yes");
    continue;
  }
  console.log("No");
  q--;
}
