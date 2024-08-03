import toast from "react-hot-toast";


export const notifyError = (messageNotify: string | undefined) => {
 toast.error(messageNotify || '', {
  position: "top-center",
  duration: 2000,

  style: {
   direction: 'rtl',
   fontSize: '14px',
   fontWeight: 400
  }
 });
};
export const notifySuccess = (messageNotify: string | undefined) => {
 toast.success(messageNotify || '', {
  position: "top-center",
  duration: 2000,
  style: {
   direction: 'rtl',
   fontSize: '14px',
   fontWeight: 400
  }
 });
};