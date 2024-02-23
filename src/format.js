const states = {
    'District of Columbia': 'ea94fcbf-4c5e-45ca-be51-b946f4180ac6',
    Virginia: '9153caa2-6cce-487a-a618-527e3f80ced3',
    Maryland: '9279ed7d-bb6c-4e5d-8ca9-dd4cc993b9b1',
    Massachusetts: '9d333230-a78e-4244-bd49-bafd7739f1b3',
    'New Jersey': 'f92865a1-4596-4fea-b314-db521b00ed9d',
    Illinois: '005c17e5-78ca-4368-a8a3-7f6f29ad9bdc',
    'New York': '8c6f50ad-0d63-4438-a7a8-fb48dd7d0520',
    'South Carolina': '85788c83-2683-4c1d-9db6-ebf79fa0c237',
    Colorado: '5a7707fd-387f-4c4b-996e-1baaabcf9997',
    Alabama: '4502bcf9-83c2-4adc-b4ac-41e9d088a648',
    Alaska: '6e1155af-c440-4213-9def-88f3136427ad',
    Arizona: '63ba1559-1707-4e85-a611-769792d14e1d',
    Arkansas: '3c786277-8a85-4a80-bb0c-95bf2fdab2f5',
    California: 'b9791bc4-5a48-4868-8f7c-12305ace136a',
    Connecticut: 'e7efcc6e-4217-4477-a4e4-4abd86cc88f6',
    Delaware: 'b393e1d8-79c6-4a35-b1fd-b0b8e279a3e8',
    Florida: '91935fe6-49a9-49ce-a251-e93d1190148d',
    Georgia: 'ac2b5b02-af5e-4406-835c-74d3b0866e4a',
    Hawaii: 'b7531859-a76a-4275-8fe9-3be8fb49e637',
    Idaho: '2de006c3-9a80-4f90-ad82-03ac076ca92f',
    Illinois: 'aab473ca-0274-471c-9967-b78f69d0f019',
    Indiana: '57e1375b-d46a-4be0-abc8-8d6bf7f1d923',
    Iowa: 'a76af930-0870-415b-aedf-e1394999240b',
    Kansas: 'd53a1ef3-1fb0-4b42-85b6-c58bf3331e09',
    Kentucky: 'd43f6bd9-1bd7-4965-a984-f2cb3c60547f',
    Louisiana: 'b36b7b43-cf7a-41f2-af8b-965b0f70f52c',
    Maine: 'f68e3e2e-a666-47e8-9dbc-91e0fb24582a',
    Michigan: '6f9a78ac-58e4-4008-9bf1-7b6367049521',
    Minessota: 'd8ed65df-cfef-4139-b9f1-f009fd3a0d67',
    Mississippi: '05226318-492d-4e74-bbe1-d15e15df78da',
    Missouri: '1eae1872-015e-4c1c-875c-49b727a9a206',
    Montana: '2cad8b8e-078b-4a3c-8a5c-1c168bf1db7b',
    Nebraska: '4ff73539-f14d-4167-a2a3-9e9c63e44a5a',
    Nevada: 'ba681916-8e7c-4df4-925d-2843a608f94b',
    'New Hampshire': 'dbc71b74-9b34-4273-bdb6-7824b851614b',
    'New Mexico': '6ccd5813-4a97-4c80-8e18-161aec04863f',
    'North Carolina': 'aa266485-d842-4cc0-8c37-650c48054a08',
    'North Dakota': '63d6a1f9-b128-43bb-adab-e863c5aca87c',
    Ohio: 'b9235435-06db-4307-b5c3-2da30dcf5bee',
    Oklahoma: 'e76c791c-d11d-459e-aacf-1a13b17eb8fe',
    Oregon: '2ac975b1-9aa0-4fde-a8f5-7483b963544a',
    Pennsylvania: 'ef16cdd3-4e02-4ca5-b9c0-722483c1379f',
    'Rhode Island': '5c0f9949-6f5f-4fca-8b06-ac0e1a3e0c01',
    'South Dakota': '40dc1717-3359-4707-8a34-ada925627962',
    Tennessee: '47f1a2cb-2bb7-4076-87ab-53b66a51482b',
    Texas: 'bd9cbc12-59c2-4a8c-8b2e-cbf11037cf40',
    Utah: 'b2ddb65f-d294-4a39-b63c-6ac320d0e4dd',
    Vermont: '9bc1660d-a2f4-425f-af01-91871d1b9d47',
    Washington: 'd838f58d-6d52-42bc-854a-7455c479d304',
    'West Virginia': '5d50b7e5-b2bf-43f3-9a6c-46d9d430d1e9',
    Wisconsin: '801a0bc0-a365-4690-ab76-6a8f15ace4dd',
    Wyoming: '55eded6e-97ce-45a4-8143-079d08ca1cc0'
}

