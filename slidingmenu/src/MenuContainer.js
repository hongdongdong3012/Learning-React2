import React, { Component } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import './MenuButton.css';

class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("Clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        console.log("Rendering : MenuContainer");
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible} />
                <div>
                    <p>Can you spot the item that doen't belong?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>sit</li>
                        <li>Bumblebees</li>
                        <li>Consectertur</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer;