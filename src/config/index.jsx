const SignUpObj = [
    {
        key: 'name',
        label: 'Full Name',
        type: 'text',
    },
    {
        key: 'email',
        label: 'Email Id',
        type: 'text',
    },
    {
        key: 'password',
        label: 'Password',
        type: 'password'
    }
];

const SignInObj = [
    {
        key: 'email',
        label: 'Email Id',
        type: 'text',
    },
    {
        key: 'password',
        label: 'Password',
        type: 'password'
    }
];

const AddCardObj = [
    {
        key: 'name',
        label: 'Full Name',
        type: 'text',
        required: true,
        error: 'Please enter a valid name',
        pattern: /^[a-zA-Z ]+$/,
    },
    {
        key: 'email',
        label: 'Email Id',
        type: 'text',
        required: true,
        error: 'Please enter a valid email',
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    {
        key: 'amount',
        label: 'Please enter the amount to load',
        type: 'text',
        required: true,
        error: 'Please enter a valid amount',
        pattern: /^[0-9]+$/,
    },
    {
        key: 'expiry',
        label: 'Please enter the expiry in DD/MM/YYYY',
        type: 'date',
        required: true,
        error: 'Please enter a valid expiry date',
        pattern: '',
    }
];


export { SignUpObj, SignInObj, AddCardObj };