import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <React.Fragment>
      <header>
        <div class="profile-page sidebar-collapse">
          <nav
            class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
            color-on-scroll="400"
          >
            <div class="container">
              <div class="navbar-translate">
                <a class="navbar-brand " href="" rel="tooltip">
                  <i class="fa fa-heartbeat fa-2x" aria-hidden="true"></i>
                  iDoctor PWA
                </a>
                <button
                  class="navbar-toggler navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-bar bar1"></span>
                  <span class="navbar-toggler-bar bar2"></span>
                  <span class="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                  <Link to ="/landing">sign in</Link>
                  </li>
                  <li class="nav-item">
                    <Link to ="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link smooth-scroll" href="#">
                      Emergency
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div class="page-content">
        <div>
          <div class="profile-page">
            <div class="wrapper">
              <div class="page-header page-header-small" filter-color="green">
                <div
                  class="page-header-image"
                  data-parallax="true"
                  
                ></div>
                <div class="container"></div>
              </div>
            </div>
          </div>
          <div class="section" id="about">
            <div class="container">
              <div class="row">
                <div class="card" data-aos="fade-up" data-aos-offset="10">
                  <div class="col-md-6">
                    <div class="col-lg-6 col-md-12">
                      <div class="card-body">
                        <div class="h4 mt-0 title">Emergency Contacts</div>
                        <div class="row">
                          <div class="col-sm-4">
                            <strong class="text-uppercase">
                              AGAKHAN NAKURU &nbsp;
                            </strong>
                          </div>
                          <div class="col-sm-8"> 0722-234654</div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-sm-4">
                            <strong class="text-uppercase">
                              NAIROBI &nbsp;
                            </strong>
                          </div>
                          <div class="col-sm-8">0722-234654 </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-sm-4">
                            <strong class="text-uppercase">
                              MEDIHEAL NAIROBI &nbsp;
                            </strong>
                          </div>
                          <div class="col-sm-8"> +254727880227 </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-sm-4">
                            <strong class="text-uppercase">
                              KENYATTA NATIONAL&nbsp;{" "}
                            </strong>
                          </div>
                          <div class="col-sm-8"> 0722-234654 </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card" data-aos="fade-up" data-aos-offset="10">
                  <div class="col-md-6">
                    <div class="col-lg-6 col-md-12">
                      <div class="card-body">
                        <div class="h4 mt-0 title">
                          Sign in For other services
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <strong class="text-uppercase"></strong>
                          </div>
                          <div class="col-sm-8">
                            <a href="views/log">
                              <button class="btn btn-button">Sign In</button>
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
        </div>
      </div>
      <footer class="footer">
        <div class="h4 title text-center">&copy; Copyright 2021: iDoctor</div>
        <div class="text-center text-muted"></div>
      </footer>
      <script src="js/core/jquery.3.2.1.min.js?ver=1.1.0"></script>
      <script src="js/core/popper.min.js?ver=1.1.0"></script>
      <script src="js/core/bootstrap.min.js?ver=1.1.0"></script>
      <script src="js/now-ui-kit.js?ver=1.1.0"></script>
      <script src="js/aos.js?ver=1.1.0"></script>
      <script src="scripts/main.js?ver=1.1.0"></script>
    </React.Fragment>
  );
}
