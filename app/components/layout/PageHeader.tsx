"use client"

import React, { useState } from 'react';
import { AppBar, Toolbar, Avatar, Menu, MenuItem, ListItemIcon, ListItemText, Typography, Divider, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PageHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [signOpen, setSignOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (type: string) => {
    console.log(type)
    if(type === 'sign up'){
      setSignOpen(true)
    } else if(type === 'login in'){
      setLoginOpen(true)
    }
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="bg-white shadow-md py-4">
      <Toolbar className="container m-auto flex justify-between">
        <div className="flex items-center">
          <Image src="/next.svg" alt="" width={100} height={100} className='mr-4'/>
          <div className='text-3xl font-bold text-black mr-4'>
          Community Forum
          </div>
        </div>
        <div className="flex items-center">
          <Button variant="contained" color="primary" size='large' onClick={()=>handleClick('sign up')} className='rounded-lg mr-4'>注册</Button>
          <Button variant="contained" color="primary" size='large' onClick={()=>handleClick('login in')} className='rounded-lg mr-4'>登录</Button>
          <SearchIcon className="text-black text-3xl" />
          <MenuIcon className="text-black text-3xl ml-4 cursor-pointer" aria-controls="customized-menu" aria-haspopup="true" onClick={handleMenu} />
          <Menu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ paper: 'bg-white shadow-lg rounded-lg' }}
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <MenuItem className="flex text-[rgba(0,0,0,.85)]">
                  <ListItemIcon className="min-w-0">
                    <CategoryIcon fontSize="medium" className='mr-4' />
                  </ListItemIcon>
                  <ListItemText primary="Topics" className="" />
                </MenuItem>
                <MenuItem className="flex">
                  <ListItemIcon className="min-w-0">
                    <PostAddIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText primary="Points" className="" />
                </MenuItem>
                <MenuItem className="flex">
                  <ListItemIcon className="min-w-0">
                    <PersonIcon fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText primary="Group" className="" />
                </MenuItem>
              </div>
              <Typography variant="subtitle1" className="font-semibold text-gray-700 mt-8">Categories</Typography>
              <Divider className="my-2" />
              <div className="grid grid-cols-2 gap-4 mt-2">
                <MenuItem className="flex-start">
                  <div className='w-3 h-3 rounded-full bg-green-400 mr-4'/>
                  <ListItemText primary="Newsroom" className="" />
                </MenuItem>
                <MenuItem className="flex-start">
                  <div className='w-3 h-3 rounded-full bg-purple-400 mr-4'/>
                  <ListItemText primary="Suggest an idea" className="" />
                </MenuItem>
                <MenuItem className="flex">
                  <div className='w-3 h-3 rounded-full bg-orange-400 mr-4'/>
                  <ListItemText primary="Off-topic" className="" />
                </MenuItem>
                <MenuItem className="flex">
                  <div className='w-3 h-3 rounded-full bg-red-400 mr-4'/>
                  <ListItemText primary="Share your knowledge" className="" />
                </MenuItem>
                <MenuItem className="flex">
                  <div className='w-3 h-3 rounded-full bg-blue-400 mr-4'/>
                  <ListItemText primary="Share an issue" className="" />
                </MenuItem>
                <MenuItem className="flex">
                  <ListItemText primary="All categories" className="" />
                </MenuItem>
              </div>
            </div>
          </Menu>
          <Avatar className='bg-green-400 ml-4'>N</Avatar>
        </div>
      </Toolbar>

        {/* 注册 */}
        <Dialog open={signOpen} onClose={()=>setSignOpen(false)} fullWidth>
          <DialogTitle>注册</DialogTitle>
          <DialogContent>
            <form className="flex flex-col space-y-4">
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="用户名" variant="outlined" fullWidth />
              <TextField label="密码" type="password" variant="outlined" fullWidth />
              <TextField label="姓名" variant="outlined" fullWidth />
              <TextField label="代词" variant="outlined" fullWidth />
            </form>
            <Button variant="contained" color="primary" className="w-full mt-4">Sign Up</Button>
            <Divider/>
            <div className='text-center text-xl text-[#8d8d94] my-3'>Already have an account?</div>
            <Button color="secondary" variant="outlined" className="w-full mt-2" onClick={()=>{
              setSignOpen(false);
              setLoginOpen(true);
            }}>Log in</Button>
          </DialogContent>
        </Dialog>

        {/* 登录 */}
        <Dialog open={loginOpen} onClose={()=>setLoginOpen(false)} fullWidth>
        <DialogTitle className="text-center text-xl font-bold">Welcome Back</DialogTitle>
        <DialogContent className="flex flex-col items-center">
          <TextField
            margin="dense"
            id="username"
            label="Email / Username"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-4"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            variant="outlined"
            className="mb-4"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <Button variant="contained" color="primary" className="w-full mt-4">Log in</Button>
          <Button color="secondary" className="w-full mt-2" onClick={()=>{
              setLoginOpen(false);
              setSignOpen(true);
            }}>Sign Up</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PageHeader;
