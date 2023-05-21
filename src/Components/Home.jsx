import Contact from "./Contact";
import { useState, useEffect } from "react";
import Toggle from "./Toggle";

function Home() {
  const [Data, setData] = useState([]);
  const [count, setCOunt] = useState(10);

  const getdata = async () => {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    setData((prev) => [...prev, ...data.results]);
  };

  const handlescroll = () => {
    const value = document.documentElement.scrollTop + window.innerHeight;
    console.log(value, document.documentElement.scrollHeight);
    if (value >= document.documentElement.scrollHeight) {
      setCOunt((prev) => prev + 10);
    }
    console.log(count);
  };

  useEffect(() => {
    getdata();
  }, [count]);

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);
  return (
    <>
      <Toggle />
      <Contact Userlist={Data} />
    </>
  );
}
export default Home;
