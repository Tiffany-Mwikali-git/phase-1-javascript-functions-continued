function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(parameter = '*') {
    return function(adj = 'special'){
        return `You are ${parameter}${adj}${parameter}!`;
    };

    
}

const returnFirstTwoDrivers = function(names) {

}
const returnLastTwoDrivers = function(){
    return names.slice(-2,names.length)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }

}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(names, ab) {
    return ab(int)
}