function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

function selectDifferentDrivers(drivers, selectionDrivers){
    return selectionDrivers(drivers);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    };
}

const fareMultiplier = createFareMultiplier(4);
console.log(fareMultiplier(10)); 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers);

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers);