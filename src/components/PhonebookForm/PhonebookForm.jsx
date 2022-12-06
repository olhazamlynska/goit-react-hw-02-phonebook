import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  AllForm,
  Label,
  Input,
  AddBtn,
} from 'components/PhonebookForm/PhonebookForm.styled';
export class PhonebookForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    this.props.onSubmit(name.value, number.value);

    e.currentTarget.reset();
  };
  render() {
    return (
      <AllForm onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddBtn type="submit">Add contact</AddBtn>
      </AllForm>
    );
  }
}
