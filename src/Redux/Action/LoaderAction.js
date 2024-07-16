export const LOADING = "LOADING";

export const isLoading = (status) => {
  return {
    type: LOADING,
    payload: status,
  };
};
