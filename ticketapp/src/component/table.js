import React from "react";
import MUIDataTable from "mui-datatables";

const Table = () => {
  const options = {
    filterType: "checkbox",
    responsive: "standard",
    download: true,
    print: true,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    viewColumns: false,
  };

  const columns = [
    {
      label: "FECHA EDICIÓN",
      name: "lastEditeCode",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "CREADOR",
      name: "nameUser",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const dataTemplate = [{ lastEditeCode: "12/|1/2020", nameUser: "Bryab" }, 
  { lastEditeCode: "12/|1/2020", nameUser: "Juan" }];

  return (
      <>
             <nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required/>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
      
    <MUIDataTable
      title={"MIS PLANTILLAS"}
      data={dataTemplate}
      columns={columns}
      options={options}
    />
    </>
  );
};

export default Table;
