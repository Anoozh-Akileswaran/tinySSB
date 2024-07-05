//Kahoot_ui.js

var new_QuestionSet = {
"QuestionSetID": '',
"Questions": [],

}


function enter_game(){
    document.getElementById('lst:Kahoot').innerHTML = '';
    var cl = document.getElementById('lst:Kahoot');
    for(var m in tremola.player){
        var player =  tremola.player[m];
        if(myId != player.author){
            var playerItem = document.createElement('div');
            var playerName = document.createElement('h2');
            playerName.textContent = player.author;
            var questionSetItem = document.createElement('div');
            questionSetItem.classList.add("button-container");

        }
        for(questionSet in player.QuestionSets){
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

function load_questionSet(questionSetID){
    current_QuestionSet = questionSetID;
    var target;
    initializeAnswerList();
    for(m in tremola.player){
        var player = tremola.player[m];
        for(questionSet in player.QuestionSets){
            if(questionSet.questionSetID == questionSetID){
                target = questionSet;

            }

        }

    }

    document.getElementById('questionlst:Kahoot').innerHTML = '';
    cl = document.getElementById('questionlst:Kahoot');
    for(question in target.Questions){
        var item = document.createElement('div');
        var row = "<button class='kahoot_item_Button" + "' onclick='load_question(" + question.qID +", "+ target.questionSetID + ");' style='overflow: hidden; position: relative;'>";
        rwo += "</button>";
        row += "";
        item.innerHTML = row;
        cl.appendChild(item);

    }


}

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

function initializeAnswerList(){
    for(var i = 0; i<current_QuestionSet; ++i){
        current_answers.push("null");
    }


}

function storeAnswer(qID, AnswerField){
    current_answers[qID-1] = document.getElementById(AnswerField+':Kahoot').innerText;
    //remove Questionwindow

    load_questionSet(current_QuestionSet);

}

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

function questionSet_created(questionSet){



    new_QuestionSet(questionSet);

}

function UI_new_QuestionSet(){
    enter_game();


}

function UI_ranking_update(){
    showRanking();
}

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


