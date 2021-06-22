import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitForm from './SplitForm/SplitForm';

const stripePromise = loadStripe('pk_test_51IfivUJmUxZR47bjRKRGubSqEYkQirvDCSaaQNSxDs2XiRwWRFDnVQVeIFbxZS9yNhxVnsl94fQf9u8KwTevXfHQ00rnU32Qoj');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SplitForm></SplitForm>
        </Elements>
    );
};

export default ProcessPayment;