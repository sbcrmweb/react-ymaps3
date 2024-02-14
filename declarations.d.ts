declare global {
  interface Window {
    ymaps3: typeof import('@yandex/ymaps3-types/index');
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
