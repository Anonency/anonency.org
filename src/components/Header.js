import React, {Component} from 'react';
import 'particles.js';
import particleJSConfig from '../data/particlesjs';
import PrimaryNav from '../components/PrimaryNav';
import Hero from '../components/Hero';

class Header extends Component {

    componentDidMount() {
        window.particlesJS('particles', particleJSConfig);
    }

    render() {
        return (
            <header id="header" className="app-header">
                <div id="particles" className="particles-background"></div>
                <div className="app-header-components">
                    <PrimaryNav/>
                    <Hero/>
                </div>
            </header>
        );
    }
}

export default Header;
