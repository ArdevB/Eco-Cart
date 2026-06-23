const BlogDetails = async ({ params }) => {
  const slug = (await params).slug;

  return (
    <div>
      <h1>Blog Page Details:</h1>
      <ul>
        <li>{slug[0]}</li>
        <li>{slug[1]}</li>
        <li>{slug[2]}</li>
      </ul>
    </div>
  );
};

export default BlogDetails;
