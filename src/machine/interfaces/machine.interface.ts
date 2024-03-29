import { Document } from 'mongoose';
import { Establishment } from '../../establishment/interfaces/establishment.interface';

export interface Machine extends Document {
  readonly currentEstablishmentId: Establishment;
  readonly name: string;
  readonly paperStock: number;
  readonly printerInkStock: number;
}
