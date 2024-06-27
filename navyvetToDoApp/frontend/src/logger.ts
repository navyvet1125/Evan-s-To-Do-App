// src/logger.ts

// Define a type for the log levels to ensure only valid levels can be used
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

// Logger function that respects the VITE_LOG_LEVEL setting
export function log(message: string, level: LogLevel = 'info'): void {
  // Define the log levels in order of verbosity
  const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];

  // Get the current log level from environment variables or default to 'info'
  const currentLogLevel: LogLevel = (import.meta.env.VITE_LOG_LEVEL as LogLevel) || 'info';

  // Check if the current log message's level is greater than or equal to the environment's log level
  if (levels.indexOf(level) >= levels.indexOf(currentLogLevel)) {
    // Log the message to the console with a level prefix
    console.log(`${level.toUpperCase()}: ${message}`);
  }
}