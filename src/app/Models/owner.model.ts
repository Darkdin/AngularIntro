import { Gender } from './../enums/gender.enum';

export interface OwnerClass {
  _id: string;
  firstName?: string;
  lastName?: string;
  cnp?: string;
  birthDate?: Date;
  gender?: Gender;
}
