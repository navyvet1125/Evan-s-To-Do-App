// Using dynamic import to resolve the module path
import('@testing-library/jest-dom/extend-expect').then((module) => {
    console.log(module);
  }).catch((error) => {
    console.error('Module resolution error:', error);
  });