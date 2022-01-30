import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import adminStyles from "~/styles/admin.css";

// link the styles for this page
export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
}

// Like the controller from Rails
export const loader = () => {
  return getPosts();
};

// View from Rails
export default function Admin() {
  const posts = useLoaderData();
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>...</main>
    </div>
  );
}
