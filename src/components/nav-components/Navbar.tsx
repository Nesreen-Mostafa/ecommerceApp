"use client"
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Heart, Menu, ShoppingCart, X } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '../ui/badge';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const session = useSession();
  const { cartDetails } = useCart();
  const { wishlistDetails } = useWishlist();
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
  ];
  return (
    <div>
      <NavigationMenu className='text-md max-w-6xl p-5 flex justify-between items-center mx-auto'>

        <NavigationMenuList className='text-3xl font-semibold tracking-tighter'>
          <NavigationMenuItem >
            <Link href="/">E-commerce </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="hidden md:flex font-bold gap-5">
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "text-red-600" : ""}
              >
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        <NavigationMenuList className='font-bold gap-2'>
          <NavigationMenuItem>
            <Link href={'/cart'} className='relative'>

                <span className='absolute top-[-25px] right-[-20px]'>
                  <Badge variant="default" style={{ background: "red" }} >{cartDetails?.numOfCartItems}</Badge>
                </span>
              <ShoppingCart />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <div className='relative '>
                <span className='absolute top-[-25px] right-[-20px]'>
                  <Badge variant="default" style={{ background: "red" }} >{wishlistDetails?.count || "0"}</Badge>
                </span>
              <Link className='' href={'/wishlist'}>
                <Heart />
              </Link>

            </div>
          </NavigationMenuItem>

          {session.data ?
            <NavigationMenuItem>
              <Link onClick={() => signOut({ callbackUrl: "/login" })} href="/"> Logout </Link>
            </NavigationMenuItem> :
            <>
              <NavigationMenuItem>
                <Link href="/login"> Login</Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/register"> Register </Link>
              </NavigationMenuItem>
            </>}




        </NavigationMenuList>
        <button className='md:hidden block'
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ?
            <X />
            :
            <Menu />
          }

        </button>


      </NavigationMenu>
      {openMenu &&
        <div className='p-5'>
          <NavigationMenu className='mx-auto'>
            <NavigationMenuList className="flex flex-col font-bold gap-5 justify-center items-center">
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpenMenu(false)}
                    className={`${pathname === link.href ? "text-red-600" : ""} block text-center`}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      }

    </div>
  )
}
