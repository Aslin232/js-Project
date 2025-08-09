document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const dropdownMenu = document.getElementById("dropdownmenu");
  const carouselTrack = document.getElementById("carouselTrack");

  const images = {
    men: [
      "https://images.wallpapersden.com/image/wl-chris-pine-actor-celebrity_52409.jpg",
      "https://static01.nyt.com/images/2025/01/29/multimedia/29PARIS-MEN-SAINT-LAURENT-zgfl/29PARIS-MEN-SAINT-LAURENT-zgfl-googleFourByThree.jpg",
      "https://www.aafp.org/content/dam/AAFP/images/cme/events/bre-sept-2025-800x600.jpg",
      "https://iansportalimages.s3.amazonaws.com/ianslive_watermark/202507283465570.jpg",
      "https://onemile.in/cdn/shop/files/image.png?v=1740525452&width=800",
    ],
    women: [
      "https://etimg.etb2bimg.com/photo/88575493.cms",
      "https://ee.cdnartwhere.eu/wp-content/uploads/2025/07/Caroline-Guillaume-TrustInSoft-CEO-scaled-800x600-c-default.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/87cf05e4-2b8b-4b37-8965-fa88ffcef525.__CR0,0,800,600_PT0_SX800_V1___.jpg",
      "https://iansportalimages.s3.amazonaws.com/ianslive_watermark/202506173430257.jpg",
      "https://quantis.com/wp-content/uploads/2025/03/quantis_join_adobestock_578507450-800x600.jpg",
    ],
    girl: [
      "https://www.charliehealth.com/wp-content/uploads/2023/11/iStock-681836430-1-800x600.png",
      "https://thumbs.dreamstime.com/b/pretty-teenage-girl-sits-pavement-changing-shoes-retro-old-pair-roller-skates-red-laces-pretty-teenage-girl-sits-378760353.jpg",
      "https://people.com/thmb/FQ4LwJ8UOHrCaR8AdakS7RUvqOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/lea-seydoux-00-800-b27bda054c374775920e18a8f05517b3.jpg",
      "https://www.charliehealth.com/wp-content/uploads/2023/10/iStock-1367301943-1-800x600.png",
      "https://staging.educationworld.in/wp-content/uploads/2023/12/shutterstock_1137078728-1.jpg",
    ],
    boy: [
      "https://thumbs.dreamstime.com/b/little-asian-boy-outdoor-portrait-56519355.jpg",
      "https://thumbs.dreamstime.com/b/boy-back-to-school-outdoor-portrait-happy-teen-years-old-books-backpack-young-student-beginning-class-75823012.jpg",
      "https://thumbs.dreamstime.com/b/asian-handsome-child-boy-smile-happy-face-outdoor-nature-background-kid-white-shirt-enjoy-relaxing-day-concept-health-368371479.jpg",
      "https://thumbs.dreamstime.com/b/blond-boy-sculpts-plasticine-home-table-idea-concept-school-education-developmental-activities-395489082.jpg",
      "https://www.heart.org/-/media/Images/News/SFTH/Archive/1019SFTHCixGreene_SC.jpg?sc_lang=en",
    ],
    dog: [
      "https://images.wallpaperscraft.com/image/single/puppy_dog_animal_209844_800x600.jpg",
      "https://www.akc.org/wp-content/uploads/2015/03/so-you-want-to-breed-dogs-800x600.jpg",
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zODIzMC1pbWFnZS5qcGc.jpg",
      "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fda89d930fc320dd912a2a25487b9ca86b37fcdd6-800x600.jpg&w=1080&q=80",
      "https://thumbs.dreamstime.com/b/playful-welsh-corgi-pembroke-sitting-lawn-winking-adorable-pet-expression-concept-humor-joy-dog-emotions-playful-392542131.jpg",
    ],
    cat: [
      "https://images.wallpaperscraft.com/image/single/cat_face_cool_cat_94317_800x600.jpg",
      "https://cdn.wallpapersafari.com/53/66/AoIl26.jpg",
      "https://northhamptonvets.com/wp-content/uploads/2016/11/cat01.jpg",
      "https://www.catbreedslist.com/cat-wallpapers/american-shorthair-kitten-paws-tongue-800x600.jpg",
      "https://w0.peakpx.com/wallpaper/876/751/HD-wallpaper-funny-kitten-animals-cat-cats-cute-red-cat.jpg",
    ],
  };

  let currentIndex = 0;
  let currentCategory = "men";
  let autoSlideInterval;

  menuBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;
      currentCategory = category;
      currentIndex = 0;
      loadCarousel(category);
      dropdownMenu.classList.add("hidden");
    });
  });

  function loadCarousel(category) {
    clearInterval(autoSlideInterval);
    carouselTrack.innerHTML = "";

    const categoryImages = images[category];
    if (!categoryImages) return;

    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      img.src = categoryImages[(currentIndex + i) % categoryImages.length];
      carouselTrack.appendChild(img);
    }

    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % categoryImages.length;
      carouselTrack.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const img = document.createElement("img");
        img.src = categoryImages[(currentIndex + i) % categoryImages.length];
        carouselTrack.appendChild(img);
      }
    }, 3000);
  }

  loadCarousel(currentCategory);
});
