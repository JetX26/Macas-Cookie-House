import { create } from "zustand";
import FbIcon from '../assets/facebook-icon.png'
import InstaIcon from '../assets/instagram-icon.png'
import EtsyIcon from '../assets/etsy-icon.png'
import shopImage from '../assets/shopimages/placeholder1.jpg'
import { StaticImageData } from "next/image";
import { totalmem } from "os";



interface zustandStoreInterface {
    myButtons: myButtonsInterface[],
    socialMediaIcons: socialMediaIcons[],
    shopItems: shopItemInterface[],
    selectedCartItem: shopItemInterface | null,
    setSelectedCartItem: (item: shopItemInterface | null) => void,
    cart: shopItemInterface[],
    addToCart: (item: shopItemInterface) => void,
    removeFromCart: (item: shopItemInterface) => void,
    increaseQty: (data: number) => void,
    increaseCartQty: (data: number) => void,
    totalPrice: number | any,
    setTotalPrice: () => void,
    decreaseQty: (data: number) => void,
    decreaseCartQty: (data: number) => void,
    cartForMapping: any[],
    mappedCart: () => void,
}


interface myButtonsInterface {
    name: string,
    link: string
}

interface socialMediaIcons {
    name: string,
    icon: StaticImageData,
    link: string
}

export interface shopItemInterface {
    name: string,
    image: StaticImageData,
    price: number,
    id: number | any,
    quantity: number | any,
    priceId: string
}




export const useZustandStore = create<zustandStoreInterface>((set, get) => ({
    totalPrice: 0,
    setTotalPrice: () => {
        const price = get().totalPrice
        if (price >= 0) {
            set({
                totalPrice: get().cart.reduce((total, item) => total += item.price * item.quantity, 0),
            })
        } else {
            return
        }
    },
    increaseQty: (data: number) => {
        const items = get().shopItems.map((item) => {
            if (item.id === data) {
                return {
                    ...item,
                    quantity: item.quantity += 1
                }
            }
            return item;
        })

        set({
            shopItems: items,
        })
    },
    decreaseQty: (data: number) => {
        const items = get().shopItems.map((item) => {

            const newQty = Math.max(0, item.quantity - 1)

            if (item.id === data) {
                return {
                    ...item,
                    quantity: newQty
                }
            }
            return item;
        })
        set({
            shopItems: items,
        })
    },
    cartForMapping: [],
    mappedCart: () => {
        set({
            cartForMapping: get().cart.map((item) => item)
        })
    },
    addToCart: (selectedItem) => {

        const shopItem = get().cart.filter((item) => item.id === selectedItem.id)[0]
        console.log(shopItem)



        if (!shopItem) {
            set({
                cart: [...get().cart, selectedItem]
            })
        } else {
            console.log('item is in cart')
            const cartCopy = [...get().cart]
            const index = get().cart.indexOf(shopItem)
            cartCopy[index].quantity += shopItem.quantity

            set({
                cart: cartCopy
            })
        }

        const sessionStorage = window.sessionStorage;

        const cartItemsJSON = JSON.stringify(get().cart)
        sessionStorage.setItem('cartItems', cartItemsJSON)

        console.log(get().cart)

    },
    removeFromCart: (itemToRemove) => {
        set((prev) => ({
            cart: prev.cart.filter((item) => item.id !== itemToRemove)
        }))
    },
    cart: [],
    increaseCartQty: (data: number) => {
        const found = get().cart.find((item) => item.id === data)
        let items: shopItemInterface[] = []
        if (found !== undefined) {
            items = get().cart.map((item) => {
                if (item.id === data) {
                    return {
                        ...item,
                        quantity: item.quantity += 1
                    }
                } else {
                    return item;
                }
            })
        }
        const searchInventory = get().shopItems.map((item) => {
            if (item.id === data) {
                return {
                    ...item,
                    quantity: item.quantity += 1
                }
            } else {
                return item;
            }
        })

        set({
            cart: items,
            shopItems: searchInventory
        })
    },
    decreaseCartQty: (data: number) => {
        const found = get().cart.find((item) => item.id === data)
        let items: shopItemInterface[] = []
        if (found !== undefined) {
            items = get().cart.map((item) => {

                const newQty = Math.max(0, item.quantity - 1)

                if (item.id === data) {
                    return {
                        ...item,
                        quantity: newQty
                    }
                } else {
                    return item;
                }
            })
        }


        const searchInventory = get().shopItems.map((item) => {
            const newQty = Math.max(0, item.quantity - 1)

            if (item.id === data) {
                return {
                    ...item,
                    quantity: newQty
                }
            } else {
                return item;
            }
        })


        set({
            cart: items,
            shopItems: searchInventory
        })
    },
    selectedCartItem: null,
    setSelectedCartItem: (data) => {
        set({
            selectedCartItem: data
        })
    },

    myButtons: [
        {
            name: 'HOME',
            link: '/'
        },
        {
            name: 'SHOP',
            link: '/fullselection'
        },
        {
            name: 'ABOUT',
            link: 'About'
        },
        {
            name: 'CONTACT',
            link: 'Contact'
        }
    ],
    socialMediaIcons: [
        {
            name: 'Facebook',
            icon: FbIcon,
            link: 'https://www.facebook.com/profile.php?id=100090217054367'
        },
        {
            name: 'Instagram',
            icon: InstaIcon,
            link: 'https://www.instagram.com/macascookiehouse/'
        },
        {
            name: 'Etsy',
            icon: EtsyIcon,
            link: 'https://www.etsy.com/shop/MacasCookieHouse?ref=shop-header-name&listing_id=1411405764&from_page=listing'
        },
    ],
    shopItems: [
        {
            name: 'Baklava Box',
            image: shopImage,
            price: 15,
            id: 1,
            quantity: 0,
            priceId: 'price_1OfF7NBD5NjyDBs6TqIbFRr3'
        },
        {
            name: 'Sugar Cookies',
            image: shopImage,
            price: 15,
            id: 2,
            quantity: 0,
            priceId: 'price_1OfF84BD5NjyDBs6HNpz2ZSU'
        },
        {
            name: 'Bombici',
            image: shopImage,
            price: 15,
            id: 3,
            quantity: 0,
            priceId: 'price_1OfF8HBD5NjyDBs6Z0nqxBLv'
        },
        {
            name: 'Bayadera',
            image: shopImage,
            price: 15,
            id: 4,
            quantity: 0,
            priceId: 'price_1OfFA3BD5NjyDBs6tTEJA1Ei'
        },
        {
            name: 'Oblanda',
            image: shopImage,
            price: 15,
            id: 5,
            quantity: 0,
            priceId: 'price_1OfFAEBD5NjyDBs6IqsePfmD'
        },
        {
            name: 'Celufki',
            image: shopImage,
            price: 15,
            id: 6,
            quantity: 0,
            priceId: 'price_1OfFBABD5NjyDBs6TZjv2dch'
        },
        {
            name: 'Ravanliya',
            image: shopImage,
            price: 15,
            id: 7,
            quantity: 0,
            priceId: 'price_1OfFCTBD5NjyDBs6zr3f5Bue'
        },
        {
            name: 'Tatliya',
            image: shopImage,
            price: 15,
            id: 8,
            quantity: 0,
            priceId: 'price_1OfFDFBD5NjyDBs6DM4mq69q'
        },
        {
            name: 'Gurabii',
            image: shopImage,
            price: 15,
            id: 9,
            quantity: 0,
            priceId: 'price_1OfFDhBD5NjyDBs6yfDUJRVy'
        },
    ]
}));

