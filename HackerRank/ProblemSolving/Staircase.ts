import dotenv from "dotenv";
dotenv.config();
function staircase(n: number): void {
  // Write your code here
  let piramid: string = "";
  for (let b = 0; b < n; b++) {
    let string = "";
    for (let h = 0; h <= b; h++) {
      string += "#";
    }
    for (let h = 1; h < n - b; h++) {
      string = " " + string;
    }
    if (b + 1 < n) {
      piramid += string + "\n";
    } else {
      piramid += string;
    }
  }
  console.log(piramid);
}

staircase(parseInt(process.env.NSTEP || "1", 10));
