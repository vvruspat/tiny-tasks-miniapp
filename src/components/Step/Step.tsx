import React, { FC } from "react";
import { Avatar, SimpleCell } from "@vkontakte/vkui";
import { plural } from "../../utils/helpers";
import StepStatus from "../StepStatus/StepStatus";
import { StepType } from "../../types";

import "./Step.css";
import router from "../../router";

type StepProp = {} & StepType;

const Step: FC<StepProp> = (props) => {
  const onEditStepClick = () => {
    console.log("gotoEdit");
    router.go("project/task/step", props);
  };

  return (
    <SimpleCell
      before={<StepStatus {...props} />}
      description={
        props.comments && props.comments.length > 0
          ? `${props.comments.length} ${plural(
              props.comments.length,
              "комментарев",
              "комментарий",
              "комментария"
            )}`
          : ""
      }
      after={
        <Avatar
          size={24}
          src={
            "https://sun9-61.userapi.com/O-2f7t0yecmx38WXoF37RkhkJTG2rcjL4Yq88w/J39s0u1f90c.jpg?ava=1"
          }
        />
      }
      onClick={onEditStepClick}
    >
      {props.name}
    </SimpleCell>
  );
};

export default Step;
