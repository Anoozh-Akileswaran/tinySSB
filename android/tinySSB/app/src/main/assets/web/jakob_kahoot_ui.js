//jakob_kahoot_ui.js

document.addEventListener('DOMContentLoaded', (event) => {
    const infoButton = document.getElementById('infoButton');
    const infoModal = document.getElementById('infoModal');
    const closeButton = document.querySelector('.close-button');

    infoButton.onclick = function() {

        if(infoModal.style.display == 'none'){
             infoModal.style.display = 'block';

        }else{
            infoModal.style.display = 'none';
        }

    }



    window.onclick = function(event) {
        if (event.target == infoModal) {
            infoModal.style.display = 'none';
        }
    }
});

var solved = [false, false, false, false, false, false, false, false];

/*
function handleRanking1(e) {
    // Remove an element


    var elementToRemove = document.getElementById('user-scores');
    if (elementToRemove) {
        elementToRemove.remove();
    }



    // Show an element


    var elementToShow = document.getElementById('user-scores');
    if (elementToShow) {
        elementToShow.classList.remove('hidden');
    }


    //document.getElementById('user-scores').style.display = 'flex';

}
*/

//handleEnterGame
function handleEnterGame() {

}

//handle createGame
function handleCreateGame() {

}



//added
function jakob_btnBridge(e, arg1, arg2) {


    let temp = e.toString();
    var e = e.id, m = '';
    console.log("Input: "+ (e.substring(4)) + " --"+arg1+" --"+ arg2);
    if (['btn:chats', 'btn:posts', 'btn:contacts', 'btn:connex', 'btn:kanban', 'btn:kahoot', 'btn:ranking', 'btn:enter_quiz', 'btn:create_quiz', 'btn:game',
    'btn:question1', 'btn:new-question-set', 'btn:list-question-set', 'btn:addQuestion', 'btn:Submit'].indexOf(e) >= 0) {
        jakob_setScenario(e.substring(4), arg1, arg2);
    }
}

