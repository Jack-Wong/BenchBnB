export const fetchBenches = (success) => {
  $.ajax({
    method: "GET",
    url:
    success,
    error: () => console.log('error')
  })
};
