class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cases = Number(input[0]);
for (i = 1; i <= cases; i++) {
  let scoreData = input[i].split(' ').map(Number);
  let n = scoreData[0];
  let totalScore = 0;
  for (j = 1; j <= n; j++) {
    totalScore += scoreData[j];
  }
  let averScore = totalScore / n;
  let averStudent = 0;
  for (k = 1; k <= n; k++) {
    if (data[k] > averScore) averStudent += 1;
  }
  let percent = (averStudent / n * 100).toFixed(3);
  Console.log(percent+'%');
}

let testCases = Number(input[0]);
for (t = 1; t <= testCases; t++) {
  let data = input[t].split(' ').map(Number);
  let n = data[0];
  let summary = 0;
  for (i = 1; i <= n; i++) {
    summary += data[i];
  }
  let aver = summary / n;
  let cnt = 0;
  for (j = 1; j <= n; j++) {
    if (data[j] > aver) cnt += 1;
  }
  console.log(`${(cnt / n * 100).toFixed(3)}%`)
}

let cases = Number(input[0]);
for (i = 1; i <= cases; i++) {
  let scoreData = input[i].split(' ').map(Number);
  let n = scoreData[0];
  let totalScore = 0;
  for (j = 1; j <= n; j++) {
    totalScore += scoreData[j];
  }
  let averScore = totalScore / n;
  let averStudent = 0;
  for (k = 1; k <= n; k++) {
    if (data[k] > averScore) averStudent += 1;
  }
  let percent = (averStudent / n * 100).toFixed(3);
  console.log(percent+'%');
}