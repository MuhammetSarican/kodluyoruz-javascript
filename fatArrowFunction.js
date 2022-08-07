function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}

hello('Muhammet')

const fatArrowFuncV1=(firstName)=>{console.log(`Hello ${firstName}`)}

const fatArrowFuncV2=firstName=>console.log(`Hello ${firstName}`)

const fatArrowFuncV3=(firstName,lastName)=>
console.log(`Hello ${firstName+' '+lastName}`)

const fatArrowFuncV4=(firstName,lastName)=>
{
    let info=`Hello ${firstName+' '+lastName}`
    console.log(info)
    return info
}


fatArrowFuncV1('fatArrowFuncV1')
fatArrowFuncV2('fatArrowFuncV2')
fatArrowFuncV3('fatArrowFuncV3','fatArrowFuncV3')

console.log(fatArrowFuncV4('fatArrowFuncV4','fatArrowFuncV4'))