/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { confirmAlert } from "react-confirm-alert";
// import { CSVLink } from "react-csv";
import { useHistory } from "react-router";
import {
  deleteCompanyByID,
  getAllCompanies,
  URL,
} from "../../../actions/adminActions";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";

const useFilterData = (fItems, config = null) => {
  const [filterConfig, setFilterConfig] = useState(config);

  const filterItems = useMemo(() => {
    let filterableItems = fItems && [...fItems];
    if (filterConfig !== null) {
      // eslint-disable-next-line array-callback-return
      filterableItems = filterableItems.filter((company) => {
        if (
          company.CompanyName.includes(filterConfig.key) ||
          company.CompanyEmail.includes(filterConfig.key) ||
          company.Website.includes(filterConfig.key)
        ) {
          return company;
        }
      });
    }
    return filterableItems;
  }, [fItems, filterConfig]);

  const requestFilter = (key) => {
    setFilterConfig({ key });
  };
  return { fItems: filterItems, requestFilter, filterConfig };
};

const useSortableData = (items, config = null) => {
  const [sortCoonfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = items && [...items];
    if (sortCoonfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortCoonfig.key] < b[sortCoonfig.key]) {
          return sortCoonfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortCoonfig.key] > b[sortCoonfig.key]) {
          return sortCoonfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortCoonfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortCoonfig &&
      sortCoonfig.key === key &&
      sortCoonfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort, sortCoonfig };
};

