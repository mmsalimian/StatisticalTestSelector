function predictOutcome(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your outcome variable binary or continuous?", options: ["Binary", "Continuous"], callbacks: [logisticRegression, linearRegression] });
    renderFlowchart();
}

function logisticRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Do you have more than one predictor?", options: ["Yes", "No"], callbacks: [multipleLogisticRegression, simpleLogisticRegression] });
    renderFlowchart();
}

function linearRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the relationship between variables linear or non-linear?", options: ["Linear", "Non-linear"], callbacks: [simpleLinearRegression, polynomialRegression] });
    renderFlowchart();
}

function simpleLogisticRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Logistic Regression");
}

function multipleLogisticRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Multiple Logistic Regression");
}

function simpleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Simple Linear Regression");
}

function polynomialRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Polynomial Regression");
}