function jakob_setScenario(s, arg1, arg2 ) {
    // console.log('setScenario ' + s)
    closeOverlay();
    var lst;
    if (s == 'kahoot') {
        lst = ['div:qr', 'core', 'lst:kahoot', 'div:footer', 'plus'];
    }
    if (s == 'ranking') {
        lst = ['div:qr', 'core', 'lst:ranking', 'div:footer', 'plus'];
    }
    if (s == 'create_quiz') {
        lst = ['div:qr', 'core', 'lst:create_quiz', 'div:footer', 'plus'];
    }
    if (s == 'enter_quiz') {
        lst = ['div:qr', 'core', 'lst:enter_quiz', 'div:footer', 'plus'];
    }
    if (s == 'game') {
        lst = ['div:qr', 'core', 'lst:game', 'div:footer', 'plus'];
    }
    if (s == 'question1') {
            lst = ['div:qr', 'core', 'lst:game', 'div:footer', 'plus'];
    }
    if (s == 'new-question-set') {
            lst = ['div:qr', 'core', 'lst:game', 'div:footer', 'plus'];
    }
    if (s == 'list-question-set') {
            lst = ['div:qr', 'core', 'lst:game', 'div:footer', 'plus'];
    }
    if (s == 'Submit'){
        lst = ['div:qr', 'core', 'lst:game', 'div:footer', 'plus'];

    }


    if (lst) {
        if (['chats', 'contacts', 'connex', 'kanban', 'kahoot', 'ranking', 'enter_quiz', 'create_quiz', 'game', 'question1',
        'new-question-set', 'list-question-set', 'addQuestion', 'Submit'].indexOf(curr_scenario) >= 0) {
            var cl = document.getElementById('btn:' + curr_scenario).classList;
                cl.toggle('active', false);
                cl.toggle('passive', true);
        }
        // console.log(' l: ' + lst)
        display_or_not.forEach(function (d) {
            // console.log(' l+' + d);
            if (lst.indexOf(d) < 0) {
                document.getElementById(d).style.display = 'none';
            } else {
                document.getElementById(d).style.display = null;
                // console.log(' l=' + d);
            }
        })
        // console.log('s: ' + s)
        if (s != "board") {
            document.getElementById('tremolaTitle').style.position = null;
        }

        if (s == "posts" || s == "settings" || s == "board") {
            document.getElementById('tremolaTitle').style.display = 'none';
            document.getElementById('conversationTitle').style.display = null;
            // document.getElementById('plus').style.display = 'none';
        } else {
            document.getElementById('tremolaTitle').style.display = null;
            // if (s == "connex") { /* document.getElementById('plus').style.display = 'none'; */}
            // else { /* document.getElementById('plus').style.display = null; */}
            document.getElementById('conversationTitle').style.display = 'none';
        }
        if (lst.indexOf('div:qr') >= 0) {
            prev_scenario = s;
        }
        curr_scenario = s;
        if (['chats', 'contacts', 'connex', 'kanban', 'kahoot', 'ranking', 'enter_quiz', 'create_quiz', 'game', 'question1',
        'new-question-set', 'list-question-set', 'addQuestion'].indexOf(curr_scenario) >= 0) {
            var cl = document.getElementById('btn:' + curr_scenario).classList;
            cl.toggle('active', false);
            cl.toggle('passive', true);
        }
        if (s == 'board')
            document.getElementById('core').style.height = 'calc(100% - 60px)';
        else
            document.getElementById('core').style.height = 'calc(100% - 118px)';

        if (s == 'kanban') {
            var personalBoardAlreadyExists = false
            for (var b in tremola.board) {
                var board = tremola.board[b]
                if (board.flags.indexOf(FLAG.PERSONAL) >= 0 && board.members.length == 1 && board.members[0] == myId) {
                    personalBoardAlreadyExists = true
                    break
                }
            }
            if(!personalBoardAlreadyExists && display_create_personal_board) {
                menu_create_personal_board()
            }
        }
        //KAHOOT
        // Hide kahoot-create-quiz-overlay when switching scenarios
                document.getElementById('quiz-master-title').style.display = 'none';
                // Hide bottom buttons
                document.getElementById('kahoot-buttons').style.display = 'none';
                // Hide user scores table
                document.getElementById('user-scores').style.display = 'none';
                // Hide enter quiz stuff
                document.getElementById('enter-quiz-button-list-container').style.display = 'none';
                // Hide fill out game stuff
                document.getElementById('fill-quiz-button-list-container').style.display = 'none';
                // Hide fill out game stuff
                document.getElementById('choose-answer').style.display = 'none';
                // Hide create game stuff
                document.getElementById('create-game-entry').style.display = 'none';
                // Hide create game stuff
                document.getElementById('game-table').style.display = 'none';
                // Hide addQuestionButton
                document.getElementById('new-question-set-overlay').style.display = 'none';
                //Remove the button
                document.getElementById('plus').style.display = 'none';

                if (s == 'kahoot') {
                    console.log('Kahoot scenario activated');
                    // Any additional initialization logic for Kahoot can go here
                    //document.getElementById('lst:kahoot').style.display = 'block';
                    if(!(myId in tremola.player)){
                                         tremola.player[myId] = {
                                                   SendID: myId,
                                                   QuestionSets: [],
                                                   playerScore: 0,
                                                   ignore: "true"
                                         }

                    }

                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                }
                if (s == 'ranking') {
                    showRanking();

                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('user-scores').style.display = 'block';
                }
                if (s == 'enter_quiz') { //THIS IS CREATE!!
                    getUserPersonal();

                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('create-game-entry').style.display = 'block';


                }
                if (s == 'create_quiz') { //THIS IS ENTER!!
                     enter_game()

                     document.getElementById('quiz-master-title').style.display = 'block';
                     document.getElementById('kahoot-buttons').style.display = 'block';
                     document.getElementById('enter-quiz-button-list-container').style.display = 'block';

                }
                if (s == "game") {
                    //document.getElementById('enter-quiz-button-list-container').style.display = 'none';
                    load_questionSet(arg2);
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('fill-quiz-button-list-container').style.display = 'block';
                }
                if (s == 'question1') {
                    load_question(arg1,arg2)
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('choose-answer').style.display = 'block';
                }
                if (s == 'new-question-set') {
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('new-question-set-overlay').style.display = 'block';
                    praba_addQuestion();
                }
                if (s == 'list-question-set') {
                    listQuestionSet();
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('game-table').style.display = 'block';

                }
                if (s == 'addQuestion') {

                }if (s == 'Submit'){
                    console.log("We are in Submit");
                    submitAnswerQuestions(current_QuestionSet);
                    jakob_setScenario("create_quiz");


                }
            }
        }

