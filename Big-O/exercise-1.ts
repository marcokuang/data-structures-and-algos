import { performance } from "perf_hooks";

function Log(uppercase: boolean) {
  // method name is the key, the value of the decriptor is the method body.
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any) {
      const preLog = uppercase
        ? ("The method args are: " + JSON.stringify(args)).toUpperCase()
        : "The method args are: " + JSON.stringify(args);
      console.log(preLog);
      const result = originalMethod.apply(this, args);
      const resultLog = uppercase
        ? `Method ${key} has a return value of ${result}`.toUpperCase()
        : `Method ${key} has a return value of ${result}`;

      console.log(resultLog);
      console.log(target);
      return result;
    };
  };
}

class MyMath {
  @Log(true)
  static multiplyTwo(number: number): number {
    return number * 2;
  }
}

MyMath.multiplyTwo(4);

console.log("hello");

const nemo: string[] = ["nemo"];

const findNemo = (array: string[]): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
      return 1;
    }
  }

  return 0;
};

const t1 = performance.now();
console.log(findNemo(nemo));
const t2 = performance.now();
console.log(`Performance is ${t2 - t1} ms`);
