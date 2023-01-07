import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const ItemCard = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    props.onClick();
    setChecked(event.target.checked);
  };

  const {
    itemData: {
      name,
      image_url,
      description,
      tagline,
      id,
      amount,
      ratings,
    } = {},
    showCheckBoxButton = false,
  } = props;

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia className={classes.cover} image={image_url} title={name} />
        <div
          style={{
            fontWeight: "bold",
            color: "#263f97",
            textAlign: "left",
            marginTop: 12,
          }}
        >
          ₹ {amount}
          <span
            style={{
              float: "right",
              backgroundColor: "green",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "4px",
              fontWeight: "normal",
              fontSize: 12,
            }}
          >
            {ratings} ratings
          </span>
        </div>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Box textAlign={"right"}>
            {/* <StarBorderIcon className={classes.starIcon} />
                        <StarIcon /> */}
            {showCheckBoxButton ? (
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            ) : null}
          </Box>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography component="p" variant="body2">
            {tagline}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 8,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
    backgroundSize: "contain",
    height: 200,
  },
  starIcon: {
    cursor: "pointer",
  },
}));
export default ItemCard;
