try{
    throw new ReferenceError('utja bhai')
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(x)// throwing error in catch
}
finally{
    console.log("done")
}