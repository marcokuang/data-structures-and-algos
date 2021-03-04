function diskStacking(disks) {
  // Write your code here.
  // sort the disks array by height first
  disks.sort((a, b) => a[2] - b[2]);
  let sequence = new Array(disks.length);
  let maxHeightIdx = 0;
  let res = 0;
  // set up the dp array to record the max height at each step
  let dp = disks.map((disk) => disk[2]);

  for (let i = 1; i < dp.length; i++) {
    let otherDisk = disks[i];
    for (let j = 0; j < i; j++) {
      let currentDisk = disks[j];

      // pick the current disk
      let otherHeight = otherDisk[2];
      if (isValid(currentDisk, otherDisk)) {
        dp[i] = Math.max(dp[i], dp[j] + otherHeight);
        sequence[i] = j;
      }
      // don't pick the current disk
      if (dp[i] >= dp[maxHeightIdx]) {
        maxHeightIdx = i;
      }
    }
    res = Math.max(res, dp[i]);
  }

  return [dp[disks.length - 1], [...sequence]];
}

function isValid(smaller, bigger) {
  if (
    smaller[0] < bigger[0] &&
    smaller[1] < bigger[1] &&
    smaller[2] < bigger[2]
  ) {
    return true;
  } else {
    return false;
  }
}

let array = [
  [2, 1, 2],
  [3, 2, 3],
  [4, 4, 5],
];
console.log(diskStacking(array));
