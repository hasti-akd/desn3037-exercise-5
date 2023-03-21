import { Box } from "@mui/system";
import * as React from "react"
import { useSelector, useDispatch } from 'react-redux'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, query, orderBy, limit } from 'firebase/firestore/lite';
import { Button } from "@mui/material";

const firebaseConfig = {
  apiKey: "AIzaSyAEkx2ExkcugfWqSYIABoXpk17jtI5w2bk",
  authDomain: "desn3037-ea4bd.firebaseapp.com",
  projectId: "desn3037-ea4bd",
  storageBucket: "desn3037-ea4bd.appspot.com",
  messagingSenderId: "593647339268",
  appId: "1:593647339268:web:fa453048589d9cb2e63251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getSnapshots() {

  const col = collection(db, 'database');
  const q = query(col, orderBy("created_time", "desc"), limit(5));
  const snapshot = await getDocs(q);
  const list = snapshot.docs.map(doc => doc.data());
  
  const json = list[0].data;
  window.localStorage.setItem("payload", json);
  alert('reloading app...');
  window.location.reload();
  
  return list;
}

async function addSnapshot(){

    const timestamp = String(new Date().getTime());
    const json = window.localStorage.getItem("payload");

    // Add a new document in collection "cities"
    await setDoc(doc(db, "database", timestamp), {
        data: json,
        created_time: timestamp
    });
}

export default function Sync(){

    const payload = useSelector((state) => state);
    console.log(payload);

    const json = JSON.stringify(payload, null, 4);

window.localStorage.setItem("payload", json);

    return (

        <Box>

            <hr/>
            <Button variant="outlined" onClick={(e) => getSnapshots()}>Load</Button>
            &nbsp;
            <Button variant="outlined" onClick={(e) => addSnapshot()}>Save</Button>
            <pre>
                {json}
            </pre>

        </Box>
    )

}