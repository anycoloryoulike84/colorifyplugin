

$.fn.colorify = function(property) {

	
	 var mathly = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
	  					return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
	 this.css( property, mathly );
	
}



// 	$.fn.colorify = function() {

// 		 var mathly = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
// 	  					return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
	    	
// 	    	this.css( "background-color", mathly );

// 		};
	 


// 	$.fn.colorifyText = function() {

// 		 var mathly = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
// 	  					return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
	    	
// 	    	this.css( "color", mathly );

// 		};
	 


