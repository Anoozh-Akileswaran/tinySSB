//Kahoot_ui.js
function btn_create_quiz() {
    document.getElementById('kahoot-overlay').style.display = 'none';
    document.getElementById('quiz-create-game-overlay').style.display = 'flex';
}

function btn_new_question_set() {
    document.getElementById('quiz-create-game-overlay').style.display = 'none';
    document.getElementById('new-question-set-overlay').style.display = 'flex';
    addQuestion(); // Start with one question
}

function btn_new_question_set_cancel() {
    document.getElementById('new-question-set-overlay').style.display = 'none';
    document.getElementById('quiz-create-game-overlay').style.display = 'flex';
}

function addQuestion() {
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
    `;

    for (let i = 0; i < 6; i++) {
        questionHTML += `
          <div class="answer">
            <label>Answer ${i + 1}:</label>
            <input type="text" name="question${questionCount}-answer${i}" required>
            <label>Points:</label>
            <input type="number" name="question${questionCount}-points${i}" required>
          </div>
        `;
    }

    questionDiv.innerHTML = questionHTML;
    questionsContainer.appendChild(questionDiv);
}

function submitQuestionSet(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const questions = [];

    for (let i = 0; i < 8; i++) {
        if (!formData.has(`question${i}`)) break;

        const question = {
            text: formData.get(`question${i}`),
            answers: []
        };

        for (let j = 0; j < 6; j++) {
            if (!formData.has(`question${i}-answer${j}`)) break;
            question.answers.push({
                text: formData.get(`question${i}-answer${j}`),
                points: parseInt(formData.get(`question${i}-points${j}`), 10)
            });
        }

        questions.push(question);
    }

    console.log('Submitted Question Set:', questions);
    // TODO: Store questions and answers depending on backend implementation
}

function btn_create_quiz_cancel() {
    document.getElementById('quiz-create-game-overlay').style.display = 'none';
    document.getElementById('kahoot-overlay').style.display = 'flex';
}

function btn_list_question_set() {
    //Implementation of listing all question sets, depending on backend implementation
}


