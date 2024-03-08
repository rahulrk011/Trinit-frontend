import React, {  Fragment, useState, useEffect } from 'react'
import Typed from 'typed.js';
import pic from "../assets/carbon1.svg";
import FileUpload from './FileUpload.jsx';

export default function Header() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const initializeTyped = () => {
        const typed = new Typed(el.current, {
          strings: ['Welcome to', 'Machine Learning ^3000'],
          typeSpeed: 60,
          backSpeed: 50,
          loop: true
        });
        return typed;
      };
    
      const timeoutId = setTimeout(() => {
        initializeTyped();
      }, 100);
    
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    const dataChangerThumbnail = (value) => {
      setFormData({...formData, thumbImage: value})
  }

  const formInitial = {
      thumbImage: '',
  }
  const [formData, setFormData] = useState(formInitial)
    
    return (
        <div id="home" className="flex items-center justify-center h-full">
            <div className="w-1/2 p-12 m-3">
                <span ref={el} class="text-7xl font-semibold"/>
                <p className="mt-16 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rerum? Error officia temporibus voluptatum amet illum magni, eos itaque impedit vero veniam, nostrum reprehenderit quod repellat vel ipsum, corporis cum.</p>
                
    <FileUpload 
        name="thumbImage" 
        button_title="Thumbnail Image Upload"  
        max_file_size_in_kb="200" 
        dataChanger={(value) => dataChangerThumbnail(value)} 
        type="image"  
        prev_src={'localhost:8001/'+formData?.thumbImage} 
        required 
        allowed_extensions={[ 'jpg', 'jpeg', 'png', 'gif']} 
    /> 

    

            </div>
            <div className="w-1/2">
              <img class=" mx-auto size-9/12" src={pic}></img>
            </div>
        </div>
    );
}