const Employers = () => {
  const history = useHistory();
  const [arr, setArr] = useState([]);
  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");
  const { items, requestSort, sortCoonfig } = useSortableData(arr);
  const [filter, setFilter] = useState(false);

  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [numberFilter, setNumberFilter] = useState("");
  const [website, setWebsiteFilter] = useState("");
  const { fItems, requestFilter, filterConfig } = useFilterData(arr);

  const [allCompanies, setAllCompanies] = useState([]);

  const getCompanies = async () => {
    try {
      const res = await axios.get(
        URL + "/api/company/users/" + pageNo + "/" + perPage
      );
      await setArr(res.data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  const gettingAllCompany = async () => {
    const comp = await getAllCompanies();
    if (comp) {
      await setAllCompanies(comp);
    }
  };

  const deleteCompany = async (id) => {
    try {
      const isJobDeleted = await deleteCompanyByID(id);
      if (isJobDeleted) {
        setArr((prevState) => {
          return prevState.filter((job) => {
            return job._id !== id;
          });
        });
        await gettingAllCompany();
        await getCompanies();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingAllCompany();
  }, []);

  useEffect(() => {
    getCompanies();
  }, [pageNo]);

  useEffect(() => {
    if (nameFilter !== "" || emailFilter !== "" || website !== "") {
      setFilter(true);
    } else {
      setFilter(false);
    }
  }, [emailFilter, nameFilter, website]);

  return (
    <div>
      <div className='main-panel'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Employers</h4>
              {/*} <CSVLink
                      data={props.companies}
                      filename={"Companies_" + Date.now() + ".csv"}
                      classNName='btn btn-primary btn-rounded btn-fw'
                      style={{ marginLeft: 10, marginBottom: 10 }}>
                      Export to CSV
                    </CSVLink> */}
              <br></br>
              Filter
              <div className='form-group'>
                <div className='form-group row'>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Name'
                    value={nameFilter}
                    onChange={(e) => {
                      setNameFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Email'
                    value={emailFilter}
                    onChange={(e) => {
                      setEmailFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Number'
                    value={numberFilter}
                    onChange={(e) => {
                      setNumberFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                  <input
                    type='text'
                    className='form-control col-sm-2'
                    placeholder='Website'
                    value={website}
                    onChange={(e) => {
                      setWebsiteFilter(e.target.value);
                      requestFilter(e.target.value);
                    }}></input>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-responsive'>
                    <Pagination
                      className='my-3'
                      siblingCount={1}
                      boundaryCount={1}
                      variant='outlined'
                      shape='rounded'
                      count={Math.ceil(
                        allCompanies && allCompanies.length / 10
                      )}
                      onChange={(e, page) => {
                        setPageNo(page);
                      }}
                    />
                    <table className='table'>
                      <thead>
                        <tr>
                          <th
                            onClick={() => {
                              requestSort("CompanyName");
                              setFilter(true);
                              if (filter) {
                                setFilter(false);
                              } else {
                                setFilter(true);
                              }
                            }}>
                            Company
                          </th>
                          <th
                            onClick={() => {
                              requestSort("CompanyEmail");
                              setFilter(true);
                              if (filter) {
                                setFilter(false);
                              } else {
                                setFilter(true);
                              }
                            }}>
                            Email ID
                          </th>
                          <th
                            onClick={() => {
                              setFilter(true);
                              if (filter) {
                                setFilter(false);
                              } else {
                                setFilter(true);
                              }
                            }}>
                            Contact
                          </th>
                          <th
                            onClick={() => {
                              requestSort("Website");
                              setFilter(true);
                              if (filter) {
                                setFilter(false);
                              } else {
                                setFilter(true);
                              }
                            }}>
                            Website
                          </th>
                          <th>Subscription</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filter ? (
                          items.length === 0 ? (
                            <tr>
                              <td>
                                <p>Empty</p>
                              </td>
                            </tr>
                          ) : (
                            items.map((company, i) => {
                              return (
                                <tr key={i}>
                                  <td>{company.CompanyName}</td>
                                  <td>{company.CompanyEmail}</td>
                                  <td>{company.CompanyContact}</td>
                                  <td>
                                    <a href='https://toodecimal.com/'>
                                      {company.Website}
                                    </a>
                                  </td>
                                  <td>
                                    <label className='badge badge-success'>
                                      Active
                                    </label>
                                  </td>
                                  <td>
                                    {/* <button
                                            className="btn btn-dark btn-rounded"
                                            style={{
                                              padding: "10px",
                                              paddingLeft: "15px",
                                              paddingRight: "15px",
                                            }}
                                          >
                                            View
                                          </button> */}
                                    <button
                                      className='btn  btn-rounded btn-dark'
                                      style={{
                                        padding: "9px",
                                        marginRight: "5px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                      }}
                                      onClick={() => {
                                        history.push({
                                          pathname: "/edit-employer",
                                          state: company,
                                        });
                                      }}>
                                      Edit
                                    </button>
                                    <button
                                      className='btn  btn-rounded btn-danger'
                                      style={{
                                        padding: "9px",
                                      }}
                                      onClick={() => {
                                        confirmAlert({
                                          customUI: ({ onClose }) => {
                                            return (
                                              <ConfirmaDialog
                                                perform={() => {
                                                  deleteCompany(company._id);
                                                }}
                                                action='Block'
                                                role={company.CompanyName}
                                                close={onClose}
                                              />
                                            );
                                          },
                                        });
                                      }}>
                                      Block
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          )
                        ) : (
                          fItems.map((company, i) => {
                            return (
                              <tr key={i}>
                                <td>{company.CompanyName}</td>
                                <td>{company.CompanyEmail}</td>
                                <td>{company.CompanyContact}</td>
                                <td>
                                  <a href='https://toodecimal.com/'>
                                    {company.Website}
                                  </a>
                                </td>
                                <td>
                                  <label className='badge badge-success'>
                                    Active
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className='btn  btn-rounded btn-dark'
                                    style={{
                                      padding: "9px",
                                      marginRight: "5px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                    onClick={() => {
                                      history.push({
                                        pathname: "/edit-employer",
                                        state: company,
                                      });
                                    }}>
                                    Edit
                                  </button>
                                  <button
                                    className='btn  btn-rounded btn-danger'
                                    style={{
                                      padding: "9px",
                                    }}
                                    onClick={() => {
                                      confirmAlert({
                                        customUI: ({ onClose }) => {
                                          return (
                                            <ConfirmaDialog
                                              perform={() => {
                                                deleteCompany(company._id);
                                              }}
                                              action='Block'
                                              role={company.CompanyName}
                                              close={onClose}
                                            />
                                          );
                                        },
                                      });
                                    }}>
                                    Block
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                        {/* {props.companies.map((company) => {
                                return (
                                  <tr>
                                    <td>{company.Website}</td>
                                  </tr>
                                );
                              })} */}
                        {/* <tr>
                                <td>Edinburgh</td>
                                <td>New York</td>
                                <td>$1500</td>
                                <td>
                                  <a href="https://toodecimal.com/">
                                    www.toodecimal.com
                                  </a>
                                </td>
                                <td>
                                  <label className="badge badge-danger">
                                    Expired
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className="btn btn-dark btn-rounded"
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>Doe</td>
                                <td>Brazil</td>
                                <td>$4500</td>
                                <td>$7500</td>
                                <td>
                                  <label className="badge badge-success">
                                    Active
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className="btn btn-dark btn-rounded"
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                  >
                                    View
                                  </button>
                                </td>
                              </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer'>
          <div className='d-sm-flex justify-content-center justify-content-sm-between'>
            <span className='text-muted text-center text-sm-left d-block d-sm-inline-block'>
              Copyright © 2021{" "}
              <a
                href='https://www.toodecimal.com'
                rel='noreferrer'
                target='_blank'>
                Too Decimal
              </a>
              . All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Employers;
