import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { useGetCategoriesQuery } from "../../redux/api/categories";

const Categories = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  const defaultSorted = [
    {
      dataField: "name",
      order: "asc",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
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
        data={categories}
        columns={columns}
        defaultSorted={defaultSorted}
      />
    </>
  );
};

export default Categories;
