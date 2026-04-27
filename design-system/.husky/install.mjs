if (
  process.env.NODE_ENV === 'production' ||
  process.env.CI === 'true' ||
  process.env.GITLAB_CI === 'true'
) {
  process.exit(0);
}
const husky = (await import('husky')).default;
husky.install();
