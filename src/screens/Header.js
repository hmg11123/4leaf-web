import React from "react";
import logo from "./images/logo.jpg";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                    <Router>
                        <Link to="/">
                            <img src={logo} className="logo" />
                        </Link>
                    </Router>

                    <ul className="login">
                        <li>
                            <input type="button" value="SIGN IN" />
                        </li>
                        <li>
                            <input type="button" value="SIGN UP" />
                        </li>
                    </ul>
                    <ul className="main">
                        <li><input type="button" value="회사소개" /></li>
                        <li><input type="button" value="의뢰하기" /></li>
                        <li><input type="button" value="문의하기" /></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;