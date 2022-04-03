import { useState } from "react"

const useForm = (initinal) =>{
    const [form , setForm] = useState(initinal)
    const onChage = (e) =>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const clear = (e)=>{
        setForm(initinal)
    }
    return {form, onChage, clear}
}
export default useForm