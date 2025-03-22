function selectStatisticalTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are you performing a T-Test, Z-Test, ANOVA, Regression Analysis, or F-Test?", options: ["T-Test", "Z-Test", "ANOVA", "Regression Analysis", "F-Test"], callbacks: [tTest, zTest, anova, regressionAnalysis, fTest] });
    renderFlowchart();
}

// T-Tests
function tTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Which type of T-Test are you performing?", options: ["One-Sample T-Test", "Independent T-Test", "Paired T-Test"], callbacks: [oneSampleTTest, independentTTest, pairedTTest] });
    renderFlowchart();
}

function oneSampleTTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, and does it meet normality assumptions (Shapiro-Wilk Test)?", options: ["Yes", "No"], callbacks: [finalOneSampleTTest, alternativeOneSampleTTest] });
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

function independentTTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, and do both groups meet normality assumptions and have equal variances (Levene's Test)?", options: ["Yes", "No"], callbacks: [finalIndependentTTest, alternativeIndependentTTest] });
    renderFlowchart();
}

function finalIndependentTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Independent (Unpaired) T-Test");
}

function alternativeIndependentTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Mann-Whitney U Test if normality fails or Welch’s T-Test if variances are unequal.");
}

function pairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, and are the samples dependent with normality in differences?", options: ["Yes", "No"], callbacks: [finalPairedTTest, alternativePairedTTest] });
    renderFlowchart();
}

function finalPairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Paired T-Test");
}

function alternativePairedTTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Wilcoxon Signed-Rank Test if normality fails.");
}

// Z-Tests
function zTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Which type of Z-Test are you performing?", options: ["One-Sample Z-Test", "Two-Sample Z-Test"], callbacks: [oneSampleZTest, twoSampleZTest] });
    renderFlowchart();
}

function oneSampleZTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, with a large sample size (n ≥ 30) and known population standard deviation?", options: ["Yes", "No"], callbacks: [finalOneSampleZTest, alternativeOneSampleZTest] });
    renderFlowchart();
}

function finalOneSampleZTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("One-Sample Z-Test");
}

function alternativeOneSampleZTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using One-Sample T-Test if population standard deviation is unknown.");
}

function twoSampleZTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, with large sample sizes (n ≥ 30 for both groups) and known population standard deviations?", options: ["Yes", "No"], callbacks: [finalTwoSampleZTest, alternativeTwoSampleZTest] });
    renderFlowchart();
}

function finalTwoSampleZTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Two-Sample Z-Test");
}

function alternativeTwoSampleZTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Independent T-Test or Welch’s T-Test if population standard deviations are unknown.");
}

// Analysis of Variance (ANOVA)
function anova(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Which type of ANOVA are you performing?", options: ["One-Way ANOVA", "Two-Way ANOVA", "Repeated Measures ANOVA"], callbacks: [oneWayAnova, twoWayAnova, repeatedMeasuresAnova] });
    renderFlowchart();
}

function oneWayAnova(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, with normally distributed groups and equal variances (Levene's Test)?", options: ["Yes", "No"], callbacks: [finalOneWayAnova, alternativeOneWayAnova] });
    renderFlowchart();
}

function finalOneWayAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("One-Way ANOVA");
}

function alternativeOneWayAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Kruskal-Wallis Test if normality fails.");
}

function twoWayAnova(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, with normally distributed groups, equal variances (Levene's Test), and interaction effects?", options: ["Yes", "No"], callbacks: [finalTwoWayAnova, alternativeTwoWayAnova] });
    renderFlowchart();
}

function finalTwoWayAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Two-Way ANOVA");
}

function alternativeTwoWayAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Friedman Test or Kruskal-Wallis Test for normality violations.");
}

function repeatedMeasuresAnova(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data numerical and continuous, with dependent groups and sphericity (Mauchly’s Test)?", options: ["Yes", "No"], callbacks: [finalRepeatedMeasuresAnova, alternativeRepeatedMeasuresAnova] });
    renderFlowchart();
}

function finalRepeatedMeasuresAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Repeated Measures ANOVA");
}

function alternativeRepeatedMeasuresAnova(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Friedman Test if normality fails.");
}

// Regression Analysis
function regressionAnalysis(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Which type of Regression Analysis are you performing?", options: ["Simple Linear Regression", "Multiple Linear Regression", "Logistic Regression", "Polynomial Regression"], callbacks: [simpleLinearRegression, multipleLinearRegression, logisticRegression, polynomialRegression] });
    renderFlowchart();
}

function simpleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is there a linear relationship, with normally distributed and homoscedastic residuals?", options: ["Yes", "No"], callbacks: [finalSimpleLinearRegression, alternativeSimpleLinearRegression] });
    renderFlowchart();
}

function finalSimpleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Simple Linear Regression");
}

function alternativeSimpleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Polynomial or Non-Linear Regression if the relationship is not linear.");
}

function multipleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is there no multicollinearity (check VIF) and are the residuals normally distributed?", options: ["Yes", "No"], callbacks: [finalMultipleLinearRegression, alternativeMultipleLinearRegression] });
    renderFlowchart();
}

function finalMultipleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Multiple Linear Regression");
}

function alternativeMultipleLinearRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Robust Regression for non-normality.");
}

function logisticRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the dependent variable binary, with no multicollinearity and adequate sample size?", options: ["Yes", "No"], callbacks: [finalLogisticRegression, alternativeLogisticRegression] });
    renderFlowchart();
}

function finalLogisticRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Logistic Regression");
}

function alternativeLogisticRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Multinomial Logistic Regression for multi-class outcomes.");
}

function polynomialRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is there a non-linear relationship with numerical predictors and outcomes?", options: ["Yes", "No"], callbacks: [finalPolynomialRegression, alternativePolynomialRegression] });
    renderFlowchart();
}

function finalPolynomialRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Polynomial Regression");
}

function alternativePolynomialRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Non-Linear Regression for complex relationships.");
}

// F-Test
function fTest(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is the data normally distributed, numerical, and continuous in independent groups?", options: ["Yes", "No"], callbacks: [finalFTest, alternativeFTest] });
    renderFlowchart();
}

function finalFTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("F-Test");
}

function alternativeFTest(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Consider using Levene's Test or Brown-Forsythe Test if normality fails.");
}