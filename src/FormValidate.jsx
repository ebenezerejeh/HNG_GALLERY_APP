

const validation = (value) =>{
    let errors = {}
    let regex = /@/;

    if(!value.email) {
        errors.email = "email Required"
    }
//     else if(regex.test(value.email) && value.email) {
//     errors.email = `type 'user@example' as email`
// }
    
    if(!value.password) {
        errors.password = "Password Required"
    }
//     else if(value.password!=='1Password'){
//     errors.password = `type '1Password' as password`
// }

return errors;


}

export default validation;