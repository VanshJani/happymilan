import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ResendOTP } from '../../store/actions/SignupAction';

// const useOtpResend = (initialCountdown = 60) => {
//     const [countdown, setCountdown] = useState(initialCountdown);
//     const [isCounting, setIsCounting] = useState(false);

//     const dispatch = useDispatch();

//     const startCountdown = useCallback(() => {
//         setIsCounting(true);
//         setCountdown(initialCountdown);
//         dispatch(ResendOTP())

//     }, [initialCountdown]);

//     useEffect(() => {

//         if (!isCounting) return;

//         if (countdown === 0) {
//             setIsCounting(false);
//             console.log("Countdown finished");
//             // Handle post-countdown logic here, like enabling the resend button
//             return;
//         }

//         if (!isCounting || countdown <= 0) return;

//         const timer = setTimeout(() => {
//             setCountdown(prevCountdown => prevCountdown - 1);
//         }, 1000);

//         if (countdown === 0) {
//             setIsCounting(false);
//             // Handle post-countdown logic here, like enabling the resend button
//         }

//         return () => clearTimeout(timer);
//     }, [isCounting, countdown]);

//     return { countdown, isCounting, startCountdown };
// };

// export default useOtpResend;

const useOtpResend = (initialCountdown = 60) => {
  const [countdown, setCountdown] = useState(initialCountdown)
  const [isCounting, setIsCounting] = useState(false)

  const dispatch = useDispatch()

  const startCountdown = useCallback(
    email => {
      console.log("🚀 ~ useOtpResend ~ email:", email)
      if (!email) {
        console.error('Email is required to resend OTP.')
        return
      }

      setIsCounting(true)
      setCountdown(initialCountdown)
      dispatch(ResendOTP(email)) // Pass the email to the action
    },
    [initialCountdown, dispatch]
  )

  useEffect(() => {
    if (!isCounting) return

    if (countdown === 0) {
      setIsCounting(false)
      console.log('Countdown finished')
      return
    }

    const timer = setTimeout(() => {
      setCountdown(prevCountdown => prevCountdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isCounting, countdown])

  return { countdown, isCounting, startCountdown }
}

export default useOtpResend
