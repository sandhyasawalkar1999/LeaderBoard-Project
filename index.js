console.log("hello")
let fname = document.getElementById("first name");
let lname = document.getElementById("last name");
let contry = document.getElementById("contry");
let score = document.getElementById("score");
let addScore = document.getElementById("add-score");
let scoreReport = document.getElementById("score-report");
console.log(scoreReport)

let playerList =[];

addScore.addEventListener("click" ,function(e) 
{
    e.preventDefault();
    if(fname == "" || lname == "" || contry == "" || score == "" ){
        
        alert("please enter All information !!!!");
    }

    else{
         
        let mDate = new Date();
        // console.log(mDate);
        let date = mDate.getDate();
        let month = mDate.getMonth()+1;
        let year = mDate.getFullYear();
        
        let player ={
            fname:`${fname.value} `,
            lname :`${lname.value}`,
        contry:`${contry.value}`,
        score : `${score.value}`,
        date:`${date}-${month}-${year}`
       }
       
    playerList.push(player);
    
    updateData(playerList);
    fname.value="";
    lname.value ="";
    contry.value ="";
    score.value = "";
   }
});

console.log(playerList);

function updateData(){

    // if(playerList.length > 0){
    //     // scoreReport.style.display="block";
    //     // scoreReport.style.display="block";
    // }
    // else {
    //         // scoreReport.style.display ="none";
    // }

    scoreReport.innerHTML= "";
    playerList.sort((player1,player2 ) => player2.score - player1.score);

    playerList.forEach((items,index) =>{
        let main =document.createElement("div");
        main.setAttribute("data-index", index);
        let fname = document.createElement("div");
        fname.textContent = items.fname;
        let lname = document.createElement("div");
        lname.textContent = items.lname;
        let contry= document.createElement("div");
        contry.textContent = items.contry;
        let score = document.createElement("div");
        score.textContent = items.score;
        let del = document.createElement("button");
        del.textContent = "delete";
        del.id = "deletebtn";
        let inc = document.createElement("button");
        inc.textContent ="increase";
        inc.id ="incbtn";
        let dec = document.createElement("button");
        dec.textContent = "decrese";
        dec.id = "decbtn";

        main.appendChild(fname);
        main.appendChild(lname);
        main.appendChild(contry);
        main.appendChild(score);
        main.appendChild(del);
        main.appendChild(inc);
        main.appendChild(dec);

        document.body.appendChild(main);
        document.getElementById("deletebtn").addEventListener("click",handleDelete);

    })
}

function handleDelete(){
    
    let indexValue = this.parentElement.getAttribute("data-index");
    playerList.splice(indexValue,1);
    this.parentElement.remove();
    updateData();
}
let incbtn = document.getElementById("incbtn");

let decbtn = document.getElementById("decbtn");

