export interface DialogPopup {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
