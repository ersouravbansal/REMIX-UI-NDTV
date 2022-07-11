import { Link } from "@remix-run/react";

export default function SubNav() {
    return (
      <>
   {/*====== Sub Navigation Widget ======*/}
   <div className="sub-nav disNn-sub-nav">
    <div className="vjl-cntr">
      <div className="vjl-row">
        {/* Featured */}
        <div className="vjl-md-12 m_pr-0" style={{ display: "flex" }}>
          <div className="sub-nav_lft drp-trigger dd-nav_two">
            <div className="sub-nav_txt drp-lnk sub-nav_act">
              All
              <div className="sub-nav_arw" />
            </div>
          </div>
          <div className="hr-scroll sub-nav_hr-scr">
            <ul className="hr-scroll__content sub-nv_ul">
              <li className="sub-nv_li m-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  News
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Offbeat
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Khabar
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Entertainment
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Food
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Auto
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Health
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Sports
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Swirlster
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Gadgets
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  World
                </a>
              </li>
              <li className="sub-nv_li">
                <a href="/#Sanskar" className="sub-nav_lnk">
                  Profit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

      </>
    
    )
}
