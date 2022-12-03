const bcryptjs=require("bcryptjs")

const encurpted="$2a$10$5dMml2/nIoFgUnNycqhEk.8wo8QFfqKSA0vma9JyeFk/ql9tu0NuW"
const passsowrd="santosh1994@gmail.com"

bcryptjs.compare(passsowrd,encurpted)
  .then((match)=>{
        console.log(match)
  })
  .catch(()=>{

  })