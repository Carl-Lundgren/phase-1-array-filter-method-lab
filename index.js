// Code your solution here
function findMatching(drivers, name) {
   return drivers.filter(drivers => (drivers.toUpperCase() === name.toUpperCase()));
}

function fuzzyMatch(drivers, start) {
    return drivers.filter(drivers => (drivers.substring(0, start.length) === start));
}

function matchName(drivers, name) {
    return drivers.filter(drivers => (drivers.name === name));
}