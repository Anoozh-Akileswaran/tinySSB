var my_QuestionSet = {}
var Ranks = []
var current_QuestionSet;
var current_Question;
var current_answers = [];

const Operation = {
    UPDATE_SCORE: 'Kahoot/update_ranking',
    NEW_QUESTIONSET: 'Kahoot/create_QuestionSet'

}

function Kahoot_new_event(){
    var operation = e.public[3]
    var SendID = e.header.fid
    var args = e.public.slice(4)
    if(!(SendID in tremola.player)){
        tremola.player[SendID] = {
            "author": SendID,
            "QuestionSets": [],
            "playerScore": = 0,
        }

    }

    if(op == Operation.UPDATE_SCORE){
        if(SendID != myId){
            update_ranking(SendID, args[])

        }
    }else if (op == Operation.NEW_QUESTIONSET){
            if(SendID != myId){
                create_QuestionSet(SendID, args[])

            }else{
                addToMyQuestionSet(args[])

            }


    }
}
function addToMyQuestionSet(questionSet){
    for(var q in tremola.player[myId].questionSet){
        if(q.questionSetID == questionSet.questionSetID){
            return
        }
    my_QuestionSet.push(questionSet)
    tremola.player[myId].questionSet.push(questionSet)


    }

}

function update_ranking(sendID, score){
    tremola.player[sendID].playerScore = score
    UI_ranking_update()

}


function kahoot_send_to_backend(data){
    var sendID = data["sendId"]
    var args = data["args"]
    var op = data["op"]

    var to_backend = ['kahoot', sendID, op, args]
    backend(to_backend.join(" "))

}


function new_score_update(score){
    var data = {
        "sendID": myId,
        "cmd": Operation.UPDATE_SCORE,
        "args": score
    }
    kahoot_send_to_backend(data)


}

function new_QuestionSet(questionSet){
    var data = {
    "sendID": myId,
    "cmd": Operation.NEW_QUESTIONSET,
    "args": questionSet

    }
    my_QuestionSet.push(data)
    kahoot_send_to_backend(data)
}

function create_QuestionSet(SendID, QuestionSet){
    for(var q in tremola.player[SendID].QuestionSet){
        if(q.questionSetID == QuestionSet.questionSetID){
            return
        }
        tremola.player[sendID].QuestionSet.push(QuestionSet)
        UI_new_QuestionSet()
    }

}

function getRanks(){
    for(var m in tremola.player){
        var player = tremola.player[m]
        Ranks.push({"name": player.author, "score":player.playerScore})
    }

    Ranks.sort((a,b)=> b.score-a.score)
}










