function performComparison(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "How many sample groups do you have?", options: ["One", "Two", "More than two"], callbacks: [oneSample, twoSamples, moreThanTwoSamples] });
    renderFlowchart();
}

// One Sample Tests
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
    finalAnswer("One-Sample Z-Test");
}

function oneSampleTTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the sample data normally distributed (Shapiro-Wilk Test)?", options: ["Yes", "No"], callbacks: [finalOneSampleTTest, alternativeOneSampleTTest] });
    renderFlowchart();
}

function finalOneSampleTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("One-Sample T-Test");
}

function alternativeOneSampleTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Wilcoxon Signed-Rank Test if normality fails.");
}

function prePost(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Dependent (Paired) T-Test");
}

// Two Sample Tests
function twoSamples(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are the two samples paired, or are they independent?", options: ["Paired", "Independent"], callbacks: [pairedTTest, independentSamples] });
    renderFlowchart();
}

function pairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the difference between pairs normally distributed?", options: ["Yes", "No"], callbacks: [finalPairedTTest, alternativePairedTTest] });
    renderFlowchart();
}

function finalPairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Dependent (Paired) T-Test");
}

function alternativePairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Wilcoxon Signed-Rank Test if normality fails.");
}

function independentSamples(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are the variances of the two groups equal?", options: ["Yes", "No"], callbacks: [independentTTest, welchTTest] });
    renderFlowchart();
}

function independentTTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data in both groups normally distributed?", options: ["Yes", "No"], callbacks: [finalIndependentTTest, alternativeIndependentTTest] });
    renderFlowchart();
}

function finalIndependentTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Independent T-Test");
}

function alternativeIndependentTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Mann-Whitney U Test if normality fails.");
}

function welchTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Welch's T-Test");
}

// More Than Two Sample Tests
function moreThanTwoSamples(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are the variances across groups equal?", options: ["Yes", "No"], callbacks: [anova, welchAnova] });
    renderFlowchart();
}

function anova(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data in all groups normally distributed?", options: ["Yes", "No"], callbacks: [finalAnova, alternativeAnova] });
    renderFlowchart();
}

function finalAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("ANOVA");
}

function alternativeAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Kruskal-Wallis Test if normality fails.");
}

function welchAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Welch ANOVA");
}