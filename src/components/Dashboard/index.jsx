import { useMemo } from 'react';
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
import { useGetCategoriesQuery } from '../../redux/api/categories';
import { useGetSourcesQuery } from '../../redux/api/sources';

const Dashboard = () => {
  const {
    data: transactionsData,
    error: transactionsError,
    isLoading: transactionsLoading,
  } = useGetTransactionsQuery();

  const {
    data: categoriesData = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  const categories = useMemo(() => {
    let categories = {};
    if (categoriesData) {
      categoriesData.forEach((category) => {
        categories[category.id] = category.name;
      });
    }
    return categories;
  }, [categoriesData, isLoading, isFetching, isSuccess, isError, error]);

  const {
    data: sourcesData = [],
    error: sourcesError,
    isLoading: sourcesLoading,
    isSuccess: sourcesSuccess,
    isError: sourcesIsError,
  } = useGetSourcesQuery();

  const sources = useMemo(() => {
    let sources = {};
    if (sourcesData) {
      sourcesData.forEach((category) => {
        sources[category.id] = category.name;
      });
    }
    return sources;
  }, [
    sourcesData,
    sourcesLoading,
    sourcesSuccess,
    sourcesIsError,
    sourcesError,
  ]);

  const defaultSorted = [
    {
      dataField: 'date',
      order: 'asc',
    },
  ];

  // TODO: The drop down filters are not getting the that on load
  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      filter: textFilter(),
      footer: '',
    },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
      filter: dateFilter(),
      footer: '',
    },
    {
      dataField: 'value',
      text: 'Value',
      sort: true,
      filter: numberFilter(),
      footer: (columnData) =>
        columnData.reduce((acc, item) => parseInt(acc) + parseInt(item), 0),
    },
    {
      dataField: 'category',
      text: 'Category',
      sort: true,
      formatter: (cell) => categories[cell],
      filter: selectFilter({
        options: categories || {},
      }),
      footer: '',
    },
    {
      dataField: 'source',
      text: 'source',
      sort: true,
      formatter: (cell) => sources[cell],
      filter: selectFilter({
        options: sources || {},
      }),
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
            <h2>Movements</h2>
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
