
import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import {  doc, deleteDoc, getFirestore, getDoc } from "firebase/firestore";
import  app  from "./firebase";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(getFirestore(app), "blogs", id));
      history.push('/');
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const [blog, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(getFirestore(app), "blogs", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
          setIsPending(false);
          setError(null);
        } else {
          setIsPending(false);
          setError('Blog not found');
        }
      } catch (error) {
        setIsPending(false);
        setError('Error fetching blog details');
      }
    };

    fetchBlog();
  }, [id]);

  return ( 
    <div className="blog-details">
      {isPending && <div>Loading . . . .</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="bb">{blog.body}</div>
          <button style={{margin : "20px 0px 0px 0px"}} onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;

