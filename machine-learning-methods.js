function machineLearningMethods(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Are you performing classification, regression, clustering, or working with sequential data?", options: ["Classification", "Regression", "Clustering", "Sequential Data"], callbacks: [mlClassification, mlRegression, mlClustering, mlSequentialData] });
    renderFlowchart();
}

function mlClassification(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your dataset small or large?", options: ["Small", "Large"], callbacks: [svmClassification, neuralNetworkClassification] });
    renderFlowchart();
}

function mlRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Do you need probabilistic predictions?", options: ["Yes", "No"], callbacks: [gaussianProcesses, neuralNetworkRegression] });
    renderFlowchart();
}

function mlClustering(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Does your data have latent structures or subpopulations?", options: ["Yes", "No"], callbacks: [factorMixtureModels, traditionalClustering] });
    renderFlowchart();
}

function mlSequentialData(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your data complex and requires deep learning?", options: ["Yes", "No"], callbacks: [deepLearningSequential, hiddenMarkovModels] });
    renderFlowchart();
}

function svmClassification(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Does your data have a clear margin of separation?", options: ["Yes", "No"], callbacks: [svmWithKernel, adjustSvm] });
    renderFlowchart();
}

function neuralNetworkClassification(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your data structured or unstructured?", options: ["Structured", "Unstructured"], callbacks: [nnStructuredData, deepLearningClassification] });
    renderFlowchart();
}

function svmWithKernel(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Support Vector Machine (SVM) with Kernel");
}

function adjustSvm(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Adjust SVM Parameters or Use Alternative Methods");
}

function nnStructuredData(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Neural Networks for Structured Data");
}

function deepLearningClassification(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Deep Learning Classification");
}

function gaussianProcesses(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Gaussian Processes");
}

function neuralNetworkRegression(question, answer) {
    history.push({ question, answer, isQuestion: true, nextQuestion: "Is your dataset large and complex?", options: ["Yes", "No"], callbacks: [deepLearningRegression, traditionalNeuralNetworkRegression] });
    renderFlowchart();
}

function traditionalNeuralNetworkRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Traditional Neural Network Regression");
}

function deepLearningRegression(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Deep Learning Regression");
}

function factorMixtureModels(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Factor Mixture Models");
}

function traditionalClustering(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Traditional Clustering Methods");
}

function deepLearningSequential(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Deep Learning for Sequential Data");
}

function hiddenMarkovModels(question, answer) {
    history.push({ question, answer, isQuestion: false });
    finalAnswer("Hidden Markov Models (HMMs)");
}