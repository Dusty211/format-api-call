const {format} = require('./format')

const inputValues = {
    firstName: 'Chris',
    lastName: 'Power',
    phone: '(202) 123-4567',
    projectName: 'Chris Power | 810 7th St NE, Washington DC, 20002',
    email: 'chris@prismsolarpower.com',
    state: 'DC',
    ahj: 'Washington DC',
    agreementStatus: 'signed'
}

console.log(format(inputValues))
