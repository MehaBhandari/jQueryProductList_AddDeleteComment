var newProduct ={};
var newComment = {};

var commentList = [{
    name: 'Mehak Verma',
    comment: 'Good quality and cheap price',
    rating: '5'
},{
    name: 'Neha Sharma',
    comment: 'I ordered a bag and liked the quality of material.',
    rating: '4'
},{
    name: 'Kunal Rai',
    comment: 'I ordered Guitar and it was in good condition. Packaging is very nice.',
    rating: '5'
},{
    name: 'Mohit Kumar',
    comment: 'All important items are available at a reasonable price on this site. I love it.',
    rating: '5'
}];
var productList = [{
    productName: "Bottle",
    productImg: "https://d34kame2p3gj5k.cloudfront.net/media/uploads/2018/09/05154812/bikini-pink-25oz-dtm.jpg",
    barcode: "0001_pink",
    price: '25'
},{
    productName: "Bedsheet",
    productImg: "https://images-na.ssl-images-amazon.com/images/I/910GfTK5XcL._SL1500_.jpg",
    barcode: "0002_blue",
    price: '250'
},{
    productName: "Guitar",
    productImg: "https://shop.r10s.jp/guitarplanet/cabinet/yamaha/cpx5003_all.jpg",
    barcode: "0003_black",
    price: '25000'
},{
    productName: "Dinner Set",
    productImg: "https://m.media-amazon.com/images/I/71eragwTDPL._AC_UL480_FMwebp_QL65_.jpg",
    barcode: "0004_white",
    price: '2500'
},{
    productName: "Sports shoes",
    productImg: "https://n1.sdlcdn.com/imgs/i/9/x/large/Duke-Gray-Running-Shoes-SDL992370728-1-59fef.jpeg",
    barcode: "0005_grey",
    price: '3500'
},{
    productName: "Coffee Mug",
    productImg: "https://m.media-amazon.com/images/I/61BMbiVNu7L._AC_UL480_FMwebp_QL65_.jpg",
    barcode: "0006_black",
    price: '100'
},{
    productName: "Laptop Bag",
    productImg: "https://images-eu.ssl-images-amazon.com/images/I/312dXUNF8uL._AC_UL390_SR300,390_FMwebp_QL65_.jpg",
    barcode: "0007_black",
    price: '600'
},{
    productName: "Pen Set",
    productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9NsY7tD6B_JFEaFwgbVAJXriYpugSOePqszMm6dCQ1fKNloUU&usqp=CAU",
    barcode: "0008_blue",
    price: '70'
},{
    productName: "Sofa Set",
    productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL7aj6KEjegfwVqkLWn8FlQfwQyeDUjJANw67zWR_FDf1EanQ8&usqp=CAU",
    barcode: "0009_white",
    price: '15000'
},{
    productName: "Tiffin Box",
    productImg: "data:image/jpeg;base64,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",
    barcode: "0010_red",
    price: '500'
},{
    productName: "Chopper",
    productImg: "data:image/webp;base64,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",
    barcode: "0011_blue",
    price: '500'
}];


function displayProduct(productList) {
    $.each(productList, function( index, value ) {
        var imgDiv = $("<img></img>").addClass("card-img-top").attr( "src", value.productImg )
            .height("150px").width("60%").css("margin", "auto");
        
        var h5cardTitle = $("<h5/>").addClass("card-title").text("Product Name: " + value.productName);
        
        var pCardText1 = $("<p/>").addClass("card-text").text("Product Barcode: " + value.barcode);
        
        var pCardText2 = $("<p/>").addClass("card-text").text("Produst Cost: " + value.price);
        
        var inputDel = $("<input/>").attr("type", "button").addClass("btn btn-primary deleteBtn").val("Delete").css("width", "100%")
        
        var cardBodyDiv = $("<div/>").addClass("card-body")
                        .append(h5cardTitle)
                        .append(pCardText1)
                        .append(pCardText2)
                        .append(inputDel);
        
        var cardDiv = $("<div/>").addClass("card").append(imgDiv)
                        .append(cardBodyDiv);
        
        var cardBody = $("<div/>").addClass("col-3   productStyle")
                        .append(cardDiv)
                    

        $("#productData").append(cardBody).css("margin-bottom", "10px");
    });

    // $.each(productList, function( index, value ) {
    //     $("#productData").append(
    //         `<div class='col-4 productStyle'> 
    //             <div class='card'> 
    //                 <img class='card-img-top' src="${value.productImg}" style='width:20%; height: 100px' /> <br/> 
    //                 <div class='card-body'> 
    //                     <h5 class='card-title'> Product: ${value.productName}</h5> 
    //                     <p class='card-text'>Barcode: ${value.barcode}</p> 
    //                     <p class='card-text'> Price: Rs ${value.price}</p> 
    //                     <input type="button" class='btn btn-primary deleteBtn' value="Delete" /> 
    //                 </div> 
    //             </div> 
    //         </div>`);
    // });
}
function displayComments(commentList) {
    $.each(commentList, function(index, value){       
        var cardHeaderDiv = $("<div/>").addClass("card-header").text(value.name);
        var commentBodyDiv = $("<div/>").text(value.comment)
        var ratingDataAttr = $("<mark/>").attr("data-toggle", "tooltip").attr("title","Rating is "+value.rating).text("Customer Rating: " + value.rating).append(commentBodyDiv).css("padding-left", "15px");
        var lineBrk = $("<br/>");
        var outerCardDiv = $("<div/>").addClass("card").append(cardHeaderDiv).append(ratingDataAttr);
        $('#commentList').append(outerCardDiv).append(lineBrk);
    });
}

$(document).ready(function(){

    // $.ajax({url: "demo_test.txt", success: function(result){
    //     $("#div1").html(result);
    //   }});

    displayProduct(productList);
    displayComments(commentList);
    $(".deleteBtn").click(function() {
        alert('Hiii');
    })
    $("#submitProduct").click(function() {
        newProduct ={
            productName: $('#productName').val(),
            productImg:  $('#productImageUrl').val(),
            barcode:  $('#productBarcode').val(),
            price:  $('#productPrice').val()
    
        };
        $("#productData")[0].innerHTML = "";
        productList.push(newProduct);
        alert("Thank you for adding product!");
        displayProduct(productList);
        $('#productName')[0].value = '';
        $('#productImageUrl')[0].value = '';
        $('#productBarcode')[0].value = '';
        $('#productPrice')[0].value = '';
    });
    $('#submitComment').click(function() {
        newComment = {
            name: $('#name').val(),
            comment: $('#comment').val(),
            rating: $('#rating').val()
        };
        $('#commentList')[0].innerHTML = '';
        commentList.push(newComment);
        
        alert("Thank you for adding comment!");
        displayComments(commentList);
        $('#name')[0].value = '';
        $('#comment')[0].value = '';
        $('#rating')[0].value = '';
    });
});