import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  dateFilter,
  numberFilter,
  selectFilter,
  textFilter,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import FloatActionButton from "./FloatActionButton";
import BarChart from "../../assets/basic-bar-graph.png";

export default () => {
  const categoryOptions = {
    0: "Food",
    1: "Home",
    2: "Car",
  };

  const sourceOptions = {
    0: "Savings Bank 1",
    1: "Credit Card",
    2: "Savings Bank 2",
  };

  const defaultSorted = [
    {
      dataField: "date",
      order: "asc",
    },
  ];

  const products = [
    {
      name: "Product 1",
      date: "2022/09/25",
      value: "3500",
      category: 0,
      source: 0,
    },
    {
      name: "Product 2",
      date: "2022/09/23",
      value: "3500",
      category: 1,
      source: 0,
    },
    {
      name: "Product 3",
      date: "2022/09/15",
      value: "3500",
      category: 2,
      source: 0,
    },
  ];
  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
      footer: "",
    },
    {
      dataField: "date",
      text: "Date",
      sort: true,
      filter: dateFilter(),
      footer: "",
    },
    {
      dataField: "value",
      text: "Value",
      sort: true,
      filter: numberFilter(),
      footer: (columnData) =>
        columnData.reduce((acc, item) => parseInt(acc) + parseInt(item), 0),
    },
    {
      dataField: "category",
      text: "Category",
      sort: true,
      formatter: (cell) => categoryOptions[cell],
      filter: selectFilter({
        options: categoryOptions,
      }),
      footer: "",
    },
    {
      dataField: "source",
      text: "source",
      sort: true,
      formatter: (cell) => sourceOptions[cell],
      filter: selectFilter({
        options: sourceOptions,
      }),
      footer: "",
    },
  ];

  return (
    <div>
      <div>
        {/* <img src={BarChart} alt="Bar Chart Placeholder Image" /> */}
      </div>
      <div>
        <h2>Movements</h2>
        <BootstrapTable
          keyField="id"
          data={products}
          columns={columns}
          filter={filterFactory()}
          defaultSorted={defaultSorted}
        />
      </div>
      <FloatActionButton />
    </div>
  );
};
