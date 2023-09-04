function timeConversion(cadenita: string): string {
  // Write your code here
  let mP: string = cadenita.substring(8, cadenita.length);
  const hora: number = parseInt(cadenita.substring(0, 2), 10);
  const is12: boolean = hora === 12;
  switch (mP) {
    case "AM":
      return is12
        ? `0${hora - 12}${cadenita.substring(2, 8)}`
        : cadenita.substring(0, 8);
    case "PM":
      return is12
        ? cadenita.substring(0, 8)
        : `${hora + 12}${cadenita.substring(2, 8)}`;
    default:
      return "Error";
  }
}
console.log(timeConversion("12:40:22AM"));
