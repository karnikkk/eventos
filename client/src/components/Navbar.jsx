import React, {  useState } from 'react'
import { 
  Box,
  Button,
  Menu,
  MenuList } from '@material-ui/core'
import styled from 'styled-components'
import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai"
import {useAlert} from 'react-alert'
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions';

const Container = styled.div`
    height: 60px;
     background-color:white;
    
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
  display: flex;
  align-items: center;
`;


const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;

`;
const Right = styled.div` flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;


const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover{
    color:darkorange;
  }
 `;
const Navbar = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {user,loading} = useSelector(state => state.auth)
  
  const [anchorEl,setAnchorEl]=useState(null);
  
  const handleOpenMenu = e =>{
    setAnchorEl(e.currentTarget);
  }
  const handleMenuClose = () =>{
    setAnchorEl(null)
  }

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('logged out successfully.')
  }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>EVENTOS</Logo>
                </Center>
                <Right>
                  
                  <Link to = {"/Services"} style={{textDecoration:'none',color:'black'}}>
                    <MenuItem>SERVICES</MenuItem>
                  </Link>
                  
                 

                    <MenuItem >
                        {user ? (

                          <Box className='profile'>
                              <Button className='user' onClick={handleOpenMenu} area-controls='menu' aria-haspopup='true'>
                                <AiOutlineUser />
                                {user && user.username}
                              </Button>
                          <Menu anchorEl={anchorEl} onClose={handleMenuClose} open={Boolean(anchorEl)}>
                            <MenuList style={{width:'80px',cursor:'pointer'}} onClick={handleMenuClose}>
                              <Link to='/me' style={{textDecoration:'none',color:'black'}}>
                              Profile
                              </Link>
                              </MenuList>

                              <MenuList style={{width:'80px',cursor:'pointer'}} onClick={handleMenuClose}>
                              <Link to='/NotificationB' style={{textDecoration:'none',color:'black'}}>
                              Notification
                              </Link>
                              </MenuList>


                             
                            <MenuList style={{width:'80px',cursor:'pointer'}} onClick={handleMenuClose}>
                              <Link to="/" onClick={logoutHandler} style={{textDecoration:'none',color:'red'}}>
                                LogOut
                                </Link>
                                </MenuList>
                          </Menu>
                          </Box>
                         
                         ) : !user && 
                         <Link to = "/Login" style={{textDecoration:'none',color:'black'}}>LOGIN</Link>
                        }
                        
                    </MenuItem>
                
          </Right>

            </Wrapper>
           
        </Container>
    )
}

export default Navbar

