import React, { useEffect } from "react";
import dashimg from "../assets/images/dash1.png";
// import userimg from "../assets/images/ic_glass_users.png";
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getCentersAsync } from "../features/center/centerThunk";
import { getParentsAsync } from "../features/parents/parentsThunk";
import { getTestimonialsAsync } from "../features/testimonial/testinmonialThunks";

const Dashboard = () => {
  const dispatch = useDispatch();
  const centers = useSelector((state) => state?.centers?.centers);
  const parents = useSelector((state) => state?.parents?.parents);
  const testimonials = useSelector((state) => state?.testimonial?.testimonials);
  useEffect(() => {
    dispatch(getCentersAsync());
    dispatch(getParentsAsync());
    dispatch(getTestimonialsAsync());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <div className="main-conent-box mb-5">
        <div className="welcom-box">
          <div className="row">
            <div className="col col-lg-8 col-md-8 col-sm-12">
              <div className="welcm-msg">
                <div className="row">
                  <div className="col col-lg-6 col-md-6 col-sm-12">
                    <div className="welcm-left-box">
                      <h3 className="mb-3">Welcome back Admin 👋</h3>
                      <p>
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there anything.
                      </p>
                      <button className="custom-btn-green">Go Now</button>
                    </div>
                  </div>
                  <div className="col col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center">
                      <img src={dashimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12">
              <div className="welcm-msg-right">
                <div className="welcm-right-box">
                  <div className="dash-img-back d-flex justify-content-center mb-3 mt-2">
                    {/* <img className="wlcm-img" src={userimg} alt="" /> */}
                    <Icon
                      icon="fa6-solid:building-user"
                      width="80"
                      height="80"
                      style={{ color: "#00a76f" }}
                    />
                  </div>
                  <h2>{centers ? centers.length : 0}</h2>
                  <p>All Center</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <div className="theme-card">
                <div>
                  <h2>{parents ? parents.length : 0}</h2>
                  <p>All Parents </p>
                </div>
                <div className="dash-img-back d-flex justify-content-center mb-3 mt-2">
                  <Icon
                    icon="solar:users-group-two-rounded-bold-duotone"
                    width="80"
                    height="80"
                    style={{ color: "#00a76f" }}
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12">
              <div className="theme-card">
                <div>
                  <h2>125k</h2>
                  <p>All Applicantion </p>
                </div>
                <div className="dash-img-back d-flex justify-content-center mb-3 mt-2">
                  <Icon
                    icon="lets-icons:file-dock-fill"
                    width="80"
                    height="80"
                    style={{ color: "#00a76f" }}
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-4 col-sm-12">
              <div className="theme-card">
                <div>
                  <h2>{testimonials ? testimonials.length : 0}</h2>
                  <p>Testimonials </p>
                </div>
                <div className="dash-img-back d-flex justify-content-center mb-3 mt-2">
                  <Icon
                    icon="bi:chat-left-quote-fill"
                    width="60"
                    height="60"
                    style={{ color: "#00a76f" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="welcm-table">
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
