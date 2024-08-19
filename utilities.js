const showData = (data) => {
  for (let post of data.posts) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('mb-6');
    newDiv.innerHTML = `
      <div
              class="card-hover flex flex-col lg:flex-row gap-10 justify-between items-start px-4 py-10 lg:p-10 bg-[#F3F3F5] rounded-3xl"
            >
              <div class="w-full lg:w-auto flex justify-center items-center">
                <div class="indicator w-20 relative">
                  <span
                    class="hidden absolute z-10 indicator-end badge bg-red-500 -right-1 -top-1"
                  ></span>
                  <span
                    class="absolute z-10 indicator-end badge bg-green-400 -right-1 -top-1"
                  ></span>
                  <img
                    class="mask mask-squircle z-1"
                    src="${post.image}"
                  />
                </div>
              </div>
              <div class="flex-grow">
                <div
                  class="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between mb-5"
                >
                  <p class="font-black text-gray-500">#${post.category}</p>
                  <p class="font-black text-gray-500">Author: ${post.author.name}</p>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 text-center lg:text-start">
                ${post.title}
                </h2>
                <p class="my-4 text-gray-500 text-center lg:text-start">
                  ${post.description}
                </p>
                <div class="border-b-2 border-dashed border-gray-400"></div>
                <div
                  class="flex flex-col lg:flex-row items-center justify-between mt-4"
                >
                  <div
                    class="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-7 lg:mb-0"
                  >
                    <div class="flex space-x-4 text-sm text-gray-500">
                      <span class="flex text-lg items-center">
                        <i class="fa-regular fa-comment-dots me-2"></i>
                        ${post.comment_count}
                      </span>
                    </div>
                    <div class="flex space-x-4 text-sm text-gray-500">
                      <span class="flex text-lg items-center">
                        <i class="fa-regular fa-eye me-2"></i>
                        ${post.view_count}
                      </span>
                    </div>
                    <div
                      class="flex justify-center col-span-2 lg:col-span-1 space-x-4 text-sm text-gray-500"
                    >
                      <span class="flex text-lg items-center">
                        <i class="fa-regular fa-clock me-2"></i>
                        ${post.posted_time} min
                      </span>
                    </div>
                  </div>
  
                  <button
                    class="envelop flex justify-end items-center bg-[#10B981] rounded-full p-2 text-white text-lg"
                  >
                    <i class="fa-solid fa-envelope-open"></i>
                  </button>
                </div>
              </div>
            </div>
    `;
    document.getElementById('show-posts').appendChild(newDiv);

    newDiv.querySelector('.envelop').addEventListener('click', () => {
      showIndividual(post);
    });
  }
};

function showIndividual(post) {
  // post count
  let totalPost = parseInt(document.getElementById('count').innerText);
  totalPost++;
  document.getElementById('count').innerText = totalPost;
  // show individual post
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `
                <div
                  class="flex flex-col gap-4 lg:gap-0 lg:flex-row bg-white p-4 rounded-2xl"
                >
                  <h1 class="font-bold">
                    ${post.title}
                  </h1>
                  <div class="justify-end flex space-x-4 text-sm text-gray-500 w-36">
                    <span class="flex text-lg items-center">
                      <i class="fa-regular fa-eye me-2" aria-hidden="true"></i>
                       ${post.view_count}
                    </span>
                  </div>
                </div>
  `;

  document.getElementById('side-bar').appendChild(newDiv);

  console.log(post);
}

function showLatestData(posts) {
  for (const post of posts) {
    const designation = post.author.designation
      ? post.author.designation
      : 'Unknown';
    const date = post.author.posted_date
      ? post.author.posted_date
      : 'No publish date';

    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
<div class="card bg-base-100 border-2">
    <figure class="px-10 pt-10">
        <img
        src="${post.cover_image}"
        alt="Cover"
        class="rounded-xl"
        />
    </figure>

    <div class="card-body">
        <div class="flex gap-4 mb-3 items-center text-[#12132D99]">
        <i class="fa-regular fa-calendar-days text-xl"></i>
        <p>${date}</p>
        </div>
        <h2 class="card-title font-extrabold text-xl">
        ${post.title}
        </h2>
        <p class="text-[#12132D99] text-lg my-3">
        ${post.description}
        </p>
        <div class="card-actions">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
            <div class="h-16 w-16 shrink-0 rounded-full">
                <img class="rounded-full" src="${post.profile_image}" alt="" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="h-4 font-extrabold">${post.author.name}</div>
                <div class="h-4 text-[#12132D99]">${designation}</div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    `;
    document.getElementById('latest-posts').appendChild(newDiv);
  }
}
