export interface OfficeModel {
    id: number;
    title: string;
    officeAddress: string;
    freeWorkPlaces: number;
    freeParkSlots: number;
    humidity: string | number;
    temperature: string | number;
    backgroundImageUri?: string;
    driveMinutes: number;
    lat?: number;
    lng?: number;
}
