import React, { useEffect, useState } from "react";
import JokesContent from "../../components/Jokes/JokesContent";
import { getJokes } from "../../service";

const JokesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const res = await getJokes();

    const newData = res.data.results.map((item) => ({ ...item, vote: 0 }));

    setData(newData);
  };

  console.log("data", data);

  const onHandleRmvVote = (i) => {
    console.log("i", i);
    let newData = [...data];

    newData[i] = {
      ...newData[i],
      //   vote: newData[i].vote > 0 ? newData[i].vote - 1 : 0,
      vote: newData[i].vote - 1,
    };

    console.log(newData);

    newData.sort((itemA, itemZ) => itemZ.vote - itemA.vote);

    setData(newData);
  };

  const onHandleAddVote = (i) => {
    let newData = [...data];

    newData[i] = {
      ...newData[i],
      vote: newData[i].vote + 1,
    };

    console.log(newData);

    newData.sort((itemA, itemZ) => itemZ.vote - itemA.vote);

    setData(newData);
  };

  return (
    <>
      <JokesContent
        data={data}
        onArtir={onHandleAddVote}
        onAzalt={onHandleRmvVote}
      />
    </>
  );
};

export default JokesPage;
