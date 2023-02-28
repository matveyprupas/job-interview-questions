import NumbersDescription from "../Descriptions/NumbersDescription/NumbersDescription";
import KanyeDescription from "../Descriptions/KanyeDescription/KanyeDescription";
import MortyDescription from "../Descriptions/MortyDescription/MortyDescription";
import ItemsDescription from "../Descriptions/ItemsDescription/ItemsDescription";

export const tests = {
  numbers: {
    title: "Numbers",
    url: "numbers",
    description: NumbersDescription,
  },
  kanye: { title: "Kanye", url: "kanye", description: KanyeDescription },
  morty: { title: "Morty", url: "morty", description: MortyDescription },
  items: { title: "Items", url: "items", description: ItemsDescription },
};
