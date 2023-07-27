const music=new Audio('audio/1.mp3');

const songs=[
    {
        id: "1",
        songName: `On My Way <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id: "2",
        songName: `Alan Walker-Fade <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: `Cartoon - On&On <br> 
        <div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpg"
    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br> 
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
    },
    {
        id: "5",
        songName: `Ertugrul Gazi <br> 
        <div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg"
    },
    {
        id: "6",
        songName: `Electronic Music <br> 
        <div class="subtitle">Electronic</div>`,
        poster: "img/6.jpg"
    },
    {
        id: "7",
        songName: `Agar Tum Saath Ho <br> 
        <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg"
    },
    {
        id: "8",
        songName: `Suna hai <br> 
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/8.jpg"
    },
    {
        id: "9",
        songName: `Dilber <br> 
        <div class="subtitle">Stayameva Jayate</div>`,
        poster: "img/9.jpg"
    },
    {
        id: "10",
        songName: `Duniya <br> 
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg"
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di <br> 
        <div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg"
    },
    {
        id: "12",
        songName: `Put Jatt Da <br> 
        <div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg"
    },
    {
        id: "13",
        songName: `Baarishein <br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg"
    },
    {
        id: "14",
        songName: `Vaaste <br> 
        <div class="subtitle">Dhvani Bhanusali</div>`,
        poster: "img/14.jpg"
    },
    {
        id: "15",
        songName: `Lut Gaye <br> 
        <div class="subtitle">Jubin Nautiwal</div>`,
        poster: "img/15.jpg"
    },
    {
        id: "16",
        songName: `Tu Meri Jindegi hai Tu <br> 
        <div class="subtitle">Jubin Nautiwal</div>`,
        poster: "img/16.jpg"
    },
    {
        id: "17",
        songName: `Batao Yaad Hai Tumko Who Jab Dil Ko Churaya Tha <br> 
        <div class="subtitle">Rahat Fatch Ali Khan</div>`,
        poster: "img/17.jpg"
    },
    {
        id: "18",
        songName: `Mere Dhol <br> 
        <div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster: "img/18.jpg"
    },
    {
        id: "19",
        songName: `Eh Munde Pagal Ne Saare <br> 
        <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/19.jpg"
    },
    {
        id: "20",
        songName: `ASH VS LEON <br> 
        <div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/20.jpg"
    }

]

Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let search_result=document.getElementsByClassName('search_result')[0];
songs.forEach(element=>{
    const{id,songName,poster}=element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`<img src="${poster}" alt="">
                    <div class="content">
                        ${songName}
                    </div>
    `;
    search_result.appendChild(card);
});

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let item=search_result.getElementsByTagName('a');

    for (let index = 0; index < songs.length; index++) {
        let as=item[index].getElementsByClassName('content')[0];
        let text_value=as.textContent||as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {
            item[index].style.display="flex";
        }
        else{
            item[index].style.display="none";
        }

        if (input.value==0) {
            search_result.style.display="none";
        } else {
            search_result.style.display="";
        }
    }
})


let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('wave');
masterplay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bx-play');
        masterplay.classList.remove('bx-pause');
    }
});


const makeallplay=()=>{
    Array.from(document.getElementsByClassName('PlayListPlay')).forEach((el)=>{
        el.classList.add('bx-play-circle');
        el.classList.remove('bx-pause-circle');
    })
}


const makeallbackground=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background='rgba(105, 105, 105, .0)';
    })
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('PlayListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        //console.log(abc);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
    });
})

let currentstart=document.getElementById('currentstart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentstart.innerText=`${min2}:${sec2}`;

    let progressbar=parseInt((music_curr/music_dur)*100);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');
vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bx-volume-full');
        vol_icon.classList.remove('bx-volume-low');
        vol_icon.classList.add('bx-volume-mute');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bx-volume-full');
        vol_icon.classList.add('bx-volume-low');
        vol_icon.classList.remove('bx-volume-mute');
    }
    if(vol.value>50){
        vol_icon.classList.add('bx-volume-full');
        vol_icon.classList.remove('bx-volume-low');
        vol_icon.classList.remove('bx-volume-mute');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');
back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bx-play');
    masterplay.classList.add('bx-pause');

    let songtitle=songs.filter((els)=>{
        return els.id==index;
    });

    songtitle.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
    });
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
    makeallplay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
})
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songitem')).length){
        index=1;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bx-play');
    masterplay.classList.add('bx-pause');

    let songtitle=songs.filter((els)=>{
        return els.id==index;
    });

    songtitle.forEach((elss)=>{
        let{songName}=elss;
        title.innerHTML=songName;
    });
    makeallbackground();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
    makeallplay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
    wave.classList.add('active1');
})

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
});

let pop_artist_left=document.getElementById('pop_artist_left');
let pop_artist_right=document.getElementById('pop_artist_right');
let Artist_bx=document.getElementsByClassName('Artist_bx')[0];

pop_artist_right.addEventListener('click',()=>{
    Artist_bx.scrollLeft+=330;
});

pop_artist_left.addEventListener('click',()=>{
    Artist_bx.scrollLeft-=330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
    case "Next":
        shuffle.classList.add('bx-repeat');
        shuffle.classList.remove('bx-music');
        shuffle.classList.remove('bx-shuffle');
        shuffle.innerHTML = 'repeat';
        break;
    case "repeat":
        shuffle.classList.remove('bx-repeat');
        shuffle.classList.remove('bx-music');
        shuffle.classList.add('bx-shuffle');
        shuffle.innerHTML = 'random';
        break;
    case "random":
        shuffle.classList.remove('bx-repeat');
        shuffle.classList.add('bx-music');
        shuffle.classList.remove('bx-shuffle');
        shuffle.innerHTML = 'Next';
        break;
    }
});



const next_music=()=>{
    //index++;
    if (index==songs.length) {
        index=1;
    }
    else{
        index++;
    }
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        //download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            //download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
}

const repeat_music=()=>{
    //index++;
        index;
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        //download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            //download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
}

const random_music=()=>{
    //index++;
    if (index==songs.length) {
        index=1;
    }
    else{
        index=Math.floor((Math.random() * songs.length)+1);
    }
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bx-play');
        masterplay.classList.add('bx-pause');
        //download_music.href=`audio/${index}.mp3`;

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });

        songtitle.forEach((elss)=>{
            let{songName}=elss;
            title.innerHTML=songName;
            //download_music.setAttribute('download',songName);
        });
        makeallbackground();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background="rgba(105, 105, 105, .1)";
        makeallplay();
        el.target.classList.remove('bx-play-circle');
        el.target.classList.add('bx-pause-circle');
        wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'Next':
            next_music();
            break;
        
        case 'random':
            random_music();
            break;
    
    }
})