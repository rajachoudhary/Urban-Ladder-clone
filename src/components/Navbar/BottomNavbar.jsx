import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import style from "../../css/bottomNavbar.module.css"
// import './index.css';
import { Menu, Dropdown, Button } from 'antd';
const menu = (
  <Menu className={style.bottomNavbarHover} >
    <Menu.ItemGroup>
      <Menu.Item className={style.menuItem}>
        <a className={style.hoverHeading} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Living
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Fabric Sofas
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Liverpool Sofa Sets
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Lounge and Ancent Chairs
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Sofa Beds
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Lounge and Ancent Chairs
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Coffee Tables and Side Tables
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Recliners
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Living Storage
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Shoe racks
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          TV Units
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Bookshelves
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Balcony & Outdoor
        </a>
      </Menu.Item>
  </Menu.ItemGroup>
  <div className={style.verticleLine}></div>
    <Menu.ItemGroup>
      <Menu.Item className={style.menuItem}>
        <a className={style.hoverHeading} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Bedroom & Dinning
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Beds
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
           Mattresses
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Bedside Tables
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Wardrobes
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          chest of Drawers
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Dinning Chairs
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Dinning Table Sets
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Dinning Storage
        </a>
      </Menu.Item>
  </Menu.ItemGroup>
  <div className={style.verticleLine}></div>
    <Menu.ItemGroup>
      <Menu.Item className={style.menuItem}>
        <a className={style.hoverHeading} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Others
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Study Tables
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Study Chairs
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Bedsheets
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Carpets
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Lighting
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Curtains
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          wall Decor
        </a>
      </Menu.Item>
      
  </Menu.ItemGroup>
  <div className={style.verticleLine}></div>
    <Menu.ItemGroup>
      <Menu.Item className={style.menuItem}>
        <a className={style.hoverHeading} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Stores
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Hyderabad
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
         Pune
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Mumbai
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Bangalore
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         NCR
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Chennai
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Hyderabad
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Coimbatore
        </a>
      </Menu.Item>
  </Menu.ItemGroup>
  <div className={style.verticleLine}></div>
    <Menu.ItemGroup>
      <Menu.Item className={style.menuItem}>
        <a className={style.hoverHeading} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Promotios
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Products of 70% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Products of 60% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 50% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 40% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 35% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 30% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 25% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 20% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Products of 10% OFF
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          All Products
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          All Decor on sale
        </a>
      </Menu.Item>
      <Menu.Item className={style.menuItem}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Balcony & Outdoor
        </a>
      </Menu.Item>
  </Menu.ItemGroup>
    
  </Menu>
);
export const BottomNavbar = ()=>{

    return(
      <>
      <div className={style.bottomNavbarContainer}>
        <Dropdown overlay={menu}  >
            <Button className={style.button}>Sale</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Living</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Bedroom</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Dining</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Storage</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Study</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Kids Room</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Mattresses</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Decor</Button>
        </Dropdown>
        <Dropdown overlay={menu}>
            <Button className={style.button}>Collections</Button>
        </Dropdown>
        
      </div>
      <hr style={{marginTop:"15px"}}/>
      </>
    );
};
