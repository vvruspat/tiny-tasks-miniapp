import React, { FC } from "react";
import { HorizontalBar } from "react-chartjs-2";
import { ChartData } from "../../types";

type ChartProps = {
  data: ChartData;
  width?: number;
  height?: number;
};

const Chart: FC<ChartProps> = (props) => {
  console.log("props", props.data);

  return (
    <>
      {props?.data?.data && (
        <HorizontalBar
          data={{
            datasets: [
              {
                label: "Ожидает",
                data: props.data.data.notStarted,
                backgroundColor: "#C44146",
              },
              {
                label: "В процессе",
                data: props.data.data.inProgress,
                backgroundColor: "#C98936",
              },
              {
                label: "Готово",
                data: props.data.data.ready,
                backgroundColor: "#5A934E",
              },
            ],
            labels: props.data.labels,
          }}
        />
      )}
    </>
  );
};

export default Chart;
