import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const RootContainer = styled(Container)({
  flexGrow: 1,
  paddingTop: 20,
});

const CustomAppBar = styled(AppBar)({
  marginBottom: 20,
});

const CardWrapper = styled(Grid)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(2),
}));

const HomePage = () => {
  return (
    <div>
      <CustomAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Inventory App
          </Typography>
        </Toolbar>
      </CustomAppBar>
      <RootContainer maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <CardWrapper>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Products
                  </Typography>
                  <Typography variant="body2">
                    View and manage your inventory of products.
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View Products
                  </Button>
                </CardContent>
              </Card>
            </CardWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWrapper>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Orders
                  </Typography>
                  <Typography variant="body2">
                    Track and manage customer orders.
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View Orders
                  </Button>
                </CardContent>
              </Card>
            </CardWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardWrapper>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Analytics
                  </Typography>
                  <Typography variant="body2">
                    Visualize sales and inventory analytics.
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </CardWrapper>
          </Grid>
        </Grid>
      </RootContainer>
    </div>
  );
};

export default HomePage;
