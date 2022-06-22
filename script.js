// TODO: style switcher (or just typography?)

const body = document.getElementById("body");

const bodyClasses = {
  fira: true,
};

const togglifier = document.getElementById("togglifier");

togglifier.addEventListener(
  "click",
  () => {
    bodyClasses.fira = !bodyClasses.fira;
    setBodyClasses();
  }
);

setBodyClasses();


function setBodyClasses () {
  const bodyClassArr = [];
  for (className in bodyClasses) {
    if (bodyClasses[className]) {
      bodyClassArr.push(className);
    }
  }
  const bodyClassStr = bodyClassArr.join("");
  body.className = bodyClassStr;
}