import React from "react";
import ResponsiveHeader from "../../Navbar/ResponsiveHeader";
import StickTop from "../../Navbar/StickTop";
import Footer from "../../Footer/Footer";
import Login from "../../Models/Login";
import Signup from "../../Models/Signup";
import { Helmet } from "react-helmet";
const Title = "Notes";

const NotesList = () => {
  return (
    <div>
      {/* <div class="page-loading">
        <img src="./images/loader.gif" alt="" />
      </div> */}
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <div class="theme-layout" id="scrollup">
        <ResponsiveHeader />
        <StickTop />

        <section class="overlape">
          <div class="block no-padding">
            <div
              data-velocity="-.1"
              style={{
                background:
                  "url(images/resource/mslider1.jpg) repeat scroll 50% 422.28px transparent",
              }}
              class="parallax scrolly-invisible no-parallax"
            ></div>
            <div class="container fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="inner-header wform">
                    <div class="job-search-sec">
                      <div class="job-search">
                        <h4>Notes List</h4>
                        <form>
                          <div class="row">
                            <div class="col-lg-7">
                              <div class="job-field">
                                <input
                                  type="text"
                                  placeholder="Job title, keywords or company name"
                                />
                                <i class="la la-keyboard-o"></i>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="job-field">
                                <select
                                  data-placeholder="City, province or region"
                                  class="chosen-city"
                                >
                                  <option>Instambul</option>
                                  <option>New York</option>
                                  <option>London</option>
                                  <option>Russia</option>
                                </select>
                                <i class="la la-map-marker"></i>
                              </div>
                            </div>
                            <div class="col-lg-1">
                              <button type="submit">
                                <i class="la la-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                        <div class="tags-bar">
                          <span>
                            Full Time<i class="close-tag">x</i>
                          </span>
                          <span>
                            UX/UI Design<i class="close-tag">x</i>
                          </span>
                          <span>
                            Istanbul<i class="close-tag">x</i>
                          </span>
                          <div class="action-tags">
                            <a href="#" title="">
                              <i class="la la-cloud-download"></i> Save
                            </a>
                            <a href="#" title="">
                              <i class="la la-trash-o"></i> Clean
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="block remove-top">
            <div class="container">
              <div class="row no-gape">
                <aside class="col-lg-3 column">
                  <div class="widget border">
                    <h3 class="sb-title open">Date Posted</h3>
                    <div class="posted_widget">
                      <input type="radio" name="choose" id="232" />
                      <label for="232">Last Hour</label>
                      <br />
                      <input type="radio" name="choose" id="wwqe" />
                      <label for="wwqe">Last 24 hours</label>
                      <br />
                      <input type="radio" name="choose" id="erewr" />
                      <label for="erewr">Last 7 days</label>
                      <br />
                      <input type="radio" name="choose" id="qwe" />
                      <label for="qwe">Last 14 days</label>
                      <br />
                      <input type="radio" name="choose" id="wqe" />
                      <label for="wqe">Last 30 days</label>
                      <br />
                      <input type="radio" name="choose" id="qweqw" />
                      <label class="nm" for="qweqw">
                        All
                      </label>
                      <br />
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title open">Job Type</h3>
                    <div class="type_widget">
                      <p class="flchek">
                        <input type="checkbox" name="choosetype" id="33r" />
                        <label for="33r">Freelance (9)</label>
                      </p>
                      <p class="ftchek">
                        <input type="checkbox" name="choosetype" id="dsf" />
                        <label for="dsf">Full Time (8)</label>
                      </p>
                      <p class="ischek">
                        <input type="checkbox" name="choosetype" id="sdd" />
                        <label for="sdd">Internship (8)</label>
                      </p>
                      <p class="ptchek">
                        <input type="checkbox" name="choosetype" id="sadd" />
                        <label for="sadd">Part Time (5)</label>
                      </p>
                      <p class="tpchek">
                        <input type="checkbox" name="choosetype" id="assa" />
                        <label for="assa">Temporary (5)</label>
                      </p>
                      <p class="vtchek">
                        <input type="checkbox" name="choosetype" id="ghgf" />
                        <label for="ghgf">Volunteer (8)</label>
                      </p>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title open">Specialism</h3>
                    <div class="specialism_widget">
                      <div class="field_w_search">
                        <input type="text" placeholder="Search Spaecialisms" />
                      </div>
                      <div class="simple-checkbox scrollbar">
                        <p>
                          <input type="checkbox" name="spealism" id="as" />
                          <label for="as">Accountancy (2)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="asd" />
                          <label for="asd">Banking (2)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="errwe" />
                          <label for="errwe">Charity & Voluntary (3)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="fdg" />
                          <label for="fdg">Digital & Creative (4)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="sc" />
                          <label for="sc">Estate Agency (3)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="aw" />
                          <label for="aw">Graduate (2)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="ui" />
                          <label for="ui">IT Contractor (7)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="saas" />
                          <label for="saas">Charity & Voluntary (3)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="rrrt" />
                          <label for="rrrt">Digital & Creative (4)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="eweew" />
                          <label for="eweew">Estate Agency (3)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="bnbn" />
                          <label for="bnbn">Graduate (2)</label>
                        </p>
                        <p>
                          <input type="checkbox" name="spealism" id="ffd" />
                          <label for="ffd">IT Contractor (7)</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title closed">Offerd Salary</h3>
                    <div class="specialism_widget">
                      <div class="simple-checkbox">
                        <p>
                          <input type="checkbox" name="smplechk" id="1" />
                          <label for="1">10k - 20k</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="2" />
                          <label for="2">20k - 30k</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="3" />
                          <label for="3">30k - 40k</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="4" />
                          <label for="4">40k - 50k</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title closed">Career Level</h3>
                    <div class="specialism_widget">
                      <div class="simple-checkbox">
                        <p>
                          <input type="checkbox" name="smplechk" id="5" />
                          <label for="5">Intermediate</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="6" />
                          <label for="6">Normal</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="7" />
                          <label for="7">Special</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="8" />
                          <label for="8">Experienced</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title closed">Experince</h3>
                    <div class="specialism_widget">
                      <div class="simple-checkbox">
                        <p>
                          <input type="checkbox" name="smplechk" id="9" />
                          <label for="9">1Year to 2Year</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="10" />
                          <label for="10">2Year to 3Year</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="11" />
                          <label for="11">3Year to 4Year</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="12" />
                          <label for="12">4Year to 5Year</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title closed">Gender</h3>
                    <div class="specialism_widget">
                      <div class="simple-checkbox">
                        <p>
                          <input type="checkbox" name="smplechk" id="13" />
                          <label for="13">Male</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="14" />
                          <label for="14">Female</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="15" />
                          <label for="15">Others</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title closed">Industry</h3>
                    <div class="specialism_widget">
                      <div class="simple-checkbox">
                        <p>
                          <input type="checkbox" name="smplechk" id="16" />
                          <label for="16">Meezan Job</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="17" />
                          <label for="17">Speicalize Jobs</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="18" />
                          <label for="18">Business Jobs</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="widget border">
                    <h3 class="sb-title closed">Qualification</h3>
                    <div class="specialism_widget">
                      <div class="simple-checkbox">
                        <p>
                          <input type="checkbox" name="smplechk" id="19" />
                          <label for="19">Matriculation</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="20" />
                          <label for="20">Intermidiate</label>
                        </p>
                        <p>
                          <input type="checkbox" name="smplechk" id="21" />
                          <label for="21">Gradute</label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="banner_widget">
                    <a href="#" title="">
                      <img src="images/resource/banner.png" alt="" />
                    </a>
                  </div>
                </aside>
                <div class="col-lg-9 column">
                  <div class="modrn-joblist np">
                    <div class="filterbar">
                      <span class="emlthis">
                        <a
                          href="https://grandetest.com/cdn-cgi/l/email-protection#6e0b160f031e020b400d0103"
                          title=""
                        >
                          <i class="la la-envelope-o"></i> Email me Jobs Like
                          These
                        </a>
                      </span>
                      <div class="sortby-sec">
                        <span>Sort by</span>
                        <select data-placeholder="Most Recent" class="chosen">
                          <option>Most Recent</option>
                          <option>Most Recent</option>
                          <option>Most Recent</option>
                          <option>Most Recent</option>
                        </select>
                        <select data-placeholder="20 Per Page" class="chosen">
                          <option>30 Per Page</option>
                          <option>40 Per Page</option>
                          <option>50 Per Page</option>
                          <option>60 Per Page</option>
                        </select>
                      </div>
                      <h5>98 Jobs & Vacancies</h5>
                    </div>
                  </div>
                  <div class="job-list-modern">
                    <div class="job-listings-sec no-border">
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l1.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Web Designer / Developer
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is ft">Full time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l2.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              C Developer (Senior) C .Net
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is pt ">Part time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l3.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Regional Sales Manager South
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is ft ">Full time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l4.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Marketing Dairector
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is ft ">Full time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l5.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Application Developer
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is pt ">Part time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l6.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Social Media and Public
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is fl ">Freelance</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l2.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              C Developer (Senior) C .Net
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is pt ">Part time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l3.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Regional Sales Manager South
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is ft ">Full time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l4.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Marketing Dairector
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is ft ">Full time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                      <div class="job-listing wtabs">
                        <div class="job-title-sec">
                          <div class="c-logo">
                            {" "}
                            <img src="images/resource/l5.png" alt="" />{" "}
                          </div>
                          <h3>
                            <a href="#" title="">
                              Application Developer
                            </a>
                          </h3>
                          <span>Massimo Artemisis</span>
                          <div class="job-lctn">
                            <i class="la la-map-marker"></i>Sacramento,
                            California
                          </div>
                        </div>
                        <div class="job-style-bx">
                          <span class="job-is pt ">Part time</span>
                          <span class="fav-job">
                            <i class="la la-heart-o"></i>
                          </span>
                          <i>5 months ago</i>
                        </div>
                      </div>
                    </div>
                    <div class="pagination">
                      <ul>
                        <li class="prev">
                          <a href="#">
                            <i class="la la-long-arrow-left"></i> Prev
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li class="active">
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <span class="delimeter">...</span>
                        </li>
                        <li>
                          <a href="#">14</a>
                        </li>
                        <li class="next">
                          <a href="#">
                            Next <i class="la la-long-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default NotesList;