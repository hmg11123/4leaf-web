import React from "react";
import footerLogo from "./images/footerlogo.png"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img src={footerLogo} className="footerlogo" />
                <div>대전광역시 서구 계통로394번길</div>
                <div>대표 윤상호</div>
                <div>
                    <div>010-4496-2415</div>
                    <div>4leaf.ysh@gmail.com</div>
                </div>
            </footer>
        )
    }
}

export default Footer;