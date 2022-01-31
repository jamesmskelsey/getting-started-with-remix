export function getPeople() {
  return [
    {
      slug: "papa",
      name: "James Kelsey",
    },
    {
      slug: "mama",
      name: "Ayako Kelsey",
    },
    {
      slug: "brother",
      name: "Aiden Kelsey",
    },
    {
      slug: "sister",
      name: "Mei Kelsey",
    },
  ];
}

export function createPerson(person) {
  console.log(person);
  return person;
}
