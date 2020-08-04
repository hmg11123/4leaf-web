import React from "react";
import { faChevronRight, faChevronLeft, faCaretDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Main extends React.Component {
    render() {
        return (
            <main className="Main">
                <div className="header__main">
                    <div className="header__main-txtbox">
                        <div className="txtbox-1">4LEAF SOFEWARE는</div>
                        <div className="txtbox-2">WEB SITE을 개발하는 회사입니다</div>
                    </div>
                    <div className="h_icon">
                        <div className="h_icon-arrow">
                            <FontAwesomeIcon icon={faChevronLeft} className="arrow-left" />
                            <FontAwesomeIcon icon={faChevronRight} className="arrow-right" />

                            <FontAwesomeIcon icon={faCaretDown} className="caret" />
                        </div>
                        <button className="h_icon-chevron">
                            <FontAwesomeIcon icon={faChevronCircleUp} className="chevron-up" />
                        </button>
                    </div>
                </div>
                <div className="middle_main">
                    <div className="middle_main-txt1">
                        <div className="middle_main-txt1-1">
                            4Leaf SofeWare는
                        </div>
                        <div className="middle_main-txt1-2">
                            Web과 App개발을 의뢰 받아 만드는 회사입니다.
                        </div>
                    </div>
                    <div className="middle_main-txt2">
                        <div className="middle_main-txt2-1">
                            4Leaf SofeWare는 의뢰접수 → 시안제작 →  개발시작
                        </div>

                        <div className="middle_main-txt2-2">
                            으로 진행됩니다
                        </div>
                    </div>
                    <div className="btn">
                        <div>
                            <input type="button" value="포트폴리오 →" />
                        </div>
                        <div>
                            <input type="button" value="개발의뢰 →" />
                        </div>
                    </div>
                </div>
                <div className="bottom_main">
                    <div className="b-title">
                        4Leaf SofeWare가 지금까지 만든 Web, App
                    </div>
                    <div className="line"></div>
                    <div className="list">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>
                    </div>
                </div>
            </main >
        )
    }
}

export default Main;