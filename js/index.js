const swup = new Swup()
const startedPersonal = new Date(Date.parse('01 Aug 2010'));
const startedProfessional = new Date(Date.parse('01 Aug 2015'));
const totalTimeSpan = 'total-time';
const totalProfessionalTimeSpan = 'total-professional';

window.onload = function WindowLoad(event) {
    setNumOfYears(startedPersonal, totalTimeSpan);
    setNumOfYears(startedProfessional, totalProfessionalTimeSpan);
    document.querySelector('body').style.opacity = 1
}

function setNumOfYears(startDate, span){
    var numOfYears = new Date().getFullYear() - startDate.getFullYear();
    document.getElementById(span).innerHTML = numOfYears;
}