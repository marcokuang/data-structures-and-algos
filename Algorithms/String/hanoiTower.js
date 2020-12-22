function hanoi(number) {
  moveDisk(number, "a", "b", "c");
}

function moveDisk(number, from, to, spare) {
  if (number === 0) {
    printMove(number, from, to);
    return;
  } else {
    moveDisk(number - 1, from, spare, to);
    printMove(number, from, to, spare);
    moveDisk(number - 1, spare, to, from);
  }
}

function printMove(number, from, to) {
  console.log(`Move Disk ${number} from Tower ${from} to Tower ${to}`);
}

hanoi(2);
