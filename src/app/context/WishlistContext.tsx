import { createContext, useContext, useEffect, useState } from "react";
import { getUserWishlist } from "../actions/wishlist.action";
import { Wishlist } from "../types/wishlist.model";

interface wishlistContextType {
  wishlistDetails: Wishlist | null;
  setWishlistDetails: React.Dispatch<React.SetStateAction<Wishlist | null>>;
  getWishlistDetails: () => Promise<void>;
}

const WishlistContext = createContext<wishlistContextType>({
  wishlistDetails: null,
  setWishlistDetails: () => {},
  getWishlistDetails: async () => {},
});

export default function WishlistContextProvider({ children }: { children: React.ReactNode }) {
  const [wishlistDetails, setWishlistDetails] = useState<Wishlist | null>(null);

  async function getWishlistDetails() {
    const response = await getUserWishlist();
    setWishlistDetails(response?.data);
  }

  useEffect(() => {
    getWishlistDetails();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistDetails, setWishlistDetails, getWishlistDetails }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  return context;
}
