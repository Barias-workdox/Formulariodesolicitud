/**
 * Mock function for writing to the clipboard.
 */
export const writeMock = vitest.fn();

/**
 * Mock function for writing text to the clipboard.
 */
export const writeTextMock = vitest.fn();

// Define clipboard mock on navigator object
Object.defineProperty(navigator, 'clipboard', {
  value: {
    write: writeMock,
    writeText: writeTextMock,
  },
});

/**
 * Mock class representing a Clipboard Item.
 */
class ClipboardItemMock {
  /**
   * Items stored in the ClipboardItemMock instance.
   */
  items: Record<string, string | Blob>;

  /**
   * Array of types of items stored in the ClipboardItemMock instance.
   */
  types: string[];

  /**
   * Constructor for ClipboardItemMock.
   */
  constructor(items: Record<string, string | Blob>) {
    this.items = items;
    this.types = Object.keys(items);
  }

  /**
   * Retrieves the Blob associated with the specified type from the ClipboardItemMock.
   */
  async getType(type: string): Promise<Blob> {
    const blob = this.items[type];
    if (!blob) {
      throw new Error(`Item type '${type}' not found in ClipboardItem`);
    }

    return blob instanceof Blob ? blob : new Blob([blob]);
  }
}

// Assign ClipboardItemMock to global ClipboardItem for mock purposes
global.ClipboardItem = ClipboardItemMock;
