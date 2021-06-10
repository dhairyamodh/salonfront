import React from 'react';
import { SearchBox } from 'components/search-box/search-box';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { setSearchTerm } from '../../redux/actions/appActions'

const Search = ({ onSubmit, ...props }) => {
  const searchterm = useSelector(state => state.app.searchTerm);
  const dispatch = useDispatch();
  const router = useHistory();
  const intl = useIntl();

  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(setSearchTerm(value));
  };
  const { pathname, query } = useLocation();
  const onSearch = (e) => {
    e.preventDefault();
    const { type, ...rest } = query;
    if (type) {
      router.push(
        {
          pathname,
          query: { ...rest, text: searchterm },
        },
        {
          pathname: `/${type}`,
          query: { ...rest, text: searchterm },
        }
      );
    } else {
      router.push({
        pathname,
        query: { ...rest, text: searchterm },
      });
    }
    dispatch({ type: 'SET_SEARCH_TERM', payload: '' });
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <SearchBox
      onEnter={onSearch}
      onChange={handleOnChange}
      value={searchterm}
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
