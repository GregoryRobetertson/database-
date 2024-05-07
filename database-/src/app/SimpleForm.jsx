'use client';

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebaseConfig";

export default function SimpleForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    

async function addDataToFireStore(name, message) {
try {
    const docRef = await addDoc(collection(db, "message"), {
        
        name: name,
        message: message
    })
    console.log('Document written with ID', docRef.id );
} catch (error) {
    console.error*('Error adding data', error)
}
}

const handleSubmit =  async (e) => {
e.preventDefault(); 
const added = await addDataToFireStore(name, message);
if(added) {
    setName("");
    setMessage("");
    alert('Data added to database');
}
}
 
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Simple Form</h2>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Name:</label>
                <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Message:</label>
                <textarea id="message" name="message" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
    </div>
    )
}