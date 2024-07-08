//Kahoot_ui.js

var new_QuestionSet = {
"QuestionSetID": '',
"Questions": [],


}


/*
Button-reaction after "enter Game".
List all the QuestionSets off all the player

*/

function enter_game(){
    document.getElementById('lst:Kahoot').innerHTML = '';
    var cl = document.getElementById('lst:Kahoot');
    for(var m in tremola.player){
        var player =  tremola.player[m];
        if(myId != player.SendID){
            var playerItem = document.createElement('div');
            var playerName = document.createElement('h2');
            playerName.textContent = player.SendID;
            var questionSetItem = document.createElement('div');
            questionSetItem.classList.add("button-container");

        }
        for(var questionSet in player.QuestionSets){
            var item = document.createElement('div');
            if(questionSet.status == "open"){
                var row = "<button class='kahoot_item_Button" + "' onclick='load_questionSet(" + questionSet.questionSetID + ");' style='overflow: hidden; position: relative;'>";
            }else {
                var row = "<button class='kahoot_item_Button" + "' style='overflow: hidden; position: relative;'>";
            }
            row += "<div style='white-space: nowrap;'><div style='text-overflow: ellipsis; overflow: hidden;'>" + questionSet.status + "</div>";
            row += "<div style='text-overflow: clip; overflow: ellipsis;'><font size=-2>" + escapeHTML(mem) + ", </font><font size=-3>last changed: " + total_points + "</font> </div></div>";
            rwo += "</button>";
            row += "";
            item.innerHTML = row;
            questionSetItem.appendChild(item);
        }
        playerItem.appendChild(playerName);
        playerItem.appendChild(questionSetItem);
    }
    cl.appendChild(playerItem);

}


/*
Load the pressed the QuestionSet, so therefore load the Questions

*/
function load_questionSet(questionSetID){
    current_QuestionSet = questionSetID;
    var target;
    initializeAnswerList();
    for(var m in tremola.player){
        var player = tremola.player[m];
        for(questionSet in player.QuestionSets){
            if(questionSet.QuestionSetID == questionSetID){
                target = questionSet;

            }

        }

    }

    document.getElementById('questionlst:Kahoot').innerHTML = '';
    cl = document.getElementById('questionlst:Kahoot');
    for(var question in target.Questions){
        var item = document.createElement('div');
        var row = "<button class='kahoot_item_Button" + "' onclick='load_question(" + question.qID +", "+ target.questionSetID + ");' style='overflow: hidden; position: relative;'>";
        rwo += "</button>";
        row += "";
        item.innerHTML = row;
        cl.appendChild(item);

    }


}
/*

Load the pressed Question, there Answers and the Question-phrased
*/
function load_question(qID, questionSetID){
    current_Question = qID;
    var target;

    for(var m in tremola.player){
        var player = tremola.player[m];
        for(var questionSet in player.QuestionSets){
            if(questionSet.questionSetID == questionSetID ){
                for(var question in questionSet.Questions){
                    if(qId == question.qID){
                        target = question;

                    }

                }

            }


        }

    }
    questionContainer = document.getElementById('QuestionWindow:Kahoot');
    document.getElementById('Question:Kahoot') = target.Question;
    document.getElementById('Answer1:Kahoot') = target.Answer[0];
    document.getElementById('Answer2:Kahoot') = target.Answer[1];
    document.getElementById('Answer3:Kahoot') = target.Answer[2];
    document.getElementById('Answer4:Kahoot') = target.Answer[3];
    document.getElementById('Score-view:Kahoot') = target.score;

}
/*
Initialize the the Answer-array.
*/
function initializeAnswerList(){
    for(var i = 0; i<current_QuestionSet; ++i){
        current_answers.push("null");
    }


}


/*
Store the Answer from AnswerFiled --> in current_Answer-Array
*/
function storeAnswer(qID, AnswerField){
    current_answers[qID-1] = document.getElementById(AnswerField+':Kahoot').innerText;
    //remove Questionwindow

    load_questionSet(current_QuestionSet);

}

/*
Submit the Answers and directly grade the answers.
*/

function submitAnswerQuestions(current_QuestionSet){
    var solution = current_QuestionSet.Solution;
    var pointsCollected = 0;

    for(var i = 0; i<current_QuestionSet.numb_Question; ++i){
        if(solution[i] == current_answers[i]){
            pointsCollected += current_QuestionSet.questions[i].points;
        }
    }
    tremola.player[myId].score+=pointsCollected;
    for(var m in tremola.player){
        var player = tremola.player[m];
        for(questionSet in player.questionSets){
            if(questionSet.QuestionSetID == current_QuestionSet.QuestionSetID){
                questionSet.score = pointsCollected;
                questionSet.status = "closed";

            }

        }

    }
}

/*
List my QuestionSet in a certain format.
*/

function listQuestionSet(){
    var table = document.getElementById("").querySector('tbody');
    table.innerHTML = '';
    my_QuestionSet.forEach(q => {
    const row = document.createElement('tr');
    row.innerHTML ='<td>${q.questionSetID}</td> <td>${q.numb_Question}</td> <td>${q.points}</td>';
    tbody.appendChild(row);
    })
    table.appendChild(tbody);

}

/*
Generate a unique ID for the QuestionSetID
*/
function generateQuestionSetID(){

    return Math.floor(1000000 * Math.random());
}


/*
Submit the created QuestionSet to the Backend
*/
function questionSet_created(questionSet){
    questionSet.QuestionSetID = generateQuestionSetID().toString();
    new_QuestionSet(questionSet);

}
//Update the UI, if a new QuestionSet is created, therefore update the List of the QuestionSet.
function UI_new_QuestionSet(){
    enter_game();


}


//Update the UI, if a new Rank arrived, therefore update the RankingList.
function UI_ranking_update(){
    showRanking();
}

//Show the RankingList on the UI
function showRanking(){
    getRanks()
    var rankingsContainer = document.getElementById('rankingsContainer');
    rankingsContainer.innerHTML = '';
    Ranks.forEach({(rank,index) =>
    const rankingItem = document.createElement('div');
    rankingItem.classList.add('ranking-item');
    rankingItem.textContent = '${index + 1}. ${rank.author} - ${rank.score}';
    rankingsContainer.appendChild(rankingItem);
    })




}


