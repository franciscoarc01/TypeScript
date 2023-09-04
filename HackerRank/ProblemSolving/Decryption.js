function decryptPassword(s) {
  // Write your code here
  let decrypted = new String();
  for (let i = 0; i < s.length - 1; i++) {
    if (
      s[i] === s[i].toLowerCase() &&
      s[i + 1] === s[i + 1].toUpperCase() &&
      isNaN(s[i]) &&
      isNaN(s[i + 1])
    ) {
      decrypted += s[i + 1];
      decrypted += s[i] + "*";
      i += 1;
    } else if (!isNaN(s[i])) {
      decrypted += "0";
      decrypted = s[i] + decrypted;
    } else {
      decrypted += s[i];
    }
  }
  return decrypted;
}

console.log(decryptPassword("hAck3rr4nk"));
