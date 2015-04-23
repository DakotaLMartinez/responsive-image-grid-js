function main() {
	var imgUrls = [
		"at-the-lake-with-a-camera.jpeg",
		"beautiful-wolf.jpeg",
		"between-4-pillars.JPG",
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
		"wet-monocular.JPG",
		"wind-in-sails.jpeg"
	];
	function imageGrid(urls) {
		var grid = "";
		for(i=0 ; i < urls.length ; i++) {
			var imgunit = '<img src="img/' + urls[i] + '" />';
			var link = '<a href="img/' + urls[i] + '" data-lightbox="slideshow" class="block">' + imgunit +'</a>'
			grid += link;
			console.log(link);
		}
		return grid;
	}

	var myImageGrid = imageGrid(imgUrls);
	document.getElementById("image-grid").innerHTML = myImageGrid;
	// console.log(myImageGrid);
}
main();
// $(document).ready(main);