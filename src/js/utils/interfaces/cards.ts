type Advanced = boolean;
type Artist = string;
type Banned = boolean;
type Capacity = number;
type CardText = string;
type Clan = "Abomination" | "Ahrimane" | "Akunanse" | "Assamite" | "Baali" |
  "Blood Brother" | "Brujah" | "Brujah antitribu" | "Caitiff" |
  "Daughter of Cacophony" | "Follower of Set" | "Gangrel" | "Gangrel antitribu" |
  "Gargoyle" | "Giovanni" | "Guruhi" | "Harbinger of Skulls" | "Ishtarri" | "Kiasyd" |
  "Lasombra" | "Malkavian" | "Malkavian antitribu" | "Nagaraja" | "Nosferatu" |
  "Nosferatu antitribu" | "Osebo" | "Pander" | "Ravnos" | "Salubri" |
  "Salubri antitribu" | "Samedi" | "Toreador" | "Toreador antitribu" | "Tremere" |
  "Tremere antitribu" | "True Brujah" | "Tzimisce" | "Ventrue" | "Ventrue antitribu" |
  "Avenger" | "Defender" | "Innocent" | "Judge" | "Martyr" | "Redeemer" | "Visionary";
type Disciplines = string;
type Name = string;
type Set = string;
type Title = "primogen" | "prince" | "justicar" | "inner circle" |
  "bishop" | "archbishop" | "cardinal" | "regent" | "priscus" |
  "1 vote" | "2 votes" | "3 votes" | "baron" | "laibon"| "magaji" | null;
type Type = "Vampire" | "Imbued";

interface Card {
  readonly name: string;
  readonly cardText: string;
}

export interface CryptCard extends Card {
  readonly advanced: boolean;
  readonly artist: string;
  readonly banned: boolean;
  readonly capacity: number;
  readonly clan: Clan;
  readonly disciplines: Disciplines;
  readonly group: number | null;
  readonly set: Set;
  readonly title: Title;
  readonly type: Type;
}
