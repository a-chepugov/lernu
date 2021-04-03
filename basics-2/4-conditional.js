const year = 2015;

let result1;
switch (year) {
  case (2014):
    result1 = '->2014';
    break;
  case (2015):
    result1 = '->2015';
    break;
  case (2016):
    result1 = '->2016';
    break;
  default:
    result1 = '->unknown';
}
console.log('result1', result1);


// switch (true) hack
let result2;
switch (true) {
  case (year > 2014 && year <= 2016):
    result2 = '->2014-2016';
    break;
  case (year > 2016 && year <= 2018):
    result2 = '->2017-2016';
    break;
  case (year > 2018 && year <= 2021):
    result2 = '->2018-2021';
    break;
  default:
    result2 = '->unknown';
}
console.log('result2', result2);

// type misconception. no type casting
let result3;
switch (year) {
  case ('2015'):
    result3 = '->string';
    break;
  case (2015):
    result3 = '->number';
    break;
}
console.log('result3', result3);

// lost `break`
let result4;
switch (year) {
  case (2014):
    result4 = '->2014';
    break;
  case (2015):
    result4 = '->2015';
  // break; // Don't forget break
  case (2016):
    result4 = '->2016';
  case (2017):
  case (2018):
  case (2018):
    result4 = '->2017,2018,2019';
    break;
}
console.log('result4', result4);
