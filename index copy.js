/*original*/
const employee = {
    name: "babo",
    streetAddress: "1 nice st.",
};
console.log("***** original *****")
console.log("original:",employee)
console.log("")

/*update*/
function updateEmployeeWithKeyAndValue(obj,key,value) {
    const newObj = {...obj}
    newObj[key]=value;
    return newObj;
}

console.log("***** update *****")
console.log("NEW:",updateEmployeeWithKeyAndValue(employee,"name","monkey"))
console.log("original:",employee)
console.log("")

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
    obj[key]=value;
    return obj;
}

console.log("modified:",destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","orange"))
console.log("original:",employee)
console.log("")

/*delete*/
function deleteFromEmployeeByKey(obj,key) {
    const newObj={...obj};
    delete newObj[key];
    return newObj;
}

console.log("***** delete *****")
console.log("new:",deleteFromEmployeeByKey(employee,"name"));
console.log("original:",employee)
console.log("")

function destructivelyDeleteFromEmployeeByKey(obj,key) {

    delete obj[key];
    return obj;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"));
console.log("original:",employee)





