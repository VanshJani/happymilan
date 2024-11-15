import { useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { Updateprofileimage, Updateprofileimageprocess } from "../../../store/actions/UsersAction";
import setCanvasPreview from "../CanvasPreview";
// import Image from "next/image";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper = ({ setModalOpen, handleClose, closeModal, updateAvatar }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState({
    aspect: ASPECT_RATIO,
    unit: "%",
    width: MIN_DIMENSION,
    height: MIN_DIMENSION,
  });
  const [error, setError] = useState("");

  const [ImageData, SetImageData] = useState()
  const [InputVisible, setInputVisible] = useState(true)

  const onSelectFile = (e) => {

    if (e.target.files.length > 0) {
      // Hide the input element
      setInputVisible(false);
    }

    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {


      const blobUrl = URL.createObjectURL(file);

      SetImageData(file)


      const imageData = {
        contentType: file.type,
        data: blobUrl,
        id: 0, // You can set this based on your application logic
        key: file.name, // Use file name or any other identifier
        size: file.size
      };

      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels.");
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };



  const handleCropComplete = (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      const canvas = previewCanvasRef.current;
      const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        imgRef.current,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        MIN_DIMENSION,
        MIN_DIMENSION
      );
    }
  };

  const dispatch = useDispatch()

  const loader = useSelector((state) => state.usersact.profileimageupdate)

  const SpanStyle = {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }


  const Text2 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px" /* 133.333% */
  }

  const Text3 = {
    color: "#606060",
    fontFamily: "Poppins",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  useEffect(() => {
    if (loader.process) {
      handleClose();
      dispatch(Updateprofileimageprocess())

    }
  }, [])


  return (
    <div>
      <div className="grid place-items-center">
        <div className="mt-[-5px] 2xl:w-[500px]  xl:w-[520px]  w-[90%]">
          <ul className="flex justify-between">
            <li>
              <h1 className="" style={SpanStyle}>Upload Photo</h1>
            </li>
            <li onClick={handleClose} className="p-1 w-8 h-8 grid place-items-center rounded-full cursor-pointer hover:bg-[#F3F8FF]">
              {/* <img alt='close-icon' className="w-[24px] h-[24px] cursor-pointer" onClick={handleClose} src="/assests/social/close.svg" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.26703 16L0 14.733L6.73297 8L0 1.26703L1.26703 0L8 6.73297L14.733 0L16 1.26703L9.26703 8L16 14.733L14.733 16L8 9.26703L1.26703 16Z" fill="black" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      {InputVisible && (

        <div className="grid place-items-center ">
          <label htmlFor="dropzone-file">
            <div className='relative top-[20px] grid place-items-center  md:w-[350px] md:h-[150px] lg:w-[426px] lg:h-[257px] 2xl:w-[510px] 2xl:h-[450px] xl:w-[526px] xl:h-[357px] dark:bg-[#242526] bg-[#F5F5F5] rounded-[22px]'>
              <div className=''>
                <input id="dropzone-file" className="cursor-pointer opacity-0 absolute" type="file" accept="image/*" onChange={onSelectFile} />
                <div className='w-full grid place-items-center mt-[-10%] mb-[10%]'>
                  <img src='/loginassests/register-icons/Drag-Drop.svg' />
                </div>
                <h1 className='text-[15px] lg:text-[20px]' style={Text2}>Upload Image
                </h1>
              </div>
            </div>
          </label>
        </div>
      )}
      {error && <p className="text-red-400 text-xs">{error}</p>}
      {imgSrc && (
        <div className="grid place-items-center left-[-0px] relative top-[40px]">

          <div className="2xl:w-[520px] 2xl:h-[325px] xl:w-[520px] xl:h-[325px] w-[90%] h-[325px] bg-[#000] rounded-[10px]">
            <div className="grid place-items-center">
              <ReactCrop
                crop={crop}
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                circularCrop
                keepSelection
                aspect={ASPECT_RATIO}
                minWidth={MIN_DIMENSION}
              >
                <img
                  ref={imgRef}
                  src={imgSrc}
                  alt="Upload"
                  style={{ maxHeight: "325px" }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            </div>
            <div className="text-center pt-[20px]">
              <h1 style={Text3}>Adjust the round object to set your photo</h1>
            </div>
          </div>
          <div className="flex justify-center relative top-[50px] space-x-[30px]">
            <button className="cursor-pointer w-[125px] h-[49px] rounded-[23px]  bg-[#FFF] duration-150 hover:bg-[#F2F7FF] border-[1px] border-[black]">
              <input className="cursor-pointer w-[100px] opacity-0 absolute" type="file" accept="image/*" onChange={onSelectFile} />
              Change</button>
            <button id="grad-button" className="cursor-pointer w-[125px] h-[49px] rounded-[23px]"

              onClick={() => {
                setCanvasPreview(
                  imgRef.current, // HTMLImageElement
                  previewCanvasRef.current, // HTMLCanvasElement
                  convertToPixelCrop(
                    crop,
                    imgRef.current.width,
                    imgRef.current.height
                  )
                );

                const canvas = previewCanvasRef.current;
                canvas.toBlob((blob) => {
                  if (blob) {
                    const urldata = URL.createObjectURL(blob)


                    const CurrentImageData = {
                      key: ImageData.name,
                      contentType: ImageData.type,
                      data: urldata
                    }

                    const blobData = {
                      size: blob.size,
                      type: blob.type,
                      blob: URL.createObjectURL(blob)

                    };

                    dispatch(Updateprofileimage(CurrentImageData, blobData))

                  }
                }, "image/jpeg");
              }}

            >Upload
              {loader.loading ?
                <img alt="loader" width={25} height={25} className=' w-[25px] h-[25px] animate-spin inline relative left-[5px]' src='/assests/animation/loaderIcon.svg' />
                : ""}

            </button>
          </div>
        </div>
      )}
      <canvas
        ref={previewCanvasRef}
        style={{ display: "none" }}
        width={MIN_DIMENSION}
        height={MIN_DIMENSION}
      ></canvas>
    </div>
  );
};

export default ImageCropper;
