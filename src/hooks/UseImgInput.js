import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";

export function useImgInput(initImg) {
    const {setValue, getValues, unregister} = useFormContext();
    const [BlobImgUrl, setBlobImgUrl] = useState("");

    useEffect(() => {
        setBlobImgUrl(initImg)
    }, [initImg]);

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setValue('img', "/images/" + file.name)
        setValue('file', file)

        setBlobImgUrl(URL.createObjectURL(file));
    };

    const handleResetImage = () => {
        setValue('img', "")
        unregister("file")
        setBlobImgUrl("");
        console.log(getValues())
    };
    return {BlobImgUrl, handleFileChange, handleResetImage};
}