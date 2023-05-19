import React, { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {
  fetchCategories,
  categoriesSelector,
} from '../../redux/slices/categories';

const Categories = () => {
  const { categories, loadingCategories, categoriesHasErrors } =
    useSelector(categoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
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
    {
      dataField: 'is_user_category',
      text: 'User Category',
      sort: true,
    },
  ];

  return (
    <div className="App">
      {categoriesHasErrors ? (
        <>Oh no, there was an error</>
      ) : loadingCategories ? (
        <>Loading...</>
      ) : categories ? (
        <>
          <h2>Categories</h2>
          <BootstrapTable
            keyField="id"
            data={categories}
            columns={columns}
            defaultSorted={defaultSorted}
          />
        </>
      ) : null}
    </div>
  );
};

export default Categories;
