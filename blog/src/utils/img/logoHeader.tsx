import React from 'react';

export function LogoHeader() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="45" viewBox="0 0 103 45">
            <defs>
                <style>
                    {`
                        .cls-1 {
                            fill: #71bb00;
                            font-size: 24px;
                            font-family: 'SFProDisplay-Black', 'SF Pro Display';
                            font-weight: 800;
                        }
                        .cls-2 {
                            fill: #707070;
                            font-size: 12px;
                            font-family: 'SFProDisplay-Light', 'SF Pro Display';
                            font-weight: 300;
                            letter-spacing: 0.024em;
                        }
                    `}
                </style>
            </defs>
            <g id="bx-logo" transform="translate(-615 -31)">
                <text id="buildbox" className="cls-1" transform="translate(615 54)">
                    <tspan x="0" y="0">buildbox</tspan>
                </text>
                <text id="WEB_CHALLENGE" className="cls-2" data-name="WEB CHALLENGE" transform="translate(615 73)">
                    <tspan x="0" y="0">WEB CHALLENGE</tspan>
                </text>
            </g>
        </svg>
    );
}
