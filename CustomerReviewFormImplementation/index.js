const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   Retrieving the values from the form fields.
  let fullName = document.getElementById("fullName").value;
  let rating = document.getElementById("rating").value;
  let comment = document.getElementById("comment").value;

  // Dynamically creating a list item to display the review.
  const reviewListItem = document.createElement("li");
  reviewListItem.innerHTML = `<strong>${fullName}</strong> - Rating: ${rating}/5 <br> ${comment}`;

  // Appending review to the reviews list
  const reviewList = document.getElementById("reviewList");
  reviewList.appendChild(reviewListItem);

  // Clearing the form fields after submission
  reviewForm.reset();
});
