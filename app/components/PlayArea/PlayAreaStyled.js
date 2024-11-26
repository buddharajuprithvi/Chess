import styled from 'styled-components';

export const Square = styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid black;
    display: flex;
    align-content: center;
    justify-content: center;
    background: ${props => props.isDark ? "#6c6c6cß" : "#c6c6c6"};
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SlotContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    height: 40px;
    width: 40px;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-weight: bold;
`;