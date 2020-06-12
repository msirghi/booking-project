import {CarSeatModel} from "./CarSeatModel";

export interface CarPoolingBookModel {
    id: number,
    from: string;
    to: string;
    time: string;
    fromAddress: string;
    toAddress: string;
    seats: Array<CarSeatModel>
}
