/**
 * logger for newrelic sourcemap uploader
 */
export const composeVitePluginLog =
  (pluginName: string) =>
  (message: string, isError = false): void => {
    const formattedMessage = `@vite-plugin::${pluginName}: ${message}`;

    if (isError) {
      console.error(formattedMessage);

      return;
    }

    console.log(formattedMessage);
  };
