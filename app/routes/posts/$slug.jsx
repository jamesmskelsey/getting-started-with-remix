import { useLoaderData } from "remix";
import { getPost } from "~/post";

export const loader = async ({ params }) => {
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  console.log(post.html);
  return (
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
  );
}
