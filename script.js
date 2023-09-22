let startDiv = document.createElement("div");
startDiv.setAttribute("id", "start");
document.body.appendChild(startDiv);

let start = document.getElementById("start");

let countTen = (callback) => {
  start.textContent = 10;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countNine = (callback) => {
  start.textContent = 9;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countEight = (callback) => {
  start.textContent = 8;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countSeven = (callback) => {
  start.textContent = 7;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countSix = (callback) => {
  start.textContent = 6;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countFive = (callback) => {
  start.textContent = 5;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countFour = (callback) => {
  start.textContent = 4;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countThree = (callback) => {
  start.textContent = 3;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countTwo = (callback) => {
  start.textContent = 2;
  setTimeout(() => {
    callback();
  }, 1000);
};
let countOne = (callback) => {
  start.textContent = 1;
  setTimeout(() => {
    callback();
  }, 1000);
};

countTen(() => {
  countNine(() => {
    countEight(() => {
      countSeven(() => {
        countSix(() => {
          countFive(() => {
            countFour(() => {
              countThree(() => {
                countTwo(() => {
                  countOne(() => {
                    start.textContent = "Happy Independence Day";
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
