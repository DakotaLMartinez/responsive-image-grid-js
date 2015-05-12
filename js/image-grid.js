function main() {
	// The following array contains the file names of
	// the images in the responsive grid.  A full size
	// version is in the img/full directory and a 
	// thumbnail size is in the img/thumbs directory
	var imgUrls = [
		"at-the-lake-with-a-camera.jpeg",
		"beautiful-wolf.jpeg",
		"between-4-pillars.jpg",
		"bridge-from-above.jpeg",
		"bridge-in-clouds.jpeg",
		"canoe-on-beach.jpg",
		"cars-timelapse.jpeg",
		"central-station-timelapse.jpeg",
		"close-on-field.jpeg",
		"cloudy-mountain-waterfalls.jpeg",
		"converse-on-rocks.jpeg",
		"double-handful-of-grapes.jpeg",
		"dusk-lifeguard-tower.jpeg",
		"electric-train-car.jpeg",
		"ferris-wheel.jpg",
		"footware-on-bus.jpeg",
		"hand-on-rainy-window.jpeg",
		"highway-bends-through-forest.jpeg",
		"highway-clouds.jpg",
		"hot-coffee.jpeg",
		"in-a-hat-from-behind.jpeg",
		"ipad-calendar-by-imac.jpeg",
		"long-beach-coastline.jpg",
		"looking-up-in-forest.jpeg",
		"metro-bus.jpeg",
		"old-blue-vw-bug.jpeg",
		"overlooking-cloudy-valley.jpeg",
		"palm-trees.jpeg",
		"playing-old-piano.jpeg",
		"playing-with-feathers.jpg",
		"seagulls.jpeg",
		"shooting-stars.jpeg",
		"snow-topped-cloudy-mountains.jpeg",
		"snowy-mountain-hikers.jpeg",
		"snowy-mountain-trees.jpg",
		"sparkler.jpeg",
		"spiral-prison.jpeg",
		"starry-dusk.jpeg",
		"starry-starry-night.jpeg",
		"statue-of-liberty.jpg",
		"sun-shining-over-hair.jpg",
		"sun-through-forest.jpeg",
		"sunset-above-clouds.jpeg",
		"sunset-field.jpeg",
		"sunset-running-on-highway.jpeg",
		"sunset-seagull.jpeg",
		"surfboard-fin-on-beach.jpeg",
		"thai-food-in-boats.jpg",
		"tracks-on-sand-at-beach.jpeg",
		"two-hikers-on-mountainside.jpeg",
		"waves-at-sunset.jpeg",
		"waves-from-above.jpg",
		"wet-monocular.jpg",
		"wind-in-sails.jpeg"
	];

	String.prototype.capitalize = function(){
		return this.toLowerCase().replace( /\b\w/g, function(m) {
			return m.toUpperCase();
		});
	};
	// takes the names of the image files and makes them 
	// captions in the slideshow (stripping the dashes and 
	// extensions)
	
	function getTitles(urls) {
		var titles = [];
		for (i=0 ; i < urls.length ; i++) {
			var string = urls[i];
			var res = string.replace(/-/gi, " ");
			var res2 = res.replace(/.jpg|.jpeg/gi, "");
			titles.push(res2.capitalize());
		}
		return titles;
	}
	// stores titles in an array so they can be applied
	// to the images in the following function
	var titles = getTitles(imgUrls);
	// creates a grid of thumbnails with lightbox links
	// to the full size images and adds titles.
	function makeImages(urls) {
		var imgs = "";
		for (i=0 ; i < urls.length ; i++) {
			var img = '<img src="img/thumbs/' + urls[i] + '" alt="' + titles[i] + '" />';
			var imglink = '<a href="img/full/' + urls[i] + '" data-lightbox="slideshow" data-title="' + titles[i] + '">' + img + '</a>';
			imgs += imglink;
		}
		return imgs;
	}
	var imgs = makeImages(imgUrls);
	document.getElementById('grid').innerHTML = imgs;
	
}
// calculates the aspect ratio of each of the images
// and stores the results in an array
var aspect_ratios = [];
function getRatio() {
	$('#grid img').each(function(index, value) {
		var width = value.width;
		var height = value.height;
		var aspect_ratio = width/height;
		aspect_ratios.push(aspect_ratio);
	});
	// function that takes an array of images, the # of
	// images per row, and the gap between them and
	// applies the styles necessary to build the grid
	function setRowHeight(images, images_per_row, gap) {
		var widths_as_percent = [];
		var container_width = $('#grid').width();
		console.log('container width: ' + container_width);
		// loops over the images to split them into rows
		// each iteration of this loop corresponds to a row
		for (i=0 ; i < images.length; i += images_per_row) {
			var ratio_sum = 0;
			var row_length = 0;
			// loops over the images in the row, adds their
			// aspect ratios together and counts the # of
			// images in the row (to account for a different 
			// # of images in the last row)
			for (j=i ; j < i + images_per_row ; j++) {
				if(aspect_ratios[j]) {
					ratio_sum += aspect_ratios[j];
					row_length++;
				}
			}
			// This is the bones of the script -- sets 
			// height of all images in the row such that  
			// the sum of their widths and the gaps between  
			// them fills the entire container width
			var height = (container_width - ((row_length -1)*gap) )/ratio_sum;
			// loops through the images in the row and assigns
			// it a percentage width based on the height of 
			// the row and the aspect ratio of the image
			// (divided by width to get perecentage)
			for (j=i ; j < i + row_length ; j++) {
				var width_as_percent = ((aspect_ratios[j]*height)/container_width)*100;
				widths_as_percent.push(width_as_percent);
			}
		}
		// loops through the images and sets the width of
		// each to the value stored in the array also adds
		// a left margin to fill the gap between images
		// (adds margin to all except first image in each row)
		$('#grid img').each(function(index, value) {
			var row = Math.floor(index / images_per_row);
			value.style.width = widths_as_percent[index] +'%';
			if (gap != 0) {
				var gap_percent = (gap/container_width) * 100;
				value.style.marginTop = gap_percent + '%';
				if(index % images_per_row != 0) {
					value.style.marginLeft = gap_percent + '%';
				}
				else {
					value.style.marginLeft = 0;
				}
			}
			else {
				value.style.marginLeft = 0;
				value.style.marginTop = gap_percent;
			}
			// applies a fade in to the image after it has
			// been resized
			value.style.opacity = 1;
		});
	}
	// pushes the images into an array that will plug
	// into the setRowHeight function
	images = [];
	$('#grid img').each(function(index, value) {
		images.push(value);
	});
	// defines the breakpoints for the responsive grid
	// adjust the second input to set the number of images
	// per row and the third input to adjust the gap between
	// images at each size
	function beResponsive() {
		var container_width = $('#grid').width();
		if (container_width <= 480) {
			setRowHeight(images, 1, 0);
		}
		else if (480 < container_width && container_width <= 800) {
			setRowHeight(images, 2, 10);
		}
		else if (800 < container_width && container_width <= 1000) {
			setRowHeight(images, 3, 10);
		}
		else if (1000 < container_width) {
			setRowHeight(images, 4, 10);
		}
		return;
	}
	beResponsive();
	// Calls the function is called when the window 
	// resizes so that the correct number of images
	// displays at the specified container widths.
	$(window).resize(function(){
		beResponsive();
	});
}

$(document).ready(main);