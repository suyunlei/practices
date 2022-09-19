/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */

/**
 * 穷举题，每种开关奇数次相当于只进行了一次，偶数次相当于没做
 * 操作的顺序并不改变结果的状态，操作的次数才会改变灯泡的结果
 * 有些操作合并后等于其他操作：
 *  A = BC
 *  B = AC
 *  C = AB
 * A: 1 2 3 4 5 6 7 8 9 10
 * B: 2 4 6 8 10 12
 * C: 1 3 5 7 9 11 13
 * D: 1 4 7 10 13 16 19
 * 本来ABCD起作用的组合有：AB,AC,AD,BC,BD,CD,A,B,C,D,无操作
 * 简化后就只剩：A,B,C,D,AD,BD,CD,无操作 最多8种情况
 */
var flipLights = function (n, presses) {
  if (presses == 0) {
    return 1; //全亮
  }
  if (n == 1) {
    // 此时C==D
    return 2; // A,C
  }
  if (n == 2) {
    // 此时C==D
    if (presses == 1) {
      return 3; // A,B,C
    } else {
      return 4; // A,B,C相互组合，同时也可能实现全亮
    }
  }
  if (n >= 3) {
    // 此时C !== D
    if (presses == 1) {
      return 4; //A,B,C,D
    }
    if (presses == 2) {
      return 7; //D 无法实现
    } else {
      return 8; //A,B,C,D任意组合 也可以是全亮
    }
  }
};
