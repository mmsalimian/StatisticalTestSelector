function performComparison(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "How many sample groups do you have?", options: ["One", "Two", "More than two"], callbacks: [oneSample, twoSamples, moreThanTwoSamples] });
    renderFlowchart();
}

function oneSample(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are you comparing the sample mean with the population mean or comparing the pretest-posttest measurements?", options: ["Sample vs. Population", "Pretest-Posttest"], callbacks: [sampleVsPopulation, prePost] });
    renderFlowchart();
}

function sampleVsPopulation(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Do you have the population standard deviation and is n ≥ 30?", options: ["Yes", "No"], callbacks: [zTest, oneSampleTTest] });
    renderFlowchart();
}

function zTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Z-Test");
}

function oneSampleTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("One-Sample T-Test");
}

function prePost(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Dependent (Paired) T-Test");
}

function twoSamples(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are the two samples paired, or are they independent?", options: ["Paired", "Independent"], callbacks: [pairedTTest, independentSamples] });
    renderFlowchart();
}

function pairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Dependent (Paired) T-Test");
}

function independentSamples(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are the variances of the two groups equal?", options: ["Yes", "No"], callbacks: [independentTTest, welchTTest] });
    renderFlowchart();
}

function independentTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Independent T-Test");
}

function welchTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Welch's T-Test");
}

function moreThanTwoSamples(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are the variances across groups equal?", options: ["Yes", "No"], callbacks: [anova, welchAnova] });
    renderFlowchart();
}

function anova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("ANOVA");
}

function welchAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Welch ANOVA");
}