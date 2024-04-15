export const apiCall=async(name:string,params:string)=>{
    try {
        const response=await fetch(`${process.env.APIURL}/${name}?${params}`)
        const res=await response.json();
        return res;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}