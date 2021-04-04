const getMaxStackDepth = (i = 0) => {
  try {
    return getMaxStackDepth(i + 1);
  } catch (e) {
    return i;
  }
};

console.log('Max Stack Depth', getMaxStackDepth(0));

const getMaxStackDepth2 = (i = 0, a = 1) => {
  try {
    return getMaxStackDepth2(i + 1, Math.random() + a);
  } catch (e) {
    return i;
  }
};

console.log('Max Stack Depth 2', getMaxStackDepth2(0, 0));
