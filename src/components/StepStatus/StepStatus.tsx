import React, {
  createRef,
  FC,
  Ref,
  RefObject,
  useContext,
  useRef,
} from "react";
import cn from "classnames";
import ChangeStatusPopup from "../ChangeStatusPopup/ChangeStatusPopup";

import "./StepStatus.css";
import { Button } from "@vkontakte/vkui";
import { PopoutManageConext } from "../../context/PopoutManage";

type StepStatusType = {
  status: number;
};

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
  const buttonRef = createRef<HTMLElement>();
  const { setPopout } = useContext(PopoutManageConext);

  const showStatusMenu = (event: React.MouseEvent) => {
    event.stopPropagation();

    setPopout(
      <ChangeStatusPopup
        onClose={() => setPopout(null)}
        toggleRef={buttonRef}
      />
    );
  };

  return (
    <Button
      className={cn("statusButton", getClassByStatus(props.status))}
      getRootRef={buttonRef}
      onClick={showStatusMenu}
    />
  );
};

export default StepStatus;
