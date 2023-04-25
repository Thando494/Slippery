//https://picsum.photos/200
//https://picsum.photos/v2/list

const url = "https://picsum.photos/v2/list?page=22&limit=5";

const page = Math.round(Math.random() * 50);

console.log(page);

const response = await fetch(url);

if (response.status == 200) {
  console.log(response);
  const photo = await response.json();
  const davids = document.getElementsByTagName("div");

  davids[0].innerHTML = photo[0].author;
  davids[0].style.backgroundImage = "url('" + photo[0].download_url + "')";

  davids[1].innerHTML = photo[1].author;
  davids[1].style.backgroundImage = "url('" + photo[1].download_url + "')";

  davids[2].innerHTML = photo[2].author;
  davids[2].style.backgroundImage = "url('" + photo[2].download_url + "')";

  davids[3].innerHTML = photo[3].author;
  davids[3].style.backgroundImage = "url('" + photo[3].download_url + "')";

  davids[4].innerHTML = photo[4].author;
  davids[4].style.backgroundImage = "url('" + photo[4].download_url + "')";

  photo.forEach(function (photo) {
    console.log(photo);
  });
} else {
  console.log("failed to load url");
}

console.log(response);
