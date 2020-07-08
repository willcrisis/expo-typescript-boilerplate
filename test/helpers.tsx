import React, { ReactNode } from 'react';
import reactRenderer from 'react-test-renderer';
import { ThemeProvider, theme } from 'react-native-design-system';

/* eslint-disable import/prefer-default-export */
export const createWithTheme = (children: ReactNode) =>
    reactRenderer.create(
        <ThemeProvider value={theme}>{children}</ThemeProvider>
    );
/* eslint-enable import/prefer-default-export */
