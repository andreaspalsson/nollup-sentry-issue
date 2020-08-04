# nollup-sentry-issue

Reproduction case of Sentry failing to import types when building with Nollup.

Created with [create-nollup-app](https://github.com/PepsRyuu/create-nollup-app)

When using [Sentry](https://github.com/getsentry/sentry-javascript/tree/master/packages/browser) in the project Nollup fails to handle the enum generate with typescript which makes them `undefined` when imported which cause a crash in `Sentry.captureException` breaking the application.
