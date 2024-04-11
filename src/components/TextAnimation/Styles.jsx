import styled from 'styled-components';

export const AnimatedH3 = styled.h3`

        color: #EFE;
        font-size: 3.3rem;
        padding: 0;
        margin: 0;
        display: flex;
        border-right: 2px solid #EFE;
        width: 273px;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 3s steps(10) infinite;

    @keyframes typing {
        from {
            width: 0%;
        }
    }

    @keyframes blinking {
        50% {
            border-color: transparent;
        }
    }

`;