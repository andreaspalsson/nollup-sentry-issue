import * as Sentry from '@sentry/browser';
import { Severity, LogLevel } from '@sentry/types';
console.log('Severity', Severity)
console.log('LogLevel', LogLevel)

Sentry.init({
  dsn: '',
});
// Sentry.captureMessage('Hello, world!');
Sentry.captureException(new Error('Good bye'));

document.body.textContent = 'Hello World!';