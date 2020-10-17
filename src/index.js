module.exports = function check(str, bracketsConfig) {
  let count = 0;
  let resalt = true;
  while (resalt && str !== '') {
    bracketsConfig.forEach(function(item, i, arr) {
    if (str.indexOf(item[0] + item[1]) >= 0) count++;
    //console.log (count);
    return count;
    });
    if (count > 0) {
      bracketsConfig.forEach(function(item, i, arr) {
      //str = str.replace(array[0] + array[1], '');
      str = str.replace(item[0] + item[1], '');
      //console.log( str);
      });
      count=0;
    } else resalt = false;
  }
  return resalt;
}
