// Importing Box component from MUI system library
import { Box } from "@mui/system";

// Importing React library
import React from "react";

// Importing Post component from local file
import Post from "./Post";

// Defining Feed component
const Feed = () => {
  // Returning Box component with padding of 2 and flex of 2,
  // containing five instances of Post component
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

// Exporting Feed component as the default export
export default Feed;
