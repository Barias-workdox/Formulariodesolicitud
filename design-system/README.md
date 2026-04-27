---
Code Owner: Emisael Carrera
Backup: Omar Garay
---

# WebdoxCLM Design System

A comprehensive component library for WebdoxCLM applications.

## Getting Started

### Installation

```bash
npm i @webdoxclm/design-system
```

### Development Setup

```bash
# Install dependencies
npm i

# Run Storybook locally
npm run storybook

# Run tests
npm run test
```

### Building

```bash
# Build Storybook
npm run build:storybook

# Build production package
npm run build:package

# Build everything
npm run build
```

## Integration

### Setup Base Provider

You must wrap your application with the `DesignSystemProvider` component:

```tsx
import { DesignSystemProvider } from '@webdoxclm/design-system/contexts/design-system-provider';

return (
  <DesignSystemProvider>
    {/* your application */}
  </DesignSystemProvider>
);
```

### Theming

To customize the theme:

```tsx
import { createAppTheme } from '@webdoxclm/design-system/themes';

// Create custom theme
export const portalLightTheme = createAppTheme<Partial<typeof portalColorsLight>>(
  { colors: portalColorsLight },
  overridesLight,
);

// Use custom theme
<DesignSystemProvider theme={portalLightTheme}>
  {/* your application */}
</DesignSystemProvider>
```

### Styled Components

Use themed styling utilities for your app:

```tsx
import { 
  themedStyledGeneric, 
  themedWithStyleGeneric, 
  themedUseStyletronGeneric 
} from '@webdoxclm/design-system/themes';

// Add your custom theme type
export type CustomTheme = PortalTheme;

export const themedStyled = themedStyledGeneric<CustomTheme>();
export const themedWithStyle = themedWithStyleGeneric<CustomTheme>();
export const themedUseStyletron = themedUseStyletronGeneric<CustomTheme>();
```

### Toaster Setup

Create a hook in your app:

```tsx
import { useContext } from 'react';
import {
  ToasterProps,
  getToasterContainerContext,
  toaster,
} from '@webdoxclm/design-system/notification/toast';

export const ToasterContainerContext = getToasterContainerContext();

export function useToaster(): ToasterProps {
  const { updateToasterContainerProps } = useContext(ToasterContainerContext);
  return toaster(updateToasterContainerProps);
}
```

Add the provider to your app root:

```tsx
import { ToasterContainerProvider } from '@webdoxclm/design-system/notification';
import { ToasterContainerContext } from 'utils/toaster';

<ToasterContainerProvider toasterContext={ToasterContainerContext}>
  {/* your application */}
</ToasterContainerProvider>
```

## Contributing

### Branch Strategy

- Create branches from `master` and target `master` (trunk-based development)
- Never deploy directly from `master` pipeline - use the release process

### Commit Guidelines

We use conventional commits:

```
[type]([component name]): [commit header]

[optional commit body]

[commit footer]
```

Example:
```
feat: button: add component new properties, tests and stories
  
[JIRA-ID][username]
```

For more information, see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Release Process

1. **Fetch latest tags**: `git fetch --tags`
2. **Create release branch**: Use naming convention `chore/RS-{releaseNumber}`
3. **Create GitLab MR**: From your release branch to `master`
4. **Run release script**:
   ```bash
   # Automatic version detection
   npm run release
   
   # Specify version type
   npm run release:['major'|'minor'|'patch']
   ```
5. **Push changes and tags**: `git push --follow-tags origin chore/RS-{releaseNumber}`
6. **Merge GitLab MR**: This will start the deployment process

## Hotfix Process

When fixing bugs in older versions used by consumer applications:

1. **Identify production version** in consumer app
2. **Create hotfix branch from correct tag**:
   ```bash
   git fetch --tags
   git checkout -b hotfix/ISSUE-ID [version-tag]
   ```
3. **Fix the bug** with focused changes
4. **Create custom release** with patch notation:
   ```bash
   standard-version --release-as [base-version.patch-number]
   # Example: standard-version --release-as 3.0.0.1
   ```
5. **Push changes and tags**:
   ```bash
   git push --follow-tags origin hotfix/ISSUE-ID
   ```
6. **Create and merge MR** to trigger deployment
7. **Update consumer app**:
   ```bash
   npm i @webdoxclm/design-system@[hotfix-version]
   ```

### Versioning Format

Hotfixes follow this pattern: `3.0.0.1`
- Major.Minor.Patch.Hotfix

```
3.0.0.1
│ │ │ └── Hotfix counter (incremental)
│ │ └──── Patch version
│ └────── Minor version
└──────── Major version
```

## Resources

- Published Storybook: [https://design-system.webdoxclm.com](https://design-system.webdoxclm.com)
