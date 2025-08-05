import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {SWContext} from "../utils/context.ts";

interface InfoProps {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}

const AboutMe = () => {
    const [hero, setHero] = useState<InfoProps>();
    let {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);
    useEffect(() => {
        if(!(heroId in characters)){
            heroId = defaultHero;
        }
        changeHero(heroId);
        const hero = JSON.parse(localStorage.getItem("heroId")!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info: InfoProps = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("heroId", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [heroId])

    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key as keyof InfoProps]}
                    </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;