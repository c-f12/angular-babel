import { PrinterIf, DptoIf, UserIf } from './master.model';

export interface OrderPrintIf {
    user: UserIf;
    printer: PrinterIf;
    isColor: boolean;
    isClaro: boolean;
    dpto: DptoIf;
}
