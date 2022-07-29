import { useEffect } from 'react'
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect'

import {
    bg1,
    clank,
    rivet,
    ratchet,
    drNefarious,
    distortion
} from '../../../assets/images'

const champImgs = [ratchet, clank , rivet, drNefarious]

const Welcome = props => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay-purple welcome__content"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome To</span>
                        <h2 className="main-color">Ratchet & Clank: Rift Apart</h2>
                    </div>
                    <div className="description m-t-4">
                    Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality. Jump between action-packed worlds, and beyond at mind-blowing speeds – complete with dazzling visuals and an insane arsenal – as the intergalactic adventurers blast onto the PS5™ console.                    </div>
                    <div className="btns m-t-4">
                        <Button className="btn__getstarted">GET STARTED</Button>
                        <Button className="btn__playnow">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            PLAY NOW</Button>
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img src={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome
