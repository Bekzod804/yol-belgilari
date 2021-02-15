var blockElement = document.querySelector(".block");
var signsDiv = document.querySelector(".signs");
blockElement.addEventListener("click", function (evt) {
  var first = blockElement.firstElementChild;
  var last = blockElement.lastElementChild;
  evt.preventDefault();
  if (evt.target.matches(".block__link")) {
    evt.target.classList.add("class");
    if (evt.target == first) {
      evt.target.nextElementSibling.classList.remove("class");
      last.classList.remove("class")
    }
    if (evt.target == last) {
      evt.target.previousElementSibling.classList.remove("class");
      first.classList.remove("class")
    } else {
      evt.target.previousElementSibling.classList.remove("class");
      evt.target.nextElementSibling.classList.remove("class");
    }
  }
})
var templateDiv = document.querySelector(".template-div");
var templateElement = document.querySelector(".template").content;
var bek = signsArray.slice(0,20);
var bek1 = signsArray.slice(0,40);
var bek2 = signsArray.slice(0,80);
var levelSelect = document.querySelector(".level-select");
var timeSelect = document.querySelector(".time-select");
var btnStart = document.querySelector(".btn-outline");
var salom;
var salom1;
var salom2;
var alik;
var alik1;
var alik2;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var createInput = document.createElement("input");
createInput.readOnly = true;
levelSelect.addEventListener("change", function () {
  excuting2()
  if (this.value == "oson") {

    function creating(array) {
      templateDiv.innerHTML = "";
      createInput.type = "text";
      createInput.classList = "form-control";
      createInput.style.marginBottom = "20px";
      createInput.style.padding = "10px";
      createInput.style.fontSize = "30px";

      templateDiv.appendChild(createInput);
      for (let index = 0; index < 20; index++) {
        var newTemplateElement = templateElement.cloneNode(true);
        newTemplateElement.querySelector(".img").src = array[index].img;
        newTemplateElement.querySelector(".title").textContent = array[index].title;
        templateDiv.appendChild(newTemplateElement)
      }
      setInterval(() => {
        salom = getRandomInt(bek.length);
        alik = bek[salom];
        createInput.value = bek[salom].title;
        createInput.style.textAlign = "center"
      }, 3000);
    }
    creating(signsArray)
  }
  if (this.value == "ortacha") {

    function creating(array) {
      templateDiv.innerHTML = "";
      createInput.type = "text";
      createInput.classList = "form-control";
      createInput.style.marginBottom = "20px";
      createInput.style.padding = "10px";
      createInput.style.fontSize = "30px";
      templateDiv.appendChild(createInput);
      for (let index = 0; index < 40; index++) {
        var newTemplateElement = templateElement.cloneNode(true);
        newTemplateElement.querySelector(".img").src = array[index].img;
        newTemplateElement.querySelector(".title").textContent = array[index].title;
        templateDiv.appendChild(newTemplateElement)

      }
      setInterval(() => {
        salom1 = getRandomInt(bek1.length);
        alik = bek1[salom1];
        createInput.value = bek[salom1].title;
        createInput.style.textAlign = "center"
      }, 3000);
    }
    creating(signsArray)
  }
  if (this.value == "qiyin") {

    function creating(array) {
      templateDiv.innerHTML = "";
      createInput.type = "text";
      createInput.classList = "form-control";
      createInput.style.marginBottom = "20px";
      createInput.style.padding = "10px";
      createInput.style.fontSize = "30px";
      templateDiv.appendChild(createInput);
      for (let index = 0; index < signsArray.length; index++) {
        var newTemplateElement = templateElement.cloneNode(true);
        newTemplateElement.querySelector(".img").src = array[index].img;
        newTemplateElement.querySelector(".title").textContent = array[index].title;
        templateDiv.appendChild(newTemplateElement)
      }
      setInterval(() => {
        salom2 = getRandomInt(bek2.length);
        alik2 = bek[salom2];
        createInput.value = bek2[salom2].title;
        createInput.style.textAlign = "center"
      }, 6000);
    }
    creating(signsArray)
  }
})
var creteDiv = document.createElement("div");
var closeBtn = document.querySelector(".exit");
var TimeInterval = function (salom) {
    setInterval((salom) => {
      var tugma = document.createElement("button");
      tugma.classList = "btn btn-success";
      tugma.style.boxShadow = " 0 0 20px rgb(6, 59, 1)";
      tugma.style.fontSize = "25px"
      tugma.textContent = "close";
      tugma.style.position = "fixed";
      tugma.style.top = "82%";
      tugma.style.zIndex = "1000"
      tugma.style.left = "47%";
      tugma.style.padding = "10px 20px"
      body.innerHTML = "";
      tugma.addEventListener("click", function () {
        window.location.href = "./index.html";
      })
      body.append(creteDiv, tugma);
    },
    salom);

}

