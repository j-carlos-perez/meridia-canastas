"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";
import { CartItem } from "@/lib/shopify";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  giftNote: string;
  deliveryWindow: string;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setGiftNote: (note: string) => void;
  setDeliveryWindow: (window: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [giftNote, setGiftNote] = useState("");
  const [deliveryWindow, setDeliveryWindow] = useState("15 al 20 de Diciembre");

  // Load from localStorage if present and reconcile with PRODUCTS
  useEffect(() => {
    try {
      const saved = localStorage.getItem("meridia_cart");
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        // Ensure variant IDs are strictly up-to-date with PRODUCTS
        const updated = parsed.map((item) => {
          const matched = PRODUCTS.find((p) => p.id === item.id || p.handle === item.id);
          return {
            ...item,
            shopifyVariantId: matched?.shopifyVariantId || item.shopifyVariantId,
          };
        });
        setItems(updated);
      }
      const savedNote = localStorage.getItem("meridia_note");
      if (savedNote) setGiftNote(savedNote);
    } catch {
      // Local storage not available or error
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("meridia_cart", JSON.stringify(items));
      localStorage.setItem("meridia_note", giftNote);
    } catch {
      // ignore
    }
  }, [items, giftNote]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity,
          image: product.image,
          shopifyVariantId: product.shopifyVariantId,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        giftNote,
        deliveryWindow,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addToCart,
        removeFromCart,
        updateQuantity,
        setGiftNote,
        setDeliveryWindow,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
