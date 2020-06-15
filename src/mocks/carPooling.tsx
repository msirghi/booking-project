import {CarPoolingBookModel} from "../models/CarPoolingBookModel";

export const carPoolingList: Array<CarPoolingBookModel> = [
    {
        id: 1,
        from: 'Office 1',
        to: 'Ciocana',
        fromAddress: 'Alba Iulia 75',
        toAddress: 'Mircea cel Batrin 12',
        time: '18:00',
        seats: [
            {
                status: 'busy'
            },
            {
                status: 'free'
            },
            {
                status: 'free'
            }
        ]
    },
    {
        id: 2,
        from: 'Office 2',
        to: 'Botanica',
        fromAddress: 'Calea Iesilor 8',
        toAddress: 'Dacia 75',
        time: '19:30',
        seats: [
            {
                status: 'busy'
            },
            {
                status: 'busy'
            },
            {
                status: 'busy'
            },
            {
                status: 'free'
            }
        ]
    },


];
