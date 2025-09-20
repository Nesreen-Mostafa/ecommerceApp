"use client"
import { SessionProvider } from "next-auth/react";
import CartContextProvider from "./CartContext";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import { store } from "@/lib/store";
import WishlistContextProvider from "./WishlistContext";




export function AuthProvider({ children }: { children: React.ReactNode }) {

    return <SessionProvider>
        <CartContextProvider>
            <WishlistContextProvider>
                <Provider store={store}>
                    {children}

                </Provider>


            </WishlistContextProvider>
        </CartContextProvider>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />

    </SessionProvider>

}