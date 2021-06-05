var storedScores = JSON.parse(localStorage.getItem("userData"));
var highScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");
function displayScores() {
    if (storedScores !== null) {
        /*
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var initials = storedScores[i].inits;
            var scores = storedScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
        */    
    //   console.log("if statement me hain hm");
      // console.log(storedScores[storedScores.length-1]);
     //  console.log("ans"+storedScores[storedScores.length-1].ans);    
       var bold=document.createElement("strong");
       var para1=document.createElement("p");
       var para2=document.createElement("p");
       var para3=document.createElement("p");
       var para4=document.createElement("p");
       var para5=document.createElement("p");
       var para6=document.createElement("p");
       var t1=document.createTextNode(storedScores[storedScores.length-1].bold);
       bold.appendChild(t1);
       var t2=document.createTextNode(storedScores[storedScores.length-1].para);
       para1.appendChild(t2);
       var t3=document.createTextNode(storedScores[storedScores.length-1].suggestion);
       para2.appendChild(t3);
       var t4=document.createTextNode(storedScores[storedScores.length-1].suggestion_1);
       para3.appendChild(t4);
       var t5=document.createTextNode(storedScores[storedScores.length-1].suggestion_2);
       para4.appendChild(t5);
       var t6=document.createTextNode(storedScores[storedScores.length-1].suggestion_3);
       para5.appendChild(t6);
       var t7=document.createTextNode(storedScores[storedScores.length-1].suggestion_4);
       para6.appendChild(t7);
        highScoresArea.appendChild(bold);
        highScoresArea.appendChild(para1);
        highScoresArea.appendChild(para2);
        highScoresArea.appendChild(para3);
        highScoresArea.appendChild(para4);
        highScoresArea.appendChild(para5);
        highScoresArea.appendChild(para6);
    }else{
        console.log("else mein hain");
    }
};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();

});
