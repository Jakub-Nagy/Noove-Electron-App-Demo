import React from "react";
import { Link } from "react-router-dom";
import {SearchIcon, CpuIcon, CodeIcon, XIcon} from '@primer/octicons-react';
import Select from 'react-select';
import skills from '../utility/Skills.json';

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

                {/* Skill picker */}
                <div className="input-group stretch" id="search">
                    <div className="skill-picker">

                        <div className="selected">
                            <div className="skill">
                                <CpuIcon size={16} />
                                <label>Hardware Development</label>
                                <XIcon size={16} className="close" />
                            </div>
                            <div className="skill">
                                <CpuIcon size={16} />
                                <label>Software Development</label>
                                <XIcon size={16} className="close" />
                            </div>
                            <div className="skill">
                                <CpuIcon size={16} />
                                <label>Design</label>
                                <XIcon size={16} className="close" />
                            </div>
                            <div className="skill">
                                <CpuIcon size={16} />
                                <label>Design</label>
                                <XIcon size={16} className="close" />
                            </div>
                            <div className="skill">
                                <CpuIcon size={16} />
                                <label>Design</label>
                                <XIcon size={16} className="close" />
                            </div>
                            <div className="skill">
                                <CpuIcon size={16} />
                                <label>Design</label>
                                <XIcon size={16} className="close" />
                            </div>
                        </div>

                        <span className="divider"></span>

                        <div className="input-search">
                            <SearchIcon size={20} />
                            <input type="search" placeholder="Search for skills" />
                        </div>
                        
                        <span className="divider"></span>

                        <div className="dropdown">
                            <h3 className="section-title">Engineering</h3>
                            <div className="skill-group">
                                <div className="skill">
                                    <input type="checkbox" id="civil-engineering" />
                                    <label htmlFor="civil-engineering">Civil Engineering (Architecture)</label>
                                </div>
                                <div className="skill">
                                    <input type="checkbox" id="electrical-engineering" />
                                    <label htmlFor="electrical-engineering">Electrical Engineering</label>
                                </div>
                                <div className="skill">
                                    <input type="checkbox" id="mechanical-engineering" />
                                    <label htmlFor="mechanical-engineering">Mechanical Engineering</label>
                                </div>
                            </div>
                            <h3 className="section-title">Science</h3>
                            <div className="skill-group">
                                <div className="skill">
                                    <input type="checkbox" id="astronomy" />
                                    <label htmlFor="astronomy">Astronomy</label>
                                </div>
                                <div className="skill">
                                    <input type="checkbox" id="biology" />
                                    <label htmlFor="biology">Biology</label>
                                </div>
                                <div className="skill">
                                    <input type="checkbox" id="chemistry" />
                                    <label htmlFor="chemistry">Chemistry</label>
                                </div>
                            </div>
                            <h3 className="section-title">Science</h3>
                            <div className="skill-group">
                                <div className="skill">
                                    <input type="checkbox" id="astronomy" />
                                    <label htmlFor="astronomy">Astronomy</label>
                                </div>
                                <div className="skill">
                                    <input type="checkbox" id="biology" />
                                    <label htmlFor="biology">Biology</label>
                                </div>
                                <div className="skill">
                                    <input type="checkbox" id="chemistry" />
                                    <label htmlFor="chemistry">Chemistry</label>
                                </div>
                            </div>
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