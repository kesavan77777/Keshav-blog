
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import app from './firebase';

const useFetch = (blogs) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(getFirestore(app),"blogs"));
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setIsPending(false);
        setData(documents);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError('Unable to get the resource');
      }
    };

    fetchData();
  }, []);

  return { data, isPending, error };
};

export default useFetch;

