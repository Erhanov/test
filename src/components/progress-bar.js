import React, { Component } from 'react';
import styled from 'styled-components';


const Progress = styled.section`
    height: 20px;
    z-index: 5;
`;

const ProgressClose = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    font-size: 30px;
    text-align: center;
    width: 40px;
    height: 40px;
    color: #ffffff;
    z-index: 5;
`;

const ProgressBg = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #2fc;
    width: 100%;
    height: 20px;
    z-index: 2;
`;

class ProgressBar extends Component {

    render () {
        // const { src } = this.props


        return (
            <Progress>
                <ProgressBg></ProgressBg>
                <ProgressClose>&times;</ProgressClose>
            </Progress>
        )
    }  
}

export default ProgressBar;