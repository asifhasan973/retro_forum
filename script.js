const loadData = async () => {
  const res = await fetch(
    ' https://openapi.programming-hero.com/api/retro-forum/posts'
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
loadData2();
loadData();
