function studentScore() {
    var total = 3;
    var score = 0;

    var q1 = document.forms['javascriptQuiz']['q1'].value;
    var q2 = document.forms['javascriptQuiz']['q2'].value;
    var q3 = document.forms['javascriptQuiz']['q3'].value;

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) === null || eval('q' + i) == '') {
            alert('You did not answer question' + " " + i);
            return false;
        }
    }

    var answers = ["a", "b", "a"];

    for (var i = 1; i <= total; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = '<h3>You Scored  <span>' + score + '</span> out of <span>' + total + '</span></h3>';
    return false;
}

function reset() {
    document.getElementById("javascriptQuiz").reset();
}