// Global variables to keep track of accordion state
var fruitsAndVegetablesAccordionIsOpen = false;
var meatAndSeafoodAccordionIsOpen = false;
var bakeryAccordionIsOpen =false;
var dairyAccordionIsOpen = false;
var pantryAccordionIsOpen = false;
var snacksAccordionIsOpen = false;

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
function openInfo(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


function populateListProductChoices(slct1, slct2, slct3, table) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(slct3);
    var table = ""; // represents the accordion panel of the product's category 

    var product = "";
    var productName = "";
    var productNameAndPrice = "";
    var productCategory = "";

    var acc1 = document.getElementById("fruitsAndVegetablesAccordion");
    var acc2 = document.getElementById("meatAndSeafoodAccordion");
    var acc3 = document.getElementById("bakeryAccordion");
    var acc4 = document.getElementById("dairyAccordion");
    var acc5 = document.getElementById("pantryAccordion");
    var acc6 = document.getElementById("snacksAccordion");

    var fruitsAndVegetablesAccordionIsEmpty = true;
    var meatAndSeafoodAccordionIsEmpty = true;
    var bakeryAccordionIsEmpty = true;
    var dairyAccordionIsEmpty = true;
    var pantryAccordionIsEmpty = true;
    var snacksAccordionIsEmpty = true;

    // empty all categories
    document.getElementById("fruitsAndVegetablesAccordionPanel").innerHTML = "";
    document.getElementById("meatAndSeafoodAccordionPanel").innerHTML = "";
    document.getElementById("bakeryAccordionPanel").innerHTML = "";
    document.getElementById("dairyAccordionPanel").innerHTML = "";
    document.getElementById("pantryAccordionPanel").innerHTML = "";
    document.getElementById("snacksAccordionPanel").innerHTML = "";

    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, s2.value, s3.value);

    // for each item in the array, create a card with a checkbox element, each containing information such as:
    // <div class="card">
    //    <img src="link" alt="productName" style="width:100%"><br>
    //    <input type="checkbox" name="product" value="productName">
    //    <label for="productName">productNameAndPrice</label>   
    // </div>
    for (i = 0; i < optionArray.length; i++) {

        product = optionArray[i];
        productName = product.split('-')[0].trim();
        productNameAndPrice = product.split('(')[0].trim();
        productCategory = product.split('(').pop().split(')')[0];
        productImgSrc = product.split('[').pop().split(']')[0];

        // Determine the category of the product
        if(productCategory == "vegetable" || productCategory == "fruit"){
            table = document.getElementById("fruitsAndVegetablesAccordionPanel");
            fruitsAndVegetablesAccordionIsEmpty = false;
            if(fruitsAndVegetablesAccordionIsOpen == false){
                acc1.click();
            } 
        } else if(productCategory == "meat" || productCategory == "seafood"){
            table = document.getElementById("meatAndSeafoodAccordionPanel");
            meatAndSeafoodAccordionIsEmpty = false;
            if(meatAndSeafoodAccordionIsOpen == false){
                acc2.click();
            } 
        } else if(productCategory == "bakery"){
            table = document.getElementById("bakeryAccordionPanel");
            bakeryAccordionIsEmpty = false;
            if(bakeryAccordionIsOpen == false){
                acc3.click();
            } 
        } else if(productCategory == "dairy"){
            table = document.getElementById("dairyAccordionPanel");
            dairyAccordionIsEmpty = false;
            if(dairyAccordionIsOpen == false){
                acc4.click();
            } 
        } else if(productCategory == "pantry"){
            table = document.getElementById("pantryAccordionPanel");
            pantryAccordionIsEmpty = false;
            if(pantryAccordionIsOpen == false){
                acc5.click();
            } 
        } else if(productCategory == "snack"){
            table = document.getElementById("snacksAccordionPanel");
            snacksAccordionIsEmpty = false;
            if(snacksAccordionIsOpen == false){
                acc6.click();
            } 
        } 

        // create card and add in HTML DOM (<div class="card">)
        var cardDiv = document.createElement("div");
        cardDiv.className = "card";
        table.appendChild(cardDiv);

        // create image and add in HTML DOM (<img src="link" alt="productName" style="width:100%">)
        var img = document.createElement("img");
        img.src = "images/" + productName + ".PNG";
        img.alt = productName;
        img.width = 100;
        img.height = 100;
        cardDiv.appendChild(img);

        // create a breakline node and add in HTML DOM (<br>)
        cardDiv.appendChild(document.createElement("br"));

        // create the checkbox and add in HTML DOM (<input type="checkbox" name="product" value="productName">)
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productNameAndPrice;
        checkbox.style.padding = "0px 5px 0px 0px";
        cardDiv.appendChild(checkbox);

         // create a label for the checkbox, and also add in HTML DOM (<label for="productName">productNameAndPrice</label>)
        var label = document.createElement('label');
        label.htmlFor = productNameAndPrice;
        label.style.padding = "0px 5px 0px 2px";
        label.appendChild(document.createTextNode(productNameAndPrice));
        cardDiv.appendChild(label);        
    }

    // show accordion and filter checkbox if accordion is not empty (block = show & none = hide)
    if(fruitsAndVegetablesAccordionIsEmpty == false){
        document.getElementById("fruitsAndVegetablesAccordionColumn").style.display = "block";
    } else {
        document.getElementById("fruitsAndVegetablesAccordionColumn").style.display = "none";
    }

    if(meatAndSeafoodAccordionIsEmpty == false){
        document.getElementById("meatAndSeafoodAccordionColumn").style.display = "block";
    } else {
        document.getElementById("meatAndSeafoodAccordionColumn").style.display = "none";
    }

    if(bakeryAccordionIsEmpty == false){
        document.getElementById("bakeryAccordionColumn").style.display = "block";
    } else {
        document.getElementById("bakeryAccordionColumn").style.display = "none";
    }

    if(dairyAccordionIsEmpty == false){
        document.getElementById("dairyAccordionColumn").style.display = "block";
    } else {
        document.getElementById("dairyAccordionColumn").style.display = "none";
    }

    if(pantryAccordionIsEmpty == false){
        document.getElementById("pantryAccordionColumn").style.display = "block";
    } else {
        document.getElementById("pantryAccordionColumn").style.display = "none";
    }

    if(snacksAccordionIsEmpty == false){
        document.getElementById("snacksAccordionColumn").style.display = "block";
    } else {
        document.getElementById("snacksAccordionColumn").style.display = "none";
    }
}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price
function selectedItems() {
    var ele = document.getElementsByName("product");
    var chosenProducts = [];
    var c = document.getElementById('displayCart');
    c.innerHTML = "";
    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            //add image to cart item display
            let img = document.createElement("img");
            var productName = ele[i].value.split("-", 1);
            productName = productName[0].trim();
            img.src = "images/" + productName + ".PNG";
            img.width = 50;
            img.height = 50;
            para.appendChild(img);

            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }
    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// accordion onclick function
