
const tweetForm=document.querySelector('#tweetForm');
tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
    /*const usernameInput=document.querySelectorAll('input')[0];
    const tweetInput=document.querySelectorAll('input')[1];*/
    let username=tweetForm.elements.username;
    let tweet=tweetForm.elements.tweet;
    addTweet(username.value,tweet.value);
    username.value='';
    tweet.value='';
});

const addTweet=(username,tweet)=>{
    const tweetContainer=document.querySelector('#tweets');
    const newTweet=document.createElement('li');
    const bTag=document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
}
tweetContainer=document.querySelector('#tweets');
tweetContainer.addEventListener('click',function(e){
    e.target.remove();
});