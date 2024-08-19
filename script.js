const loadData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/${id}`
  );
  const data = await res.json();
  showData(data);
};

const loadData2 = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  );
  const data = await res.json();
  showLatestData(data);
};
function searchButton() {
  let catagoryName = document.getElementById('search-input').value;
  document.getElementById('search-input').value = '';
  document.getElementById('show-posts').innerHTML = '';
  loadData(`posts?category=${catagoryName}`);
}
loadData2();
loadData('posts');
