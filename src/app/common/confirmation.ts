export interface Confirmation {
    message: string;
    header?: string;
    icon?: string;
    accept?: Function;
    reject?: Function;
}