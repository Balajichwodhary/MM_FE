import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconUser,
  IconLogout,
  IconShoppingBag,
} from '@tabler/icons';


import "./index.css"


import React from 'react'

function Header() {
  return (
    <div className='header-container'>
      <Link to='/'>
        <IconHome2 stroke={2}/>
      </Link>
      <Link to='/community'>
         <IconShoppingBag stroke={2} />
      </Link>
      <Link  to='/profile'>
      <IconUser stroke={2} />
      </Link>
      <Link>
      <IconLogout stroke={2}/>
      </Link>
    </div>
  )
}

export default Header


// const useStyles = createStyles((theme) => ({
//   link: {
//     width: 50,
//     height: 50,
//     borderRadius: theme.radius.md,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

//     '&:hover': {
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
//     },
//   },

  
//   active: {
//     '&, &:hover': {
//       backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
//       color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
//     },
//   },
// }));

// const navigatingLinks= ['/','/community','/profile']


// interface NavbarLinkProps {
//   icon: TablerIcon;
//   label: string;
//   active?: boolean;
//   onClick?: void;
// }

// function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
//   const { classes, cx } = useStyles();
//   return (

//     <Tooltip label={label} position="right" transitionDuration={0}>
//       <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
//         <Icon stroke={1.5} />
//       </UnstyledButton>
//     </Tooltip>
//   );
// }

// const mockdata = [
//   { icon: IconHome2, label: 'Home' },
//   { icon: IconShoppingBag , label: 'Shop Now' },
//   { icon: IconUser, label: 'Pofile' },
  
// ];

// export  default function Header() {
//   const [active, setActive] = useState(2);
//   let x=0
//   const links = mockdata.map((link, index,) => (
//     <Link to={`${navigatingLinks[x++]}`} key={x}>
//     <NavbarLink
//       {...link}
//       key={link.label}
//       active={index === active}
//       onClick={() => setActive(index)
//       <Link}
//     />
//     </Link>
//   ));

  // return (
    // <Navbar height={80} width={{ base: 750}} p="md">
    //   <Center>
    //     <img className="logo" src='https://images-platform.99static.com//MT_I-gKmfVW-ek3D2oIEUtC1wQ8=/0x0:2000x2000/fit-in/590x590/99designs-contests-attachments/81/81766/attachment_81766348' alt='logo' />
    //   </Center>
    //   <Navbar.Section grow mt={50}>
    //     <div>{links}</div>
    //   </Navbar.Section>

    //   <Navbar.Section>
    //     <div>
    //       <NavbarLink icon={IconLogout} label="Logout" />
    //     </div>
    //   </Navbar.Section>
    // </Navbar>

   
  // );
// }





















// import { Link } from "react-router-dom";
// import { Component } from "react";
// import "./index.css"


// class Header extends Component{
  
//     render(){
//         return(
//             <div className="header-container">
            
//             <Link className="nav-link" to="/">Home</Link>
            
            
//             <Link className="nav-link" to="/profile">profile</Link>
             
//     </div >
//         )
//     }
// }

// export default Header


    