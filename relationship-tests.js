function testRelationship(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are your variables categorical or numerical?", options: ["Categorical", "Numerical"], callbacks: [categoricalTest, numericalTest] });
    renderFlowchart();
}

function categoricalTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Chi-Square Test");
}

function numericalTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your data normally distributed?", options: ["Yes", "No"], callbacks: [() => finalAnswer("Pearson Correlation"), () => finalAnswer("Spearman Correlation")] });
    renderFlowchart();
}