import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { QRCodeCanvas } from 'qrcode.react'

const QRLogin = () => {
    const [qrValue, setQrValue] = useState('');
    const router = useRouter();

    function setCookiesAndLocalStorage(data) {

        const token = data?.authToken?.replace('Bearer ', '');

        localStorage.setItem("personal", JSON.stringify(data?.user))
        const objectData = {
            userid: data.user.id,
            token: token,
            refreshToken: token,
            user: data.user.email,
            email: data.user.email,
            fullName: `${data.user.firstName} ${data.user.lastName}`,
            tokens: data.tokens
        }

        localStorage.setItem("authdata", JSON.stringify(objectData));

        setCookie('userid', data.user.id, { secure: true });
        localStorage.setItem("token", data?.authToken);
        localStorage.setItem("refoken", data?.authToken);
        localStorage.setItem('user', data.user.email, { secure: true });
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('mobilenumber', data.user.mobileNumber)
        localStorage.setItem('flName', `${data.user.firstName} ${data.user.lastName}`);
        setCookie('jwtToken', token, { secure: true });
        setCookie('authtoken', token, { secure: true });
        setCookie('email', data.user.email, { secure: true });
        setCookie('userName', data.user.name, { secure: true });
        setCookie('data', JSON.stringify(data.tokens), { secure: true });

    }

    useEffect(() => {
        const generateQRCode = async () => {
            const axios = require('axios')
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/generate-qr`); // Call backend to generate QR data

                const { channel, token } = response.data.data;
                setQrValue(JSON.stringify({ channel, token })); // Set the QR code value


                // Enable Pusher logging - don't include this in production
                Pusher.logToConsole = true;

                const pusher = new Pusher('46b85f99650ffbce8c4d', {
                    cluster: 'ap2',
                });


                const channelCreated = pusher.subscribe(channel);
                // channelCreated.bind('my-event', function (data) {
                //     alert(JSON.stringify(data));
                // });

                channelCreated.bind('login-event', function (data) {

                    // alert(JSON.stringify(data));
                    setCookiesAndLocalStorage(data);
                    setTimeout(() => {
                        router.push("/longterm/dashboard")
                    }, 1000);

                    // login on fe side ( we give user data same as after login api calls)
                });

                // Cleanup function to unsubscribe from the channel
                return () => {
                    channelCreated.unbind_all();
                    channelCreated.unsubscribe(channel);
                    pusher.disconnect();
                };

            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        };

        generateQRCode();
    }, []);

    return (
        <div>
            <div>{qrValue ?
                <QRCodeCanvas value={qrValue} size={120} />
                : <p>Loading....</p>}</div>
        </div>
    );
};

export default QRLogin;
