import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.item} key={id}>
    {name}: &nbsp;{number}
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default ContactItem;
