# Nollup Sentry issue

Reproduction case of Sentry Types becoming `undefined` when building with Nollup. This is caused by https://github.com/PepsRyuu/nollup/issues/116

Created with [create-nollup-app](https://github.com/PepsRyuu/create-nollup-app)

When using [Sentry](https://github.com/getsentry/sentry-javascript/tree/master/packages/browser) in the project Nollup fails to handle the enum generated with typescript which makes them `undefined` when imported which cause a crash in `Sentry.captureException` breaking the application.

# Workaround
You can avoid the crash by not calling `Sentry.init()` when you are using Nollup
