
// Data for New Product and Comment
var newProduct = {};
var newComment = {};

// Urls to fetch data for Products and Reviews...
var productListUrl = "https://5ede5ce3e36dd000166c8340.mockapi.io/products"
var commentListUrl = "https://5ede5ce3e36dd000166c8340.mockapi.io/comments"

// Array for Product and Product List
var commentList = [];
var productList = [];

// Creating Products from the Available list of Products from URL
function displayProduct(productList) {
    $("#productData").html("");
    $.each(productList, function( index, value ) {

        var imgDiv = $("<img></img>").addClass("card-img-top")
                    .attr( "src", value.productImg )
                    .height("150px").width("60%")
                    .css("margin", "auto");
        
        var h5cardTitle = $("<h5/>").addClass("card-title")
                          .text("Product Name: " + value.productName);
        
        var pCardText1 = $("<p/>").addClass("card-text")
                        .text("Product Barcode: " + value.barcode);
        
        var pCardText2 = $("<p/>").addClass("card-text")
                        .text("Produst Cost: " + value.price);
        
        var inputDel = $("<input/>").attr("type", "button")
                       .addClass("btn btn-primary deleteBtn")
                       .val("Delete").css("width", "100%")
                       .attr("data-barcode", value.barcode)
                       .click(deleteProduct)
        
        var cardBodyDiv = $("<div/>").addClass("card-body")
                        .append(h5cardTitle).append(pCardText1)
                        .append(pCardText2).append(inputDel);
        
        var cardDiv = $("<div/>").addClass("card").append(imgDiv)
                      .append(cardBodyDiv);
        
        var cardBody = $("<div/>").addClass("col-3 productStyle")
                       .append(cardDiv)
                    
        $("#productData").append(cardBody).css("margin-bottom", "10px");

    });
}

// Functionality to iterate and create Comment Section
function displayComments(commentList) {
    $.each(commentList, function(index, value){       
        var cardHeaderDiv = $("<div/>").addClass("card-header").text(value.name);
        var commentBodyDiv = $("<div/>").text(value.comment)
        var ratingDataAttr = $("<mark/>").attr("data-toggle", "tooltip").attr("title","Rating is "+value.rating)
                                .text("Customer Rating: " + value.rating).append(commentBodyDiv).css("padding-left", "15px");
        var lineBrk = $("<br/>");
        var outerCardDiv = $("<div/>").addClass("card").append(cardHeaderDiv).append(ratingDataAttr);
        $('#commentList').append(outerCardDiv).append(lineBrk);
    });
}

// Invoke Function Once the Document is ready
$(document).ready(function(){
    $.get(commentListUrl, (data) => {
        commentList = data;
        displayComments(data)
    });

    $.get(productListUrl, (data) => {
        productList = data
        displayProduct(data);
    });

    $(".filterText").on("keyup", filterProduct);

    $("#submitProduct").click(submitProductFunctionality);
    $('#submitComment').click(submitClickedFunctionality);
});

// Functionality invoked for filtering of the Product
function filterProduct(event) {
    var filteredProduct = productList.filter((product) => {
        return product.productName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    })
    displayProduct(filteredProduct);    
}

// Functionality invoked when the Product Delete button is clicked
function deleteProduct(event) {
    productList = productList.filter((product)=>{
        return event.target.dataset.barcode !== product.barcode;
    });
    displayProduct(productList);
    $('.filterText')[0].value = "";
}

// Functionality of Click to submit Product
function submitProductFunctionality() {
    newProduct ={
        productName: $('#productName').val(),
        productImg:  $('#productImageUrl').val(),
        barcode:  $('#productBarcode').val(),
        price:  $('#productPrice').val()

    };

    $("#productData")[0].innerHTML = "";
    productList.push(newProduct);
    displayProduct(productList);
    refreshProductInputs();
    $('.filterText')[0].value = "";
    alert("Thank you for adding the product!");
}

// Clearing Input Boxes in Product Section
function refreshProductInputs() {
    $('#productName')[0].value = '';
    $('#productImageUrl')[0].value = '';
    $('#productBarcode')[0].value = '';
    $('#productPrice')[0].value = '';
}

// Functionality of Click of the Submit Button For Comments
function submitClickedFunctionality() {
    var newComment = {
        name: $('#name').val(),
        comment: $('#comment').val(),
        rating: $('#rating').val()
    };

    $('#commentList')[0].innerHTML = '';
    commentList.push(newComment);
    displayComments(commentList);
    refreshComments();
    alert("Thank you for adding the comment!");
}

// Clearing Input Boxes in Comment Section
function refreshComments() {
    $('#name')[0].value = '';
    $('#comment')[0].value = '';
    $('#rating')[0].value = '';
}