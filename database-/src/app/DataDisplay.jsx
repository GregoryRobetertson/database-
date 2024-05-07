'use client';

import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";

export default function DataDisplay() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const querySnapShot = await getDocs(collection(db, "message"));
          const dataArray = [];
    
          querySnapShot.forEach((doc) => {
            dataArray.push({ id: doc.id, ...doc.data() });
          });
          setData(dataArray);
        };
        fetchData();
      }, []);

return (
    <div>
        <h2>Data</h2>
        <ul>
        {data.map((data) => (
    <li key={data.id}>
        <h3>{data.name}</h3>
        <p>{data.message}</p>
    </li>
))}

        </ul>
    </div>
)

    
}