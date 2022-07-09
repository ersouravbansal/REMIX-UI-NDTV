import { Link } from "@remix-run/react";
import { useState } from "react";
export default function SideNav({data, setData}) {
  return (
    <>
      {/*======[ Side nav Overlay ]======*/}
      <a href="#0" className="overlay__side-nav" />

      {/*======[ Side Navigation ]======*/}

      <div className="sid-nav" style={data}>
        <div className="sid-nav-wrp">
          <div className="m-nv m-nv_clr snv_cn-hed">
            {" "}
            <a
              className="sid-nav-cls"
              href="/#SideMenu"
              onClick={() => {
                setData({});
              }}
            >
              <svg className="snv_cn-icn  vj_icn vj_close">
                <use xlinkHref="#vj_close" />
              </svg>
            </a>
            {/* Right Icons Live Tv, Notification and Search */}
            <div className="fleft">
              {/*== Language dropdown icon==*/}
              <div className="tp_lng drp-trigger dd-nav_two">
                <div className="tp_lng-ttl drp-lnk">
                  <span className="brw-nav_wrp">
                    Language{" "}
                    <svg className="sub-nav_drp-icn vj_icn vj_arrow-down">
                      <use xlinkHref="#vj_arrow-down" />
                    </svg>
                  </span>
                </div>
                {/* Language dropdown content */}
                <div className="dd-nav">
                  <ul className="dd-nav_ul vjl-md-12">
                    <li className="drp_mnu-li drp_mnu-ttl">Select Languages</li>
                    <li className="dd-nav_li">
                      <a className="m-nv_lnk" href="#0">
                        हिंदी | Hindi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Bookmark */}
              <span className="t-icn-nv ttp">
                <svg className="vj_icn vj_bookmark-outline">
                  <use xlinkHref="#vj_bookmark-outline" />
                </svg>
                <div className="tip on-bottom">
                  <div className="tip_wrp">Bookmark</div>
                </div>
              </span>
              {/* Login / Signup */}
              <span className="t-icn-nv ttp">
                <svg className="vj_icn vj_login">
                  <use xlinkHref="#vj_login" />
                </svg>
                <div className="tip on-bottom">
                  <div className="tip_wrp">Login/Signup</div>
                </div>
              </span>
              {/* Notification Icon */}
              <span className="t-icn-nv t-icn-nt ttp">
                <svg className="vj_icn vj_bell bell">
                  <use xlinkHref="#vj_bell" />
                </svg>
                <div className="tip on-bottom">
                  <div className="tip_wrp">
                    News alerts are turned off.{" "}
                    <a className="ttp-lnk">Click here to turn on.</a>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="sid-nav_wrp">
            {/* Search Tittle */}
            <div className="sid-nav_li sid-nav_li-ttl">Search</div>
            {/* Search Field */}
            <form className="srh_inp-wrp" name="search">
              {" "}
              <span className="srh_inp-icn">
                <svg className="vj_icn vj_search">
                  <use xlinkHref="#vj_search" />
                </svg>
              </span>
              <input
                className="srh_inp"
                type="text"
                placeholder="Videos, Latest..."
                autoComplete="off"
              />
              <button type="submit" id="form-submit" className="srh_inp-btn">
                <svg className="vj_icn vj_arrow-next">
                  <use xlinkHref="#vj_arrow-next" />
                </svg>
              </button>
            </form>
            {/* Main Nav */}
            <ul className="sid-nav_ul">
              {/*                    <li class="sid-nav_li">
                                      <div class="sid-nav_li sid-nav_li-ttl">Featured Links</div>
                                       Sub Nav 
                                      <div class="sid-nav_div">
                                          <ul class="sid-nav_sub">
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">New Year 2021</a>
                                              </li>
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">Recipes</a>
                                              </li>
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">Recipe Videos</a>
                                              </li>
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">Home Remedies</a>
                                              </li>
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">Web Stories <span class="snv_cn-tg">NEW</span></a>
                                              </li>
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">Videos</a>
                                              </li>
                                              <li class="snv_cn-li"><a class="snv_cn-lnk ripple" href="#">Photos</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </li>*/}
              <li className="snv-two">
                <div className="sid-nav_li sid-nav_li-ttl">NDTV Beeps</div>
                <ul className="snv_cn-ul">
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      News
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Offbeat
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Khabar
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Entertainment
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Foos
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Auto
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Health
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Sports
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Swirlster
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Gadgets
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      World
                    </a>
                  </li>
                  <li className="snv_cn-li">
                    <a className="snv_cn-lnk ripple" href="#">
                      Profit
                    </a>
                  </li>
                </ul>
              </li>
              <li className="snv-two">
                <div className="sid-nav_li sid-nav_li-ttl">More from NDTV</div>
                <div className="snv-hrsrl">
                  <ul className="snv_cn-ul">
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        NDTV
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Business
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Hindi
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Movies
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Cricket
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Lifestyle
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Health
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Food
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Tech
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Auto
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Apps
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Trains
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Art
                      </a>
                    </li>
                    <li className="snv_cn-li">
                      {" "}
                      <a className="snv_cn-lnk ripple" href="#">
                        Weddings
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
