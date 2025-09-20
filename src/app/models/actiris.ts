export interface ActirisCenter {
  id: string;
  type: EmploymentServiceType; // строго 'actiris'
  name: string;
  address: string;
  phone: string;
  postalCode: string;
  city:string;
  website: string;
  languages: string[];
}
export type EmploymentServiceType = 'actiris';