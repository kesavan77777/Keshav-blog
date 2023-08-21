import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from './firebase';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history=useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  
    try {
      const docRef = await addDoc(collection(getFirestore(app), "blogs"), blog);
      console.log("Document written with ID: ", docRef.id);
      history.push('/');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;