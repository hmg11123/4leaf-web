import React from "react";
import { faChevronRight, faChevronLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="header__main">
                    <div className="header__main-txtbox">
                        <div className="txtbox-1">4LEAF SOFEWARE는</div>
                        <div className="txtbox-2">WEB SITE을 개발하는 회사입니다</div>
                    </div>
                    <div className="h_icon">
                        <div className="h_icon-arrow">
                            <FontAwesomeIcon icon={faChevronLeft} className="arrow-left" />
                            <FontAwesomeIcon icon={faChevronRight} className="arrow-right" />
                        </div>
                        <div className="h_icon-caret">
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Main;