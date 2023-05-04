function showMoreText() {
    var moreText = document.getElementById("moreText");
    var continueReading = document.getElementById("continueReading");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        continueReading.style.display = "none";
    } else {
        moreText.style.display = "none";
        continueReading.style.display = "block";
    }
}
// alet message while clicking on add to cart button'
function addToCart(event) {
    event.preventDefault(); // prevent the default behavior of the link
    alert('Product added to cart successfully!');
  }

  var searchbar = document.getElementById("searchbar");
  var searchicon = document.getElementById("searchicon");
  
  searchicon.onclick = function() {
    searchbar.classList.toggle("animated");
  };

