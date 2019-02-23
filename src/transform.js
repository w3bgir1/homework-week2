const groupAdultsByAgeRange = arr => {
    const groups = {
        '20 and younger': [],
        '21-30': [], 
        '31-40': [],
        '41-50': [],
        '51 and older' : []
    }

    const data =  arr.reduce((acc, person) => {
        let key

        if (person.age < 21 && person.age >= 18) {
            key = '20 and younger'
        }
        if (person.age >= 21 && person.age <= 30) {
            key = '21-30'
        }
        if (person.age >= 31 && person.age <= 40) {
            key = '31-40'
        }
        if (person.age >= 41 && person.age <= 50) {
            key = '41-50'
        }
        if (person.age >= 51) {
            key = '51 and older'
        }

        if (key != null) {
            acc[key].push(person)
        }

        return acc
    }, groups)

    return Object.keys(data)
        .filter(key => data[key].length > 0)
        .reduce((obj, key) => {
            obj[key] = data[key]
            return obj
        }, {})
}


module.exports = {groupAdultsByAgeRange}