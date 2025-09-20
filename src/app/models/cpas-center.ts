export interface CpasCenter {
  id: string;
  name: string;
  city: string;
  commune: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  languages: string[];
  description: { [lang: string]: string };
  postalCode: string;

  // ↓ единственное добавление
  kind: 'center' | 'antenna';
  parentId?: string; // только если это антена
}
