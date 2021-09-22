import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSearchbar,
  FormSearchForm,
  SearchFormButton,
  SpanSearchFormButtonLabel,
  InputSearchForm,
} from './Searchbar.styled';

export class Searchbar extends Component {
  render() {
    return (
      <HeaderSearchbar>
        <FormSearchForm>
          <SearchFormButton type="submit">
            <SpanSearchFormButtonLabel>Search</SpanSearchFormButtonLabel>
          </SearchFormButton>

          <InputSearchForm
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </FormSearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
