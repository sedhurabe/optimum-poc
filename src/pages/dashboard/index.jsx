import { useState } from 'react';
import { map } from 'lodash';
import { Cards, AddButton, FormWrapper } from 'src/components';
import { AddCardObj } from 'src/config';

import './style.scss';

const Dashboard = () => {
    const [cardObj, setCardObj] = useState({ name: '', email: '', amount: '', expiry: '' });
    const [listCard, setListCard] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [cardEdit, setCardEdit] = useState(false);

    const handleSubmit = () => {
        if (!cardEdit) {
            const obj = Object.assign({ ...cardObj, id: Math.floor(Math.random() * 10000000000000).toString() });
            setListCard([...listCard, obj]);
        } else {
            const { id } = cardObj;
            const arr = map(listCard, el => el?.id === id ? cardObj : el);
            setListCard(arr);
            setCardEdit(false);
        }
        setCardObj({ name: '', email: '', amount: '', expiry: '' });
        setShowAddForm(false);
    }

    const handleChange = (e, key) => {
        setCardObj({ ...cardObj, [key]: e.target.value });
    }

    const handleAddClick = () => {
        setShowAddForm(true);
        setCardEdit(false);
        setCardObj({ name: '', email: '', amount: '', expiry: '' });
    }

    const handleCardEdit = (item) => {
        const { name, email, amount, expiry, id } = item;
        setShowAddForm(true);
        setCardEdit(true);
        setCardObj({ name, email, amount, expiry, id });
    }

    return (
        <>
            <div className='row'>
                <div className='col-3'>
                    <h4>My Digital Cards</h4>
                    <Cards data={listCard} handleCardEdit={handleCardEdit} />
                    {!showAddForm && <AddButton label="Add Card" handleClick={handleAddClick} />}
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6'>
                            {showAddForm && <FormWrapper handleSubmit={handleSubmit} handleChange={handleChange} values={cardObj} formObject={AddCardObj} buttonLabel={cardEdit ? 'Update card details' : 'Save card'} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;