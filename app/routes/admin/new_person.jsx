import { Form, redirect } from "remix";
import { useState } from "react/cjs/react.development";
import { createPerson } from "~/person";

// Post Controller
export const action = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const slug = formData.get("slug");

  console.log("form data slug", slug);

  await createPerson({ name, slug });
  return redirect("/admin");
};

// View
export default function NewPerson() {
  let [name, setName] = useState("");
  let [slug, setSlug] = useState("");

  const handleUpdateName = (event) => {
    const text = event.target.value;
    setName(text);
    setSlug(text ? text.toLowerCase().trim().replaceAll(" ", "-") : "");
  };

  return (
    <Form method="post">
      <p>
        <label>
          Person Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleUpdateName}
          />
        </label>
      </p>
      <p>
        <label>
          Slug: <input value={slug} readOnly type="text" name="slug" />
        </label>
      </p>
      <p>
        <button type="submit">Create Person</button>
      </p>
    </Form>
  );
}
