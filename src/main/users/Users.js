import React from 'react';
import Container from '@material-ui/core/Container';

import UsersList from './UsersList';
import SearchBar from './SearchBar';
import StickyHeadTable from './StickyHeadTable';

export default function Users(props) {
  return (
    <React.Fragment>
      <SearchBar />
      <StickyHeadTable />
    </React.Fragment>
  );
}
