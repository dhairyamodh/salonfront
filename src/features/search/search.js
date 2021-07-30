import React from 'react';
import { SearchBox } from 'components/search-box/search-box';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

const Search = ({ onSubmit, handleOnChange, value, ...props }) => {
  const dispatch = useDispatch();
  const router = useHistory();
  const intl = useIntl();

  // const handleOnChange = (e) => {
  //   const { value } = e.target;
  //   return value
  //   // dispatch(setSearchTerm(value));
  // };

  return (
    <SearchBox
      onEnter={onSubmit}
      onChange={handleOnChange}
      value={value}
      name="search"
      placeholder={intl.formatMessage({
        id: 'searchPlaceholder',
        defaultMessage: 'Search your products from here',
      })}
      // categoryType={query || 'bakery'}
      buttonText={intl.formatMessage({
        id: 'searchButtonText',
        defaultMessage: 'Search',
      })}
      {...props}
    />
  );
};

export default Search;
