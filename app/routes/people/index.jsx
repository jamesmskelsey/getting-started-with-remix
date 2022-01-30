import { Link, useLoaderData } from "remix";
import { getPeople } from "~/person";

export const loader = () => {
  return getPeople();
}

export default function People() {
  const people = useLoaderData();
  console.log(people);
  return (
    <div>
      <h1>People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.slug}>
            <Link to={person.slug}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
