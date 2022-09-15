/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import { ForcastBox } from "./SmallComponents";
import { ForcastModal } from "./ForcastModal";
import { dateFormat } from "../helpers/ExtraFunctions";

interface ForcastDataType {
  data: Object | any;
}

export const Forcast = ({ data }: ForcastDataType) => {
  const { date, day } = dateFormat(data.dt);
  return (
    <>
      <ForcastBox>
        <div className="date-day-card">
          <p className="date-text">{date}</p>
          <p className="date-text">{day}</p>
        </div>

        <ForcastModal data={data} />
      </ForcastBox>
    </>
  );
};
