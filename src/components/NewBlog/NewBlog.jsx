import React, { useState } from 'react'
import { db } from '../../Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function NewBog() {
    const navigate = useNavigate();
    const [userData,setUserData]=useState({
        name:"",
        blog_title:"",
        blog_info:""
    })
    const val=collection(db,"blogData")
    const submitData = async (e) => {
        e.preventDefault();
        if (!userData.name || !userData.blog_title || !userData.blog_info) {
            alert("All fields are required."); 
            return;
          }
        try {
            await addDoc(val,userData)
            setUserData({
              name: "",
              blog_title: "",
              blog_info: ""
            });
            navigate("/")
        } catch (error) {
            
        }
        
    };
    
    let name,value;
    const newData=(e)=>{
        name=e.target.name
        value=e.target.value
        setUserData({...userData,[name]:value})
    }
    return (
        <>
        <form style={{ width: "50%", margin: "0 auto" }}>
            <div className="mb-3">
                <label for="Name" className="form-label">Name</label>
                <input  className="form-control" type="text" name="name"  id="name" 
                value={userData.name} onChange={newData} />
            </div>
            <div className="mb-3">
                <label for="blog_title" className="form-label">Blog Title</label>
                <input type="text" className="form-control" name="blog_title"  id="blog_title" 
                value={userData.blog_title} onChange={newData}  />
            </div>
            <div class="mb-3">
                <label for="blog_info" class="form-label">Write Your Blog Here</label>
                <textarea class="form-control"  rows="3"
                       name="blog_info"  id="blog_info" 
                value={userData.blog_info} onChange={newData} ></textarea>
                </div>
            <button type="submit" onClick={submitData} className="btn btn-primary">Submit</button>
        </form>
        </>
    );
}
