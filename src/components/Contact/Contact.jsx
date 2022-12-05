import PropTypes from 'prop-types';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
