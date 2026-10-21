
export type Pet = {
  id:number;
  name: string;
  species: string;
  adopted: boolean;
  age: number;
};

export const pets: Pet[] = [
  {
    id:1,
    name: "dog",
    species: "canine",
    adopted: true,
    age: 3,
  },
  {
    id:2,
    name: "Tiger",
    species: "bengal",
    adopted: false,
    age: 6,
  },
];
