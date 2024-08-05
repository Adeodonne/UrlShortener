import React, {useEffect, useState} from 'react';
import {userStore} from "../../App/Storages/UserStorage";
import {ConstantApi} from "../../App/Api/ConstantApi";
import "./AboutPage.scss"

const AboutPage = () => {
    const ABOUT_CONSTANT_NAME : string = "about";
    const [text, setText] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newText, setNewText] = useState<string>(text);

    const fetchText = async () => {
        setText((await ConstantApi.getConstantByName(ABOUT_CONSTANT_NAME)).data.value);
    }

    const handleEditClick = () => {
        setNewText(text);
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        await ConstantApi.editConstant(ABOUT_CONSTANT_NAME, newText)
        setText(newText);
        setIsEditing(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewText(event.target.value);
    };
    
    useEffect(() => {
        fetchText();
    }, []);

    return (
        <div className="about-page">
            <h1>About</h1>
            {isEditing ? (
                <div>
                    <textarea value={newText} onChange={handleChange} rows={10} cols={50} />
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                <div>
                    <p>{text}</p>
                    {userStore.isAdmin && <button onClick={handleEditClick}>Edit</button>}
                </div>
            )}
        </div>
    );
};

export default AboutPage;
