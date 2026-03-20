import { CartItem } from "@/types/door";

const CART_KEY = "doorCart";
const EDITING_KEY = "editingItem";

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(CART_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveCartItems(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addCartItem(item: CartItem): CartItem[] {
  const items = getCartItems();
  items.push(item);
  saveCartItems(items);
  return items;
}

export function removeCartItem(itemId: number): CartItem[] {
  const items = getCartItems().filter((item) => item.id !== itemId);
  saveCartItems(items);
  return items;
}

export function updateCartItem(
  itemId: number,
  updatedData: Partial<CartItem>
): CartItem[] {
  const items = getCartItems();
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedData };
    saveCartItems(items);
  }
  return items;
}

export function updateCartItemQuantity(
  itemId: number,
  quantity: number
): CartItem[] {
  return updateCartItem(itemId, { quantity });
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
}

export function getCartCount(): number {
  return getCartItems().reduce((sum, item) => sum + item.quantity, 0);
}

export function setEditingItem(item: CartItem): void {
  localStorage.setItem(
    EDITING_KEY,
    JSON.stringify({ ...item, itemId: item.id })
  );
}

export function getEditingItem(): (CartItem & { itemId: number }) | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(EDITING_KEY);
  return data ? JSON.parse(data) : null;
}

export function clearEditingItem(): void {
  localStorage.removeItem(EDITING_KEY);
}
