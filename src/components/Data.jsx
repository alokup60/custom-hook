import React from "react";
import useFetch from "../hooks/useFetch";

const Data = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
  // console.log(apiUrl);
  const { isLoading, serverErr, apiData } = useFetch(apiUrl);
  console.log(apiData);

  return (
    <div>
      <h2>API DATA</h2>
      {isLoading && <span>Loading....</span>}
      {!isLoading && serverErr ? (
        <span>Error in fetching data</span>
      ) : (
        <div>{JSON.stringify(apiData)}</div>
      )}
    </div>
  );
};

export default Data;
