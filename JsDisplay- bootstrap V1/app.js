const d = document

async function fetchData() {
    const r = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=100",
        {
            headers: {
                method: "GET",
                Accept: "application/json"
            }

        })


        //   console.log(js.title)
        .then((response) => response.json() //2
        )
        .then((user) => {
            //   return user
            //         console.log(user); //3
            displayJs(user, "completed")
        });

}

function foundInArray(valeur, array) {
    let isPresent = false
    let whereIsIt = ''
    for (let distinct of array) {
        if (valeur === distinct) {
            isPresent = true
            whereIsIt = distinct.index
        }
    }
    return isPresent
}

/*
const testArr = ["dog", "cat", "duck"]
console.log(testArr.indexOf('duck'))
*/

function displayJs(user, elementNameToCol) {

    // for (let table of user.completed)
    let tableCol = []
    // console.log("tableCol = ", user[0][elementNameToCol])
    tableCol.push(user[0][elementNameToCol]) // initiazion du tableau avec la première valeur

    //  console.log(tableCol)

    for (let line of user) {


        //  console.log(JSON.stringify(elementNameToCol))

        //   console.log(line.completed)
        //  console.log(line.completed)
        // on vérifie si l'élément existe sinon on le rajoute au tableau
        for (let distinct of tableCol) {
            //      console.log(line.completed + " !== " + distinct)
            if (!foundInArray(line[elementNameToCol], tableCol)) {
                //         console.log(line.completed !== distinct)
                tableCol.push(line[elementNameToCol])
            }
        }

        let tbColId = "tb_col" + "_" + tableCol.indexOf(line[elementNameToCol])

        //  console.log(line.testObj)

        /*
        console.log(tableCol, line.completed)
        console.log(tableCol.indexOf(line.completed))
        console.log("tb_col" + "_" + tableCol.indexOf(line.completed) + d.querySelector(".tb_col" + "_" + tableCol.indexOf(line.completed)))
        */

        // on vérifit si la colonne existe, sinon on l'a créé
        //   console.log(d.getElementById(tbColId))
        if (d.getElementById(tbColId) === null) {
            const newCol = d.createElement("div")
            //    console.log(tbColId)
            newCol.id = tbColId
            newCol.className = "table table-striped"
            // changement de l'élément style body container
            d.querySelector(".container").append(newCol)

            const newHead = d.createElement("div")
            newHead.className = "display-3 p-3"
            newHead.innerText = line[elementNameToCol]
            //    console.log(tbColId)
            d.getElementById(tbColId).append(newHead)

            const newThead = d.createElement("thead")
            newThead.className = "display-5 d-flex justify-content-between bg-secondary"
            newThead.id = "thead_" + line[elementNameToCol]
            //    console.log(tbColId)
            d.getElementById(tbColId).append(newThead)

            for (let element in line) {
                let newTh = d.createElement("th")
                newTh.className = "border-0"
                console.log(element)
                /* avoir les intitulés des élélents :
                console.log(`${element.replace(":", "")}`)
                */
                newTh.id = "td_element"
                newTh.innerText = element
                //      console.log(`${element}: ${line[element]}`)
                d.getElementById("thead_" + line[elementNameToCol]).append(newTh)
            }
        }


        //   console.log(tableCol)
        const newDiv = d.createElement("div")
        newDiv.id = "tb_row" + "_" + line.id
        newDiv.className = "list-group-item list-group-item-action list-group-item-info bg-light border border-info d-flex justify-content-between"
        // console.log(tbColId)
        d.getElementById(tbColId).append(newDiv)



        for (let element in line) {
            let newTd = d.createElement("td")
            newTd.className = ""
            console.log(element)
            /* avoir les intitulés des élélents :
            console.log(`${element.replace(":", "")}`)
            */
            newTd.id = "td_element"
            newTd.innerText = `${line[element]}`
            //      console.log(`${element}: ${line[element]}`)
            d.getElementById("tb_row" + "_" + line.id).append(newTd)
        }
    }

}

fetchData()

/*
fetch("https://jsonplaceholder.typicode.com/users/1") //1
    .then((response) => response.json()) //2
    .then((user) => {
        console.log(user); //3
    });
*/