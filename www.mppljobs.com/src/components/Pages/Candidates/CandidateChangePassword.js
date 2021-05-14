import React from "react";

const CandidateChangePassword = () => {
  return (
    <div class="col-lg-9 column">
      <div class="padding-left">
        <div class="manage-jobs-sec">
          <h3>Change Password</h3>
          <div class="change-password">
            <form>
              <div class="row">
                <div class="col-lg-6">
                  <span class="pf-title">Old Password</span>
                  <div class="pf-field">
                    <input type="password" />
                  </div>
                  <span class="pf-title">New Password</span>
                  <div class="pf-field">
                    <input type="password" />
                  </div>
                  <span class="pf-title">Confirm Password</span>
                  <div class="pf-field">
                    <input type="password" />
                  </div>
                  <button type="submit">Update</button>
                </div>
                <div class="col-lg-6">
                  <i class="la la-key big-icon"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateChangePassword;
