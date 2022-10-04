import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { useGetCategoriesQuery } from "../../redux/api/categories";

const Categories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

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
    <>
      <h2>Categories</h2>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        defaultSorted={defaultSorted}
      />
    </>
  );
};

export default Categories;
