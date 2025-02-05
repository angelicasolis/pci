import React, { useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { GridApi } from "ag-grid-community";
import { GridColumn } from "../types/gridTypes";
import { formatDate, formatPotentiallyHazardous } from "../helpers/formatters";
import data from "../data/near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Header from "./Header";

const columnDefs: GridColumn[] = [
  { field: "designation", headerName: "Designation", sortable: true, filter: "agTextColumnFilter" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    filter: "agDateColumnFilter",
    valueFormatter: (params) => formatDate(params.value),
  },
  { field: "h_mag", headerName: "H (mag)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "period_yr", headerName: "Period (yr)", sortable: true, filter: "agNumberColumnFilter" },
  { field: "i_deg", headerName: "Inclination (deg)", sortable: true, filter: "agNumberColumnFilter" },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: "agTextColumnFilter",
    valueFormatter: (params) => formatPotentiallyHazardous(params.value),
  },
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, sortable: true, filter: "agTextColumnFilter" },
];

const NeoGrid: React.FC = () => {
  const gridApi = useRef<GridApi | null>(null);

  useEffect(() => {
    document.title = "Near-Earth Object Overview";
  }, []);


  const clearFiltersAndSorters = () => {
    console.log("Clearing filters and sorters..."); 
    if (gridApi.current) {
      gridApi.current.setFilterModel(null);
      gridApi.current.applyColumnState({ state: [], applyOrder: true });
      console.log("Filters and sorters cleared.");
    } else {
      console.log("gridApi is not available."); 
    }
  };

  return (
    <div>
      <Header onClearFilters={clearFiltersAndSorters} />
      <div className="ag-theme-alpine" style={{ height: 900, width: "100%" }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          rowGroupPanelShow="always"
          animateRows={true}
          pagination={true}
          paginationPageSize={20}
          defaultColDef={{
            flex: 1,
            resizable: true,
            floatingFilter: true,
            sortable: true,
            filter: true,
          }}
          enableCellTextSelection={true}
          suppressClipboardPaste={true}
          copyHeadersToClipboard={true}
          onGridReady={(params) => {
            gridApi.current = params.api;
          }}
        />
      </div>
    </div>
  );
};

export default NeoGrid;




