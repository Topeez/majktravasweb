import { ClimaxLogo, IsotraLogo, JimiToreLogo, TridoLogo } from "./logos";

export const Cloud = () => {
    return (
        <div className="flex flex-col justify-center items-center my-28 cs-container">
            <p className="font-bold text-4xl text-center">
                Odebírám produkty jen od známých českých výrobců.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-32 mt-14">
                <ClimaxLogo />
                <IsotraLogo />
                <JimiToreLogo />
                <TridoLogo />
            </div>
        </div>
    );
};