/*
List my QuestionSet in a certain format.
*/
function listQuestionSet(){
    var table = document.getElementById('MyList');
    table.innerHTML = '';
    for(let m in tremola.player){
        console.log("Player ID: " + m);
        var player =  tremola.player[m];
        if(myId == player.SendID){
            for(let i = 0; i<player.QuestionSets.length; ++i){
                 let row = document.createElement('tr');
                 row.innerHTML ="<td class='score-background' style='width: 25%; text-align: center;'>"+player.QuestionSets[i].QuestionSetID+"</td>";
                 row.innerHTML += "<td class='score-background' style='width: 25%; text-align: center;'>"+player.QuestionSets[i].numb_Questions+"</td>"
                 row.innerHTML += "<td class='score-background' style='width: 25%; text-align: center;'>"+player.QuestionSets[i].TotalScore+"</td>"
                 row.innerHTML += "<td class='score-background' style='width: 25%; text-align: center;'>"+player.QuestionSets[i].dislike+"</td>"
                 table.appendChild(row);



            }

        }



    }

}

/*
Button-reaction after "enter Game".
List all the QuestionSets off all the player

*/

function enter_game(){
   solved = [false, false, false, false, false, false, false, false];
   document.getElementById('QuestionSetContainer').innerHTML = '';
   var cl = document.getElementById('QuestionSetContainer');
   for(let m in tremola.player){
        console.log("Player ID: " + m);
        var player =  tremola.player[m];
        if(myId != player.SendID){
            var playerItem = document.createElement('div');
            var playerName = document.createElement('div');
            playerName.innerHTML = "<div class='button-list-title'>"+player.SendID.substring(0, 15)+"</div>";
             var questionSetItem = document.createElement('div');
            questionSetItem.classList.add("button-container");

            console.log("QuestionSet-size: " + player.QuestionSets.length);
            for(let i = 0; i<player.QuestionSets.length; ++i){
                var item = document.createElement('div');

                if(player.QuestionSets[i].status == "open"){
                    console.log(player.QuestionSets[i].QuestionSetID);
                    let temp = 'btn:game';
                      var row = `
                            <button id='btn:game' class='w100_flat_buttontext2'
                                onclick='jakob_btnBridge(this, "empty", ${player.QuestionSets[i].QuestionSetID});'>
                                  QuestionSetID: ${player.QuestionSets[i].QuestionSetID}
                                  <p> Max Points: ${player.QuestionSets[i].TotalScore}</p>
                                  <p>Status: ${player.QuestionSets[i].status}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of dislikes: ${player.QuestionSets[i].dislike}</p>
                            </button>`;

                }else {
                    console.log(player.QuestionSets[i].QuestionSetID);
                    if(!block_dislike.includes(parseInt(player.QuestionSets[i].QuestionSetID))){
                        console.log("NOT IN THE BLOCK_DISLIKE " + block_dislike);
                        var row = `
                            <button id='btn:game' class='w100_flat_buttontext2'
                                onclick='doNothing();'>
                                ${player.QuestionSets[i].QuestionSetID}
                                <p> YOU RECEIVED: ${player.QuestionSets[i].TotalScore}</p>
                                <p>Status: ${player.QuestionSets[i].status}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of dislikes: ${player.QuestionSets[i].dislike}</p>
                            </button>  <button id='btn:game' class='dislike'
                                                                  onclick='disliked(${player.QuestionSets[i].QuestionSetID});'>
                                                              </button>`;

                    }else{
                        console.log("IN THE BLOCK_DISLIKE "+ block_dislike );
                        var row = `
                                    <button id='btn:game' class='w100_flat_buttontext2'
                                        onclick='doNothing();'>
                                        ${player.QuestionSets[i].QuestionSetID}
                                        <p> YOU RECEIVED: ${player.QuestionSets[i].TotalScore}</p>
                                        <p>Status: ${player.QuestionSets[i].status}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of dislikes: ${player.QuestionSets[i].dislike}</p>
                                    </button>`;



                    }

                }
                item.innerHTML = row;
                questionSetItem.appendChild(item);

            }
            playerItem.appendChild(playerName);
            playerItem.appendChild(questionSetItem);
        }
         if(tremola.player.length!=0&&(playerItem instanceof Node)){

               cl.appendChild(playerItem);
           }

    }





}

function disliked(questionSetID){
    new_dislike(questionSetID);
    console.log("DISLIKED !!!!!!!!!!!");


}


function doNothing(){



}

//Update the UI, if a new QuestionSet is created, therefore update the List of the QuestionSet.
function UI_new_QuestionSet(){
    console.log("UI_new_QuestionSet");
    enter_game();


}

/*
Load the pressed the QuestionSet, so therefore load the Questions

*/

