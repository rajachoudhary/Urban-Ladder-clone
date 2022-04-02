import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const navigate = useNavigate()
  const handleOrder = () => {
  
    alert("Order Placed");
    navigate("/");
  
  };

  return (
    <Container
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        minWidth: 300,
        width: 600,
        marginTop: 10,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleOrder}
        sx={{
          backgroundColor: "#ed7745",
          marginTop: 8,
          width: 200,
          height: 50,
          color: "#fff",
          fontSize: "12px",
          "&:hover": {
            backgroundColor: "#ccc",
          },
        }}
      >
        PLACE ORDER
      </Button>
    </Container>
  );
}
