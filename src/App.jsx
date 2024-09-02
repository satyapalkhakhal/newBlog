import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';

function App() {
  const [record, setRecord] = useState([]);
  const value = collection(db, "blogData");

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setRecord(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  // Get the last item in the record array
  const lastItem = record.length > 0 ? record[Math.floor(Math.random() * record.length)] : null;

  return (
    <>
      {/* Pass the last item as props to Hero */}
      {lastItem && (
        <Hero 
          name={lastItem.name} 
          title={lastItem.blog_title} 
          blog_info={lastItem.blog_info} 
        />
      )}
      <div className="min-h-screen bg-gray-100 flex flex-wrap gap-4 justify-center p-4">
        {record.map((item) => (
          <Card
            key={item.id} // Use the unique id from Firebase as the key
            name={item.name}
            title={item.blog_title}
            blog_info={item.blog_info}
          />
        ))}
      </div>
    </>
  );
}

export default App;
