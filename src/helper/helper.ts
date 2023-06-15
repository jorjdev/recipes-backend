export function generateUniqueId(): string {
    const uniqueId = Math.random().toString(36).substring(2, 11);
    return uniqueId;
  }
  