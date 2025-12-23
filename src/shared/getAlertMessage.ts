import { ALERT_MESSAGE_TEXT, type AlertMessages } from '@/src/ui/constants/uiConstants';

export const getAlertMessage = (type: AlertMessages): string => {
  return ALERT_MESSAGE_TEXT[type];
};
