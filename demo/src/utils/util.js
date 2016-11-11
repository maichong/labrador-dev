// @flow

function formatNumber(n: number): string {
  let s = n.toString();
  return s[1] ? s : '0' + s;
}

export function formatTime(date: Date): string {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function add(a: number, b: number): number {
  return a + b;
}
