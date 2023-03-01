// importing required icons and components from Material-UI library
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Favorite } from "@mui/icons-material";

// defining the Post component
const Post = () => {
  // returning a Card component that displays a post
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          // displaying the avatar of the author of the post
          <Avatar
            aria-label="recipe"
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          ></Avatar>
        }
        action={
          // displaying a more options icon button
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Abdul Aziz" // displaying the name of the author of the post
        subheader="September 14, 2022" // displaying the date of the post
      />
      <CardMedia
        component="img"
        height="20%"
        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish" // setting alt text for the image
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. // displaying the content of the post
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteIcon />} checkedIcon={<Favorite />} /> //
          displaying a favorite icon that can be checked or unchecked
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon /> // displaying a share icon
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
