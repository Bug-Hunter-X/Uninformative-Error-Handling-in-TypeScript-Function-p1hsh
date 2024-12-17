function printString(str: string): void {
  console.log(str);
}

function handleError(err: Error): void {
  console.error('An error occurred:', err.stack);
}

function processData(data: string | null): void {
  if (data === null) {
    const err = new Error('Data is null');
    err.stack = (new Error()).stack // Add a stack trace to the error
    handleError(err);
    return;
  }

  printString(data);
}

processData(null); 