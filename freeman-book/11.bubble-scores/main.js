var scores = [
    60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

function printScores(scores) {
    for (let i = 0; i < scores.length; i++) {
        document.write("Bubble solution #" + [i] + " score: " + scores[i] + "<br>");
    }
}

function maxScore(scores) {
    var max = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
        }
    }
    return max;
}

function maxScoreIndexes(score) {
    var best_result = [];
}

function report() {
    var max = 0;
    var best_result = [];

    //find max score
    for (let i = 0; i < scores.length; i++) {
        document.write("Bubble (FOR) solution #" + [i] + " score: " + scores[i] + "<br>");
        if (scores[i] > max) {
            max = scores[i];
        }
    }

    //find indexes of max scores
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == max) {
            best_result[best_result.length] = i;
            //or
            // best_result.push(i)
        }
    }
    document.write("===========================" + "<br><br>");
    document.write("Bubble tests: " + scores.length + "<br>");
    document.write("Highest bubble score: " + max + "<br>");
    document.write("Solutions with highest score: ")
    hashificator(best_result);
}

function hashificator(elem) {
    for (let i = 0; i < elem.length; i++) {
        document.write("#" + elem[i]+ ", ");
    }
}

report();