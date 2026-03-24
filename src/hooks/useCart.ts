"use client";

import { useState, useEffect, useCallback } from "react";
import { CartItem } from "@/types/door";
import * as cartLib from "@/lib/cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setItems(cartLib.getCartItems());
    setIsLoaded(true);

    const handleCartUpdate = () => {
      setItems(cartLib.getCartItems());
    };
    window.addEventListener('cart-updated', handleCartUpdate);
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  const notify = () => window.dispatchEvent(new Event('cart-updated'));

  const addItem = useCallback((item: CartItem) => {
    const updated = cartLib.addCartItem(item);
    setItems([...updated]);
    notify();
  }, []);

  const removeItem = useCallback((itemId: number) => {
    const updated = cartLib.removeCartItem(itemId);
    setItems([...updated]);
    notify();
  }, []);

  const updateQuantity = useCallback((itemId: number, quantity: number) => {
    const updated = cartLib.updateCartItemQuantity(itemId, quantity);
    setItems([...updated]);
    notify();
  }, []);

  const updateItem = useCallback(
    (itemId: number, data: Partial<CartItem>) => {
      const updated = cartLib.updateCartItem(itemId, data);
      setItems([...updated]);
      notify();
    },
    []
  );

  const clearAll = useCallback(() => {
    cartLib.clearCart();
    setItems([]);
    notify();
  }, []);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    count,
    isLoaded,
    addItem,
    removeItem,
    updateQuantity,
    updateItem,
    clearAll,
  };
}
