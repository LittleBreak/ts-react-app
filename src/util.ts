export let flag: boolean = true;

interface ResponseData {
  id: string;
  name: string;
  callee: Function;
  extra?: number;
}

let arr: number[] = [1, 2, 3];
let arr1: Array<string> = ["1"];

interface Args {
  [index: number]: number;
  length: number;
  callee: Function;
}
function sum() {
  let args: IArguments = arguments;
}

export function test(a: string): string {
  return "1";
}

interface Test {
  (a: string): string;
}

let tt: Test;
