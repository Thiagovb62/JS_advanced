function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("fi");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}
f1(f1Callbacks);

function f1Callback() {
  f2(f2Callbacks);
}

function f2Callbacks() {
  f3(f3Callbacks);
}
function f3Callbacks() {
  console.log("Ola mundo");
}
