function configureListeners() {
    let images = documement.getElementByTag ( 'img' );
    // select img elements  

     for (var i = 0; i < images.length; i++) {   
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)     
        document.getElementById(images[i].id).addEventListener( 'mouseout', removeOpacity, flase)     
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }  // add appropriate CSS class
    getProductInfo(event.target.id);     

}

function removeOpacity(event) {

    if (this.classList.contains('dim')){
        this.classList.remove('dim');
    }//remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
                     price = " $14.99 "
                     colorName = " LIME GREEN "
                     updatePrice( colorName, price )

            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
                     price = " $11.14 "
                     colorName = " MEDIUM BORWN "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
                     price = " $22.99 "
                     colorName = " ROYAL BLUE "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
                     price = " $4.99 "
                     colorName = " SOLID CYAN "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
                     price = " $8.22 "
                     colorName = " SOLID CYAN "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
                     price = " $11.99 "
                     colorName = " SOLID PURPLE "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
                     price = " $13.42 "
                     colorName = " SOLID RED "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
                     price = " $21.98 "
                     colorName = " SOLID WHITE "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
                     price = " $14.99 "
                     colorName = " SOLID YELLOW "
                     updatePrice( colorName, price )
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById( "color-price");
        colorPrice.textContent = price;
        // select element with corresponding id
        // display price
        
        let color = document.getElementById( "colorName");
        color.textContent = colorName;
        // select element with corresponding id
        //display color name
    }
    
}
