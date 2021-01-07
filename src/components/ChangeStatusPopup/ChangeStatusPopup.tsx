import React, { Ref, RefObject } from "react";
import { ActionSheet, ActionSheetItem } from "@vkontakte/vkui";
import StepStatus from "../StepStatus/StepStatus";

type ChangeStatusPopupProps = {
  ref: RefObject<Element>;
  onClose: () => void;
  status?: boolean;
};

const ChangeStatusPopup: React.FC<ChangeStatusPopupProps> = ({
  ref,
  onClose,
}) => {
  return (
    ref?.current && (
      <ActionSheet
        onClose={onClose}
        iosCloseItem={
          <ActionSheetItem autoclose mode="cancel">
            Отменить
          </ActionSheetItem>
        }
        toggleRef={ref.current}
      >
        <ActionSheetItem autoclose before={<StepStatus status={0} />}>
          Ожидает
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<StepStatus status={1} />}>
          В процессе
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<StepStatus status={2} />}>
          Готово
        </ActionSheetItem>
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      </ActionSheet>
    )
  );
};

export default ChangeStatusPopup;
