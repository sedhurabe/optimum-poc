import './style.scss';

const AddButton = ({ label, handleClick }) => {
    return<div className='add-btn' onClick={handleClick}>{label}</div>
}
export default AddButton;