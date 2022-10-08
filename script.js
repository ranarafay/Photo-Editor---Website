/* Rao Muhammad Rafay
   P20-0636
*/

// task-1
// getting image from user and adding it to canvas

// getting elements from dom to manipulate
const chooseImgBtN = document.getElementById("chooseImg");
const imgInput = document.getElementById("fileInput");
img = document.querySelector("#previewImg");

// taking image to canvas
chooseImgBtN.addEventListener("click", function () {
    imgInput.click();
})

imgInput.addEventListener("change", function () {
    var file = imgInput.files[0];
    img.src = URL.createObjectURL(file);
})

// enabling editing options on image load
img.addEventListener("load", function(){
    let container = document.querySelector(".container");
    container.classList.remove("disable");

    let heading = document.querySelector(".container h2");
    heading.innerText = "Photo Editor";
})

// making variables to store slider values
// initializing to default values
let brightness = 100
let saturate = 100
let invert = 0
let grayscale = 0;

// making filter-info and filter buttons synchornized
const filterBtns = document.querySelectorAll(".filter button")
filterBtns.forEach(button => {
    button.addEventListener("click", function () {
        // checking if any button is active or not
        let containActive;
        filterBtns.forEach(btn => {
            if (btn.classList.contains("active")) {
                containActive = true;
            }
        })

        // getting filter-info box for changing the name of the filter on clicking 
        const filterInfoName = document.querySelector(".filter-info .name");

        // if any button is already pre active then
        if (containActive) {
            
            slider.disabled = false;

            document.querySelector(".filter .active").classList.remove("active");
            button.classList.add("active");
            
            // changing filter-info name
            filterInfoName.innerText = button.innerText;
            
            // making slider values synchrinized and left before
            const filterSlected = document.querySelector(".filter-info .name");
            if (filterSlected.innerText === "Brightness") {
                slider.value = brightness;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${brightness}%`;

                const sliderInput = document.querySelector(".slider input");
                sliderInput.max = "200";
            }
            else if (filterSlected.innerText === "Saturation") {
                slider.value = saturate;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${saturate}%`;

                const sliderInput = document.querySelector(".slider input");
                sliderInput.max = "200";
            }
            else if (filterSlected.innerText === "Inversion") {
                slider.value = invert;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${invert}%`;

                const sliderInput = document.querySelector(".slider input");
                sliderInput.max = "100";
            }
            else if (filterSlected.innerText === "Grayscale") {
                slider.value = grayscale;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${grayscale}%`;

                const sliderInput = document.querySelector(".slider input");
                sliderInput.max = "100";
            }
        }
        // if not any button is pre active  
        else {
            button.classList.add("active");
            filterInfoName.innerText = button.innerText;

            const filterSlected = document.querySelector(".filter-info .name");
            if (filterSlected.innerText === "Brightness") {
                slider.value = brightness;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${brightness}%`;
            }
            else if (filterSlected.innerText === "Saturation") {
                slider.value = saturate;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${saturate}%`;
            }
            else if (filterSlected.innerText === "Inversion") {
                slider.value = invert;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${invert}%`;
            }
            else if (filterSlected.innerText === "Grayscale") {
                slider.value = grayscale;

                const value = document.querySelector(".filter-info .value");
                value.innerHTML = `${grayscale}%`;
            }
        }
    })
});


// working on slider
const slider = document.querySelector(".slider input");
slider.value = 100;

// initializing slider (as brightness is activated by default)
const sliderValue = document.querySelector(".slider .value");
sliderValue.innerText = "100%";

// making filter values as selected/input by user
// applying filters to image
slider.addEventListener("input", function () {
    const value = document.querySelector(".filter-info .value");
    value.innerHTML = `${slider.value}%`;

    const filterSlected = document.querySelector(".filter-info .name");

    if (filterSlected.innerText === "Brightness") {
        brightness = slider.value;
    }
    else if (filterSlected.innerText === "Saturation") {
        saturate = slider.value;
    }
    else if (filterSlected.innerText === "Inversion") {
        invert = slider.value;
    }
    else if (filterSlected.innerText === "Grayscale") {
        grayscale = slider.value;
    }

    // applying filters to the image
    img.style.filter = `brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px) sepia(${sepia}%)`;
});


// applying reset filters 
const resetButton = document.querySelector(".reset-filter");
resetButton.addEventListener("click", function () {
    // for filters
    brightness = 100;
    saturate = 100;
    invert = 0;
    grayscale = 0;

    // for blur and sepia
    blur = 0;
    sepia = 0;
    img.style.filter = `brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px) sepia(${sepia}%)`;

    // for transform
    rotate = 0;
    horizontal = 1;
    vertical = 1;
    img.style.transform = `rotate(${rotate}deg) scale(${horizontal}, ${vertical})`;

    // for setting filter box to inital values
    const filterSlected = document.querySelector(".filter-info .name");
    if (filterSlected.innerText === "Brightness") {
        slider.value = brightness;

        const value = document.querySelector(".filter-info .value");
        value.innerHTML = `${brightness}%`;
    }
    else if (filterSlected.innerText === "Saturation") {
        slider.value = saturate;

        const value = document.querySelector(".filter-info .value");
        value.innerHTML = `${saturate}%`;
    }
    else if (filterSlected.innerText === "Inversion") {
        slider.value = invert;

        const value = document.querySelector(".filter-info .value");
        value.innerHTML = `${invert}%`;
    }
    else if (filterSlected.innerText === "Grayscale") {
        slider.value = grayscale;

        const value = document.querySelector(".filter-info .value");
        value.innerHTML = `${grayscale}%`;
    }

    // for rotate slider and rotate
    rotate = 0;
    rotateSliderInput = document.querySelector(".rotate-slider input");
    rotateSliderInput.value = rotate;
    
    rotateSliderInfo = document.querySelector(".rotate-slider .filter-info .value");
    rotateSliderInfo.innerText = "0deg";
    
    // for blur and sepia 
    blurSliderInput = document.querySelector(".Blur input");
    blurSliderInput.value = blur;
    
    blurSliderInfo = document.querySelector(".Blur button");
    blurSliderInfo.innerText = "0px";
    
    sepiaSliderInput = document.querySelector(".Sepia input");
    sepiaSliderInput.value = blur;
    
    sepiaSliderInfo = document.querySelector(".Sepia button");
    sepiaSliderInfo.innerText = "0%";
});


// save image
// getting savingImage button
const savingImageButton = document.querySelector(".save-img");
savingImageButton.addEventListener("click", function(){
    // using canvas for saving image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    context.filter = `brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px) sepia(${sepia}%)`;
    context.translate(canvas.width/2, canvas.height/2);
    if(rotate !== 0){
        context.rotate(rotate * Math.PI / 180);
    }
    context.scale(horizontal, vertical);
    context.drawImage(img, -canvas.width/2, -canvas.height/2,  canvas.width,  canvas.height);
    
    
    // saving image to the pc
    const imageLink = document.createElement("a");
    imageLink.download = "edited-image.jpg";
    imageLink.href = canvas.toDataURL();
    imageLink.click();
});



// task-2

// taking all buttons for rotations and flips
const rotateButton = document.querySelectorAll(".rotate .options button");
let rotate = 0;
let horizontal = 1;
let vertical = 1;

rotateButton.forEach(button => {
    button.addEventListener("click", function () {

        // for rotations
        img.style.transform = `rotate(${rotate}deg) scale(${horizontal}, ${vertical})`;
        
        // for flips
        if (button.id === "horizontal") {
            if (horizontal === 1) {
                horizontal = -1;
            }
            else {
                horizontal = 1;
            }
            img.style.transform = `rotate(${rotate}deg) scale(${horizontal}, ${vertical})`;
        }
        else if (button.id === "vertical") {
            if (vertical === 1) {
                vertical = -1;
            }
            else {
                vertical = 1;
            }
            img.style.transform = `rotate(${rotate}deg) scale(${horizontal}, ${vertical})`;
        }
    });
});


// rotate slider
rotateSlider = document.querySelector(".rotate-slider input");
rotateSlider.addEventListener("input", function(){
    rotateSliderInfo = document.querySelector(".rotate-slider .filter-info .value");
    rotate = rotateSlider.value;
    rotateSliderInfo.innerText = `${rotate}deg`;
    img.style.transform = `rotate(${rotate}deg) scale(${horizontal}, ${vertical})`;
});

// Blur and Sepia
blur = 0;
sepia = 0;
blurSlider = document.querySelector(".Blur input");
blurSlider.addEventListener("input", function(){
    blurSliderInfo = document.querySelector(".Blur button");
    blur = blurSlider.value;
    blurSliderInfo.innerText = `${blur}px`;
    img.style.filter = `brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px)`;
});
sepiaSlider = document.querySelector(".Sepia input");
sepiaSlider.addEventListener("input", function(){
    sepiaSliderInfo = document.querySelector(".Sepia button");
    sepia = sepiaSlider.value;
    sepiaSliderInfo.innerText = `${sepia}%`;
    img.style.filter = `brightness(${brightness}%) saturate(${saturate}%) invert(${invert}%) grayscale(${grayscale}%) blur(${blur}px) sepia(${sepia}%)`;
});