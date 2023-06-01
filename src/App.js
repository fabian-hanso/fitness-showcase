import React from "react";

import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import firebase from "./firebase/firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import Edit from "./components/Edit/Edit";
import Switch from "./components/Switch/Switch";
import StartScreen from "./components/StartScreen/StartScreen";

function App() {
  const [entries, setEntries] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [startScreen, setStartScreen] = useState(true);

  useEffect(() => {
    const isunsubscribe = onSnapshot(
      query(collection(firebase, "activities"), orderBy("date", "desc")),
      (snapshot) => {
        setEntries(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );

    return isunsubscribe;
  }, []);

  const onHandleSwitchClick = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setStartScreen(false);
    }, 2000);
  });

  const onHandleFormSubmit = () => {
    setEditMode(false);
  };

  return (
    <div className="App">
      {startScreen ? (
        <StartScreen />
      ) : (
        <>
          <Header />
          {editMode ? (
            <Edit onHandleFormSubmit={onHandleFormSubmit} />
          ) : (
            <div className="CardWrapper">
              {entries &&
                entries.map((item) => <Card content={item} key={item.id} />)}
            </div>
          )}
          <Switch
            editMode={editMode}
            onHandleSwitchClick={onHandleSwitchClick}
          />
        </>
      )}
    </div>
  );
}

export default App;
