class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Cloudkosmo');//
    const result = await fetch( //비동기처리 지원 -> axios
      'https://api.cloudinary.com/v1_1/dfqumwjeu/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }  
}
export default ImageUploader;

