const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const inspireItemCallback = ({ data: items }) => displayItems(items,"inspire")
const helpItemCallback = ({ data: items }) => displayItems(items,"help")
const encourageItemCallback = ({ data: items }) => displayItems(items,"encourage")
const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
//console.log("client main.js")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)

let baseURL = `http://localhost:4000/api/`
const optionType = document.getElementById("optionType")
const listContainer = document.querySelector('#listContainer')

optionType.addEventListener("change", function() {
        if(optionType.value.includes("Inspire"))  {
            let updatedURL=baseURL+"inspire"
            if(optionType.value.includes("list"))
                axios.get(updatedURL).then(inspireItemCallback).catch(errCallback)
            if(optionType.value.includes("create"))
                createItem("inspire")
        }  
        
        if(optionType.value.includes("Help"))  {
            let updatedURL=baseURL+"help"
            if(optionType.value.includes("list"))
                axios.get(updatedURL).then(helpItemCallback).catch(errCallback)
            if(optionType.value.includes("create"))
                createItem("help")
        }  
        
        if(optionType.value.includes("Encourage"))  {
            let updatedURL=baseURL+"encourage"
            if(optionType.value.includes("list"))
                axios.get(updatedURL).then(encourageItemCallback).catch(errCallback)
            if(optionType.value.includes("create"))
                createItem("encourage")
        }  

});

function createItemCard(item,type) {
    const itemCard = document.createElement('div')
    itemCard.innerHTML = `<br/><input type="text" size="100" class="title" id=${type}_${item.id} value="${item.title}" disabled></input>
    &nbsp;&nbsp;&nbsp;<button id=edit_${type}_${item.id} onClick="unlockInput('${type}_${item.id}')">Edit</button>
    &nbsp;&nbsp;&nbsp;<button id=delete_${type}_${item.id} onClick="deleteItem('${type}','${item.id}')">Delete</button>
    &nbsp;&nbsp;&nbsp;<button id=submit_${type}_${item.id} style="display:none" onClick="editItem('${type}','${item.id}')">Submit</button>
    <br/>`
    listContainer.appendChild(itemCard)
}
function displayItems(arr,type) {
    listContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCard(arr[i],type)
    }
}
function unlockInput(itemId)
{
    //console.log(itemId)
    document.querySelector('#'+itemId).disabled=false;
    document.querySelector('#edit_'+itemId).style.display='none';
    document.querySelector('#delete_'+itemId).style.display='none';
    document.querySelector('#submit_'+itemId).style.display='';
}
function editItem(itemType,itemId)
{
    let editURL=baseURL+itemType+"/"+itemId
    let bodyObj = {
        title: document.querySelector('#'+itemType+"_"+itemId).value
    }
    if(itemType.includes("inspire"))
        axios.put(editURL,bodyObj).then(inspireItemCallback).catch(errCallback)
    if(itemType.includes("help"))
        axios.put(editURL,bodyObj).then(helpItemCallback).catch(errCallback)
    if(itemType.includes("encourage"))
        axios.put(editURL,bodyObj).then(encourageItemCallback).catch(errCallback)
}
function deleteItem(itemType,itemId)
{
    let editURL=baseURL+itemType+"/"+itemId
    if(itemType.includes("inspire"))
        axios.delete(editURL).then(inspireItemCallback).catch(errCallback)
    if(itemType.includes("help"))
        axios.delete(editURL).then(helpItemCallback).catch(errCallback)
    if(itemType.includes("encourage"))
        axios.delete(editURL).then(encourageItemCallback).catch(errCallback)
}
function createItem(itemType)
{
    
    listContainer.innerHTML="";
    
    const crateCard = document.createElement('div')
    crateCard.innerHTML = `<br/><input type="text" class="title" id=${itemType}_value value=""></input>
    &nbsp;&nbsp;&nbsp;<button id=submit_${itemType} onClick="addItem('${itemType}','${itemType}_value')">Submit</button>
    <br/>`
    //console.log("2")
    listContainer.appendChild(crateCard)
}
function addItem(itemType,itemValue)
{
    let createURL=baseURL+itemType
    let bodyObj = {
        title: document.querySelector('#'+itemValue).value
    }
    if(itemType.includes("inspire"))
        axios.post(createURL,bodyObj).then(inspireItemCallback).catch(errCallback)
    if(itemType.includes("help"))
        axios.post(createURL,bodyObj).then(helpItemCallback).catch(errCallback)
    if(itemType.includes("encourage"))
        axios.post(createURL,bodyObj).then(encourageItemCallback).catch(errCallback)
}
