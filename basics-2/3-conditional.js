const year = 2014;

let result1;
if (year > 2015) {
  result1 = 'greater than 2015';
} else {
  result1 = 'less than 2015';
}
console.log('result1', result1);

let result2;
if (year > 2015) {
  result2 = 'greater than 2015';
}
console.log('result2', result2);

let result3 = year > 2015 ?
  'greater than 2015' :
  'less than 2015';
console.log('result3', result3);

let result4;
if (year > 2015) {
  result4 = 'greater than 2015';
} else if (year > 2010) {
  result4 = 'greater than 2010';
} else if (year > 2012) {
  result4 = 'greater than 2012';
} else {
  if (year < 2000) {
    result4 = 'less than 2020';
  } else {
    result4 = 'greater than 2020';
  }
}
console.log('result4', result4);

if ('0') {
  console.log('not ok');
} else {
  console.log('ok');
}