templateDiv.addEventListener("click", function (evt) {

  if (evt.target.matches(".div")) {
    if (evt.target.firstElementChild.textContent == createInput.value) {
      evt.target.classList.add("salom");
      evt.target.style.visibility = "hidden"
      var some = bek.findIndex(item => item == alik);
      var bekzod = bek.splice(some, 1);
      var some1 = bek1.findIndex(item => item == alik1);
      var bekzod1 = bek1.splice(some1, 1);
      var some2 = bek2.findIndex(item => item == alik2);
      var bekzod2 = bek2.splice(some2,1);


       if (bek1.length === 0) {
         creteDiv.textContent = "Tabriklaymiz siz golib boldingiz.Siz exit tugmasini bosish orqali orqaga qaytib qiyinroq bosqichni tanlashingiz mumkin";
         clearInterval(TimeInterval);
       } else {
         creteDiv.textContent = "Uzr siz keyingi bosqichga ota olmadingiz.Siz oyinni yangidan boshlashingiz mumkin.Buning uchun close tugmasini bosing";
       }
       if (bek2.length === 0) {
         creteDiv.textContent = "Tabriklaymiz siz golib boldingiz.Siz exit tugmasini bosish orqali orqaga qaytib qiyinroq bosqichni tanlashingiz mumkin";
         clearInterval(TimeInterval);

       } else {
         creteDiv.textContent = "Uzr siz keyingi bosqichga ota olmadingiz.Siz oyinni yangidan boshlashingiz mumkin.Buning uchun close tugmasini bosing";
       }

    }
    if (evt.target.firstElementChild.textContent != createInput.value) {
      evt.target.classList.add("border")
    }
     TimeInterval(70000);
    if (bek.length == 0) {
      creteDiv.textContent = "Tabriklaymiz siz golib boldingiz.Siz close tugmasini bosish orqali orqaga qaytib qiyinroq bosqichni tanlashingiz mumkin";
      clearInterval(TimeInterval);

    } else {
      creteDiv.textContent = "Uzr siz keyingi bosqichga ota olmadingiz.Siz oyinni yangidan boshlashingiz mumkin.Buning uchun close tugmasini bosing";
    }
  }
})


var body = document.querySelector("body");
var matn = document.createElement("div");
var div = document.querySelectorAll(".div")
var timeSelect = document.querySelector(".time-select");
btnStart.addEventListener("click", function (evt) {
  body.style.backgroundImage = "none";
  document.querySelector(".select-wrapper").remove();
  var id = 0;
  matn.classList = "btn btn-danger"
  matn.style.color = "#ffffff";
  matn.style.fontSize = "25px";
  matn.style.boxShadow = " 0 0 20px #000000"
  matn.style.padding = "5px 20px";
  matn.style.position = "fixed";
  matn.style.top = "-144px";
  matn.style.right = "20px";
  closeBtn.style.left = "20px";
  matn.style.borderRadius = "5px"
  body.appendChild(matn);
  setInterval(() => {
    matn.textContent = id++
  }, 1000);


  templateDiv.classList.add("kim1");
  evt.preventDefault();
  var form = document.querySelector(".form");
  form.style.height = "0";
  var formElement = form.querySelector(".form__div");
  formElement.style.height = "0";
  creteDiv.classList.add("new");

  var calling = function () {
    if (timeSelect.value == "ikki") {
      TimeInterval(10000)
    }

  }
  calling();
  var calling1 = function () {
    if (timeSelect.value == "uch") {
      TimeInterval(200000);
    }

  }
  calling1();
  var calling2 = function () {
    if (timeSelect.value == "besh") {
      TimeInterval(600000)
    }

  }
  calling2();
  form.remove();
  closeBtn.addEventListener("click", function () {
    clearInterval(TimeInterval);
    creteDiv.remove();
  })
})

closeBtn.addEventListener("click", function (evt) {
  window.location.href = "./index.html";
})

function excuting2() {
  if (levelSelect.value === 'bek') {
    btnStart.disabled = true;
  } else {
    btnStart.disabled = false;
  }
}
excuting2()