import { useState } from "react";
import * as S from "./style"
export default function UploadImage({user, setUser}) {


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType === "image/png" || fileType === "image/jpeg") {
                setUser(prevUser => ({
                    ...prevUser,
                    photo: file
                }))
            } else {
                alert("Por favor, envie una imagem PNG ou JPG.");
            }
        }
    };

    return (
        <div>
            <S.UploadText>Tu mejor foto:</S.UploadText>
            <S.InputName 
                type="file" 
                accept="image/png, image/jpeg" 
                onChange={handleFileChange}
            />
            {user.photo && (
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"15px"}}>
          
                    <img 
                        src={URL.createObjectURL(user.photo)} 
                        alt="Pré-visualización" 
                        width="200" 
                    />
                </div>
            )}
        </div>
    );
}