function accordionClicked(item){
    item.classList.toggle("active");
    let panel=item.nextElementSibling;
    if(panel!==null){
        if (panel.style.display==="block") {
            panel.style.display="none";
        } else {
            panel.style.display="block";
        }
    }

    if(item.classList == "accordion active"){
        if(item.id == "fruitsAndVegetablesAccordion" ){
            fruitsAndVegetablesAccordionIsOpen = true;
        } else if(item.id == "meatAndSeafoodAccordion" ){
            meatAndSeafoodAccordionIsOpen = true;
        } else if(item.id == "bakeryAccordion" ){
            bakeryAccordionIsOpen = true;
        } else if(item.id == "dairyAccordion" ){
            dairyAccordionIsOpen = true;
        } else if(item.id == "pantryAccordion" ){
            pantryAccordionIsOpen = true;
        } else if(item.id == "snacksAccordion" ){
            snacksAccordionIsOpen = true;
        }
    } else {
        if(item.id == "fruitsAndVegetablesAccordion" ){
            fruitsAndVegetablesAccordionIsOpen = false;
        } else if(item.id == "meatAndSeafoodAccordion" ){
            meatAndSeafoodAccordionIsOpen = false;
        } else if(item.id == "bakeryAccordion" ){
            bakeryAccordionIsOpen = false;
        } else if(item.id == "dairyAccordion" ){
            dairyAccordionIsOpen = false;
        } else if(item.id == "pantryAccordion" ){
            pantryAccordionIsOpen = false;
        } else if(item.id == "snacksAccordion" ){
            snacksAccordionIsOpen = false;
        }
    }
}