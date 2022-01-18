import React from  'react';
import{
    Container,
    HeaderComponent,
    Logo,
    Menu,
    MenuItem,
    MenuItemLink,
    MenuItemButton,
    ContainerHeaderInfo,
    ContainerText,
    TitleHeader,
    Text,
    ItemButton
} from './styles';

function Header() {
    return(
        <Container>
            <HeaderComponent>

                <Logo>
                    Wylddyson Galvão 
                </Logo>

                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            Home
                        </MenuItemLink>
                    </MenuItem>
                        <MenuItemLink>
                            Sobre
                        </MenuItemLink>
                    <MenuItem>
                        <MenuItemLink>
                            Trabalhos
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemButton>
                            Contato
                        </MenuItemButton>
                    </MenuItem>
                    
                </Menu>

            </HeaderComponent>
            <ContainerHeaderInfo>
                    
                <ContainerText>
                    <TitleHeader>
                        Olá! eu sou <br/> Wylddyson Galvão
                    </TitleHeader>
                    <Text>
                        Sou desenvolvedor full-stack com mais de 6 anos de experiência.
                        <br/>
                        Atualmente tenho mais de 20 projetos realizados, com vários clientes.
                        <br/>
                        Que tal conhecer meus trabalhos?
                    </Text>
                    <ItemButton>
                        Contrate agora
                    </ItemButton>
                </ContainerText>
            </ContainerHeaderInfo>
        </Container>
    )
}

    export default Header;