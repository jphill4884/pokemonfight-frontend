import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

const useRankingList = () => {
  const [ranking, setRanking] = useState();

  /* const rankingList = useRankingList();  */

/*   console.log(`${serverUrl}`); */

  useEffect(() => {
     {
        fetch(`${serverUrl}/ranking`)
        .then((res) => res.json())
        .then((data) => {
          /*  console.log(data); */
          setRanking(data);
        })
        .catch((e) => console.log(e.message));


    }

  }, []);

  if (!ranking) return null;
  return ranking;
};


export default useRankingList;
