// ====== EDIT ONLY THIS BLOCK ======
const yt = id => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const DATA = {
  name: "PVR Raja",
  tagline: "Composer & Music Director",
  about: `Penumatsa Venkata Ramaraju, known professionally as PVR Raja, is an Indian music composer, record producer, songwriter and guitarist who works in Telugu cinema. He is nicknamed "Short Films Maestro" and "Ilaiyaraaja of Short Films". He initially composed music for over 250 short films and independent films, and entered the India Book of Records for composing the most number of short Telugu films.`,
  email: "",
  stats: [["250+","Short Films"],["IBR","Record Holder"],["2022","Madhi"]],
  awards: [
    {title:"India Book of Records", text:"Music composed by an individual for the maximum number of short Telugu films.", link:"https://indiabookofrecords.in/music-composed-by-an-individual-for-maximum-short-telugu-films/"}
  ],
  films: [
    {title:"Madhi", year:"2022", role:"Composer & Music Director", poster:yt("TXBqSp9lNv8")}
  ],
  music: [
    {title:"Pranayam", film:"Madhi", cover:yt("Cx3Dp_yxqug"), link:"https://youtu.be/Cx3Dp_yxqug?si=P1qZwzKPBVViGZKB"},
    {title:"Kavvinche Kalavu", film:"Madhi", cover:yt("ghN-6G92dKg"), link:"https://youtu.be/ghN-6G92dKg"},
    {title:"Soul of Madhi", film:"Madhi", cover:yt("TXBqSp9lNv8"), link:"https://youtu.be/TXBqSp9lNv8"},
    {title:"Kalavai Kalisavo", film:"Capture", cover:yt("rzoHBJk1m5k"), link:"https://youtu.be/rzoHBJk1m5k?si=b7xiSCApuOs_hyGF"},
    {title:"Dilantha Adhire", film:"Video Song", cover:yt("BDyqgBDeyWs"), link:"https://youtu.be/BDyqgBDeyWs"},
    {title:"Vennela Vacche Padhamani", film:"Video Song", cover:yt("nIoQ2yJOKfQ"), link:"https://youtu.be/nIoQ2yJOKfQ"},
    {title:"Hey Boothanaadhaya", film:"Video Song", cover:yt("ZaCYtf5Kz8k"), link:"https://youtu.be/ZaCYtf5Kz8k"},
    {title:"1000 Words", film:"Movie Trailer", cover:yt("x7hKgr8zQ0U"), link:"https://www.youtube.com/watch?v=x7hKgr8zQ0U"}
  ],
  gallery: [],
  social: [
    ["YouTube","https://www.youtube.com/channel/UCfqXnk4uq9kSvrsTN17NjDw"],
    ["YouTube Music","https://music.youtube.com/@maestropvrraja"],
    ["Spotify","https://open.spotify.com/artist/6tz2nw9kPvbVmlYZb9XLvV"],
    ["Apple Music","https://music.apple.com/in/artist/pvr-raja/1509468464"],
    ["Amazon Music","https://music.amazon.in/artists/B07T83HMTM/pvr-raja"],
    ["JioSaavn","https://www.jiosaavn.com/artist/pvr-raja/-t1OnDk18Nk_"],
    ["Gaana","https://gaana.com/artist/pvr-raja"],
    ["Instagram","https://www.instagram.com/pvrrajaofficial/"],
    ["Facebook","https://www.facebook.com/penumatsa.venkat/"],
    ["X","https://x.com/pvrrajaofficial"],
    ["IMDb","https://www.imdb.com/name/nm14915418/"],
    ["BookMyShow","https://in.bookmyshow.com/person/pvr-raja/2020818"],
    ["Wikipedia","https://en.wikipedia.org/wiki/P.V.R._Raja"],
    ["Google","https://www.google.com/search?kgmid=%2Fg%2F11h4cxg344"]
  ]
};
// ==================================
const $ = id => document.getElementById(id);
const hideBroken = `onerror="this.style.visibility='hidden'"`;
document.title = DATA.name + " | Composer & Music Director";
["logoName","heroName","footName"].forEach(i => $(i).textContent = DATA.name);
$("heroLine").textContent = DATA.tagline;
$("aboutText").textContent = DATA.about;
$("year").textContent = new Date().getFullYear();
$("stats").innerHTML = DATA.stats.map(s => `<div class="stat"><b>${s[0]}</b>${s[1]}</div>`).join("");
$("awardList").innerHTML = DATA.awards.map(a => `<div class="award"><h3>🏆 ${a.title}</h3><p>${a.text}</p><a href="${a.link}" target="_blank" rel="noopener">View record →</a></div>`).join("");
$("filmGrid").innerHTML = DATA.films.map(f => `<div class="card film"><img src="${f.poster}" alt="${f.title}" loading="lazy" ${hideBroken}><div><h3>${f.title}</h3><p>${f.year} • ${f.role}</p></div></div>`).join("");
$("musicGrid").innerHTML = DATA.music.map(m => `<a class="card song" href="${m.link}" target="_blank" rel="noopener"><img src="${m.cover}" alt="${m.title}" loading="lazy" ${hideBroken}><div><h3>${m.title}</h3><p>${m.film}</p><span>▶ Watch / Listen</span></div></a>`).join("");
$("galleryGrid").innerHTML = DATA.gallery.map(g => `<img src="${g}" alt="Gallery photo" loading="lazy" ${hideBroken}>`).join("");
$("social").innerHTML = DATA.social.map(s => `<a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`).join("");
if (DATA.email) { $("email").textContent = DATA.email; $("email").href = "mailto:" + DATA.email; } else { $("mailBlock").style.display = "none"; }
if (!DATA.gallery.length) { $("gallery").style.display = "none"; document.querySelector('a[href="#gallery"]').style.display = "none"; }
const lb = $("lightbox");
document.querySelectorAll(".gallery img").forEach(i => i.onclick = () => { lb.querySelector("img").src = i.src; lb.classList.add("on"); });
lb.onclick = () => lb.classList.remove("on");
