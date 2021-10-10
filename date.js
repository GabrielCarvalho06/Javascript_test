let d = new Date();
console.log(d);
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toString());

d = new Date(2021, 0, 1, 12, 30, 12);
console.log(d);

d = new Date('2021-01-01 12:30:12');
console.log(d);

d = new Date();
let res = d.getFullYear();
console.log(res);

res = d.getMonth();
console.log(res);

res = d.getDay();
console.log(res);

res = d.getDate();
console.log(res);

res = d.getHours();
console.log(res);

res = d.getMinutes();
console.log(res);

res = d.getSeconds();
console.log(res);

res = d.getMilliseconds();
console.log(res);

res = d.getTime();
console.log(res);

res = Date.now();
console.log(res);

d = new Date();
d.setFullYear(2022);
res = d;
console.log(res);

d.setMonth(11);
res = d;
console.log(res);

d.setDate(6);
res = d;
console.log(res);

d.setDate(d.getDate() + 7);
res = d;
console.log(res);







