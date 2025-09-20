import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import anim from "../assets/FileUpload.lottie";
const FileUplAnim = ({ isPicked, children }) => {
    const [dotLottie, setDotLottie] = useState(null);
    const dotLottieRefCallback = (dotLottie) => {
        setDotLottie(dotLottie);
    };
    useEffect(handleLottieAnimation, [dotLottie]);

    function handleLottieAnimation() {
        if (dotLottie) {
            dotLottie.addEventListener('frame', frameChangeEffect);
        }
    }

    function frameChangeEffect({ currentFrame }) {
        if (!isPicked && currentFrame >= 30) {
                seek(1);
                dotLottie.setSpeed(.3);
            }else if(isPicked && currentFrame === 111){
                //111 is where the green tick is visible
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