const ahj = {
    'Washington DC': '43779b7c-bfff-4e73-92f1-5d7c91d3bb85',
    "Prince George's County": '42eaf674-d4eb-4e03-88a7-bfad8ccdc7d8',
    'Montgomery County': '5456e0ed-2e19-4605-a21f-160992fd0f38'
}

// The names here might not match the case of the values coming from Aurora
const agreementStatus = {
    Sent: '4f8ab60e-fee5-43e4-af00-acc061d43462',
    Signed: '8ddb20f2-b77e-4ea0-bddc-087800830851',
    Viewed: 'a799f4d8-9eed-44ea-8ab4-00d0e6613c94',
    'Cancel-Pending': 'a520901a-52cd-4874-abfa-50a6bcaf10cc',
    Canceled: 'e8231af1-dd38-45b8-882d-25eea9e97ced',
    Error: '36652f1b-c966-4fdc-9957-594533cd9976',
    Declined: 'd22855ce-e3d4-4a54-ba11-017b656d659a'
}

const fieldTemplateIDS = {
    'Project Name': '958a51d7-437d-4a56-b15e-ab3c018fa713',
    'First Name': '9005f66a-aede-4ede-93d5-2bb77262ed7c',
    'Last Name': '058d2672-d1c1-41f4-89f0-0d9fd591bc89',
    'Key Contact Email Address': '9aba061e-5362-4c25-ae58-2036edefcfc9',
    'Key Contact Phone': 'acb01ae5-78c3-4d4a-8da3-bfd8fee25c13',
    State: '904929a4-ffe6-4b35-99ac-08f5671bf5dd',
    'Authority Having Jurisdiction': 'b1733243-558c-49de-bae2-8669733cbd06',
    'Agreement Status': '2b7ff4eb-2b42-4b9e-89c4-4edabb650a2c'
}

function format({firstName, lastName, address, projectName, email, state, ahj, agreementStatus}) {
    // Code here to turn the inputs into the example out put below.

    return outputValue
}

module.exports = {
    format,
    states,
    ahj,
    agreementStatus,
    fieldTemplateIDS
}

// Example output:
// const outputValue = {
//     // These contain the actual input values
//     "958a51d7-437d-4a56-b15e-ab3c018fa713": "Chris Power | 810 7th St NE, Washington DC, 20002",
//     "9005f66a-aede-4ede-93d5-2bb77262ed7c": "Chris",
//     "058d2672-d1c1-41f4-89f0-0d9fd591bc89": "Power",
//     "9aba061e-5362-4c25-ae58-2036edefcfc9": "cpower77@gmail.com",
//     "acb01ae5-78c3-4d4a-8da3-bfd8fee25c13": "(202) 123-4567",
//     // These contain the id associated with the input value in the dropdown options
//     "904929a4-ffe6-4b35-99ac-08f5671bf5dd": "ea94fcbf-4c5e-45ca-be51-b946f4180ac6",
//     "b1733243-558c-49de-bae2-8669733cbd06": "43779b7c-bfff-4e73-92f1-5d7c91d3bb85",
//     "2b7ff4eb-2b42-4b9e-89c4-4edabb650a2c": "8ddb20f2-b77e-4ea0-bddc-087800830851"
// }
