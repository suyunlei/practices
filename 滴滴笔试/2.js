let input = readline();
if (input.length == 1) {
  if (input == "?") {
    console.log(0);
  } else {
    console.log(input);
  }
} else {
  let s = Array.from(input);
  let a = 0;
  let last = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "?") {
      if (i == 0) {
        if (s.length > 1 && s[i + 1] == "1") {
          s[i] = "2";
        } else {
          s[i] = "1";
        }
      } else if (s[i - 1] == "0" || (i + 1 < s.length && s[i + 1] == "0")) {
        if (s[i - 1] == "1" || (i + 1 < s.length && s[i + 1] == "1")) {
          s[i] = "2";
        } else {
          s[i] = "1";
        }
      } else {
        s[i] = "0";
      }
      last = i;
    }
    a += parseInt(s[i]);
  }
  a -= parseInt(s[last]);
  a = (3 - (a % 3)) % 3;
  let t = [a.toString(), (a + 3).toString(), (a + 6).toString()];
  if (last > 0 && t.includes(s[last - 1])) {
    for (let i = 0; i < t.length; i++) {
      if (t[i] == s[last - 1]) {
        t.splice(i, 1);
      }
    }
  }
  if (last + 1 < s.length && t.includes(s[last + 1])) {
    for (let i = 0; i < t.length; i++) {
      if (t[i] == s[last + 1]) {
        t.splice(i, 1);
      }
    }
  }
  s[last] = t[0];
  console.log(parseInt(s.join("")));
}
