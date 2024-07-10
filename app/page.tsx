"use client"
import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, Box, Tabs, Tab, Menu, MenuItem, TextField, DialogTitle, DialogContent, Dialog, DialogActions, List, ListItem, ListItemText, Badge, Avatar } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import Image from 'next/image';

const categories = [
  { title: 'Get Started', count: 3, color: 'bg-green-200' },
  { title: 'Newsroom', count: 1, color: 'bg-purple-200' },
  { title: 'Share your knowledge', count: 45, color: 'bg-orange-200' },
  { title: 'Suggest an idea', count: 274, color: 'bg-red-200' },
  { title: 'Share an issue', count: 273, color: 'bg-blue-200' },
  { title: 'Off-topic', count: 7, color: 'bg-yellow-200' },
];

const sections = [
  {
      title: "Get started",
      description: "New to the forum? Here’s what you need to know.",
      items: [
          { text: "Tips and tricks for using the forum", date: "Feb 2023" },
          { text: "Forum Guidelines", date: "Feb 2023" },
          { text: "Welcome to our new Sketch forum", date: "Feb 2023" }
      ],
      itemClass: "bg-green-200 text-green-800"
  },
  {
      title: "Newsroom",
      description: "A place for announcements, AMA events and sneak previews of what’s next.",
      items: [
          { text: "Sketch 100 - A Milestone", date: "14d" },
          { text: "New Mac beta: v99.5 available now", date: "27d" },
          { text: "New Mac beta: v100 available now", date: "Apr 29" }
      ],
      itemClass: "text-purple-800"
  },
  {
      title: "Share your knowledge",
      description: "Ask questions, show off your Sketch skills, or simply browse around.",
      items: [
          { text: "Dear Sketch,", date: "13h" },
          { text: "Prototype - Symbol states", date: "19h" },
          { text: "Is there a way to do proper text inputs/forms?", date: "5d" }
      ],
      itemClass: "text-green-800"
  },
  {
      title: "Suggest an idea",
      description: "Got an idea for Sketch? Share it here, discuss with others, and upvote your favorites.",
      items: [
          { text: "Guide: How to suggest an idea", date: "Feb 2023" },
          { text: "AI function for Grouping and Renaming layers in Sketch", date: "2h" },
          { text: "[In progress] Smart Animations", date: "9h" }
      ],
      itemClass: "bg-yellow-200 text-yellow-800"
  }
];

const posts = [
  {
    title: '👋 Just got here? Say hi!',
    category: 'Off-topic',
    description: 'Every friendship starts with a hello. Introduce yourself to the community, and even share the design you’re most proud of — if you’re feeling up for it 😉',
    replies: 105,
    views: '1.7k',
    activity: 'Jan 26',
    avatars: ['avatar1.png', 'avatar2.png', 'avatar3.png', 'avatar4.png']
  },
  {
    title: 'AI function for Grouping and Renaming layers in Sketch',
    category: 'Suggest an idea',
    votes: 7,
    replies: 3,
    views: 38,
    activity: '3h',
    avatars: ['avatar5.png', 'avatar6.png', 'avatar7.png']
  },
  {
    title: 'Dear Sketch,',
    category: 'Ask the community',
    replies: 1,
    views: 22,
    activity: '5h',
    avatars: ['avatar8.png', 'avatar9.png']
  },
  {
    title: '[In progress] Smart Animations',
    category: 'Suggest an idea',
    votes: 28,
    replies: 18,
    views: 715,
    activity: '10h',
    avatars: ['avatar10.png', 'avatar11.png', 'avatar12.png', 'avatar13.png', 'avatar16.png']
  }
];

const CategoriesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderPosts = (tab: number) => {
    switch (tab) {
      case 0:
        return (<> {sections.map((section, index) => (
          <div key={index} className="p-6 bg-white border-b border-[rgba(0,0,0,.1)] flex-start">
            <div className='flex-center flex-1 pr-8'>
              <div>
                <Image src="/images/start.png" alt='' width={50} height={50} className='mr-4 min-w-[5rem]'/>
              </div>
              <div className='flex-1'>
                <Typography variant="h5" component="h2" className="font-bold mb-2 text-3xl">
                    {section.title}
                  </Typography>
                  <Typography variant="body1" className="mb-2 text-xl">
                    {section.description}
                  </Typography>
              </div>
            </div>
            <List className='w-[50%]'>
              {section.items.map((item, idx) => (
                <div key={idx} className="flex-start">
                  <div className='px-2 py-1 rounded text-xl'>{item.text}</div>
                  <div className="ml-2 text-gray-500">
                    {item.date}
                  </div>
                </div>
              ))}
            </List>
          </div>
        ))}</>)
      default:
        return (<>
        <div className="flex-between border-b bg-white text-[rgba(0,0,0,.55)] px-6 py-4">
          <div className="font-bold flex-1">TOPIC</div>
          <div className="font-bold w-24">REPLIES</div>
          <div className="font-bold w-24">VIEWS</div>
          <div className="font-bold w-24">ACTIVITY</div>
        </div>
        {posts.map((post, index) => (
          <div key={index} className="bg-white flex-between p-6 border-b">
            <div className='flex-1'>
              <Typography variant="h6" className="font-bold">{post.title}</Typography>
              <div className='flex-start'>
                <Typography variant="body2" className="text-gray-500">{post.category}</Typography>
                <div className='flex-start'>
                  {post.description && (
                    <div className="text-gray-500">{post.description}</div>
                  )}
                  {post.votes && (
                    <div className='ml-4 text-primary bg-[rgba(242,103,37,.1)] rounded-full px-3 py-0.5 font-bold'>{`${post.votes} votes`}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-start w-40 flex-wrap ml-8 mr-4">
              {post.avatars.map((avatar, idx) => (
                <Avatar key={idx} alt={`avatar-${idx}`} src={avatar} className="w-8 h-8 mx-0.5 my-0.5" />
              ))}
            </div>
            <Typography variant="body2" className="text-gray-500 w-24">{post.replies}</Typography>
            <Typography variant="body2" className="text-gray-500 w-24">{post.views}</Typography>
            <Typography variant="body2" className="text-gray-500 w-24">{post.activity}</Typography>
          </div>
        ))}</>)
    }
  }
    
  

  return (
    <Container className="mx-auto p-4">
      <Box className="flex justify-between items-center my-4">
        <div className="flex items-center">
          <Button
            aria-controls="category-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            endIcon={<ArrowDropDown />}
          >
            Get Started
          </Button>
          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <TextField
                variant="outlined"
                placeholder="Search..."
                className="mb-4 w-full px-4 py-2"
              />
            <MenuItem onClick={handleMenuClose}>Remove Filter</MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                <span className={`inline-block w-3 h-3 mr-2 ${category.color}`}></span>
                {category.title} ({category.count})
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="categories tabs">
          <Tab label="Categories" />
          <Tab label="Latest" />
          <Tab label="New" />
          <Tab label="Unread" />
          <Tab label="Top" />
        </Tabs>
        <Button variant="contained" color="primary" size='large' onClick={handleClickOpen} className='rounded-lg'>New Topic</Button>
      </Box>
      
        {renderPosts(selectedTab)}
      
        <Dialog open={open} onClose={handleClose} fullWidth>
          <DialogTitle>creat a new Topic</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Topic Title"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Content"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
    </Container>
  );
};

export default CategoriesPage;
