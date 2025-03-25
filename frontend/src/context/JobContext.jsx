import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { axiosClient } from "../utils/utils";
import LoaderComponent from "../components/LoaderComponent";

const jobContext = createContext({
    jobs:[],
    fetchAllJobs:()=>{}
})
export  const useJobContext = ()=>useContext(jobContext)

export const JobContextProvider = ({children})=>{
    const [loader,setLoader] = useState(true)
    const [jobs,setJobs] = useState([])
    const fetchAllJobs = async()=>{
      try {
        const response = await axiosClient.get("/jobs")
        const data = await response.data
        setJobs(data)
        
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoader(false)
      }
    }
    useEffect(()=>{
      fetchAllJobs()
    },[])


    if(loader){
        return <div className="min-h-screen flex items-center justify-center">
            <LoaderComponent/>
        </div>
    }

    return <jobContext.Provider value={{jobs,fetchAllJobs}}>
        {children}
    </jobContext.Provider>
}