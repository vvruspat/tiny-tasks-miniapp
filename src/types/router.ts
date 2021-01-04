import { ModalPage } from '@vkontakte/vkui';
import { ModalParamsType } from './modal';

export type RouterProps = {
  go: (name: string, props: any) => void;
  setPopout: (popout: React.ReactNode) => void;
  setModal: (params: ModalParamsType) => void;
};
