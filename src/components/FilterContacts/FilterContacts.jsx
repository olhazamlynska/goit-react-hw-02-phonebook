import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FilterContacts = ({ value, onChange }) => {
  const filterId = nanoid();

  return (
    <>
      <label htmlFor={filterId}>
        <input
          type="text"
          title="Write name to find contact quickly"
          value={value}
          onChange={onChange}
          id={filterId}
        ></input>
      </label>
    </>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
