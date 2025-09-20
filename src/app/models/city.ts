export interface City {

  id: string;           // слаг
  label: string;        // отображаемое имя
  languages: ('fr'|'nl'|'de')[]; // официальные языки
  disabled: boolean;
}
