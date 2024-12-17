function printString(str: string): void {
  console.log(str);
}

function handleError(err: Error): void {
  console.error('An error occurred:', err.message);
}

function processData(data: string | null): void {
  if (data === null) {
    handleError(new Error('Data is null'));
    return;
  }

  printString(data);
}

processData(null);