import React, { Ref, RefObject } from "react";
import { ActionSheet, ActionSheetItem } from "@vkontakte/vkui";
import StepStatus from "../StepStatus/StepStatus";
import { RouterProps } from "../../types";

type ChangeStatusPopupProps = {
  ref: RefObject<Element>;
  onClose: () => void;
  status?: boolean;
} & RouterProps;

const ChangeStatusPopup: React.FC<ChangeStatusPopupProps> = ({
  ref,
  onClose,
  go,
  setPopout,
  setModal,
}) => {
  return (ref?.current &&
    <ActionSheet 
      onClose={onClose}
      iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      toggleRef={ref.current}
    >
      <ActionSheetItem
        autoclose
        before={<StepStatus status={0} go={go} setPopout={setPopout} setModal={setModal} />}
      >
        Ожидает
      </ActionSheetItem>
      <ActionSheetItem
        autoclose
        before={<StepStatus status={1} go={go} setPopout={setPopout} setModal={setModal} />}
      >
        В процессе
      </ActionSheetItem>
      <ActionSheetItem
        autoclose
        before={<StepStatus status={2} go={go} setPopout={setPopout} setModal={setModal} />}
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
