/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteNotesById,
  getAllNotes,
  URL,
} from "../../../actions/adminActions";
import Modal from "react-responsive-modal";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import ConfirmaDialog from "../Jobs/ConfirmaDialog";

import { CSVLink } from "react-csv";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import makeToast from "../../../Toaster";
import { confirmAlert } from "react-confirm-alert";

const useFilterData = (fItems, config = null) => {
  const [filterConfig, setFilterConfig] = useState(config);

  const filterItems = useMemo(() => {
    let filterableItems = fItems && [...fItems];
    if (filterConfig !== null) {
      filterableItems = filterableItems.filter((note) => {
        if (
          note.fileName.includes(filterConfig.key) ||
          note.fileAuthor.includes(filterConfig.key) ||
          note.file.includes(filterConfig.key)
        ) {
          return note;
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

const Notes = () => {
  const [arr, setNotes] = useState([]);
  const getNotes = async () => {
    try {
      const res = await axios.get(
        URL + "/api/notes/users/" + pageNo + "/" + perPage
      );

      if (res.data.notes) {
        await setNotes(res.data.notes);
      }
      // setPage(Math.ceil(res.data.length / 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  const { items, requestSort, sortCoonfig } = useSortableData(arr);
  const history = useHistory();
  const { fItems, requestFilter, filterConfig } = useFilterData(arr);

  const [perPage, setPerPage] = useState("10");
  const [pageNo, setPageNo] = useState("1");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [numberFilter, setNumberFilter] = useState("");

  // const [src, SetSrc] = useState();
  // const [open, SetOpen] = useState(false);

  const [filter, setFilter] = useState(false);

  const [allNotes, setAllNotes] = useState([]);

  const gettingAllNotes = async () => {
    try {
      const notes = await getAllNotes();
      await setAllNotes(notes);
    } catch (error) {
      console.log(error);
    }
  };

  // const preview = async (event, note) => {
  //   try {
  //     const res = await axios.get(note);
  //     SetSrc(note);
  //     SetOpen(true);
  //   } catch (error) {
  //     makeToast("error", error.message);
  //     console.log(error.message);
  //   }
  // };

  const deleteNote = async (id) => {
    try {
      const deletedNote = await deleteNotesById(id);

      if (deletedNote) {
        await setNotes((prevState) => {
          return prevState.filter((note) => {
            return note._id !== id;
          });
        });
      }
      await gettingAllNotes();
      await getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingAllNotes();
    return () => {};
  }, []);

  useEffect(() => {
    getNotes();
    return () => {};
  }, [pageNo]);

  useEffect(() => {
    if (nameFilter !== "" || emailFilter !== "" || numberFilter !== "") {
      setFilter(true);
    } else {
      setFilter(false);
    }
    return () => {};
  }, [nameFilter, emailFilter, numberFilter]);

  const [selectedDoc, setDoc] = useState("");
  const [open, setOpen] = useState(false);

  const onOpenModal = (noteUrl) => {
    setDoc(noteUrl);
    setOpen(true);
  };

  const onCloseModal = () => {
    setDoc("");
    setOpen(false);
  };

  return (
    <div>
      <div>
        <div className='main-panel'>
          <div className='content-wrapper'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>Notes</h4>
                {/*<CSVLink
                      data={props.notes}
                      filename={"Notes_" + Date.now() + ".csv"}
                      classNameName='btn btn-primary btn-rounded btn-fw'
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
                      placeholder='Title'
                      value={nameFilter}
                      onChange={(e) => {
                        setNameFilter(e.target.value);
                        requestFilter(e.target.value);
                      }}></input>
                    <input
                      type='text'
                      className='form-control col-sm-2'
                      placeholder='Author'
                      value={emailFilter}
                      onChange={(e) => {
                        setEmailFilter(e.target.value);
                        requestFilter(e.target.value);
                      }}></input>
                    <input
                      type='text'
                      className='form-control col-sm-2'
                      placeholder='File'
                      value={numberFilter}
                      onChange={(e) => {
                        setNumberFilter(e.target.value);
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
                        count={Math.ceil(allNotes && allNotes.length / 10)}
                        onChange={(e, page) => {
                          setPageNo(page);
                        }}
                      />
                      <table className='table' style={{ textAlign: "center" }}>
                        <thead>
                          <tr>
                            <th
                              onClick={() => {
                                requestSort("fileName");
                                setFilter(true);
                                if (filter) {
                                  setFilter(false);
                                } else {
                                  setFilter(true);
                                }
                              }}>
                              Title
                            </th>
                            <th
                              onClick={() => {
                                requestSort("fileAuthor");
                                setFilter(true);
                                if (filter) {
                                  setFilter(false);
                                } else {
                                  setFilter(true);
                                }
                              }}>
                              Author
                            </th>
                            <th
                              style={{ textAlign: "center" }}
                              onClick={() => {
                                requestSort("file");
                                setFilter(true);
                                if (filter) {
                                  setFilter(false);
                                } else {
                                  setFilter(true);
                                }
                              }}>
                              File
                            </th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filter ? (
                            items === undefined || items.length === 0 ? (
                              <tr>
                                <td>
                                  <p>Empty</p>
                                </td>
                              </tr>
                            ) : (
                              items &&
                              items.map((note, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{note.fileName}</td>
                                    <td>{note.fileAuthor}</td>
                                    <td>
                                      {/* <a
                                        href={note.file}
                                        className='btn btn-primary btn-rounded'
                                        style={{
                                          padding: "12px",
                                          paddingLeft: "15px",
                                          paddingRight: "15px",
                                          marginRight: "10px",
                                        }}
                                        download>
                                        Download
                                      </a>*/}
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          onOpenModal(note.file);
                                        }}
                                        className='btn btn-primary btn-rounded'
                                        style={{
                                          padding: "12px",
                                          paddingLeft: "15px",
                                          paddingRight: "15px",
                                        }}>
                                        Preview
                                      </button>
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
                                            pathname: "/edit-notes",
                                            state: note,
                                          });
                                        }}>
                                        Edit
                                      </button>
                                      <button
                                        className='btn  btn-rounded btn-danger'
                                        style={{
                                          padding: "9px",
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                        }}
                                        onClick={() => {
                                          confirmAlert({
                                            customUI: ({ onClose }) => {
                                              return (
                                                <ConfirmaDialog
                                                  perform={() => {
                                                    deleteNote(note._id);
                                                  }}
                                                  action='Delete'
                                                  role={note.fileName}
                                                  close={onClose}
                                                />
                                              );
                                            },
                                          });
                                        }}>
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })
                            )
                          ) : (
                            fItems &&
                            fItems.map((note, i) => {
                              return (
                                <tr key={i}>
                                  <td>{note.fileName}</td>
                                  <td>{note.fileAuthor}</td>
                                  <td>
                                    {/*<a
                                      href={note.file}
                                      className='btn btn-primary btn-rounded'
                                      style={{
                                        padding: "12px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                        marginRight: "10px",
                                      }}
                                      download>
                                      Download
                                    </a>*/}
                                    <button
                                      className='btn btn-primary btn-rounded'
                                      style={{
                                        padding: "12px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                      }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        onOpenModal(note.file);
                                      }}>
                                      Preview
                                    </button>
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
                                          pathname: "/edit-notes",
                                          state: note,
                                        });
                                      }}>
                                      Edit
                                    </button>
                                    <button
                                      className='btn  btn-rounded btn-danger'
                                      style={{
                                        padding: "9px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                      onClick={() => {
                                        confirmAlert({
                                          customUI: ({ onClose }) => {
                                            return (
                                              <ConfirmaDialog
                                                perform={() => {
                                                  deleteNote(note._id);
                                                }}
                                                action='Delete'
                                                role={note.fileName}
                                                close={onClose}
                                              />
                                            );
                                          },
                                        });
                                      }}>
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                          {/* <tr>
                                <td>New York</td>
                                <td>$1500</td>
                                <td>
                                  <button
                                    className="btn btn-primary btn-rounded"
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                  >
                                    Download
                                  </button>
                                </td>
                                <td>
                                  <a href="/edit-notes">
                                    <button
                                      className="btn  btn-rounded btn-dark"
                                      style={{
                                        padding: "9px",
                                        marginRight: "5px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      Edit
                                    </button>
                                  </a>
                                  <button
                                    className="btn  btn-rounded btn-danger"
                                    style={{
                                      padding: "9px",
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>Brazil</td>
                                <td>$4500</td>
                                <td>
                                  <button
                                    className="btn btn-primary btn-rounded"
                                    style={{
                                      padding: "10px",
                                      paddingLeft: "15px",
                                      paddingRight: "15px",
                                    }}
                                  >
                                    Download
                                  </button>
                                </td>
                                <td>
                                  <a href="/edit-notes">
                                    <button
                                      className="btn  btn-rounded btn-dark"
                                      style={{
                                        padding: "9px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                        marginRight: "5px",
                                      }}
                                    >
                                      Edit
                                    </button>
                                  </a>
                                  <button
                                    className="btn  btn-rounded btn-danger"
                                    style={{
                                      padding: "9px",
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                  >
                                    Delete
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
            {/*} {open && (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
              className='frame'
              src={src}
              style={{ width: "100%", height: "80%" }}
            />
         )} */}
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
      <Modal open={open} onClose={onCloseModal} center>
        <DocViewer
          style={{ height: 400, width: 400 }}
          pluginRenderers={DocViewerRenderers}
          documents={[{ uri: selectedDoc }]}></DocViewer>
      </Modal>
    </div>
  );
};

export default Notes;
