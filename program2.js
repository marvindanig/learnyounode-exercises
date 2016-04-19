var argsList = process.argv;


// console.log(argsList);

var sum = 0;
for (i = 2; i < argsList.length; i++) {
  sum += parseInt(argsList[i]);
}

console.log(sum);