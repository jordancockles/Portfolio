const startedPersonal = new Date(Date.parse('01 Aug 2010'));
const startedProfessional = new Date(Date.parse('01 Aug 2015'));
const totalTimeSpan = 'total-time';
const totalProfessionalTimeSpan = 'total-professional';

document.querySelector('.portfolio-button').addEventListener("click", event => {
    event.preventDefault();
    console.log("Stub Function Activated");
})

window.onload = function WindowLoad(event) {
    setNumOfYears(startedPersonal, totalTimeSpan);
    setNumOfYears(startedProfessional, totalProfessionalTimeSpan);
    document.querySelector('body').style.opacity = 1
}

window.transitionToPage = function() {
    document.querySelector('body').style.opacity = 0
}

function setNumOfYears(startDate, span){
    var numOfYears = new Date().getFullYear() - startDate.getFullYear();
    document.getElementById(span).innerHTML = numOfYears;
}