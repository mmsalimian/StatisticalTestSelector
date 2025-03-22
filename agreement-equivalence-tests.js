function assessAgreementEquivalence(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are you assessing the agreement between two measurement methods or testing for equivalence between groups?", options: ["Agreement", "Equivalence"], callbacks: [assessAgreement, assessEquivalence] });
    renderFlowchart();
}

function assessAgreement(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are your measurements paired or repeated?", options: ["Paired", "Repeated"], callbacks: [blandAltmanAnalysis, intraclassCorrelationCoefficient] });
    renderFlowchart();
}

function assessEquivalence(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your data normally distributed?", options: ["Yes", "No"], callbacks: [tost, nonParametricEquivalence] });
    renderFlowchart();
}

function blandAltmanAnalysis(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Bland-Altman Analysis");
}

function intraclassCorrelationCoefficient(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Intraclass Correlation Coefficient (ICC)");
}

function tost(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("TOST (Two One-Sided Tests)");
}

function nonParametricEquivalence(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Non-Parametric Equivalence Test (e.g., Wilcoxon Signed-Rank Test)");
}