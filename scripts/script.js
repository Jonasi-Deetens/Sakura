initScripts();

function initScripts() {
    console.log(document.getElementsByClassName("falling-leaves-container").length);
    if (document.getElementsByClassName("falling-leaves-container").length != 0){ setInterval(generateLeaves, 1000); }
    if (document.getElementsByClassName("floating-leaves-container").length != 0){ setInterval(generateFloatingLeaves, 1000); }
}

function generateLeaves() {
    var image = new Image(4,4);
    image.src = "./images/sakura-tree-leaf-" + Math.round(Math.random()* 5 + 1) + ".png";
    image.alt = "Sakura leaf falling";
    image.style.position = "absolute";
    image.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    image.style.top = "-40px"; // Start above the screen
    image.classList.add("smallImg");
    image.classList.add("rounded-full");
    image.classList.add("shadow-inner");
    image.classList.add("shadow-md");
    image.classList.add("shadow-pink-300");
    document.getElementsByClassName("falling-leaves-container")[0].appendChild(image);
  
    // Animate the falling leaf
    var animation = image.animate(
      [
        { top: "-40px" },
        { top: "100vh" }, // Fall to the bottom of the viewport
      ],
      {
        duration: 5000, // 5 seconds for the leaf to fall
        easing: "linear",
      }
    );
  
    // Remove the image element after the animation is complete
    animation.onfinish = function () {
      image.remove();
    };

}

function generateFloatingLeaves() {
    var image = new Image(4,4);
    image.src = "../../images/sakura-tree-leaf-" + Math.round(Math.random()* 5 + 1) + ".png";
    image.alt = "Sakura leaf floating";
    image.style.position = "absolute";
    image.style.left = "-40px"; // Start left of the screen
    image.style.top = Math.random() * 90 + 5 + "%"; // Random vertical position
    image.classList.add("smallImg");
    image.classList.add("rounded-full");
    document.getElementsByClassName("floating-leaves-container")[0].appendChild(image);
  
    // Animate the falling leaf
    var animation = image.animate(
      [
        { left: "-40px" },
        { left: "100%" }, // Fall to the bottom of the viewport
      ],
      {
        duration: 10000, // 5 seconds for the leaf to fall
        easing: "linear",
      }
    );
  
    // Remove the image element after the animation is complete
    animation.onfinish = function () {
      image.remove();
    };

}

