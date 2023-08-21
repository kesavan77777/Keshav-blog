
import BlogList from "./Bloglist"; // Make sure the path is correct
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("blogs"); // Use your Firestore collection name here

  return (
    <div className="home">
      <h1>All Blogs</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading . . .</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
