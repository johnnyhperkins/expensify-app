import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gum',
        note: ' ',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: ' ',
        amount: 195000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Dog Shite',
        note: ' ',
        amount: 10000000,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]