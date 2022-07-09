import { Link } from "@remix-run/react";

export default function Comment() {
    return (
      <>
  {/*====== Comment RHS Slidein ======*/}
  <div className="cmt-wrp">
    <div className="cmt-cnt">
      <div className="form-wrp">
        {/* Close button */}
        <div className="cls-btn">
          <div />
          <div />
        </div>
        {/* Comment Iframe */}
        <h1>Comments</h1>
        {/* <iframe
          name="ndtvSocialCommentForm"
          id="ndtvSocialCommentFormRhs"
          src="https://drop.ndtv.com/test/vj-ndtv/html/ndtv-beeps/comments/v1.2/comments.html"
          scrolling="no"
          allowTransparency="true"
          width="425px"
          height="98%"
          frameBorder={0}
        /> */}
      </div>
    </div>
  </div>

      </>
    
    )
}
