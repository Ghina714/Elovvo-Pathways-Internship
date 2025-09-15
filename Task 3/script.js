// 1) نجيب العناصر من الصفحة
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const posts = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 2) إعدادات الـ Pagination
let currentPage = 1;
const postsPerPage = 3; // عدد البوستات في كل صفحة

// 3) دالة لعرض البوستات حسب الفلترة والبحث
function displayPosts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  // نخلي البوستات Array عشان نقدر نفلترها
  let filteredPosts = Array.from(posts).filter(post => {
    const title = post.querySelector("h3").textContent.toLowerCase();
    const category = post.getAttribute("data-category");

    const matchesSearch = title.includes(searchText);
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // نحدد البوستات اللي تظهر في الصفحة الحالية
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const visiblePosts = filteredPosts.slice(start, end);

  // نعرض/نخفي البوستات
  posts.forEach(post => post.style.display = "none");
  visiblePosts.forEach(post => post.style.display = "block");

  // زرار الـ Prev يتعطل في أول صفحة
  prevBtn.disabled = currentPage === 1;
  // زرار الـ Next يتعطل في آخر صفحة
  nextBtn.disabled = end >= filteredPosts.length;
}

// 4) الأحداث (events)
searchInput.addEventListener("input", () => {
  currentPage = 1; // نرجع لأول صفحة بعد البحث
  displayPosts();
});

categoryFilter.addEventListener("change", () => {
  currentPage = 1; // نرجع لأول صفحة بعد الفلترة
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

// 5) أول ما الصفحة تفتح
displayPosts();
