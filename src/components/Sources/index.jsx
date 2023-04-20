import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { useGetSourcesQuery } from "../../redux/api/sources";

const Sources = () => {
  const { data, error, isLoading } = useGetSourcesQuery();
  const defaultSorted = [
    {
      dataField: "name",
      order: "asc",
    },
  ];

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
  ];

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h2>Sources</h2>
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
          />
        </>
      ) : null}
    </div>
  );
};

export default Sources;