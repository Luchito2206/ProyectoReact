import React from "react";
import styles from "./ItemCard.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 425, height: 425 }}>
      <CardMedia sx={{ height: 200 }} image={item.img} title="green iguana" />
      <CardContent sx={{ height: 160 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {item.title}
        </Typography>
        <Typography  fontSize={"16px"} color="black" textAlign={"center"}>
          {item.description}
        </Typography>
        <Typography className={`${styles.moneyValue} boldText`}>
          U$S {item.price.toLocaleString()} -
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
