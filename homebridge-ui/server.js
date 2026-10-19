// Entry point Config UI X runs for the shade tools page. The logic is compiled
// TypeScript in dist/, so `npm run build` has to have run first; installs from
// npm ship dist/ already.
import { startUiServer } from '../dist/uiServer.js';

startUiServer();
