import { Link } from "@remix-run/react";
export default function TopMenu() {
    return (
      <>
        {/*====== Top Menu, Advertisement & Social share ======*/}
  <header className="header clearfix">
    <div className="t-br">
      <div className="vjl-cntr">
        <div className="vjl-row">
          <div className="vjl-md-12">
            {/* Top Menu */}
            <nav className="t-nv_lf">
              <ul className="t-nv_ul">
                <li className="t-nv_li">
                  <a className="t-nv_lnk" title="NDTV" href="home-ndtv.html">
                    NDTV
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Business"
                    href="http://profit.ndtv.com/"
                  >
                    Business
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Hindi"
                    href="https://khabar.ndtv.com/"
                  >
                    Hindi
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Movies"
                    href="http://movies.ndtv.com/"
                  >
                    Movies
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Cricket"
                    href="https://sports.ndtv.com/cricket"
                  >
                    Cricket
                  </a>
                </li>
                <li className="t-nv_li">
                  <a className="t-nv_lnk" href="https://swirlster.ndtv.com">
                    Lifestyle
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Health"
                    href="http://doctor.ndtv.com/"
                  >
                    Health
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk t-nv_act"
                    title="Food"
                    href="index-food.html"
                  >
                    Food
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Tech"
                    href="http://gadgets.ndtv.com/"
                  >
                    Tech
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Auto"
                    href="http://auto.ndtv.com"
                  >
                    Auto
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Apps"
                    href="https://www.ndtv.com/page/apps/"
                  >
                    Apps
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Trains"
                    href="https://www.railbeeps.com"
                  >
                    Trains
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Art"
                    href="https://www.mojarto.com"
                  >
                    Art
                  </a>
                </li>
                <li className="t-nv_li">
                  <a
                    className="t-nv_lnk"
                    title="Weddings"
                    href="http://www.bandbaajaa.com"
                  >
                    Weddings
                  </a>
                </li>
              </ul>
            </nav>
            {/* Social share */}
            <div className="fright">
              <a className="sig_btn" href="#">
                Signup
              </a>
              <a className="log_btn" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Top Advertisement ======*/}
    <div className="t-md">
      <div className="vjl-cntr">
        <div className="vjl-row">
          <div className="vjl-md-12">
            <div className="ad-dx_wrp">
              <div className="ad-dx_img">
                <img
                  src="https://tpc.googlesyndication.com/simgad/927333225985893561"
                  alt=""
                  width={728}
                  height={90}
                  border={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

      </>
    
    )
}