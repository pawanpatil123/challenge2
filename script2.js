const postsData = [
    {
        username: "Sarthak",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 56,
        liked:false
    },
    {
        username: "Akarsh",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 125,
        liked:false
    },
    {
        username: "Sarthak",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 789,
        liked:false
    },
    {
        username: "vedant",
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 23,
        liked:false
    },
    {
        username: "HARSHITA",
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 58,
        liked:false
    },
    // Add more posts as needed
];


// write your code here to create card

var like=document.querySelector('#postsContainer')

function main(){

    var cul=""
    
postsData.forEach(function(elem,index){
cul+=`  <div class="post-container"><img
src="${elem.dp}"
alt="Display Picture">
<h3>${elem.username}</h3><span class="like-icon">❤</span>

<button id="${index}" class="btn">Like</button>
<p  class="like-count">${elem.likes} Likes</p>
</div>`
})

like.innerHTML=cul

}

main()


like.addEventListener('click',function(dets){
   
    if (dets.target.classList.contains('btn')) {
      
        if (!postsData[dets.target.id].liked) {
            postsData[dets.target.id].likes++;
            postsData[dets.target.id].liked = true;
        } else {
            postsData[dets.target.id].likes--;
            postsData[dets.target.id].liked = false;
        }
        main();
    }
  })



//     if(arr[dets.target.id].istatus=="Stranger")
// {

//     arr[dets.target.id].istatus="friend"
//     // console.log(a)
//     mainfunc()
// }
// else{
//     arr[dets.target.id].istatus="Stranger"
//     // console.log(a)
//     mainfunc()  
// }    









