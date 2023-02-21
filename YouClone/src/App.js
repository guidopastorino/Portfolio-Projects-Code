import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import OfflinePage from "./components/OfflinePage";
// YouTube Clone with TailwindCSS

function App() {

  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    let handleOnline = () => {
      setOnline(true)
    }

    let handleOffline = () => {
      setOnline(false)
    }

    // online/offline
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // removing events
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [online])


  return (
    <>
      {
        online
        ? <Container />
        : <OfflinePage />
      }
    </>
  );
}

export default App;
