import React, { Component } from 'react';
import styled from 'styled-components';

const Match = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    @media screen and (orientation:portrait) {
        background: url('https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png') center center no-repeat;
        background-size: 100% 100%;
    }

    @media screen and (orientation:landscape) {
        background: url('https://static.aviapark.com/files/155333/960x576_1.png') center center no-repeat;
        background-size: 100% 100%;
    }
`;

class MatchMedia extends Component {
    render () {
        // if (window.matchMedia("(orientation: portrait)").matches) {
        //     return (
        //         <Img src='https://static.aviapark.com/files/155333/nc_ss19_620x960px_1.png' />
        //     )
        // } else if (window.matchMedia("(orientation: landscape)").matches) {
        //     return (
        //         <Img src='https://static.aviapark.com/files/155333/960x576_1.png' />
        //     )
        // } 

        return (
            <Match/>
        )

        
    }   
}

export default MatchMedia;