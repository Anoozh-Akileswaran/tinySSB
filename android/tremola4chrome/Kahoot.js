var my_QuestionSet = {
"QuestionSetID": '',
"Questions": [],
//"Questions": [{"qID": '', "Question":'', "Answers": [], "score": 0 }, ...]
"Solution": [],
"TotalScore": 0,
"status": "open"

}


var Ranks = []
var current_QuestionSet;
var current_Question;
var current_answers = [];

const Operation = {
    UPDATE_SCORE: 'Kahoot/update_ranking',
    NEW_QUESTIONSET: 'Kahoot/create_QuestionSet'

}


/*
Incoming new event caught
*/
function Kahoot_new_event(e){
//'public': ["KAH", SendID, cmdStr[2]].concat(args)
    var SendID = e.public[1]
    var operation = e.public[2]
    var args = e.public.slice(3)
    if(!(SendID in tremola.player)){
        tremola.player[SendID] = {
            "SendID": SendID,
            "QuestionSets": [],
            "playerScore": = 0
        }

    }

    if(op == Operation.UPDATE_SCORE){
        if(SendID != myId){
            update_ranking(SendID, args[0])

        }
    }else if (op == Operation.NEW_QUESTIONSET){
            if(SendID != myId){
                create_QuestionSet(SendID, JSON.parse(args[0]))

            }else{
                addToMyQuestionSet(JSON.parse(args[0]));

            }


    }
}


/*
Add new QuestionSet to my QuestionSetList
*/
function addToMyQuestionSet(questionSet){
    for(var q in tremola.player[myId].QuestionSets){
        if(q.questionSetID == questionSet.QuestionSetID){
            return
        }
    my_QuestionSet.push(questionSet);
    tremola.player[myId].questionSet.push(questionSet);


    }

}



/*
Update new rankingList.

*/
function update_ranking(sendID, score){
    tremola.player[sendID].playerScore = score
    UI_ranking_update()

}


/*
Send Data to  tremola.backend

*/
function kahoot_send_to_backend(data){
    var sendID = data["sendId"]
    var args = data["args"]
    var op = data["op"]

    var to_backend = ['kahoot', sendID, op, args]
    backend(to_backend.join(" "))

}


/*
Update the score and send to backend
*/

function new_score_update(score){
    var data = {
        "sendID": myId,
        "cmd": Operation.UPDATE_SCORE,
        "args": [score.toString()]
    }
    kahoot_send_to_backend(data)


}


/*
Send new created QuestionSet to the backend
*/

function new_QuestionSet(questionSet){
    var questionSetJson = JSON.stringify(questionSet);
    var data = {
    "sendID": myId,
    "cmd": Operation.NEW_QUESTIONSET,
    "args": [questionSetJson]

    }
    my_QuestionSet.push(data)
    kahoot_send_to_backend(data)
}

/*
Store the received QuestionSet.

*/
function create_QuestionSet(SendID, QuestionSet){

    for(var q in tremola.player[SendID].QuestionSet){
        if(q.questionSetID == QuestionSet.QuestionSetID){
            return
        }
        tremola.player[sendID].QuestionSet.push(QuestionSet);
        UI_new_QuestionSet()
    }

}


/*
Fill up the Rank-List.
*/

function getRanks(){
    for(var m in tremola.player){
        var player = tremola.player[m]
        Ranks.push({"name": player.SendID, "score":player.playerScore})
    }

    Ranks.sort((a,b)=> b.score-a.score)
}


/*
get my Score
*/
function getMyScore(){

    return tremola.player[myId].playerScore;


}


/*
get my ID
*/
function getmyID(){

    return tremola.player[myId].SendID;


}





