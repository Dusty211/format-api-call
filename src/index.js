const {format} = require('./format')

const inputValues = {
    firstName: 'Chris',
    lastName: 'Power',
    address: '810 7th St NE, Washington DC, 20002',
    projectName: 'Chris Power | 810 7th St NE, Washington DC, 20002',
    email: 'chris@prismsolarpower.com',
    state: 'Washington DC',
    ahj: 'Washington DC',
    agreementStatus: 'signed'
}

console.log(format(inputValues))
