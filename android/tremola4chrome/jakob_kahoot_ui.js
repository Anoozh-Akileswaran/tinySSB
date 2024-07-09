//jakob_kahoot_ui.js



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
function jakob_btnBridge(e) {
    var e = e.id, m = '';

    if (['btn:chats', 'btn:posts', 'btn:contacts', 'btn:connex', 'btn:kanban', 'btn:kahoot', 'btn:ranking', 'btn:enter_quiz', 'btn:create_quiz', 'btn:game',
    'btn:question1', 'btn:new-question-set', 'btn:list-question-set', 'btn:addQuestion'].indexOf(e) >= 0) {
        jakob_setScenario(e.substring(4));
    }
}

function jakob_setScenario(s) {
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


    if (lst) {
        if (['chats', 'contacts', 'connex', 'kanban', 'kahoot', 'ranking', 'enter_quiz', 'create_quiz', 'game', 'question1',
        'new-question-set', 'list-question-set', 'addQuestion'].indexOf(curr_scenario) >= 0) {
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
                if (s == 'kahoot') {
                    console.log('Kahoot scenario activated');
                    // Any additional initialization logic for Kahoot can go here
                    //document.getElementById('lst:kahoot').style.display = 'block';
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                }
                if (s == 'ranking') {
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('user-scores').style.display = 'block';
                }
                if (s == 'enter_quiz') { //THIS IS CREATE!!
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('create-game-entry').style.display = 'block';

                }
                if (s == 'create_quiz') { //THIS IS ENTER!!
                     document.getElementById('quiz-master-title').style.display = 'block';
                     document.getElementById('kahoot-buttons').style.display = 'block';
                     document.getElementById('enter-quiz-button-list-container').style.display = 'block';
                }
                if (s == 'game') {
                    //document.getElementById('enter-quiz-button-list-container').style.display = 'none';
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('fill-quiz-button-list-container').style.display = 'block';
                }
                if (s == 'question1') {
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
                    document.getElementById('quiz-master-title').style.display = 'block';
                    document.getElementById('kahoot-buttons').style.display = 'block';
                    document.getElementById('game-table').style.display = 'block';
                }
                if (s == 'addQuestion') {

                }
            }
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
            <input type="number" name="question${questionCount}-points" required>
          </div>
        `;

    for (let i = 0; i < 4; i++) {
            questionHTML += `
              <div class="answer">
                <label>Answer ${i + 1}:</label>
                <input type="text" name="question${questionCount}-answer${i}" required>
                <label>Correct:</label>
                <input type="checkbox" name="question${questionCount}-correct${i}">
              </div>
            `;
        }

    questionDiv.innerHTML = questionHTML;
    questionsContainer.appendChild(questionDiv);
}

function praba_submitQuestionSet(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const questions = [];

    for (let i = 0; i < 8; i++) {
        if (!formData.has(`question${i}`)) break;

        const question = {
            text: formData.get(`question${i}`),
            points: parseInt(formData.get(`question${i}-points`), 10),
            answers: []
        };

        for (let j = 0; j < 4; j++) {
            if (!formData.has(`question${i}-answer${j}`)) break;
            question.answers.push({
                text: formData.get(`question${i}-answer${j}`),
                correct: formData.get(`question${i}-correct${j}`) === 'on'
            });
        }

        questions.push(question);
    }

    console.log('Submitted Question Set:', questions);
    // TODO: Store questions and answers depending on backend implementation
}

function praba_btn_new_question_set_cancel() {
    document.getElementById('new-question-set-overlay').style.display = 'none';

    document.getElementById('quiz-master-title').style.display = 'block';
    document.getElementById('kahoot-buttons').style.display = 'block';
    document.getElementById('create-game-entry').style.display = 'block';
}
