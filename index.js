
function findMatching(drivers, string) {
    // const matchingDrivers = []
    // for (const user of drivers) {
    //     if (user.toLowerCase() === string.toLowerCase()) {
    //         matchingDrivers.push(user)    
    //     }
    // }
    // return matchingDrivers
    return drivers.filter(user => user.toLowerCase() === string.toLowerCase())
     
}

function fuzzyMatch(drivers, string){
    // const almosMatchingDrivers = []
    // for (const user of drivers) {
    //     if (user.startsWith(string)) {
    //         almosMatchingDrivers.push(user)
    //     }
    // }
    // return almosMatchingDrivers
    return drivers.filter(user => user.startsWith(string))
}

function matchName(drivers, string){
    return drivers.filter(user => user.name === string)
}