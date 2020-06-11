export interface OfficeModel {
    id: number;
    officeName: string;
    officeAddress: string;
    freeWorkPlaces: number;
    freeParkSlots: number;
    humidity: string | number;
    temperature: string | number;
    backgroundImageUri?: string;
    driveMinutes: number;
}
