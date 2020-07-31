import React from "react";
import logo from "./images/logo.jpg";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Router>
                        <Link to="/">
                            <img src={logo} className="logo" />
                        </Link>
                    </Router>

                    <ul className="login">
                        <li>
                            SIGN IN
                            </li>
                        <li>
                            SIGN UP
                            </li>
                    </ul>
                    <ul className="main">
                        <li>회사소개</li>
                        <li>개발의뢰</li>
                        <li>문의하기</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;