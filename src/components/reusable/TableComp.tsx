import { useTheme } from "@/ThemeContext";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { TbCancel } from "react-icons/tb";
import styled from "styled-components";

interface RowData {
  id: number;
  title: string;
  year: string;
  listings: string;
  listingsLifetime: string;
  totalMade: string;
  shopValue: string;
}

interface TableCompProps {
  columns: TableColumn<RowData>[];
  data: RowData[];
}

const TableComp: React.FC<TableCompProps> = ({ columns, data = [] }) => {
  const { theme } = useTheme();

  const customStyles = {
    table: {
      style: {
        borderRadius: "17px",
      },
    },
    headCells: {
      style: {
        backgroundColor: theme === "light" ? "#FFFFFF" : "#000000CC",
        fontFamily: "Inter",
        fontWeight: 400,
        color: theme === "dark" ? "#FFFFFF" : "#000000",
      },
    },
    subHeader: {
      style: {
        borderTopLeftRadius: "7px",
        borderTopRightRadius: "7px",
        border: "1px solid #ccc",
        borderBottom: "none",
        padding: "10px",
        whiteSpace: "nowrap",
      },
    },
    rows: {
      style: {
        borderRadius: "17px",
      },
    },
    cells: {
      style: {
        marginBottom: "5px",
      },
    },
  };

  return (
    <TableCompStyled className="table-container w-full md:p-2">
      <DataTable
        columns={columns}
        data={data}
        responsive
        customStyles={customStyles}
        noDataComponent={
          <div className="min-h-[10rem] gilroy-semibold flex flex-col items-center justify-center">
            <TbCancel color="red" size={45} />
            No data available
          </div>
        }
      />
    </TableCompStyled>
  );
};

const TableCompStyled = styled.div`
  .rdt_TableRow {
    margin-bottom: 10px; /* Add space between rows */
  }
  .rdt_TableRow:nth-child(even) {
    background-color: #e6f1fd; /* Light blue for even rows */
  }
  .rdt_TableRow:nth-child(odd) {
    background-color: #edeefc; /* Light pink for odd rows */
  }

  .rdt_TableCell {
    background-color: transparent !important;
  }
`;

export default TableComp;
