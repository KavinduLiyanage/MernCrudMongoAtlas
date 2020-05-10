import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Fashion Store</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Discounts</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Discount Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/product" className="nav-link">Create Product</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/product/upload" className="nav-link">Upload</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
