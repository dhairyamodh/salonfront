import { openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
// Add or edit modal
export const handleModal = (
  modalComponent,
  modalProps = {},
  className = 'add-address-modal'
) => {
  openModal({
    show: true,
    config: {
      width: 360,
      height: 'auto',
      enableResizing: false,
      disableDragging: true,
      className: className,
    },
    closeOnClickOutside: true,
    component: modalComponent,
    componentProps: { item: modalProps },
  });
};
