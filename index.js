const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => drivers.slice(0,2)

const returnLastTwoDrivers = () => drivers.slice(2,4)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return (fare) => {return fare * fare}
}

const fareDoubler = (fare) => {return fare * 2}

const fareTripler = (fare) => {return fare * 3}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}