import React from "react";
import { Link } from "react-router-dom";
import {SearchIcon, CpuIcon, CodeIcon} from '@primer/octicons-react';


export default class Sign_up_4 extends React.Component {
    render() {
        return (
            <div className="form-container" id="sign-up-4">
                {/* Step instructions */}
                <div className="instruction-group">
                    <h3>Sign Up</h3>
                    <h2>Pick your skills</h2>

                    {/* Progress */}
                    <label>Step 4/4</label>
                    <div className="progress-bar">
                        <div className="selected"></div>
                        <div className="selected"></div>
                        <div className="selected"></div>
                        <div className="selected"></div>
                    </div>
                </div>

                {/* Search */}
                <div className="input-group stretch" id="search">
                    <div className="input-search">
                        <SearchIcon size={20} />
                        <input type="search" placeholder="Search for skills" />
                    </div>
                </div>

                <div className="skill-container">
                    <div className="skill-group">
                        <h3>Technology</h3>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                        <div className="skill">
                            <CodeIcon size={18} />
                            <label>Software Development</label>
                        </div>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                    </div>
                    <div className="skill-group">
                        <h3>Design</h3>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                        <div className="skill selected">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                    </div>
                    <div className="skill-group">
                        <h3>Management</h3>
                        <div className="skill selected">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                        <div className="skill">
                            <CpuIcon size={18} />
                            <label>Hardware Development</label>
                        </div>
                    </div>
                </div>

                {/* Continue button */}
                <Link to="/Sign_up_3" id="button-back">
                    <button className="button-secondary">
                        <label>Back</label>
                    </button>
                </Link>  

                {/* Continue button */}
                <Link to="/End" id="button-continue">
                    <button className="button-primary">
                        <label>Finish up</label>
                    </button>
                </Link>

                {/* TOS agreement */}
                <p className="TOS right">
                    By clicking this button you agree to our
                    <a href="https://noove.org/tos"> Terms of Service</a>
                </p> 
                
            </div>
        );
    }
}