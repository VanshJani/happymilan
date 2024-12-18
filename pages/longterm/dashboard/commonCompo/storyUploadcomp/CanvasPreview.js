const setCanvasPreview = (
    image, // HTMLImageElement
    canvas, // HTMLCanvasElement
    crop // PixelCrop
) => {
    if (typeof window !== 'undefined') {
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("Canvas context is not available");
            return;
        }
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
        canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

        ctx.scale(pixelRatio, pixelRatio);
        ctx.imageSmoothingQuality = "high";
        ctx.save();

        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;

        // Move the crop origin to the canvas origin (0,0)
        ctx.translate(-cropX, -cropY);
        ctx.drawImage(
            image,
            0,
            0,
            image.naturalWidth,
            image.naturalHeight,
            0,
            0,
            image.naturalWidth,
            image.naturalHeight
        );

        ctx.restore();
    }else{

    }
} 

export default setCanvasPreview;
