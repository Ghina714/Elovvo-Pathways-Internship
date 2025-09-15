
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const posts = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


let currentPage = 1;
const postsPerPage = 3; 


function displayPosts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

 
  let filteredPosts = Array.from(posts).filter(post => {
    const title = post.querySelector("h3").textContent.toLowerCase();
    const category = post.getAttribute("data-category");

    const matchesSearch = title.includes(searchText);
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });


  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const visiblePosts = filteredPosts.slice(start, end);


  posts.forEach(post => post.style.display = "none");
  visiblePosts.forEach(post => post.style.display = "block");


  prevBtn.disabled = currentPage === 1;

  nextBtn.disabled = end >= filteredPosts.length;
}


searchInput.addEventListener("input", () => {
  currentPage = 1; 
  displayPosts();
});

categoryFilter.addEventListener("change", () => {
  currentPage = 1; 
  displayPosts();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts();
  }
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  displayPosts();
});

displayPosts();