function load_questionSet(questionSetID){
    current_QuestionSet = questionSetID;
    console.log("Current_QuestionSetID: " + current_QuestionSet );
    var target;
    initializeAnswerList();
    for(let m in tremola.player){
        var player = tremola.player[m];
        for(let i = 0; i<player.QuestionSets.length; ++i){
            if(player.QuestionSets[i].QuestionSetID == questionSetID){
                target = player.QuestionSets[i];

            }

        }

    }

    document.getElementById('QuestionList').innerHTML = '';
    cl = document.getElementById('QuestionList');
    var row = "";
    for(let i = 0; i < target.Questions.length; ++i){
        if(solved[i]){
             row += `
                           <button id="btn:question1" class="w100_flat_buttontext"
                               onclick="jakob_btnBridge(this, ${target.Questions[i].qID}, ${questionSetID});">
                               Question: ${target.Questions[i].qID} (SOLVED)
                           </button>`;

        }else{
           row += `
               <button id="btn:question1" class="w100_flat_buttontext"
                   onclick="jakob_btnBridge(this, ${target.Questions[i].qID}, ${questionSetID});">
                   Question: ${target.Questions[i].qID}
               </button>`;
        }


    }
    cl.innerHTML = row;


}




/*

Load the pressed Question, there Answers and the Question-phrased
*/

function load_question(qID, questionSetID){
    current_Question = qID;
    var target;

    for(let m in tremola.player){
        var player = tremola.player[m];
        console.log("PlayerID: "+ tremola.player[m].SendID);
        for(let i = 0; i< player.QuestionSets.length; ++i){
            if(player.QuestionSets[i].QuestionSetID == questionSetID ){
                for(let m = 0; m< player.QuestionSets[i].Questions.length; ++m){
                    console.log("player.QuestionSets[i]: "+ player.QuestionSets[i]);
                    if(player.QuestionSets[i].Questions[m].qID == qID){
                        target = player.QuestionSets[i].Questions[m];
                        console.log("target-name: "+ target);
                    }

                }

            }


        }

    }

    document.getElementById('QuestionField').textContent  = target.Question;
    document.getElementById('btn:answer1').textContent  = target.Answers[0];
    document.getElementById('btn:answer2').textContent  = target.Answers[1];
    document.getElementById('btn:answer3').textContent  = target.Answers[2];
    document.getElementById('btn:answer4').textContent  = target.Answers[3];

}

/*
Store the Answer from AnswerFiled --> in current_Answer-Array
*/
function storeAnswer(AnswerField){
    current_answers[current_Question-1] = document.getElementById(AnswerField.id).innerText;
    //remove Questionwindow
    console.log("Solution saved: "+current_answers[current_Question-1] );
    solved[current_Question-1] = true
    jakob_setScenario("game","empty", current_QuestionSet);

}


/*
Submit the Answers and directly grade the answers.
*/

function submitAnswerQuestions(current_QuestionSet){


    for(let m in tremola.player){
        var player = tremola.player[m];
        for(let i=0;i<player.QuestionSets.length; ++i){
            if(player.QuestionSets[i].QuestionSetID == current_QuestionSet){
                var target = player.QuestionSets[i];

            }

        }

    }
    var solution = target.Solution;
    console.log("current Soution: "+ solution);
    console.log("current Answer: "+ current_answers);
    var pointsCollected = 0;

    for(let i = 0; i<target.numb_Questions; ++i){
        if(solution[i] == current_answers[i]){
            pointsCollected += target.Questions[i].points;
            console.log("PointsCollected: "+ pointsCollected);
        }
    }
    console.log("PointsCollected: "+ pointsCollected);
    new_score_update(pointsCollected+tremola.player[myId].playerScore);
    for(let m in tremola.player){
        var player = tremola.player[m];
        for(let i=0;i<player.QuestionSets.length; ++i){
            if(player.QuestionSets[i].QuestionSetID == current_QuestionSet){
                new_totalPoints(current_QuestionSet, pointsCollected);
                new_status(current_QuestionSet ,"closed");
                console.log("After correction-> Points: " + tremola.player[myId].playerScore);
                return

            }

        }

    }
    solved = [false, false, false, false, false, false, false, false];
}


/*
Initialize the the Answer-array.
*/
function initializeAnswerList(){
    for(let i = 0; i<current_QuestionSet.numb_Questions; ++i){
        current_answers.push("null");
    }


}

//Update the UI, if a new Rank arrived, therefore update the RankingList.
function UI_ranking_update(){
    showRanking();
}

