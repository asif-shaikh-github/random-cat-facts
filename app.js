let btn = document.querySelector('button');
let para = document.querySelector('#result');
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("Error - ",e);
        return "No Fact Found";
    }
};


btn.addEventListener("click", async() =>{
    let fact = await getFacts();
    para.innerText = fact;
});