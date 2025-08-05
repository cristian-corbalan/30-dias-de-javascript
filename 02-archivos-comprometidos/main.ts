'use strict';

function getCompromisedFiles(lastSafeDownload: number, droneLogs: Array<[number, number]>) {
  const compromisedFiles: Set<number> = new Set();

  droneLogs.forEach((log) => {
    if (lastSafeDownload < log[1]) {
      compromisedFiles.add(log[0]);
    }
  })

  return Array.from(compromisedFiles)
    .sort((a, b) => a - b);
}