//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

let arr=[ 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg];
let getImage=[];
function getImage() {
    const random = Math.floor(Math.random()) ;
    return <img src="array.lenght * random + '.jpg'" />;
}

console.log( getImage() );













