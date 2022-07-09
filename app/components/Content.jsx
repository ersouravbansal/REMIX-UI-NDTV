import { Link } from "@remix-run/react";


export default function Content() {
    return (
      <>
        {/*====== Content ( LHS, Main Content and RHS ) ======*/}
  <div className="content">
    <div className="vjl-cntr">
      <div className="vjl-row">
        {/*=== LHS ===*/}
        <div className="VdSup-col_Lft">
          <div className="VdSup-cat_wrp">
            <div className="VdSup-LhMnu">
              <div className="VdSup-LhMnu_cnt">
                <span className="VdSup-LhMnu_tl">Catogories</span>
                <div className="VdSup-LhMnu_wr">
                  <ul className="VdSup-LhMnu_ul">
                    <li className="VdSup-LhMnu_li">
                      <a
                        href="/#Sample1"
                        className="VdSup-LhMnu_lnk VdSup-LhMnu_lnk-act"
                      >
                        All
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        News
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Offbeat
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Khabar
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Entertainment
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Food
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Auto
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Health
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Sports
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Swirlster
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Gadgets
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        World
                      </a>
                    </li>
                    <li className="VdSup-LhMnu_li">
                      <a href="/#Sample1" className="VdSup-LhMnu_lnk">
                        Profit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* placeholder image */}
            </div>
          </div>
        </div>
        {/*=== Middle ===*/}
        <div className="VdSup-col_mid">
          <div className="VdSup-col_mid-wr">
            <div className="VdSup-Lst_sepr1" />
            {/*====== List Starts ======*/}
            <div id="FP_crd-js" className="VdSup-Lst_ul">
              {/*====== Videos Swipe-up ======*/}
              {/* Cards */}
              <div className="FP_crd1 fp-HAut" data-percentage={10}>
                <div className="VdSup-Lst_sepr" />
              </div>
              {/* List 1 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Entertainment
                  </div>
                  <div className="VdSup-Lst-a VdSup-Lst-act">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/7/1/1625136270-swtuyple/watermarked/540/PriyankaChopra'Finally'VisitedHerNewYorkRestaurant.OnTheMenuWas.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/7/1/1625136270-swtuyple/watermarked/540/PriyankaChopra'Finally'VisitedHerNewYorkRestaurant.OnTheMenuWas.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Priyanka Chopra "Finally" visited her New York
                            restaurant.
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 2 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    World
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/7/1/1625147730-aqcyfzed/watermarked/540/NDTV_LoudCheersForScientisthindi_002.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/7/1/1625147730-aqcyfzed/watermarked/540/NDTV_LoudCheersForScientisthindi_002.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #विंबलडन में कोरोना वैक्सीन के डेवलपर्स को देख लोगों
                            ने खड़े होकर बजाई ताली
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advertisement */}
              <div className="FP_crd1 VdSup-Lst_li VdSup-add_dxt-non">
                {/*====== Advertisement Mobile ======*/}
                <div className="VdSw-add_top-wrp-fl">
                  <div className="VdSw-add_top-placeholder add_Hig-aut">
                    {" "}
                    <span className="VdSw-add_top-txt">Advertisement</span>
                    <iframe
                      title="3rd party ad content"
                      name="google_ads_iframe_/1068322/NDTV_News_WAP_Homepage_320x50_ATF_0"
                      scrolling="no"
                      marginWidth={0}
                      marginHeight={0}
                      style={{ border: 0, verticalAlign: "bottom" }}
                      width={300}
                      height={250}
                      frameBorder={0}
                    />
                    {/* placeholder image */}
                    <img
                      src="https://tpc.googlesyndication.com/simgad/16376712540458270881"
                      alt="Advertisement"
                      style={{
                        position: "absolute",
                        top: 30,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 300
                      }}
                      width={300}
                      height={250}
                      border={0}
                    />
                  </div>
                </div>
              </div>
              {/* List 3 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Offbeat
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/5/7/1620394949-nbarstuf/watermarked/540/NDTV_Courteney%20Cox%20Celebrated%20Mexican%20Holiday_005.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/5/7/1620394949-nbarstuf/watermarked/540/NDTV_Courteney%20Cox%20Celebrated%20Mexican%20Holiday_005.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Courteney Cox
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 4 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Food
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/11/1623424310-wnkyuadv/watermarked/540/NDTV_5FoodsToAddVitaminsAndZinc_008.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/11/1623424310-wnkyuadv/watermarked/540/NDTV_5FoodsToAddVitaminsAndZinc_008.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advertisement */}
              <div className="FP_crd1 VdSup-Lst_li VdSup-add_hgt1 VdSup-add_dxt-non">
                {/*====== Advertisement Mobile ======*/}
                <div className="VdSw-add_top-wrp-fl">
                  <div className="VdSw-add_top-placeholder add_Hig-aut">
                    {" "}
                    <span className="VdSw-add_top-txt">Advertisement</span>
                    <iframe
                      title="3rd party ad content"
                      name="google_ads_iframe_/1068322/NDTV_News_WAP_Homepage_320x50_ATF_0"
                      scrolling="no"
                      marginWidth={0}
                      marginHeight={0}
                      style={{ border: 0, verticalAlign: "bottom" }}
                      width={300}
                      height={250}
                      frameBorder={0}
                    />
                    {/* placeholder image */}
                    <img
                      src="https://tpc.googlesyndication.com/simgad/16376712540458270881"
                      alt="Advertisement"
                      style={{
                        position: "absolute",
                        top: 30,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 300
                      }}
                      width={300}
                      height={250}
                      border={0}
                    />
                  </div>
                </div>
              </div>
              {/* List 5 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Khabar
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/7/1/1625141644-wnafijhx/watermarked/540/2NDTV_010721_%E0%A4%87%E0%A4%B8%E0%A4%AB%E0%A5%8D%E0%A4%B2%E0%A5%88%E0%A4%B6%E0%A4%AE%E0%A5%89%E0%A4%AC%E0%A4%A8%E0%A5%87%E0%A4%85%E0%A4%AA%E0%A4%A8%E0%A5%87%E0%A4%A1%E0%A4%BE%E0%A4%82%E0%A4%B8%E0%A4%AA%E0%A4%B0%E0%A4%AB%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A4%B8%E0%A5%87%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%BE%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82%E0%A4%95%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%B2,%E0%A4%B5%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A4%B2%E0%A4%B9%E0%A5%81%E0%A4%86%E0%A4%B5%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A5%8B_Hindi_V1.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/7/1/1625141644-wnafijhx/watermarked/540/2NDTV_010721_%E0%A4%87%E0%A4%B8%E0%A4%AB%E0%A5%8D%E0%A4%B2%E0%A5%88%E0%A4%B6%E0%A4%AE%E0%A5%89%E0%A4%AC%E0%A4%A8%E0%A5%87%E0%A4%85%E0%A4%AA%E0%A4%A8%E0%A5%87%E0%A4%A1%E0%A4%BE%E0%A4%82%E0%A4%B8%E0%A4%AA%E0%A4%B0%E0%A4%AB%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A4%B8%E0%A5%87%E0%A4%9C%E0%A5%80%E0%A4%A4%E0%A4%BE%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B%E0%A4%82%E0%A4%95%E0%A4%BE%E0%A4%A6%E0%A4%BF%E0%A4%B2,%E0%A4%B5%E0%A4%BE%E0%A4%AF%E0%A4%B0%E0%A4%B2%E0%A4%B9%E0%A5%81%E0%A4%86%E0%A4%B5%E0%A5%80%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A5%8B_Hindi_V1.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 6 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Sports
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/25/1624621235-qbzdlprx/watermarked/540/55NDTV_250621_WillBeLookingLikeSalmanKhanEx-EnglandPacerOnChahal'sGymPost_V2.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/25/1624621235-qbzdlprx/watermarked/540/55NDTV_250621_WillBeLookingLikeSalmanKhanEx-EnglandPacerOnChahal'sGymPost_V2.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 7 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Gadget
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/29/1624967424-rufzcagm/watermarked/540/Credit_DebitCardsCouldBeTheNextVictimOfAGlobalChipShortage.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/29/1624967424-rufzcagm/watermarked/540/Credit_DebitCardsCouldBeTheNextVictimOfAGlobalChipShortage.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 8 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Auto
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/16/1623841721-zdeaorvm/watermarked/540/Reuters_130621_Russia%E2%80%99sSberbankunitunveilsself-drivingvehicleFLIP_V1-_3.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/16/1623841721-zdeaorvm/watermarked/540/Reuters_130621_Russia%E2%80%99sSberbankunitunveilsself-drivingvehicleFLIP_V1-_3.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 9 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Profit
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/17/1623940587-xcmtnvlb/watermarked/540/GOLDHASTOBEHALLMARKEDFROMTODAY-WHATTHISMEANSFORYOU.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/17/1623940587-xcmtnvlb/watermarked/540/GOLDHASTOBEHALLMARKEDFROMTODAY-WHATTHISMEANSFORYOU.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 10 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Swirlster
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/24/1624544231-gwujzyqr/watermarked/540/52NDTV_240621_OnlyUrvashiRautelaCanAddHerTouchOfGlamToAVibrantPatolaSaree_V2.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/24/1624544231-gwujzyqr/watermarked/540/52NDTV_240621_OnlyUrvashiRautelaCanAddHerTouchOfGlamToAVibrantPatolaSaree_V2.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 11 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    World
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/5/31/1622442056-mvwchroq/watermarked/540/Reuters_29_05_21_Skiers%20spot%20slow-moving%20avalanche%20in%20UK_v1-_1.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/5/31/1622442056-mvwchroq/watermarked/540/Reuters_29_05_21_Skiers%20spot%20slow-moving%20avalanche%20in%20UK_v1-_1.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* List 12 */}
              <div className="FP_crd1 VdSup-Lst_li">
                <div className="VdSup-Lst-crd">
                  <div className="VdSup-Lst-bg-cat">NDTV BEEPS</div>
                  <div className="VdSup-Lst-bg-cat VdSup-Lst-bg-cat-rt">
                    Offbeat
                  </div>
                  <div className="VdSup-Lst-a">
                    <div className="VdSup-Lst_vd-wr">
                      <a className="VdSup-Lst_img" href="/#Sample1">
                        <div className="img-gr">
                          <video data-autoplay="">
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/18/1624016676-peahfdxv/watermarked/540/NDTV_0617_BabyDeerVisitsDogWhoSavedItFromDrowning.We'reNotCrying,YouAreRevised.mp4"
                              type="video/mp4"
                            />
                            <source
                              src="https://cdn4.fireworktv.com/medias/2021/6/18/1624016676-peahfdxv/watermarked/540/NDTV_0617_BabyDeerVisitsDogWhoSavedItFromDrowning.We'reNotCrying,YouAreRevised.mp4"
                              type="video/ogg"
                            />
                          </video>
                        </div>
                      </a>
                    </div>
                    <div className="VdSup-Lst_txt-wrp">
                      {/* Post Tags */}
                      <div className="VdSup-Lst_bt">
                        <div className="VdSup-lst_Htx">
                          <a
                            className="VdSup-lst_Htx-tx"
                            href="/#Sample1"
                          >
                            #Around the world
                          </a>
                          {/*<div class="VdSup-lst_Htx-aup">
                                                  <svg class="vj_icn vj_arrow-up VdSup-lst_Htx-aup-ic">
                                                  <use xlink:href="#vj_arrow-up"></use>
                                                  </svg>
                                              </div>*/}
                        </div>
                        {/* Social share */}
                        <div className="crd_shr">
                          <svg className="vj_icn vj_share">
                            <use xlinkHref="#vj_share" />
                          </svg>
                          <div className="crd_shr-ss">
                            <div className="crd_shr-pg">
                              <a href="#" className="crd_shr-lk facebook ttp">
                                <svg className="vj_icn vj_facebook-fill">
                                  <use xlinkHref="#vj_facebook-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">facebook</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk twitter ttp">
                                <svg className="vj_icn vj_twitter-fill">
                                  <use xlinkHref="#vj_twitter-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">twitter</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk whatsapp ttp">
                                <svg className="vj_icn vj_whatsapp-fill">
                                  <use xlinkHref="#vj_whatsapp-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">whatsapp</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk reddit ttp">
                                <svg className="vj_icn vj_reddit-fill">
                                  <use xlinkHref="#vj_reddit-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">reddit</div>
                                </div>
                              </a>
                              <a href="#" className="crd_shr-lk snapchat ttp">
                                <svg className="vj_icn vj_snapchat-fill">
                                  <use xlinkHref="#vj_snapchat-fill" />
                                </svg>
                                <div className="tip on-bottom">
                                  <div className="tip_wrp">Snapchat</div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="VdSup-Lst_Ic-cmt cmt-ac"
                          href="/#Sample1"
                        >
                          <svg className="vj_icn vj_comment VdSup-Lst_Ic-cmt-svg">
                            <use xlinkHref="#vj_comment" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Load more and Loader */}
              <div className="FP_crd1 VdSup-Lst_lodr">
                {/* Load more button */}
                <div className="VdSup-Btn_ctr">
                  <a className="btn_bm" href="#">
                    Load more{" "}
                    <svg className="vj_icn vj_arrow-down">
                      <use xlinkHref="#vj_arrow-down" />
                    </svg>
                  </a>
                </div>
                {/* Loader */}
                <div className="lodr_wrp">
                  <div className="lodr_dot" />
                  <div className="lodr_dot" />
                  <div className="lodr_dot" />
                </div>
              </div>
              {/* List */}
              <div className="FP_crd1 VdSup-Lst_l">
                <div className="intro">
                  {/*====== Footer ======*/}
                  <footer className="ftr" id="footer">
                    <div className="vjl-cntr">
                      <div className="vjl-row">
                        <div className="vjl-sm-12 vjl-md-12">
                          <div className="ftr_wrp">
                            <div className="ftr_lst-txt">
                              All content on this page are managed by a third
                              party. NDTV does not have any control over the
                              content made available on this page and shall not
                              be liable for any claim(s) made by any person or
                              entity, including any statutory or governmental
                              authority arising out of such content.
                            </div>
                          </div>
                          <div className="ftr-bt-wrp">
                            {/* Footer Bottom Link */}
                            <ul className="ftr_bt-nv">
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  About Us
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Advertise
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Archives
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Apps
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Careers
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Channels
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Disclaimer
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Feedback
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Disclaimer
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Investors
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Redressals
                                </a>
                              </li>
                              <li className="ftr_bt-nv-li">
                                <a
                                  className="ftr_bt-nv-lnk"
                                  href="/#Sample2"
                                >
                                  Service Terms
                                </a>
                              </li>
                            </ul>
                            {/* Copyright */}
                            <div className="ftr_cpy">
                              © COPYRIGHT NDTV CONVERGENCE LIMITED 2022. ALL
                              RIGHTS RESERVED.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== RHS ===*/}
        <div className="VdSup-col_Rht">
          <div className="VdSup-Rht_wrp">
            <div className="add_top-wrp-in">
              <div
                className="add_top-placeholder add_Hig-aut"
                style={{
                  /* height: 600, */ borderRadius: 8,
                  padding: "0 0 4px"
                }}
              >
                {" "}
                <span className="add_top-txt">Advertisement</span>
                <div className="add_mn250h">
                  <iframe
                    title="3rd party ad content"
                    name="google_ads_iframe_/1068322/NDTV_News_WAP_Homepage_320x50_ATF_0"
                    scrolling="no"
                    marginWidth={0}
                    marginHeight={0}
                    style={{ border: 0, verticalAlign: "bottom" }}
                    width={300}
                    height={610}
                    frameBorder={0}
                  />
                </div>
              </div>
              {/* placeholder image */}
              <img
                src="images/banner-300x600.jpg"
                alt="Advertisement"
                style={{
                  position: "absolute",
                  top: 31,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 300
                }}
                width={300}
                border={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      </>
      
      )
    }
