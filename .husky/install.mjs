if (process.env.NODE_ENV === 'production' || process.env.CI === 'false')
  process.exit(0);

const husky = (await import('husky')).default;
console.log(husky());

export {};
