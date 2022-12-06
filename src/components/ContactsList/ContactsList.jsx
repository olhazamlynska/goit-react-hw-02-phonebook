import PropTypes from 'prop-types';
import {
  ContactsListSTyle,
  ContactsItem,
  ContactsName,
  DeleteBtn,
} from 'components/ContactsList/ContactsList.styled';
export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactsListSTyle>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsName>{name}:</ContactsName>
              <span>{number}</span>
              <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
            </ContactsItem>
          );
        })}
      </ContactsListSTyle>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
