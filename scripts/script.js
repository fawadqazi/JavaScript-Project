$(function() {
	 	$('a').smoothScroll({
			offset: 50
		});

        $('.fa-bars').on('click', function(){
        	let menu = document.getElementById('sidebar');
        	if(menu.className === 'sidebar'){
        		menu.className += ' responsive' ;
        	}
        	else{
        		menu.className = 'sidebar';
        	}
        });
        let modal = document.querySelector('#modal');
        $('#openBtn').on('click', function(){
        	modal.style.display	= 'block';
        });
        $('#closeBtn').on('click', function(){
        	modal.style.display	= 'none';
        });
        $(document).keydown(function(e) { 
            if (e.keyCode == 27 || e.keyCode == 88) { 
                modal.style.display	= 'none';
            } 
        });

        const allfilter = document.querySelectorAll('.galleryItem');
                      
        $('#all-tab').on('click', function(){
    		for(let i = 0; i < allfilter.length; i++){	
	    		$(allfilter[i]).removeClass('closed');
    		}    		
        });

        $('#meat-tab').on('click', function(){
        	const meatfilter = document.querySelectorAll('[data-category="meat"]');
    		filtering(meatfilter);
        });

        $('#fish-tab').on('click', function(){
        	const fishfilter = document.querySelectorAll('[data-category="fish"]');
        	filtering(fishfilter); 		
        });

        $('#dessert-tab').on('click', function(){
        	const dessertfilter = document.querySelectorAll('[data-category="dessert"]');
        	filtering(dessertfilter);	
        });

		$('#veg-tab').on('click', function(){
			const vegfilter = document.querySelectorAll('[data-category="veg"]');
        	filtering(vegfilter);   		
        }); 

		let total = 0.00;
		let tax = 0.00;
		let subtotal = 0.00;
		$('#subtotalBill').text(total.toFixed(2));
		$('#totalTax').text(total.toFixed(2));
		$('#totalBill').text(total.toFixed(2));

        $('.overlay').on('click',function(event) {
        	let target = $(event.target);
        	if(target.is('.overlay')){
	        	const itemname = $(event.target).children('.item-name').text();
	            const price = parseFloat($(event.target).children('.price').text().replace('$', ''));
	            subtotal += price;
	            tax = subtotal * 0.13;
	            total = subtotal + tax;	            
	            $('#subtotalBill').text(subtotal.toFixed(2));		           
	            $('#totalTax').text(tax.toFixed(2));
	            $('#totalBill').text(total.toFixed(2));
	            $('.invoiceSubTotal').before("<li class='order-item'><span class='left'>" + itemname + "</span><span class='right'>"+ ' $' + price +"</span><i class='fas fa-times close'></i></li>");

	            let closeButtons = document.querySelectorAll('.close');
	            console.log(closeButtons.length);
	            for(let i =0; i < closeButtons.length; i++){
	            	closeButtons[i].onclick = function() {
	            		let li = this.parentElement;
	            		let orderPrice = $(li).find('.right').text();
	            		orderPrice = parseFloat(orderPrice.replace('$',''));
	            		subtotal = subtotal - orderPrice.toFixed(2);
	            		tax = subtotal * 0.13;
	            		total = subtotal + tax;	
	            		li.style.display = 'none';
	            		$('#subtotalBill').text(subtotal.toFixed(2));		           
	            		$('#totalTax').text(tax.toFixed(2));
	            		$('#totalBill').text(total.toFixed(2));
	            	};
	            }
        	}	          	            
        });

        const filtering = (filter) =>{
        	for(let i = 0; i < allfilter.length; i++){	
	    		allfilter[i].className += ' closed';
    		}    		
    		for(let i = 0; i < filter.length; i++){	
    			$(filter[i]).removeClass('closed');
    		}
        }

    });