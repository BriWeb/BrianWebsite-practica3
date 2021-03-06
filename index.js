document.addEventListener("DOMContentLoaded", (e) => {

  const $containerExpand = document.querySelector(".container-expand");
  const $expandImg = document.querySelector(".container-expand__img");
  const $targets = document.querySelectorAll(".gallery__target");

  $targets.forEach( $target => {
    $target.src = $target.nextElementSibling.firstElementChild.src;
    $target.alt = $target.nextElementSibling.firstElementChild.alt;
  })

  document.addEventListener("click", (e) => {

    if(e.target.matches(".gallery__target")){
      $expandImg.src = e.target.src;
      $expandImg.alt = e.target.alt;

      $containerExpand.classList.remove("none");
    }

    if(e.target.matches(".close")){
      $expandImg.src = "";
      $expandImg.alt = "";

      $containerExpand.classList.add("none");
    }

    if(e.target.matches(".gallery__img")){
      const $imgTarget = e.target.parentElement.previousElementSibling;
      $imgTarget.src = e.target.src;
    }
  })
})