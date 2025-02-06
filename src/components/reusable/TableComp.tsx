import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import styled from "styled-components";
import { TbCancel } from "react-icons/tb";

interface TableCompProps {
  columns: TableColumn<any>[];
  data: any[];
  subHeaderComponent?: React.ReactNode;
}

const TableComp: React.FC<TableCompProps> = ({
  columns,
  data = [],
  subHeaderComponent,
}) => {
  const customStyles = {
    table: {
      style: {
        border: "1px solid #ccc",
        borderRadius: "7px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#FAFAFA",
        fontFamily: "Inter",
        fontWeight: 400,
      },
    },
    subHeader: {
      style: {
        borderTopLeftRadius: "7px",
        borderTopRightRadius: "7px",
        border: "1px solid #ccc",
        borderBottom: "none",
        padding: "10px", // Add some padding for better visual appearance
        whiteSpace: "nowrap",
      },
    },
    rows: {
      style: {
        backgroundColor: "#FFFFFF",
      },
    },
    cells: {
      style: {
        backgroundColor: "#FFFFFF",
      },
    },
  };

  return (
    <div className="table-container w-full md:p-2">
      <DataTable
        columns={columns}
        data={data}
        responsive
        customStyles={customStyles}
        // subHeader
        // subHeaderComponent={subHeaderComponent}
        noDataComponent={
          <div className="min-h-[10rem] gilroy-semibold flex flex-col items-center justify-center">
            <TbCancel color="red" size={45} />
            No data available
          </div>
        }
      />
    </div>
  );
};

export default TableComp;
