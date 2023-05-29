export const getRandomPhoto = () =>{
    const photos = [
        require('../../assets/1.webp'),
        require('../../assets/2.jpg'),
    ];
    return photos[Math.floor(Math.random()* photos.length)];
}