//Show the RankingList on the UI
function showRanking(){
    getRanks()
    // Assume Ranks is defined and populated somewhere
    var rankingTableBody = document.querySelector('#rankingTable tbody');
    rankingTableBody.innerHTML = ''; // Clear the existing content
    console.log("Rank size: " + Ranks.length);
    Ranks.forEach((rank, index) => {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td class="score-background" style="width: 10%; text-align: center;">${index + 1}</td>
            <td style="width: 60%;">
                <button class="w100 flat buttontext" onclick="btnBridge(this);">${rank.name.substring(0, 15)}</button>
            </td>
            <td class="score-background" style="width: 30%; text-align: center;">${rank.score}</td>
        `;
        rankingTableBody.appendChild(row);
    });

}


function praba_addQuestion() {
    const questionsContainer = document.getElementById('questions-container');
    const questionCount = questionsContainer.children.length;
    if (questionCount >= 8) return; // Limit to 8 questions

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    let questionHTML = `
          <div>
            <label>Question ${questionCount + 1}:</label>
            <input type="text" name="question${questionCount}" required>
          </div>
          <div>
            <label>Points per Question:</label>
            <input type="number" name="question${questionCount}-points" required min="1" max="10">
          </div>
        `;

    for (let i = 0; i < 4; i++) {
            questionHTML += `
              <div class="answer">
                <label>Answer ${i + 1}:</label>
                <input type="text" name="question${questionCount}-answer${i}" required>
                <label>Correct:</label>
                <input type="checkbox" name="question${questionCount}-correct${i}" class="correct-checkbox">
              </div>
            `;
    }



    questionDiv.innerHTML = questionHTML;
    questionsContainer.appendChild(questionDiv);

    // Add event listeners to checkboxes to ensure only one can be checked
    const checkboxes = questionDiv.querySelectorAll('.correct-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkboxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });




}

function praba_submitQuestionSet(event) {
    event.preventDefault();
    let temp1 = document.getElementById('questions-container');
    let temp2 = temp1.querySelectorAll('.question');
    let bol = false;
    for (let q of temp2) {
        const checkboxes = q.querySelectorAll('.correct-checkbox');
        const atLeastOneChecked = Array.from(checkboxes).some(cb => cb.checked);

        if (!atLeastOneChecked) {
            alert('Each question must have at least one correct answer.');
            bol = true;
        }
    }


    if(!bol){
        var formData = new FormData(event.target);
        var questions = [];
        let totalPoints = 0;
        let solution = [];
        let numb_Questions = 0;
        let new_QuestionSet_created = {
            QuestionSetID: 0,
            Questions: [],
            TotalScore: 0,
            status: "open",
            Solution: [],
            numb_Questions: 0,
            dislike: 0
        };
        for (let i = 0; i < 8; i++) {
            if (!formData.has(`question${i}`)) break;
            numb_Questions+=1;
            const question = {
                           qID: i+1,
                           Question: formData.get(`question${i}`),
                           points: parseInt(formData.get(`question${i}-points`), 10),
                           Answers: []
            };

            totalPoints+=parseInt(formData.get(`question${i}-points`), 10);
            for (let j = 0; j < 4; j++) {
                if (!formData.has(`question${i}-answer${j}`)) break;
                question.Answers.push(formData.get(`question${i}-answer${j}`));
                 if( formData.get(`question${i}-correct${j}`) === 'on'){
                        solution.push(formData.get(`question${i}-answer${j}`));

                 }
            }

            questions.push(question);
        }

        console.log('Submitted Question Set:', questions);
        new_QuestionSet_created.Questions = questions;
        new_QuestionSet_created.TotalScore = parseInt(totalPoints);
        new_QuestionSet_created.status = "open";
        new_QuestionSet_created.Solution = solution;
        new_QuestionSet_created.numb_Questions = numb_Questions;
        //not direct push, change to send to backend.
        questionSet_created(new_QuestionSet_created);
        console.log(' Question Set:', new_QuestionSet_created);

        praba_btn_new_question_set_cancel();
        document.getElementById('questions-container').innerHTML = '';
        // TODO: Store questions and answers depending on backend implementation
    }
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
    questionSet.QuestionSetID = generateQuestionSetID();
    new_QuestionSet(questionSet);

}

function praba_btn_new_question_set_cancel() {
    document.getElementById('new-question-set-overlay').style.display = 'none';

    document.getElementById('quiz-master-title').style.display = 'block';
    document.getElementById('kahoot-buttons').style.display = 'block';
    document.getElementById('create-game-entry').style.display = 'block';
     document.getElementById('questions-container').innerHTML = '';
}
