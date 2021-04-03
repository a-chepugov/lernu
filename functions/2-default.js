function fn(a, b = 88, c = 999) {
  return {a, b, c};
}

console.table({
  'fn(1, 2, 3)': fn(1, 2, 3),
  'fn(1, 2)': fn(1, 2),
  'fn(1)': fn(1),
  'fn()': fn(),
})


// Old style for default parameter values
function fnOld(a, b, c) {
  b = b || 88;
  c = c || 999;
  return {a, b, c}
}

console.table({
  'fnOld(1, 2, 3)': fnOld(1, 2, 3),
  'fnOld(1, 2)': fnOld(1, 2),
  'fnOld(1)': fnOld(1),
  'fnOld()': fnOld(),
})
