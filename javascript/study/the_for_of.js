var a = ['A', 'B', 'C'];    // array
var s = new Set(['A', 'B', 'C']);   // set 
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);   //map
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
    alert(x[0] + '=' + x[1]);
}