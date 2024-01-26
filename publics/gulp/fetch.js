const datatags={userimg:document.querySelector(".user-img"),name:document.querySelector(".user_name"),nickname:document.querySelector(".user_nickname"),bio:document.querySelector(".main__bio"),time:document.querySelector("time"),repos:document.querySelector(".repos"),followers:document.querySelector(".followers"),following:document.querySelector(".following"),location:document.querySelector(".location"),twitter:document.querySelector(".twitter"),website:document.querySelector(".website"),company:document.querySelector(".company")},search=document.querySelector("form"),loading=document.querySelector(".loading"),errorTag=document.querySelector(".form__error"),api="https://api.github.com/users";let fetched=null;function uploadPage(e){errorTag.textContent=e.message,e.message||(datatags.name.textContent=fetched.name,datatags.nickname.textContent=fetched.login,datatags.nickname.setAttribute("href",fetched.html_url),datatags.time.textContent=`Joined at \n  ${new Date(fetched.created_at).getDate()} \n  ${new Date(fetched.created_at).toLocaleString("default",{month:"short"})} \n  ${new Date(fetched.created_at).getFullYear()}`,datatags.userimg.setAttribute("src",fetched.avatar_url),datatags.bio.textContent=fetched.bio,datatags.repos.textContent=fetched.public_repos,datatags.repos.setAttribute("href",fetched.repos_url),datatags.followers.textContent=fetched.followers,datatags.followers.setAttribute("href",fetched.followers_url),datatags.following.textContent=fetched.following,datatags.following.setAttribute("href",fetched.following_url),datatags.location.textContent=fetched.location?fetched.location:"Not, Available",datatags.twitter.textContent=fetched.twitter_username?fetched.twitter_username:"Not, Available",datatags.website.textContent=fetched.site_admin?fetched.site_admin:"Not, Available",datatags.company.textContent=fetched.company?fetched.company:"Not, Available")}search.onsubmit=async e=>{try{e.preventDefault(),errorTag.classList.remove("form__error--display"),loading.classList.add("rotate"),await fetch(`${api}/${e.target.input.value}`).then((e=>e.json())).then((e=>fetched=e)),uploadPage(fetched),loading.classList.remove("rotate")}catch(e){console.log(e),loading.classList.remove("rotate")}};