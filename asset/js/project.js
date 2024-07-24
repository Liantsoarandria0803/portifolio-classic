fetch("./../js/dataProject.json")
.then(response => response.json())
   .then(data => {
    let content="";
    for (project in data){
        content+=`
        <section >
        <div class="arti">
            <div class="title">
                <h3>${data[project].name}</h3>
            </div>
            <p>${data[project].description}</p>
        </div>
        <button><a href="${data[project].link}">LINK</a></button>
    </section>
        `
    }
    document.getElementById("project").innerHTML=content;
   })
   .catch(error => {
    console.error(error);
});