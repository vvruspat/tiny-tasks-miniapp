import React from "react";
import { ActionSheet, ActionSheetItem } from "@vkontakte/vkui";
import StepStatus from "../StepStatus/StepStatus";
import { RouterProps } from "../../types";

type ChangeStatusPopupProps = {
  onClose: () => void;
  status?: boolean;
} & RouterProps;

const ChangeStatusPopup: React.FC<ChangeStatusPopupProps> = ({
  onClose,
  go,
  setPopout,
}) => {
  return (
    <ActionSheet onClose={onClose}>
      <ActionSheetItem
        autoclose
        before={<StepStatus status={0} go={go} setPopout={setPopout} />}
      >
        Ожидает
      </ActionSheetItem>
      <ActionSheetItem
        autoclose
        before={<StepStatus status={1} go={go} setPopout={setPopout} />}
      >
        В процессе
      </ActionSheetItem>
      <ActionSheetItem
        autoclose
        before={<StepStatus status={2} go={go} setPopout={setPopout} />}
      >
        Готово
      </ActionSheetItem>
      <ActionSheetItem autoclose mode="cancel">
        Отменить
      </ActionSheetItem>
    </ActionSheet>
  );
};

export default ChangeStatusPopup;
