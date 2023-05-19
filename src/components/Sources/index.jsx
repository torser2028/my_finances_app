import React, { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { fetchSources, sourcesSelector } from '../../redux/slices/sources';

const Sources = () => {
  const { sources, loadingSources, sourcesHasErrors } =
    useSelector(sourcesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSources());
  }, [dispatch]);

  const defaultSorted = [
    {
      dataField: 'name',
      order: 'asc',
    },
  ];

  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
  ];

  return (
    <div className="App">
      {sourcesHasErrors ? (
        <>Oh no, there was an error</>
      ) : loadingSources ? (
        <>Loading...</>
      ) : sources ? (
        <>
          <h2>Sources</h2>
          <BootstrapTable
            keyField="id"
            data={sources}
            columns={columns}
            defaultSorted={defaultSorted}
          />
        </>
      ) : null}
    </div>
  );
};

export default Sources;
