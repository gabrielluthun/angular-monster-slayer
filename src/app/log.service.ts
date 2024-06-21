import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  // Array to store log messages
  private logs: string[] = [];

  // Add a new log message
  addLog(logMessage: string) {
    this.logs.push(logMessage);
  }

  //Collect all log messages and return them
  getLogs(): string[] {
    return this.logs.slice(-8); // Display logs for simulate scrolling
  }

  // Clear all log messages when the game is reset
  clearLogs(): void {
    this.logs = [];
  }
}
