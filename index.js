console.log("hello");
let fname = document.getElementById("first name");
let lname = document.getElementById("last name");
let contry = document.getElementById("contry");
let score = document.getElementById("score");
let addScore = document.getElementById("add-score");
let scoreReport = document.getElementById("score-report");
console.log(scoreReport);

let playerList = [];

addScore.addEventListener("click", function (e) {
  e.preventDefault();
  if (fname == "" || lname == "" || contry == "" || score == "") {
    alert("please enter All information !!!!");
  } else {
    let mDate = new Date();
    // console.log(mDate);
    let date = mDate.getDate();
    let month = mDate.getMonth() + 1;
    let year = mDate.getFullYear();

    let player = {
        id: Date.now(),
      //   id: `player-${playerList.length + 1}`,  // for unique id, but not required for this task.
      fname: `${fname.value} `,
      lname: `${lname.value}`,
      contry: `${contry.value}`,
      score: `${score.value}`,
      date: `${date}-${month}-${year}`,
    };

    playerList.push(player);

    updateData(playerList);
    fname.value = "";
    lname.value = "";
    contry.value = "";
    score.value = "";
  }
});

console.log(playerList);

function updateData() {
    console.log(playerList);
    
  if(playerList.length > 0){
      scoreReport.style.display="block";
      // scoreReport.style.display="block";
  }
  else {
          scoreReport.style.display ="none";
  }

  scoreReport.innerHTML = "";
  playerList.sort((player1, player2) => player2.score - player1.score);

  playerList.forEach((items, index) => {
    console.log(items.score);
    
    let main = document.createElement("div");
    main.setAttribute("data-index", index);
    main.id = "maindiv";

    let fname = document.createElement("div");
    fname.textContent = items.fname;
    fname.id = "fname";

    let lname = document.createElement("div");
    lname.textContent = items.lname;
    lname.id = "lname";

    let contry = document.createElement("div");
    contry.textContent = items.contry;
    contry.id = "contry";

    let score = document.createElement("div");
    score.textContent = items.score;
    score.id = "score";

    let inc = document.createElement("button");
    inc.dataId = items.id;
    inc.textContent = "+5";
    inc.id = "incbtn";

    inc.addEventListener("click",function(e){
        console.log(e.target.dataId);
        playerList.forEach((player)=>{
            if(player.id == e.target.dataId){
                // player.score += 5;
                player.score = parseInt(player.score) + 5; 
            }
        })        
        // let score = parseInt(score);
        // score += 5;
        // score.value = score;
        updateData();
    })
    let dec = document.createElement("button");
    dec.dataId = items.id;
    dec.textContent = "-5";
    dec.id = "decbtn";


    dec.addEventListener("click" ,function(e){
        console.log(e.target.dataId);
        playerList.forEach((player)=>{
            if(player.id == e.target.dataId){
                player.score = parseInt(player.score) - 5; 
            }
        })        
        // let score = parseInt(score);
        // score += 5;
        // score.value = score;
        updateData();
    })

    let del = document.createElement("button");
    del.textContent = "delete";
    del.id = "deletebtn";


    main.appendChild(fname);
    main.appendChild(lname);
    main.appendChild(contry);
    main.appendChild(score);
    main.appendChild(inc);
    main.appendChild(dec);
    main.appendChild(del);

    document.getElementById("score-report").appendChild(main);
    document
      .getElementById("deletebtn")
      .addEventListener("click", handleDelete);
  });
}

function handleDelete() {
  let indexValue = this.parentElement.getAttribute("data-index");
  playerList.splice(indexValue, 1);
  this.parentElement.remove();
  updateData();
}

