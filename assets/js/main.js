const body = document.querySelector("body");

let data = [
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
    question: "Which ocean lies on the east coast of the United States?",
    choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
    answer: "Atlantic",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
    question: "Which is the world's highest mountain?",
    choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
    answer: "Mount Everest",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
    question: "Which of these cities is not in Europe?",
    choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
    answer: "Moscow",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
    question: "True or False: Iceland is covered in ice.",
    choice: [true, "false"],
    answer: "false",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "The United Kingdom is comprised of how many countries?",
    choice: [1, 2, 3, "4"],
    answer: "4",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "Which of the following countries do not border France?",
    choice: ["Germany", "Netherlands", "Spain", "Italy"],
    answer: "Netherlands",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
    question: "Which U.S. state is the Grand Canyon located in?",
    choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
    answer: "Arizona",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
    question: "Which is the smallest country, measured by total land area?",
    choice: ["Maldives", "Monaco", "Vatican"],
    answer: "Vatican",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
    question: "Which is the longest river in the world?",
    choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
    answer: "Nile River",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
    question: "Which is the largest body of water?",
    choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
    answer: "Pacific Ocean",
  },
];

const section = document.createElement("section");
const section1 = document.createElement("section");
body.appendChild(section);
body.appendChild(section1);
let counter = 0;
const quizTemplateGenerator = () => {
  section.innerHTML = ` <div class="container mt-5">
<div id="content-box" class="d-flex justify-content-center row">
  <div class="col-md-10 col-lg-10">
    <div class="border">
      <div class="question bg-white p-3 border-bottom">
        <div
          class="d-flex flex-row justify-content-between align-items-center mcq"
        >
          <h4>Quiz</h4>
          <span id="mini-counter"></span>
        </div>
      </div>
      
<div id="choiceContainer" class="question bg-white p-3 border-bottom">
<div  id="questionTitle class="d-flex flex-row align-items-center question-title">
<h3 class="text-danger">Q.</h3>
<h5 id="question" class="mt-1 ml-2">

</h5>

</div>
     
      <div id="deleterDiv">
      </div>
      </div>
       <div
        class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"
      >
        <button id="previous"
          class="btn btn-primary d-flex align-items-center btn-danger"
          type="button"
        >
          <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button
        ><button id="next"
          class="btn btn-primary border-success align-items-center btn-success"
          type="button"
        >
          Next<i class="fa fa-angle-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</div>`;
};

section1.innerHTML = ` <script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=5x9abe6nvln&amp;m=7&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-420&amp;ly=420&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80" async="async"></script>`;

quizTemplateGenerator();

const inputs = document.querySelectorAll("input");
const h6 = document.querySelector("h6");
const question = document.getElementById("question");
const questionTitle = document.getElementById("questionTitle");
const choiceContainer = document.getElementById("choiceContainer");
const questionDiv = document.createElement("div");
const deleterDiv = document.getElementById("deleterDiv");
const miniCounter = document.getElementById("mini-counter");
questionDiv.classList.add("question", "bg-white", "p-3", "border-bottom");

class Quiz {
  constructor(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
  }
}
console.log(inputs);

const quizDataGenerator = () => {
  const quiz = new Quiz(
    data[counter].question,
    data[counter].choice,
    data[counter].answer
  );

  question.innerText = `${data[counter].question}`;
  deleterDiv.innerHTML = " ";
  data[counter].choice.forEach((elt) => {
    const choiceContent = document.createElement("div");
    choiceContent.classList.add("ans", "ml-2");
    deleterDiv.appendChild(choiceContent);
    const choiceLabel = document.createElement("label");
    choiceLabel.classList.add("radio");
    choiceContent.appendChild(choiceLabel);
    const choiceInput = document.createElement("input");
    choiceInput.setAttribute("type", "radio");
    choiceInput.setAttribute("name", "choice");
    choiceInput.value = elt;
    choiceLabel.appendChild(choiceInput);
    const choiceTxt = document.createElement("span");
    choiceTxt.innerText = elt;
    choiceLabel.appendChild(choiceTxt);

    choiceInput.addEventListener("change", () => {
      if (choiceInput.checked && choiceInput.value === data[counter].answer) {
        choiceTxt.classList.add("is-correct-display");
        console.log("correct answer");
        console.log(choiceInput.value);
      }
    });
  });

  console.log(quiz);
};

quizDataGenerator();
h6.innerHTML = `${counter}`;
miniCounter.innerHTML = `${counter + 1} of 10`;

previous.addEventListener("click", () => {
  counter--;
  h6.innerHTML = `${counter}`;
  miniCounter.innerHTML = `${counter + 1} of 10`;
  quizDataGenerator();
});

next.addEventListener("click", () => {
  counter++;
  h6.innerHTML = `${counter}`;
  miniCounter.innerHTML = `${counter + 1} of 10`;
  quizDataGenerator();
});

//========================= EARTH
