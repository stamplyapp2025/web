export const errorMessage = (err) => {
  if (err?.response?.data?.message) {
    return err.response.data.message;
  }
  if (err?.response?.statusText) {
    return err.response.statusText;
  }
  if (err?.message) {
    return err.message;
  }
  return `status: ${err.response.status} "Network error"`;
};
