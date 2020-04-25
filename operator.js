function getCode() {
  let postTitle = document.getElementById("postTitle").value;
  let demoImg = document.getElementById("demoImg").value;
  let postCategory = document.getElementById("postCategory").value;
  let postIndex = document.getElementById("postIndex").value;
  let variantPrice = document.getElementById("variantPrice").value;
  let itemDesc = document.getElementById("itemDesc").value;
  let detailedPrice = document.getElementById("detailedPrice").value;
  let detailedBundle = document.getElementById("detailedBundle").value;
  let imageCount = document.getElementById("imageCount").value;
  let imageArr = [];
  for (let i = 0; i < imageCount; i++) {
    imageArr.push(document.getElementsByClassName("imgInput")[i].value);
  }

  let codeBlock1 = `before`;
  let codeBlock2 = `before`;

  buildBlock1(postTitle, postCategory, postIndex, demoImg, variantPrice, codeBlock1);
  buildBlock2(imageArr, postTitle, itemDesc, detailedPrice, detailedBundle);

}

function buildBlock1(postTitle, postCategory, postIndex, demoImg, variantPrice, codeBlock1) {
  codeBlock1 = `<div class="post ${postCategory}" id="${postIndex}">
      <h2>${postTitle}</h2>
      <a href="posts/${postIndex}.html">
        <div class="postImg">
          <img
            src="${demoImg}"
            alt="">
        </div>
      </a>

      <p class="priceTag">${variantPrice}</p>
    </div>`;

    let parent = document.getElementsByClassName("result")[0];
    let child1 = document.createElement("p");
    child1.textContent = codeBlock1;
    parent.appendChild(child1);

}

function buildBlock2(imageArr, postTitle, itemDesc, detailedPrice, detailedBundle) {
  codeBlock2 = `<div class="displayContent"><div class="slideshow-container">`;

        for (let i = 0; i < imageArr.length; i++) {
          console.log("In loop, i =" + i)
          codeBlock2 +=
          `<div class="mySlides fade">
                  <img src="${imageArr[i]}" style="width:100%">
                  <div class="text">Item ${i+1}</div>
                </div>`
        }

 codeBlock2 += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div><br><div style="text-align:center">`;
    for (let i = 0; i < imageArr.length; i++) {
      codeBlock2 +=       `      <span class="dot" onclick="currentSlide(${i+1})"></span>`;
    }
    codeBlock2 +=`</div>

    <div class="itemDescription">
      <h1 id="itemName">${postTitle}</h1>
      <p class="textbody">${itemDesc}</p>
      <p class="priceTag">${detailedPrice} MMK/${detailedBundle}</p>

      <button class="copyButton" type="button" onclick="itemCopy()" name="button">Copy Info</button>
      <button class="orderButton" type="button" onclick="openMessenger()" name="button">Order Now</button>

    </div>

  </div>`;

  let parent = document.getElementsByClassName("result")[0];
  let child2 = document.createElement("p");
  child2.textContent = codeBlock2;
  parent.appendChild(document.createElement("br"));
  parent.appendChild(child2);
}

function expandUpload() {
  let count =  document.getElementById("imageCount").value;
  let expandParent = document.getElementsByClassName("uploadArea")[0];
  expandParent.innerHTML = "";

  for (let i = 0; i < count; i++) {
    let expandChild = document.createElement("input");
    expandChild.setAttribute("class", "imgInput")
    expandParent.appendChild(expandChild)
    expandParent.appendChild(document.createElement("br"))

  }

}
