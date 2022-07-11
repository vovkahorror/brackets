module.exports = function check(str, bracketsConfig) {
  let strCopy = str;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (strCopy.includes(bracketsConfig[j].join(""))) {
        strCopy =
          strCopy.slice(0, strCopy.indexOf(bracketsConfig[j].join(""))) +
          strCopy.slice(strCopy.indexOf(bracketsConfig[j].join("")) + 2);
      }
    }
  }

  if (strCopy.length === 0) return true;

  return false;
};
