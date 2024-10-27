import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Wishlist() {
  const [open, setOpen] = React.useState(false);
  const [wishlistProducts, setWishlistProducts] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
    fetchWishlistProducts(); // Fetch wishlist products when opening dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fetch wishlist items from local storage and display products
  const fetchWishlistProducts = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    // const products = wishlist.map(id => JSON.parse(localStorage.getItem(id))).filter(Boolean);
    setWishlistProducts(wishlist);
  };

  return (
    <React.Fragment>
      <Tooltip title="wishlist">
        <IconButton
          onClick={handleClickOpen}
          size="large"
          aria-controls="account-menu"
          aria-haspopup="true"
        >
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
      </Tooltip>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Wishlist Products</DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description">
            {wishlistProducts.length > 0 ? (
              wishlistProducts.map((product) => (
                <div key={product._id} className="flex items-center my-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                    <img
                        alt={product?._id}
                        src={`http://localhost:8000/${product.productImage.path}`}
                        className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{product.title}</h4>
                    <span>{product.description}</span>
                    <p className="text-gray-600">₹{product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Your wishlist is empty.</p>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
