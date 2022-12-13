import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  const handleDeleteRows = async (id) => {
    try {
      setData(data.filter((item) => item.id !== id));
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.log("error message: ", error.message);
    }
  };

  useEffect(() => {
    // Fetch Data from firebase
    // const fetchData = async () => {
    //   try {
    //     const List = [];
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       List.push({ id: doc.id, ...doc.data() });
    //       setData(List);
    //     });
    //   } catch (error) {
    //     console.log('error: ', error.message);
    //   }
    // };
    // fetchData();
    // GET DATA REALTIME FROM FIREBASE DATABASE
    const unsub = onSnapshot(collection(db, "users"), (snap) => {
      const list = [];
      snap.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    });

    return () => {
      unsub();
    };
  }, []);

  const actionAction = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDeleteRows(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable" style={{ height: 600 }}>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionAction)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
