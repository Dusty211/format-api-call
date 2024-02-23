const {format, states, ahj, agreementStatus, fieldTemplateIDS} = require('../src/format')

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

// Example output JSON (field_values)
const outputValue = {
    // These contain the actual input values
    '958a51d7-437d-4a56-b15e-ab3c018fa713': 'Chris Power | 810 7th St NE, Washington DC, 20002',
    '9005f66a-aede-4ede-93d5-2bb77262ed7c': 'Chris',
    '058d2672-d1c1-41f4-89f0-0d9fd591bc89': 'Power',
    '9aba061e-5362-4c25-ae58-2036edefcfc9': 'cpower77@gmail.com',
    'acb01ae5-78c3-4d4a-8da3-bfd8fee25c13': '(202) 123-4567',
    // These contain the id associated with the input value in the dropdown options
    '904929a4-ffe6-4b35-99ac-08f5671bf5dd': 'ea94fcbf-4c5e-45ca-be51-b946f4180ac6',
    'b1733243-558c-49de-bae2-8669733cbd06': '43779b7c-bfff-4e73-92f1-5d7c91d3bb85',
    '2b7ff4eb-2b42-4b9e-89c4-4edabb650a2c': '8ddb20f2-b77e-4ea0-bddc-087800830851'
}

describe(`\nEnd to end testing ==>`, () => {
    test(`Result of format(inputValues) is defined`, () => {
        expect(format(inputValues)).toBeDefined()
    })

    test(`Result of format(inputValues) === outputValue`, () => {
        expect(format(inputValues)).toEqual(outputValue)
    })
})

describe(`\nMapping for 'States' ==>`, () => {
    for (const key in states) {
        test(`The state of ${key} is being mapped according to the 'states' mapping object`, () => {
            const stateChanged = {...inputValues, state: key}
            const result = format(stateChanged)
            expect(result[fieldTemplateIDS.State]).toBe(states[key])
        })
    }
})

describe(`\nMapping for 'ahj' ==>`, () => {
    for (const key in ahj) {
        test(`The key ${key} is being mapped according to the 'ahj' mapping object`, () => {
            const ahjChanged = {...inputValues, ahj: key}
            const result = format(ahjChanged)
            expect(result[fieldTemplateIDS['Authority Having Jurisdiction']]).toBe(ahj[key])
        })
    }
})

describe(`\nMapping for 'agreementStatus' ==>`, () => {
    for (const key in agreementStatus) {
        test(`The key ${key} is being mapped according to the 'agreementStatus' mapping object`, () => {
            const agreementStatusChanged = {...inputValues, agreementStatus: key}
            const result = format(agreementStatusChanged)
            expect(result[fieldTemplateIDS['Agreement Status']]).toBe(agreementStatus[key])
        })
    }
})

describe(`\nResult's keys are changed to correct 'fieldTemplateIDS' ==>`, () => {
    for (const key in fieldTemplateIDS) {
        test(`The field template ID for ${key} is being used properly`, () => {
            const result = format(inputValues)
            expect(Object.keys(result).includes(fieldTemplateIDS[key])).toBe(true)
        })
    }
})
