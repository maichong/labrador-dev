// @flow

function random(): number {
  return parseInt(Math.random() * 256);
}

export default function randomColor(): string {
  return `rgb(${random()},${random()},${random()})`;
}
