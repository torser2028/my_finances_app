import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {
  dateFilter,
  numberFilter,
  selectFilter,
  textFilter,
} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import FloatActionButton from './FloatActionButton';
import BarChart from '../../assets/basic-bar-graph.png';

import { useGetTransactionsQuery } from '../../redux/api/transactions';
import { useGetSourcesQuery } from '../../redux/api/sources';

import {
  fetchCategories,
  categoriesSelector,
} from '../../redux/slices/categories';
import { fetchSources, sourcesSelector } from '../../redux/slices/sources';

const Dashboard = () => {
  const { categories, loadingCategories } = useSelector(categoriesSelector);
  const { sources, loadingSources } = useSelector(sourcesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSources());
  }, [dispatch]);

  const getCategories = () => {
    let formattedCategories = {};
    if (!loadingCategories && categories?.length > 0) {
      categories.forEach((category) => {
        formattedCategories[category.name] = category.name;
      });
    }
    return formattedCategories;
  };
  const getSources = () => {
    let formattedSources = {};
    if (!loadingSources && sources?.length > 0) {
      sources.forEach((source) => {
        formattedSources[source.name] = source.name;
      });
    }
    return formattedSources;
  };

  const {
    data: transactionsData,
    error: transactionsError,
    isLoading: transactionsLoading,
  } = useGetTransactionsQuery();

  const priceFormatter = (cell, row) => {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cell);

    if (row.transaction_type === 'income') {
      return (
        <span>
          <strong style={{ color: '#276221' }}>{formattedValue}</strong>
        </span>
      );
    } else {
      return (
        <span>
          <strong style={{ color: '#ff0000' }}>{formattedValue}</strong>
        </span>
      );
    }
  };

  const dateFormatter = (cell, row) => {
    const formattedDate = new Date(cell).toLocaleDateString('en-US');
    return <span>{formattedDate}</span>;
  };

  const defaultSorted = [
    {
      dataField: 'date',
      order: 'asc',
    },
  ];

  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      filter: textFilter(),
      footer: '',
    },
    { dataField: 'transaction_type', text: 'Type', sort: true, footer: '' },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
      formatter: dateFormatter,
      filter: dateFilter(),
      footer: '',
    },
    {
      dataField: 'value',
      text: 'Value',
      sort: true,
      filter: numberFilter(),
      formatter: priceFormatter,
      footer: (columnData) =>
        `$${columnData.reduce(
          (acc, item) => parseInt(acc) + parseInt(item),
          0,
        )}`,
    },
    {
      dataField: 'category',
      text: 'Category',
      sort: true,
      filter: selectFilter({
        options: getCategories(),
      }),
      footer: '',
    },
    {
      dataField: 'source',
      text: 'Source',
      sort: true,
      filter: selectFilter({ options: getSources() }),
      footer: '',
    },
  ];

  return (
    <div className="App">
      {transactionsError ? (
        <>Oh no, there was an error</>
      ) : transactionsLoading ? (
        <>Loading...</>
      ) : transactionsData ? (
        <div>
          <div>
            {/* <img src={BarChart} alt="Bar Chart Placeholder Image" /> */}
          </div>
          <div>
            <h2>Transactions</h2>
            <BootstrapTable
              keyField="id"
              data={transactionsData}
              columns={columns}
              filter={filterFactory()}
              defaultSorted={defaultSorted}
            />
          </div>
          <FloatActionButton />
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
