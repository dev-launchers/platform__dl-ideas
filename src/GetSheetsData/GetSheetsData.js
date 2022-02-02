import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { FeaturedIdeas } from "../FeaturedIdea/FeaturedIdea";
import { IdeaCard } from "../GetSheetsData/StyledGetSheetsData";

export default function GetSheetsData(props) {
  const [data, setData] = useState([]);

  let fetchData = () => {
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
  React.useEffect(fetchData, []);

  function showInfo(data, tabletop) {
    let tempData = [];
    data.forEach(function (entry) {
      tempData.push({
        projectIdea: entry.projectIdea,
        projectAudience: entry.targetAudience,
        timeCreated: entry.timestamp,
        tags: entry.tags,
      });
    });
    console.log(tempData);
    setData(tempData);
  }
  return (
    <>
      <div>
        {data.map(({ projectIdea, projectAudience }) => {
          return (
            <div key={`${projectIdea}`}>
              {projectIdea}
              <br />

              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
