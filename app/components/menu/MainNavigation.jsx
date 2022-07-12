import { Link } from "@remix-run/react";
import { useState } from "react";
import SideNav from "./SideNav";

export default function MainNavigation() {
  const [data, setData] = useState({});

  return (
    <>
            <SideNav data={data} setData={setData} />

      {/*====== Logo, Main Navigation & Right Icons Live Tv, Notification and Search ======*/}
      <nav className="m-nv m-nv_clr m-nv_out">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              {/* Button */}
              <div className="brw-nav">
                {/* Browse Button */}
                <a
                  onClick={() => {
                    setData({
                      left: 0,
                    });
                  }}
                  className="sid-nav-icn_lnk side-nav-trigger"
                  // data-trigger=".nav-trigger"
                  // data-class="js_sid-nav"
                >
                  <div className="sid-nav-icn_wrp">
                    <svg className="vj_icn vj_menu">
                      <use xlinkHref="#vj_menu" />
                    </svg>
                  </div>
                </a>
              </div>
              {/* Logo - Dropdown */}
              <div className="hdr-lhs-col fleft">
                <a className="ndtv-logo" href="home-ndtv.html">
                  <img
                    className="vj_icn vj_logo-ndtv"
                    alt=""
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDMuNyA1NC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDMuNyA1NC4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTt9Cgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDgwOTE5MzY3MDE3NTA5NTg0MzQwMDAwMDE1NTEzNzMzNDUyNzk0ODYzODAwXyk7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQoJLnN0M3tjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAwNTk2ODM3MDgzODIyMzg1MjY4MDAwMDAxMTA5NzI3MTI4MjI3MzE4OTc3NV8pO30KCS5zdDR7ZmlsbDojRUUxQzIzO30KCS5zdDV7ZmlsbDojRjhFMjNBO30KCS5zdDZ7ZmlsbDojQjhFOTg2O30KCS5zdDd7ZmlsbDojNUNEMEZGO30KCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwMjU0MTI3NDczNzExNjMwNDczNTAwMDAwMDE5NDMzOTIzNjUxMDM3NjE1OTVfKTt9Cgkuc3Q5e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDU3MTQ1NzA1MjM5MjYyMzgxMjEwMDAwMDAyMTI1ODQyNDM5MDU3MzgxNzgxXyk7fQoJLnN0MTB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjc5NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnIGlkPSJORFRWQmVlcHNMb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yNTQgMC44ODYpIj4KCTxnIGlkPSJHcm91cC02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQzMyAxLjI1OCkiPgoJCTxnIGlkPSJGaWxsLTRfQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CgkJCTxwYXRoIGlkPSJwYXRoLTEtMiIgY2xhc3M9InN0MCIgZD0iTTQ4LjgsMTRoLTQuMlYzLjNoLTYuNmMwLjIsMC45LDAuMywxLjgsMC4zLDIuN3YxLjVjMC4xLDEuNy0wLjQsMy40LTEuNSw0LjcKCQkJCWMtMS4yLDEuMi0yLjksMS44LTQuNiwxLjdoLTEyVjBoMzcuNWw1LjcsMTAuNEw2OC43LDBoNC42TDY2LDE0aC01LjNMNTQuNywzLjNoLTUuOVYxNHogTTI5LjIsMTAuN2gyLjNjMS43LDAsMi41LTAuNywyLjUtMi4yCgkJCQlWNS40YzAtMS40LTAuOS0yLjEtMi41LTIuMWgtMi4zbDAsMGgtNC44djcuNEgyOS4yeiBNNC40LDE0SDBWMGg0LjZDNi45LDAuMSw5LjEsMS41LDEwLDMuN2wyLjQsNC45YzAuMiwwLjMsMC44LDEuNCwxLjcsMS40CgkJCQloMC4xVjBoNC40djE0aC00LjVjLTEuMSwwLTIuMi0wLjMtMy4yLTFjLTEtMC43LTEuNy0xLjYtMi4yLTIuN0w2LjMsNS40YzAsMC0wLjYtMS40LTEuNy0xLjRINC40VjE0eiIvPgoJCQk8Zz4KCQkJCTxkZWZzPgoJCQkJCTxwYXRoIGlkPSJTVkdJRF8xXyIgZD0iTTQ4LjgsMTRoLTQuMlYzLjNoLTYuNmMwLjIsMC45LDAuMywxLjgsMC4zLDIuN3YxLjVjMC4xLDEuNy0wLjQsMy40LTEuNSw0LjdjLTEuMiwxLjItMi45LDEuOC00LjYsMS43CgkJCQkJCWgtMTJWMGgzNy41bDUuNywxMC40TDY4LjcsMGg0LjZMNjYsMTRoLTUuM0w1NC43LDMuM2gtNS45VjE0eiBNMjkuMiwxMC43aDIuM2MxLjcsMCwyLjUtMC43LDIuNS0yLjJWNS40CgkJCQkJCWMwLTEuNC0wLjktMi4xLTIuNS0yLjFoLTIuM2wwLDBoLTQuOHY3LjRIMjkuMnogTTQuNCwxNEgwVjBoNC42QzYuOSwwLjEsOS4xLDEuNSwxMCwzLjdsMi40LDQuOWMwLjIsMC4zLDAuOCwxLjQsMS43LDEuNGgwLjEKCQkJCQkJVjBoNC40djE0aC00LjVjLTEuMSwwLTIuMi0wLjMtMy4yLTFjLTEtMC43LTEuNy0xLjYtMi4yLTIuN0w2LjMsNS40YzAsMC0wLjYtMS40LTEuNy0xLjRINC40VjE0eiIvPgoJCQkJPC9kZWZzPgoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDEzOTI3NjkxNzQ4ODE1NDk5NDg5MDAwMDAxMzMwODE1MzMwMTQ4NjQwOTM3NF8iPgoJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJCQk8L2NsaXBQYXRoPgoJCQkJPGcgaWQ9IkZpbGwtNF9DbGlwcGVkLTIiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzOTI3NjkxNzQ4ODE1NDk5NDg5MDAwMDAxMzMwODE1MzMwMTQ4NjQwOTM3NF8pOyI+CgkJCQkJPHBhdGggaWQ9IkZpbGwtNCIgY2xhc3M9InN0MiIgZD0iTS0yLjUsMTYuNWg3OC4zdi0xOUgtMi41VjE2LjV6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8ZyBpZD0iR3JvdXAtOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMjQ0IDUuNTk2KSI+CgkJPGcgaWQ9IkZpbGwtN19DbGlwcGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KCQkJPHBhdGggaWQ9InBhdGgtMy0yIiBjbGFzcz0ic3QwIiBkPSJNMi41LDUuM0MxLjEsNS4zLDAsNC4xLDAsMi43QzAsMS4yLDEuMSwwLDIuNSwwQzQsMCw1LjIsMS4yLDUuMSwyLjdDNS4yLDQuMSw0LDUuMywyLjUsNS4zCgkJCQlDMi42LDUuMywyLjYsNS4zLDIuNSw1LjNMMi41LDUuM3oiLz4KCQkJPGc+CgkJCQk8ZGVmcz4KCQkJCQk8cGF0aCBpZD0iU1ZHSURfMDAwMDAxMTA0NTk0MjY1OTExODE3MzY1OTAwMDAwMDM5OTE5MjIyNTEzNjE5OTkwMDNfIiBkPSJNMi41LDUuM0MxLjEsNS4zLDAsNC4xLDAsMi43QzAsMS4yLDEuMSwwLDIuNSwwCgkJCQkJCUM0LDAsNS4yLDEuMiw1LjEsMi43QzUuMiw0LjEsNCw1LjMsMi41LDUuM0MyLjYsNS4zLDIuNiw1LjMsMi41LDUuM0wyLjUsNS4zeiIvPgoJCQkJPC9kZWZzPgoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDAzMjYwNzc4NjE0NTk3ODYwODQwMDAwMDAwNzIxNjU0MTg0MjYwMDY4Nzc5M18iPgoJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMTEwNDU5NDI2NTkxMTgxNzM2NTkwMDAwMDAzOTkxOTIyMjUxMzYxOTk5MDAzXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCQkJPC9jbGlwUGF0aD4KCQkJCTxnIGlkPSJGaWxsLTdfQ2xpcHBlZC0yIiBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwMzI2MDc3ODYxNDU5Nzg2MDg0MDAwMDAwMDcyMTY1NDE4NDI2MDA2ODc3OTNfKTsiPgoJCQkJCTxwYXRoIGlkPSJGaWxsLTciIGNsYXNzPSJzdDQiIGQ9Ik0tMi41LDcuOEg3LjZWLTIuNUgtMi41VjcuOHoiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik04NS42LDE4LjljLTEuMS0yLjEtMi43LTMuOS00LjYtNS4ybC0wLjctMC41TDc4LjEsMTdsMC41LDAuNGMyLjcsMi4xLDQuMyw1LjQsNC4zLDguOGMwLDEuOC0wLjUsMy42LTEuMyw1LjIKCQljLTAuNywxLjMtMS42LDIuNC0yLjgsMy40bC0wLjUsMC40bDIuMiw0LjFsMC43LTAuN2MxLjgtMS4zLDMuMy0zLjEsNC4zLTUuMWMxLjItMi4zLDEuOS00LjgsMS45LTcuNAoJCUM4Ny41LDIzLjcsODYuOCwyMS4xLDg1LjYsMTguOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05NS4yLDIwLjRjLTAuNS0xLjktMS4yLTMuOC0yLjEtNS41Yy0wLjktMS43LTIuMS0zLjMtMy40LTQuOGMtMS4zLTEuNS0yLjgtMi44LTQuNS0zLjlsLTAuNy0wLjVsLTIuMiwzLjkKCQlsMC42LDAuNGMyLjYsMS43LDQuOCw0LjEsNi4zLDYuOWMwLjgsMS40LDEuMywyLjksMS43LDQuNWMwLjQsMS42LDAuNiwzLjIsMC42LDQuOGMwLDEuNi0wLjIsMy4yLTAuNiw0LjdjLTAuNCwxLjYtMSwzLjEtMS43LDQuNQoJCWMtMS41LDIuNy0zLjYsNS4xLTYuMSw2LjlsLTAuNiwwLjRsMi4xLDMuOWwwLjctMC41YzMuMy0yLjIsNi01LjIsNy44LTguNmMwLjktMS43LDEuNi0zLjYsMi4xLTUuNWMwLjUtMS45LDAuNy0zLjksMC43LTUuOAoJCUM5NS45LDI0LjMsOTUuNywyMi4zLDk1LjIsMjAuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xMDMsMTguNGMtMC42LTIuNS0xLjYtNS0yLjgtNy4zYy0xLjItMi4zLTIuOC00LjUtNC41LTYuNGMtMS44LTEuOS0zLjgtMy43LTYtNS4xYy0wLjMtMC4yLTAuNS0wLjMtMC44LTAuMwoJCWwtMC42LTAuMWwtMS45LDMuM2wwLjMsMC40Qzg2LjgsMyw4NywzLjEsODcuMiwzLjNjMS45LDEuMiwzLjYsMi43LDUuMSw0LjRjMS41LDEuNywyLjgsMy41LDMuOSw1LjVjMS4xLDIsMS45LDQuMSwyLjUsNi4zCgkJYzAuNSwyLjIsMC44LDQuNSwwLjgsNi43YzAsMi4zLTAuMyw0LjUtMC44LDYuOGMtMC42LDIuMi0xLjQsNC4zLTIuNSw2LjNjLTEuMSwyLTIuNCwzLjktMy45LDUuNWMtMS41LDEuNy0zLjMsMy4yLTUuMSw0LjQKCQljLTAuMiwwLjEtMC4zLDAuMi0wLjUsMC40bC0wLjQsMC40bDEuOCwzLjNsMC42LTAuMWMwLjMsMCwwLjYtMC4yLDAuOS0wLjNjMi4yLTEuNSw0LjItMy4yLDYtNS4xYzEuOC0yLDMuMy00LjEsNC41LTYuNAoJCWMyLjUtNC42LDMuOC05LjgsMy44LTE1LjFDMTAzLjksMjMuNiwxMDMuNiwyMSwxMDMsMTguNHoiLz4KCTxnIGlkPSJHcm91cC0zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMTk5IDE3Ljc5MykiPgoJCTxnIGlkPSJGaWxsLTMxX0NsaXBwZWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPgoJCQk8cGF0aCBpZD0icGF0aC0xNS0yIiBjbGFzcz0ic3QwIiBkPSJNMzUuMywyNi4xSDMxVjAuNGg0LjN2Mi41aDAuMmMwLjMtMC44LDAuOS0xLjUsMS42LTJjMC45LTAuNiwyLTAuOCwzLjEtMC44CgkJCQljMy44LDAsNiwyLjgsNiw3LjR2MmMwLDQuNi0yLjMsNy40LTYuMSw3LjRjLTIsMC4yLTMuOC0wLjktNC42LTIuN2gtMC4yVjI2LjFMMzUuMywyNi4xeiBNMzguNSwzLjZjLTIsMC0zLjIsMS41LTMuMiw0djEuOQoJCQkJYzAsMi4zLDEuMywzLjgsMy4zLDMuOGMyLDAsMy4yLTEuNSwzLjItNC4yVjcuOGMwLjEtMS4xLTAuMi0yLjItMC45LTMuMUM0MC4zLDQsMzkuNSwzLjYsMzguNSwzLjZ6IE01My4zLDE2LjkKCQkJCWMtMS43LDAuMS0zLjUtMC40LTQuOS0xLjNjLTEuMS0wLjgtMS44LTIuMS0xLjgtMy41aDQuMmMwLjEsMC41LDAuMywxLDAuOCwxLjNjMC42LDAuNCwxLjMsMC42LDIsMC41YzAuNywwLDEuNC0wLjEsMi4xLTAuNQoJCQkJYzAuNC0wLjMsMC42LTAuOCwwLjYtMS4zYzAtMS4zLTEuNi0xLjYtMy40LTEuOWwwLDBjLTAuMiwwLTAuNC0wLjEtMC43LTAuMWMtMS4zLTAuMi0yLjYtMC43LTMuNy0xLjRjLTEtMC44LTEuNi0yLjEtMS41LTMuNAoJCQkJYy0wLjEtMS42LDAuNy0zLjEsMi00YzEuNC0wLjgsMy0xLjMsNC42LTEuMmMxLjYtMC4xLDMuMiwwLjQsNC41LDEuMmMxLjEsMC44LDEuOCwyLjIsMS44LDMuNmgtMy44Yy0wLjItMS4yLTEuNC0yLTIuNi0xLjkKCQkJCWMtMS41LDAtMi41LDAuNy0yLjUsMS44YzAsMS40LDIsMS44LDMuNywyYzAuMiwwLDAuNCwwLjEsMC41LDAuMWMxLjMsMC4xLDIuNiwwLjYsMy43LDEuNGMxLDAuOCwxLjUsMiwxLjQsMy4yCgkJCQlDNjAuNCwxNC45LDU3LjgsMTYuOSw1My4zLDE2LjlMNTMuMywxNi45eiBNMjMuMSwxNi45Yy0yLDAuMS00LTAuNi01LjUtMS45Yy0wLjctMC43LTEuMi0xLjUtMS41LTIuNGMtMC40LTEuMS0wLjYtMi4yLTAuNS0zLjMKCQkJCVY3LjZjLTAuMS0yLjEsMC43LTQuMSwyLjEtNS43YzAuNy0wLjYsMS41LTEuMSwyLjMtMS40QzIxLDAuMiwyMiwwLDIyLjksMGMxLjktMC4xLDMuOCwwLjcsNS4yLDJjMS40LDEuNSwyLjEsMy41LDIsNS42djEuOAoJCQkJSDE5Ljh2MC44YzAsMC45LDAuMywxLjgsMC45LDIuNGMwLjYsMC42LDEuNSwxLDIuNCwwLjljMS41LDAsMi43LTAuNywyLjktMS44aDRDMjkuOSwxMy44LDI4LDE2LjksMjMuMSwxNi45TDIzLjEsMTYuOXogTTIzLDMuMwoJCQkJYy0xLjcsMC0zLjEsMS4zLTMuMSwzYzAsMC4xLDAsMC4yLDAsMC4zdjAuMUgyNlY2LjdjMC0wLjktMC4zLTEuOC0wLjgtMi41QzI0LjYsMy42LDIzLjgsMy4zLDIzLDMuM3ogTTcuNSwxNi45CgkJCQljLTIsMC4xLTQtMC42LTUuNS0xLjljLTAuNy0wLjctMS4yLTEuNS0xLjUtMi40QzAuMiwxMS41LDAsMTAuNCwwLDkuM1Y3LjZjLTAuMS0yLjEsMC43LTQuMSwyLjEtNS43YzAuNy0wLjYsMS41LTEuMSwyLjMtMS40CgkJCQlDNS40LDAuMiw2LjMsMCw3LjMsMGMxLjktMC4xLDMuOCwwLjcsNS4yLDJjMS40LDEuNSwyLjEsMy41LDIsNS42djEuOEg0LjJ2MC44YzAsMC45LDAuMywxLjgsMC45LDIuNGMwLjYsMC42LDEuNSwxLDIuNCwwLjkKCQkJCWMxLjUsMCwyLjctMC43LDIuOS0xLjhoNEMxNC4zLDEzLjgsMTIuMywxNi45LDcuNSwxNi45eiBNNy4zLDMuM2MtMS43LDAtMy4xLDEuMy0zLjEsM2MwLDAuMSwwLDAuMiwwLDAuM3YwLjFoNi4yVjYuNwoJCQkJYzAtMC45LTAuMy0xLjgtMC44LTIuNUM5LDMuNiw4LjIsMy4zLDcuMywzLjN6Ii8+CgkJCTxnPgoJCQkJPGRlZnM+CgkJCQkJPHBhdGggaWQ9IlNWR0lEXzAwMDAwMTgwMzUzNzYxMjUyODQ2MDA5OTYwMDAwMDAxMTI4NTExMDQwMjc4MzExMzA5XyIgZD0iTTM1LjMsMjYuMUgzMVYwLjRoNC4zdjIuNWgwLjJjMC4zLTAuOCwwLjktMS41LDEuNi0yCgkJCQkJCWMwLjktMC42LDItMC44LDMuMS0wLjhjMy44LDAsNiwyLjgsNiw3LjR2MmMwLDQuNi0yLjMsNy40LTYuMSw3LjRjLTIsMC4yLTMuOC0wLjktNC42LTIuN2gtMC4yVjI2LjFMMzUuMywyNi4xeiBNMzguNSwzLjYKCQkJCQkJYy0yLDAtMy4yLDEuNS0zLjIsNHYxLjljMCwyLjMsMS4zLDMuOCwzLjMsMy44YzIsMCwzLjItMS41LDMuMi00LjJWNy44YzAuMS0xLjEtMC4yLTIuMi0wLjktMy4xQzQwLjMsNCwzOS41LDMuNiwzOC41LDMuNnoKCQkJCQkJIE01My4zLDE2LjljLTEuNywwLjEtMy41LTAuNC00LjktMS4zYy0xLjEtMC44LTEuOC0yLjEtMS44LTMuNWg0LjJjMC4xLDAuNSwwLjMsMSwwLjgsMS4zYzAuNiwwLjQsMS4zLDAuNiwyLDAuNQoJCQkJCQljMC43LDAsMS40LTAuMSwyLjEtMC41YzAuNC0wLjMsMC42LTAuOCwwLjYtMS4zYzAtMS4zLTEuNi0xLjYtMy40LTEuOWwwLDBjLTAuMiwwLTAuNC0wLjEtMC43LTAuMWMtMS4zLTAuMi0yLjYtMC43LTMuNy0xLjQKCQkJCQkJYy0xLTAuOC0xLjYtMi4xLTEuNS0zLjRjLTAuMS0xLjYsMC43LTMuMSwyLTRjMS40LTAuOCwzLTEuMyw0LjYtMS4yYzEuNi0wLjEsMy4yLDAuNCw0LjUsMS4yYzEuMSwwLjgsMS44LDIuMiwxLjgsMy42aC0zLjgKCQkJCQkJYy0wLjItMS4yLTEuNC0yLTIuNi0xLjljLTEuNSwwLTIuNSwwLjctMi41LDEuOGMwLDEuNCwyLDEuOCwzLjcsMmMwLjIsMCwwLjQsMC4xLDAuNSwwLjFjMS4zLDAuMSwyLjYsMC42LDMuNywxLjQKCQkJCQkJYzEsMC44LDEuNSwyLDEuNCwzLjJDNjAuNCwxNC45LDU3LjgsMTYuOSw1My4zLDE2LjlMNTMuMywxNi45eiBNMjMuMSwxNi45Yy0yLDAuMS00LTAuNi01LjUtMS45Yy0wLjctMC43LTEuMi0xLjUtMS41LTIuNAoJCQkJCQljLTAuNC0xLjEtMC42LTIuMi0wLjUtMy4zVjcuNmMtMC4xLTIuMSwwLjctNC4xLDIuMS01LjdjMC43LTAuNiwxLjUtMS4xLDIuMy0xLjRDMjEsMC4yLDIyLDAsMjIuOSwwYzEuOS0wLjEsMy44LDAuNyw1LjIsMgoJCQkJCQljMS40LDEuNSwyLjEsMy41LDIsNS42djEuOEgxOS44djAuOGMwLDAuOSwwLjMsMS44LDAuOSwyLjRjMC42LDAuNiwxLjUsMSwyLjQsMC45YzEuNSwwLDIuNy0wLjcsMi45LTEuOGg0CgkJCQkJCUMyOS45LDEzLjgsMjgsMTYuOSwyMy4xLDE2LjlMMjMuMSwxNi45eiBNMjMsMy4zYy0xLjcsMC0zLjEsMS4zLTMuMSwzYzAsMC4xLDAsMC4yLDAsMC4zdjAuMUgyNlY2LjdjMC0wLjktMC4zLTEuOC0wLjgtMi41CgkJCQkJCUMyNC42LDMuNiwyMy44LDMuMywyMywzLjN6IE03LjUsMTYuOWMtMiwwLjEtNC0wLjYtNS41LTEuOWMtMC43LTAuNy0xLjItMS41LTEuNS0yLjRDMC4yLDExLjUsMCwxMC40LDAsOS4zVjcuNgoJCQkJCQljLTAuMS0yLjEsMC43LTQuMSwyLjEtNS43YzAuNy0wLjYsMS41LTEuMSwyLjMtMS40QzUuNCwwLjIsNi4zLDAsNy4zLDBjMS45LTAuMSwzLjgsMC43LDUuMiwyYzEuNCwxLjUsMi4xLDMuNSwyLDUuNnYxLjhINC4yCgkJCQkJCXYwLjhjMCwwLjksMC4zLDEuOCwwLjksMi40YzAuNiwwLjYsMS41LDEsMi40LDAuOWMxLjUsMCwyLjctMC43LDIuOS0xLjhoNEMxNC4zLDEzLjgsMTIuMywxNi45LDcuNSwxNi45eiBNNy4zLDMuMwoJCQkJCQljLTEuNywwLTMuMSwxLjMtMy4xLDNjMCwwLjEsMCwwLjIsMCwwLjN2MC4xaDYuMlY2LjdjMC0wLjktMC4zLTEuOC0wLjgtMi41QzksMy42LDguMiwzLjMsNy4zLDMuM3oiLz4KCQkJCTwvZGVmcz4KCQkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwNjU3NTQ3OTQxMDI1NTIzODYzODAwMDAwMTc1NTM3ODQxNzMwODY0NDc3NjZfIj4KCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDE4MDM1Mzc2MTI1Mjg0NjAwOTk2MDAwMDAwMTEyODUxMTA0MDI3ODMxMTMwOV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQkJCTwvY2xpcFBhdGg+CgkJCQkKCQkJCQk8ZyBpZD0iRmlsbC0zMV9DbGlwcGVkLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA2NTc1NDc5NDEwMjU1MjM4NjM4MDAwMDAxNzU1Mzc4NDE3MzA4NjQ0Nzc2Nl8pOyI+CgkJCQkJPHBhdGggaWQ9IkZpbGwtMzEiIGNsYXNzPSJzdDIiIGQ9Ik0tMi41LDI4LjZoNjUuNFYtMi41SC0yLjVWMjguNnoiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJHcm91cC0zNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC42NTEgMTguMTMzKSI+CgkJPGcgaWQ9IkZpbGwtMzRfQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CgkJCTxwYXRoIGlkPSJwYXRoLTE3LTIiIGNsYXNzPSJzdDAiIGQ9Ik02LjksMTYuM0gwVjBoNi45YzEuMy0wLjEsMi41LDAuMywzLjUsMWMwLjksMC43LDEuNCwxLjgsMS4zLDIuOWMwLDAuOS0wLjMsMS44LTAuOCwyLjQKCQkJCWMtMC41LDAuNi0xLjIsMS0yLDEuMXYwLjJjMSwwLjEsMS44LDAuNSwyLjUsMS4xYzAuNywwLjgsMS4xLDEuOCwxLjEsMi44YzAsMS4zLTAuNiwyLjYtMS42LDMuNEM5LjgsMTUuOSw4LjMsMTYuMyw2LjksMTYuM3oKCQkJCSBNMy40LDkuMXY0LjZoMi4zYzIuMiwwLDMuNC0wLjgsMy40LTIuM2MwLTEuNS0xLTIuMy0yLjgtMi4zSDMuNHogTTMuNCwyLjZ2NC4xaDJjMS45LDAsMi45LTAuNywyLjktMi4xYzAtMC42LTAuMi0xLjEtMC42LTEuNQoJCQkJQzcuMywyLjgsNi43LDIuNiw2LjEsMi42TDMuNCwyLjZ6Ii8+CgkJCTxnPgoJCQkJPGRlZnM+CgkJCQkJPHBhdGggaWQ9IlNWR0lEXzAwMDAwMTczMTYwMDA2ODMxNjI3NDEyNzEwMDAwMDE1MjcxOTU0MTc1MjA2NDg1MTQ5XyIgZD0iTTYuOSwxNi4zSDBWMGg2LjljMS4zLTAuMSwyLjUsMC4zLDMuNSwxCgkJCQkJCWMwLjksMC43LDEuNCwxLjgsMS4zLDIuOWMwLDAuOS0wLjMsMS44LTAuOCwyLjRjLTAuNSwwLjYtMS4yLDEtMiwxLjF2MC4yYzEsMC4xLDEuOCwwLjUsMi41LDEuMWMwLjcsMC44LDEuMSwxLjgsMS4xLDIuOAoJCQkJCQljMCwxLjMtMC42LDIuNi0xLjYsMy40QzkuOCwxNS45LDguMywxNi4zLDYuOSwxNi4zeiBNMy40LDkuMXY0LjZoMi4zYzIuMiwwLDMuNC0wLjgsMy40LTIuM2MwLTEuNS0xLTIuMy0yLjgtMi4zSDMuNHoKCQkJCQkJIE0zLjQsMi42djQuMWgyYzEuOSwwLDIuOS0wLjcsMi45LTIuMWMwLTAuNi0wLjItMS4xLTAuNi0xLjVDNy4zLDIuOCw2LjcsMi42LDYuMSwyLjZMMy40LDIuNnoiLz4KCQkJCTwvZGVmcz4KCQkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwMTE3MTk4MTI4OTgwMDA5Njc5MzAwMDAwMTI3NTIwOTUwMjMxNzk0MzgyMjJfIj4KCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDE3MzE2MDAwNjgzMTYyNzQxMjcxMDAwMDAxNTI3MTk1NDE3NTIwNjQ4NTE0OV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQkJCTwvY2xpcFBhdGg+CgkJCQkKCQkJCQk8ZyBpZD0iRmlsbC0zNF9DbGlwcGVkLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAxMTcxOTgxMjg5ODAwMDk2NzkzMDAwMDAxMjc1MjA5NTAyMzE3OTQzODIyMl8pOyI+CgkJCQkJPHBhdGggaWQ9IkZpbGwtMzQiIGNsYXNzPSJzdDIiIGQ9Ik0tMi41LDE4LjhIMTVWLTIuNUgtMi41VjE4Ljh6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBpZD0iU3Ryb2tlLTM3IiBjbGFzcz0ic3QxMCIgZD0iTTcuNiwzNC40SDAuN1YxOC4xaDYuOWMxLjMtMC4xLDIuNSwwLjMsMy41LDFjMC45LDAuNywxLjQsMS44LDEuMywyLjljMCwwLjktMC4zLDEuOC0wLjgsMi40CgkJYy0wLjUsMC42LTEuMiwxLTIsMS4xdjAuMmMxLDAuMSwxLjgsMC41LDIuNSwxLjFjMC43LDAuOCwxLjEsMS44LDEuMSwyLjhjMCwxLjMtMC42LDIuNi0xLjYsMy40QzEwLjQsMzQsOSwzNC40LDcuNiwzNC40egoJCSBNNC4xLDI3LjJ2NC42aDIuM2MyLjIsMCwzLjQtMC44LDMuNC0yLjNjMC0xLjUtMS0yLjMtMi44LTIuM0g0LjF6IE00LjEsMjAuN3Y0LjFoMkM4LDI0LjgsOSwyNC4xLDksMjIuN2MwLTAuNi0wLjItMS4xLTAuNi0xLjUKCQljLTAuNS0wLjQtMS4xLTAuNS0xLjctMC41SDQuMXoiLz4KPC9nPgo8L3N2Zz4K"
                  />
                </a>
                {/*== Language dropdown icon==*/}
                <div className="tp_lng drp-trigger dd-nav_two">
                  <div className="tp_lng-ttl drp-lnk">
                    Eng
                    <svg className="sub-nav_drp-icn tp_lng-icn-bg vj_icn vj_arrow-down">
                      <use xlinkHref="#vj_arrow-down" />
                    </svg>
                  </div>
                  {/*== Language dropdown content ==*/}
                  <div className="dd-nav">
                    <ul className="dd-nav_ul vjl-md-12">
                      <li className="drp_mnu-li drp_mnu-ttl">
                        Select Languages
                      </li>
                      <li className="dd-nav_li">
                        <Link className="m-nv_lnk" to="/#Hindi">
                          हिंदी | Hindi
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Main Navigation */}
              <nav className="m-nv_lf">
                <ul className="m-nv_ul">
                  {/* Link 1 */}
                  <li className="m-nv_li dd-nav_two dd-nav_hvr">
                    {" "}
                    <a
                      className="m-nv_lnk m-nv_act"
                      title="New Year 2021"
                      href="#0"
                    >
                      Live TV <span className="m-nv_lbl">NEW</span>
                    </a>
                  </li>
                  {/* Link 2 */}
                  <li className="m-nv_li dd-nav_two dd-nav_hvr">
                    {" "}
                    <a
                      className="m-nv_lnk dd-nav_act"
                      title="Features"
                      href="#0"
                    >
                      NDTV Beeps{" "}
                      <svg className="m-nv_drp-icn vj_icn vj_arrow-down">
                        <use xlinkHref="#vj_arrow-down" />
                      </svg>
                    </a>
                    <div className="dd-nav">
                      <ul className="dd-nav_ul vjl-md-6">
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            News
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Offbeat
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Khabar
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Food
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Auto
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Entertainment
                          </a>
                        </li>
                      </ul>
                      <ul className="dd-nav_ul sc-brl vjl-md-6">
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Health
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Sports
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Swirlster
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Gadgets
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            World
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Profit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Link 3 */}
                  <li className="m-nv_li dd-nav_two dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Features" href="#0">
                      Latest{" "}
                    </a>
                  </li>
                  {/* Link 4 */}
                  <li className="m-nv_li dd-nav_two dd-nav_hvr">
                    <a className="m-nv_lnk" title="Recipes" href="#0">
                      Covid{" "}
                    </a>
                  </li>
                  {/* Link 5 */}
                  <li className="m-nv_li dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Web Stories" href="#0">
                      India
                    </a>
                  </li>
                  {/* Link 6 */}
                  <li className="m-nv_li dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Recipe Videos" href="#0">
                      Opinion
                    </a>
                  </li>
                  {/* Link 7 */}
                  <li className="m-nv_li dd-nav_two dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Health" href="#0">
                      Cities{" "}
                    </a>
                  </li>
                  {/* Link 8 */}
                  <li className="m-nv_li dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Home Remedies" href="#0">
                      World
                    </a>
                  </li>
                  {/* Link 9 */}
                  <li className="m-nv_li dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Home Remedies" href="#0">
                      Photos
                    </a>
                  </li>
                  {/* Link 10 */}
                  <li className="m-nv_li dd-nav_hvr">
                    {" "}
                    <a className="m-nv_lnk" title="Home Remedies" href="#0">
                      Videos
                    </a>
                  </li>
                  {/* Link 11 */}
                  <li className="m-nv_li dd-nav_one dd-nav_hvr">
                    <svg className="vj_icn dd-drp_icn vj_top-nav">
                      <use xlinkHref="#vj_top-nav" />
                    </svg>
                    <div className="dd-nav">
                      <ul className="dd-nav_ul vjl-md-12">
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Offbeat
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Trends
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Science
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            South
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            People
                          </a>
                        </li>
                        <li className="dd-nav_li">
                          <a className="m-nv_lnk" href="#0">
                            Jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* Right Icons, Notification and Search */}
              <div>
                {/* Notification Icon */}
                <span className="t-icn-nv t-icn-nt ttp">
                  <svg className="vj_icn vj_bell bell">
                    <use xlinkHref="#vj_bell" />
                  </svg>
                  <div className="tip on-bottom">
                    <div className="tip_wrp">
                      News alerts are turned off.{" "}
                      <a className="ttp-lnk" href="/#Sourav">
                        Click here to turn on.
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
