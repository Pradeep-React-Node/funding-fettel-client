import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link, Navigate } from "react-router-dom";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import avatar from "../../../assets/images/avatar_12.jpg";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getCentersAsync } from "../../../features/center/centerThunk";
import { deleteCenter } from "../../../features/center/centerSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CenterList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const centers = useSelector((state) => state?.centers?.centers);
  console.log("centersList++++++++++++", centers);
  useEffect(() => {
    dispatch(getCentersAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCenter(id));
    toast.success("Deleted Successfully!");
  };

  const handleView = (center) => {
    navigate(`/center-detail`, { state: { center } });
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
        <h2 className="page-title">Center List</h2>

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
            <Link to="/"> Dashboard</Link>
          </p>
          <p>Center</p>
        </MuiBreadcrumbs>

        <TableContainer className="table-container mt-3">
          <Table>
            <TableHead className="table-head">
              <TableRow>
                <TableCell className="table-head-cell">Center Name</TableCell>
                <TableCell className="table-head-cell" align="center">
                  Email
                </TableCell>
                <TableCell className="table-head-cell" align="center">
                  Phone No
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
              {centers?.map((center) => (
                <TableRow key={center.id}>
                  <TableCell
                    className="table-body-cell"
                    // style={{ width: "25%" }}
                  >
                    <div className="table-body-cell-2">
                      {/* <img className="mini-avatar" src={avatar} /> */}
                      <div>
                        <span>{center?.fullName} </span>
                        {/* <span className="table-email">{center?.email}</span> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    {center?.email}
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    {center?.phone}
                  </TableCell>
                  <TableCell className="table-body-cell" align="center">
                    {center?.user_type}
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
                      onClick={() => handleView(center)}
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
                      onClick={() => handleDelete(center._id)}
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

export default CenterList;
