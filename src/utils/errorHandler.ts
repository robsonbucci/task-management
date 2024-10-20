export default function errorHandler(status: number, message: string) {
  const err = new Error();
  err.message = message;
  (err as any).status = status;
  return err;
}
