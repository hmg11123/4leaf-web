import React from "react";
import footerLogo from "./images/footerlogo.png"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img src={footerLogo} className="footerlogo" />
                <div className="f_txt">

                    <div className="f_txt1">대전광역시 서구 계통로394번길</div>
                    <div className="f_txt2">대표 윤상호</div>
                    <div className="f_txt3">
                        <div className="f_txt3-1">010-4496-2415</div>
                        <div className="f_txt3-2">4leaf.ysh@gmail.com</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;