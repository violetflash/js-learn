var scores = [
    60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [
    .25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];

// function effectiveScore(scores, costs) {
//     var cheapest;
//     var maxScoreCosts = [];
//     var maxScores = maxScoreIndexes(scores);
//     for (let i = 0; i < maxScores.length; i++) {
//         maxScoreCosts.push(costs[maxScores[i]]);
//     }
//     for (let i = 0; i < maxScoreCosts.length; i++) {
//         cheapest = maxScoreCosts[0];
//         if (maxScoreCosts[i] < cheapest ) {
//             cheapest = maxScoreCosts[i];
//         }
//     }
//     document.write("<br>The most effective solution with cost of: " + cheapest)
// }

function mostEffectiveSolution(scores, costs, highscore) {
    var cost = 100;
    var index;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highscore) {
            if (costs[i] < cost) {
                cost = costs[i];
                index = i;
            }
        }
    }
    document.write("<br>The most effective solution is #" + index + " with cost of: " + costs[index])
    // return index;
}

//var2
function getMostCostEffectiveSolution2(bestSolutions, costs) {
    var cost = 100;
    var solutionIndex;
    var lowCostIndex;

    for (var i = 0; i < bestSolutions.length; i++) {
        solutionIndex = bestSolutions[i];
        if (cost > costs[solutionIndex]) {
            lowCostIndex = solutionIndex;
            cost = costs[solutionIndex];
        }
    }
    return lowCostIndex;
}


function printCosts(costs) {
    for (let i = 0; i < costs.length; i++) {
        document.write("Bubble solution #" + [i] + " cost: " + costs[i] + "<br>");
    }
}

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

function maxScoreIndexes(scores) {
    var best_result = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == maxScore(scores)) {
            best_result[best_result.length] = i;
            //or
            // best_result.push(i)
        }
    }
    return best_result;
}

function hashificator(elem) {
    for (let i = 0; i < elem.length; i++) {
        document.write("#" + elem[i]+ ", ");
    }
}

function report(scores, costs) {
    document.write("SCORES===================<br><br>");
    printScores(scores);
    document.write("<br>COSTS====================<br><br>");
    printCosts(costs);
    document.write("<br>REPORT=====================<br><br>");
    document.write("Bubble tests: " + scores.length + "<br>");
    document.write("Highest bubble score: " + maxScore(scores) + "<br>");
    document.write("Solutions with highest score: ")
    hashificator(maxScoreIndexes(scores));
    // effectiveScore(scores, costs)
    mostEffectiveSolution(scores, costs, maxScore(scores));
    document.write("<br><br>===========================<br><br>");

}


report(scores, costs);
