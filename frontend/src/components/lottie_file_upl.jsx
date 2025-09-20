import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import anim from "../assets/FileUpload.lottie";
const FileUplAnim = ({ isPicked, children }) => {
    const [dotLottie, setDotLottie] = useState(null);
    const dotLottieRefCallback = (dotLottie) => {
        setDotLottie(dotLottie);
    };
    useEffect(()=>{
         if (!dotLottie) return;

        dotLottie.addEventListener("frame", frameChangeEffect);
        return () => {
            dotLottie.removeEventListener("frame", frameChangeEffect);
        };
    }, [dotLottie, isPicked]);

    function frameChangeEffect({ currentFrame }) {
        if (!isPicked && currentFrame >= 30) {
            seek(1);
            dotLottie.setSpeed(.3);
        } else if (isPicked && currentFrame < 105) {
             dotLottie.setSpeed(2);
        } else if (isPicked) {
             dotLottie.pause();
        }
    }
    function seek(frameIndex) {
        if (dotLottie) {
            dotLottie.setFrame(frameIndex);
        }
    }

    return <div>
        {children}
        <DotLottieReact src={anim} autoplay
            dotLottieRefCallback={dotLottieRefCallback}
        />
    </div>;
    ;
};

export default FileUplAnim;