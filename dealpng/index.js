'use strict';
(function () {
    const fs = require('fs');
    var getPixels = require('get-pixels');
    var Jimp = require('jimp')
    var oldpixs = undefined;
    var newpixs = undefined;
    // getPixels("test.png", function (err, pixels) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     oldpixs = pixels;
    //     console.log(oldpixs.data);
    // })
    // getPixels("testone.png", function (err, pixels) {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     newpixs = pixels;
    //     console.log(newpixs.data);
    // })
    Jimp.read('test.png').then(function (image) {
        oldpixs = image.bitmap.data;
        console.log(image.bitmap.data);
        Jimp.read('testone.png').then(function (image) {
            newpixs = image.bitmap.data;
            console.log(image.bitmap.data);
            console.log(oldpixs);
            console.log(newpixs);
            const pixelSize = 768;
            var saveimage = new Jimp(pixelSize, pixelSize, function (err, saveimage) {
                let buffer =[];
                //saveimage.bitmap.data=newpixs;
                // for (let inum=0;inum<newpixs.length;inum++)
                // {
                //     buffer[inum]=newpixs[inum]*0.5+oldpixs[inum]*0.5;
                // }
                 for (var x = 0; x < pixelSize; x++) {
                    for (var y = 0; y < pixelSize; y++) {
                        let offset = ( pixelSize * x) +y* 4 // RGBA = 4 bytes
                        buffer[offset] = newpixs[offset]   // R
                        buffer[offset + 1] = newpixs[offset+1]    // G
                        buffer[offset + 2] = newpixs[offset+2]    // B
                        buffer[offset + 3] = newpixs[offset+3]  // Alpha
                    }
                }
                saveimage.bitmap.data=buffer;
                
            })

            saveimage.write('image.png')
        })
    })


    //   const pixelSize = 768;
    //   var image = new Jimp(pixelSize, pixelSize, function (err, image) {
    //     let buffer = image.bitmap.data;
    //     for (var x = 0; x < pixelSize; x++) {
    //       for (var y = 0; y < pixelSize; y++) {
    //         const offset = (y * pixelSize + x) * 4 // RGBA = 4 bytes
    //         buffer[offset    ] = x    // R
    //         buffer[offset + 1] = y    // G
    //         buffer[offset + 2] = 0    // B
    //         buffer[offset + 3] = 255  // Alpha
    //       }
    //     }
    //   })

    //   image.write('image.png')
})();