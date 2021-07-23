console.log("Script Running!");

const submitBtn=document.querySelector("#submitBtn");

const findMovie = (genre, length, feeling)=>{
    const movieRef =firebase.database().ref();
    movieRef.on('value',(snapshot)=>{
        console.log("value changed");
        const data=snapshot.val();
        console.log(data);
        for(let key in data){
            const movie = data[key];
            if((genre==movie.genre)&&(length==movie.length)&&(feeling==movie.feeling)){
                renderMovie(movie);
            }
        }
    })
}

const movieName=document.querySelector("#movieName")
const renderMovie = (movieObj)=>{
    console.log(movieObj);
    movieName.innerHTML+=movieObj.name+ "<br>";
}

submitBtn.addEventListener('click',(e)=>{
    movieName.innerHTML="";
    const movieGenre = document.querySelector("#movieGenre").value;
    const movieLength = document.querySelector("#movieLength").value;
    const movieFeeling =document.querySelector("#movieFeeling").value;
    findMovie(movieGenre, movieLength, movieFeeling);
})
