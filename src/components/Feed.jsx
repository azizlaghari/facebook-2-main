import { Box } from '@mui/system';
import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <Box p={2} flex={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
