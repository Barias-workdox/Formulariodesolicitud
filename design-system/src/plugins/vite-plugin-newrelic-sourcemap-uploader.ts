import { existsSync, readdirSync, unlinkSync } from 'fs';
import path from 'path';

import newRelic from '@newrelic/publish-sourcemap';

import { composeVitePluginLog } from './utils';

import type { NormalizedOutputOptions } from 'rollup';
import type { PluginOption, UserConfig } from 'vite';
/**
 * logger for newrelic sourcemap uploader
 */

const logger = composeVitePluginLog('newrelic-sourcemap-uploader');

type Sourcemap = {
  sourcemapPath: string;
  javascriptUrl: string;
  applicationId: string;
  apiKey: string;
  releaseName?: string;
  releaseId?: string;
  repoUrl?: string;
  buildCommit?: string;
};

export interface NewRelicSourcemapUploaderPluginOptions {
  key: string;
  applicationId: string;
  baseUrl: string;
  runInDevelopment?: boolean;
  enabled?: boolean;
  removeSourcemaps?: boolean;
}

/**
 * Publish a sourcemap to newrelic
 * it wraps the newrelic publishSourcemap function to return a promise
 */
const publishSourcemap = (sourcemap: Sourcemap): Promise<unknown> =>
  new Promise((resolve, reject) =>
    newRelic.publishSourcemap(sourcemap, (err) => (err ? reject(err) : resolve(true))),
  );

/**
 * This plugin is used to upload source maps to newrelic.
 */
export const newRelicSourcemapUploader = ({
  key,
  applicationId,
  baseUrl,
  runInDevelopment = false,
  enabled = false,
  removeSourcemaps = false,
}: NewRelicSourcemapUploaderPluginOptions): PluginOption => {
  if (!key || !baseUrl || !applicationId) {
    if (enabled) {
      logger('Missing key, baseUrl or applicationId for newrelic sourcemap uploader', true);
    }

    return false;
  }

  logger(process.env.NODE_ENV);

  const enableUploadingSourcemaps =
    key && (process.env.NODE_ENV !== 'development' || runInDevelopment) && enabled;

  return {
    name: 'newrelic-sourcemap-uploader',
    apply: 'build',
    config({ build }: UserConfig, { mode }: { mode: string }): UserConfig {
      return {
        build: {
          sourcemap: ((): UserConfig['build']['sourcemap'] => {
            if (build?.sourcemap !== undefined) return build.sourcemap;
            const enableSourcemaps = enableUploadingSourcemaps && mode !== 'development';
            if (enableSourcemaps) return 'hidden';

            return false;
          })(),
        },
      };
    },
    async writeBundle(outputConfig: NormalizedOutputOptions): Promise<void> {
      if (!enableUploadingSourcemaps) {
        return;
      }

      const outputDir = outputConfig.dir || '';

      const assetsDir = path.resolve(outputDir, 'assets');

      const files = readdirSync(assetsDir).filter((fn) => fn.endsWith('.map'));

      logger(`Uploading sourcemaps from ${assetsDir} to Newrelic.`);

      const sourcemaps = files
        .map((file): Sourcemap | null => {
          const sourcePath = file.replace(/\.map$/, '');
          const fileName = path.basename(sourcePath);
          const sourceFilename = path.resolve(assetsDir, sourcePath);

          if (!existsSync(sourceFilename)) {
            logger(`no corresponding source found for "${file}"`, true);

            return null;
          }

          const sourcemapLocation = path.resolve(assetsDir, file);

          try {
            return {
              sourcemapPath: sourcemapLocation,
              javascriptUrl: `${baseUrl}/${fileName}`, //'https://example.com/assets/bundle.js',
              applicationId,
              apiKey: key,
            };
          } catch (error) {
            logger('Error reading sourcemap file ' + sourcemapLocation + ': ' + error, true);

            return null;
          }
        })
        .filter((sourcemap) => sourcemap !== null) as Sourcemap[];

      if (!sourcemaps.length) {
        return;
      }

      logger(`Uploading ${sourcemaps.length} sourcemap files to Newrelic.`);

      const pendingUploads = sourcemaps.map(
        (sourcemap) => (): Promise<unknown> => publishSourcemap(sourcemap),
      );

      try {
        while (pendingUploads.length) {
          /**
           * we upload 10 sourcemaps at a time to avoid rate limiting
           */
          const results = await Promise.allSettled(pendingUploads.splice(0, 10).map((f) => f()));

          results.forEach((result) => {
            if (result.status === 'rejected') {
              logger(`Error uploading sourcemap: ${result.reason}`, true);
            }
          });
        }

        logger('Successfully uploaded sourcemaps to Newrelic.');
      } catch (error) {
        logger(`Something went wrong while uploading the sourcemaps to Newrelic: ${error}`, true);
      }

      if (removeSourcemaps) {
        sourcemaps.forEach(({ sourcemapPath }) => {
          try {
            unlinkSync(sourcemapPath);
          } catch (error) {
            console.error('Error removing sourcemap file', sourcemapPath, ': ', error);
          }
        });

        logger('Successfully removed sourcemaps.');
      }
    },
  };
};
