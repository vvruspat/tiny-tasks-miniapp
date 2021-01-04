import React, { createRef, FC, Ref, RefObject, useRef } from "react";
import cn from "classnames";
import ChangeStatusPopup from "../ChangeStatusPopup/ChangeStatusPopup";

import "./StepStatus.css";
import { RouterProps } from "../../types";
import { Button } from "@vkontakte/vkui";

type StepStatusType = {
  status: number;
} & RouterProps;

enum EStepStatus {
  waiting,
  in_progress,
  done,
}

const getClassByStatus = (status: EStepStatus) => {
  let className = "";

  switch (status) {
    case 0:
      className = "waiting";
      break;
    case 1:
      className = "in_progress";
      break;
    case 2:
      className = "done";
      break;
  }

  return className;
};

const StepStatus: FC<StepStatusType> = (props) => {
  const buttonRef = createRef<Element>();

  const showStatusMenu = (event: React.MouseEvent) => {
    event.stopPropagation();

    props.setPopout(
      <ChangeStatusPopup
        onClose={() => props.setPopout && props.setPopout(null)}
        go={props.go}
        setPopout={props.setPopout}
        setModal={props.setModal}
        ref={buttonRef}
      />
    );
  };

  return (
    <Button
      className={cn("statusButton", getClassByStatus(props.status))}
      onClick={showStatusMenu}
    />
  );
};

export default StepStatus;
