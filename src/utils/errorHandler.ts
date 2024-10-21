export default function errorHandler(status: number, message: string) {
  const err = new Error(message);
  err.message = message;
  (err as any).status = status;
  return err;
}
