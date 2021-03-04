function apartmentHunting(blocks, reqs) {
  // Write your code here.
  let set = new Set();

  reqs.forEach((req) => set.add(req));
  let aptDis = {
    left: blocks.length,
    right: blocks.length,
  };
  let apt = {
    left: -1,
    right: -1,
  };
  // get min left distance
  for (let i = 0; i < blocks.length; i++) {
    set = new Set();

    reqs.forEach((req) => set.add(req));
    let leftDis = getDistance(blocks, i, reqs, set);

    if (leftDis < aptDis.left) {
      apt.left = i;
      aptDis.left = leftDis;
    }
  }

  // get min right distance
  for (let i = 0; i < blocks.length; i++) {
    let rightDis = getDistance(blocks, i, reqs, "right");

    if (rightDis < aptDis.right) {
      apt.right = i;
      aptDis.right = rightDis;
    }
  }

  let mid = Math.floor((apt.right + apt.left) / 2);

  return mid;
}

function getDistance(blocks, i, reqs, dir = "left") {
  let distance = blocks.length;
  let reqSet = new Set();
  reqs.forEach((req) => reqSet.add(req));
  if (dir === "right") {
    step = 1;
  } else {
    step = -1;
  }

  let j = i;
  while (j >= 0 && j < blocks.length) {
    let block = blocks[j];
    for (let k = 0; k < reqs.length; k++) {
      let req = reqs[k];
      if (block[req]) {
        if (reqSet.has(req)) {
          reqSet.delete(req);
        }
      }
    }
    if (reqSet.size === 0) {
      return j - i;
    }

    j += step;
  }

  return distance;
}

let blocks = [
  { gym: false, office: true, school: true, store: false },
  { gym: true, office: false, school: false, store: false },
  { gym: true, office: false, school: true, store: false },
  { gym: false, office: false, school: true, store: false },
  { gym: false, office: false, school: true, store: true },
];
let reqs = ["gym", "office", "school", "store"];

console.log(apartmentHunting(blocks, reqs));
