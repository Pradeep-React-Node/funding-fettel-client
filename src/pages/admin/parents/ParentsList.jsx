import React, { useEffect } from "react";
import "../../../assets/css/ParentsPage.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import avatar from "../../../assets/images/avatar_12.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getParentsAsync } from "../../../features/parents/parentsThunk";
import { deleteParent } from "../../../features/parents/parentsSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ParentsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parents = useSelector((state) => state?.parents?.parents);
  console.log("parentsList++++++++++++", parents);
  useEffect(() => {
    dispatch(getParentsAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteParent(id));
    toast.success("Deleted Successfully!");
  };

  const handleView = (parent) => {
    navigate(`/parent-details`, { state: { parent } });
  };

  function createData(name, email, location, status) {
    return { name, email, location, status };
  }

  const rows = [
    createData("Rony Parker", "rony@gmai.com", "New York", "Active"),
    createData("Jack Rayan", "Jack@gmai.com", "New York", "Pending"),
    createData("Bill Ford", "Bill@gmai.com", "New York", "Active"),
    createData("Raj Singh", "Singh@gmai.com", "New York", "Process"),
    createData("Gilbert Rosy", "Rosy@gmai.com", "New York", "Pending"),
  ];

  return (
    <>
      <div className="main-conent-box mb-5">
        <h2 className="page-title">Parents List</h2>

        <MuiBreadcrumbs
          className="link-breadcrumb"
          title="Basic"
          divider={true}
          isCard={false}
        >
          <p>
            <Icon
              className="icon-green"
              style={{ fontSize: "20px", marginBottom: "7px" }}
              icon="tabler:home-filled"
            />
            <Link to="/"> Dashboard </Link>
          </p>
          <p>Parents</p>
        </MuiBreadcrumbs>

        <TableContainer className="table-container mt-3">
          <Table>
            <TableHead className="table-head">
              <TableRow>
                <TableCell className="table-head-cell">Center Name</TableCell>
                <TableCell className="table-head-cell" align="center">
                  Phone No
                </TableCell>
                <TableCell className="table-head-cell" align="center">
                  Email
                </TableCell>
                <TableCell className="table-head-cell" align="center">
                  User
                </TableCell>
                <TableCell className="table-head-cell" align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parents?.map((parent) => (
                <TableRow key={parent.id}>
                  <TableCell
                    className="table-body-cell"
                    // style={{ width: "25%" }}
                  >
                    <div className="table-body-cell-2">
                      {/* <img className="mini-avatar" src={avatar} /> */}
                      <div>
                        <span>{parent?.fullName} </span>
                        {/* <span className="table-email">{parent?.email}</span> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    {parent?.email}
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    {parent?.phone}
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    {parent?.user_type}
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    <Icon
                      icon="lets-icons:view-fill"
                      width="26"
                      height="26"
                      style={{
                        color: "#00a76f",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleView(parent)}
                    />

                    <Icon
                      icon="fluent:edit-16-filled"
                      width="20"
                      height="20"
                      style={{ color: "#00a76f", marginRight: "5px" }}
                    />
                    <Icon
                      icon="material-symbols:delete-rounded"
                      width="20"
                      height="20"
                      style={{
                        color: "#00a76f",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(parent._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ParentsList;
