import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: auto;
    background-color: #e8f7fb;
`;

export const HeaderComponent = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;    
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px  #f9f9f9;
    padding: 0px 10px;
    margin-top: 10px;
`;

export const Logo = styled.a`
    color: #2c344f;
    font-size: 18px;
    font-weight: bold;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin:0;
    padding: 0;
`;

export const MenuItem = styled.li`
    margin: 0 20px;

`

export const MenuItemLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s ease-in-out; 
    color: #2c344f;

    &:hover {
        color: #e56611;
    }
`

export const MenuItemButton = styled.a`
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #e56611;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 6px  #d9d9d9;
    transition: 0.2s ease-in-out; 

    &:hover {
        transform: scale(1.1);
    }
 
`;

export const ItemButton = styled.a`
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: #e56611;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 6px  #d9d9d9;
    transition: 0.2s ease-in-out; 

    &:hover {
        transform: scale(1.1);
    }
 
`;

export const ContainerHeaderInfo = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 80%;
    height: 70vh;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: auto;
`

export const TitleHeader = styled.h1`
    font-size: 50px;
    font-weight: 600;
    color: #2c344f;
    margin: 0;
    padding: 0;
    text-align: start;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #82889b;
    margin: 15px 0;
    padding: 0;
`