import React from "react";
import { faChevronRight, faChevronLeft, faCaretDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from 'react-reveal/Slide';

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
                            <button className="arrow-left">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className="arrow-right">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>

                            <FontAwesomeIcon icon={faCaretDown} className="caret" />
                        </div>
                        <button className="h_icon-chevron">
                            <FontAwesomeIcon icon={faChevronCircleUp} className="chevron-up" />
                        </button>
                    </div>
                </div>
                <div className="middle_main">
                    <Slide bottom>
                        <div className="middle_main-txt1">
                            <div className="middle_main-txt1-1">
                                4Leaf SofeWare는
                        </div>
                            <div className="middle_main-txt1-2">
                                Web과 App개발을 의뢰 받아 만드는 회사입니다.
                        </div>
                        </div>
                    </Slide >
                    <Slide bottom>

                        <div className="middle_main-txt2">
                            <div className="middle_main-txt2-1">
                                4Leaf SofeWare는 의뢰접수 → 시안제작 →  개발시작
                        </div>

                            <div className="middle_main-txt2-2">
                                으로 진행됩니다
                        </div>
                        </div>
                    </Slide >
                    <div className="btn">
                        <div>
                            <Slide left>

                                <input type="button" value="포트폴리오 →" />
                            </Slide >
                        </div>
                        <div>
                            <Slide right>

                                <input type="button" value="개발의뢰 →" />
                            </Slide >
                        </div>
                    </div>
                </div>
                <div className="bottom_main">
                    <Slide bottom>

                        <div className="b-title">
                            4Leaf SofeWare가 지금까지 만든 Web, App
                        </div>
                        <div className="line"></div>
                    </Slide >
                    <div className="list">
                        <Slide bottom cascade>

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
                        </Slide>
                    </div>
                </div>
            </main >
        )
    }
}

export default Main;