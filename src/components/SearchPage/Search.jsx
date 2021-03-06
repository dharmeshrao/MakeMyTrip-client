import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { Bottom } from "./Bottom";
import { useState, useEffect } from "react";
export const Search = () => {
  const [dataa, setData] = useState([]);
  const handleSelect = async (select) => {
        const data = await fetch(
          `https://raw.githubusercontent.com/dharmeshrao/mmtvercel/main/db.json
          `
        );
        let ans = await data.json();
        ans = ans.data;
        if (ans.length === 0) {
          alert("No planes are available");
        } else {
          setData(ans);
        }
  };
  const handleSort = (e) => {
    if (e === true) {
      const sortedList = [...dataa].sort(
        (a, b) => +a.departure.delay - +b.departure.delay
      );
      setData(sortedList);
    }
  };
  const handleHigh = (e) => {
    if (e === true) {
      const sortedList = [...dataa].sort(
        (a, b) => +a.departure.delay - +b.departure.delay
      );
      sortedList.reverse();
      setData(sortedList);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let x = localStorage.getItem("myKey");
      let y = JSON.parse(x);
      let promise = async () => {
        const data = await fetch(
          `https://raw.githubusercontent.com/dharmeshrao/mmtvercel/main/db.json
          `
        );
        let ans = await data.json();
        ans = ans.data;
        if (ans.length === 0) {
          alert("No planes are available");
        } else {
          setData(ans);
        }
      };
      promise();
    }
  }, []);

  const bookData = (e) => {
    localStorage.setItem("buy", JSON.stringify(e));
  };
  return (
    <>
      <Header />
      <SearchBox handle={handleSelect} />
      <Bottom
        data={dataa}
        bookData={bookData}
        sorthigh={handleHigh}
        sorting={handleSort}
      />
    </>
  );
};
