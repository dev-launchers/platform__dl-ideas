import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

export default function App() {
  const [data, setData] = useState([]);

  let getSheetsData = () => {
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/16RglFZM0lMvsGUmSV3QKti_cMsXSIFp6j7zMvTVxDlA/edit?usp=sharing",
      callback: showInfo,
      simpleSheet: true,
    })
      .then((data) => {
        console.log(data);
      })

      .catch((err) => {
        console.warn(err);
      });
  };
  React.useEffect(getSheetsData, []);

  function showInfo(data, tabletop) {
    let tempData = [];
    data.forEach(function (entry) {
      tempData.push({
        projectIdea: entry.projectIdea,
        projectAudience: entry.targetAudience,
      });
    });
    console.log(tempData);
    setData(tempData);
  }
  return (
    <>
      <h1>data from google sheets</h1>
      <div>
        {data.map(({ projectIdea, projectAudience }) => {
          return (
            <div key={`${projectIdea}_${projectAudience}`}>
              {projectIdea}
              <br />
              <br />
              {projectAudience}
            </div>
          );
        })}
      </div>
    </>
  );
}
