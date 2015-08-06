# Responsive Image Grid

The following script renders a responsive image grid from a group of images that have differing dimensions.  You can put images into this grid that are of many different sizes and they will display very nicely.  The images are resized with JavaScript so that they fill in rows of equal height and fill the width of their container.  The gap between the images can be adjusted by changing the value fed to the 'gap' parameter in the setRowHeight function.


## Instructions

### Directory Structure

Place all of your full size images into the following directory: /img/full

Place all of your smaller size images into the following directory: /img/thumbs

Please ensure that there are no spaces or special characters in your image file names, as there is no URL encoding in this version of the script.

For this version of the script to work properly, the small version of each image must have the same file name and extension as the large version of the image. 

### Customize the script

Once you have your images, you can adjust the number of images you'd like to appear in each row by editing the beResponsive function.  Within the function, there are 4 different calls made to the setRowHeight function depending on the size of the responsive grid's container.  The second and third parameters passed to the setRowHeight function refer to the number of images per row and the gap between images (a pixel value that is converted to a percentage of the container width).  You can adjust these to your liking if you'd like to fit more or less images into each row of the grid.
