import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { db } from '../../Firebase';
function BlogData() {
    const {id}=useParams()
    const[record,setRecord]=useState([])
    const value = doc(db, "blogData",id);
    useEffect(() => {
        const getData = async () => {
          const dbVal = await getDoc(value);
          setRecord({ ...dbVal.data(), id: dbVal.id });
        };
        getData();
      }, []);
  return (
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#CBC3E3	' }}>
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">{record.blog_title}</h1>
            <p className="lead my-3">{record.blog_info}</p>
            <p className="lead mb-0">
              <Link to='/' className="text-body-emphasis fw-bold">Written by {record.name}</Link>
            </p>
          </div>
        </div>
  )
}

export default BlogData