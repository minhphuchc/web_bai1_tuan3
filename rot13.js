function rot13(str) {
  let res = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      let tmp = String.fromCharCode((str.charCodeAt(i) % 26) + 65);
      res += tmp;
    } else {
      res += str[i];
    }
  }

  return res;
}

console.log(rot13("SERR PBQR PNZC"));
