import React from 'react';

const Prevention = () => {
    return (<>

        <div className="prevent">
            <div className="firstP">
                <h1>Wash your hands frequently and carefully</h1>
                <p>
                    Use warm water and soap and rub your hands for at least 20 seconds. Work the lather to your wrists,
                    between your fingers,and under your fingernails. You can also use an antibacterial and antiviral soap.
                    Use hand sanitizer when you cannot wash your hands properly. Rewash your hands several times a day, especially after
                    touching anything, including your phone or laptop.
            </p>
            </div>
            <div className="secondP">
                <img src="wash.png" alt="Not Found" />
            </div>
        </div>
        <div className="prevent">
            <div className="secondP">
                <img src="touch.png" alt="Not Found" />
            </div>
            <div className="firstP">
                <h1>Avoid touching your face</h1>
                <p>SARS-CoV-2 can live on some surfaces for up to 72 hours. You can get the virus on your hands if you touch a surface like:gas pump handle ,your cell phone ,  doorknob
        Avoid touching any part of your face or head, including your mouth, nose, and eyes. Also avoid biting your fingernails. This can give SARS-CoV-2 a chance to go from your hands into your body.</p>
            </div>
        </div>
        <div className="prevent">
            <div className="firstP">
                <h1>Cover your mouth and nose when you cough and sneeze</h1>
                <p>
                    SARS-CoV-2 is found in high amounts in the nose and mouth. This means it can be carried by air droplets to other people when you cough, sneeze, or talk. It can also land on hard surfaces and stay there for up to 3 days.
                    Use a tissue or sneeze into your elbow to keep your hands as clean as possible. Wash your hands carefully after you sneeze or cough, regardless.
                </p>
            </div>
            <div className="secondP">
                <img src="cov.png" alt="Not Found" />
            </div>

        </div>
        <div className="prevent">
            
            <div className="secondP">
                <img src="distance.png" alt="Not Found" />
            </div>
            <div className="firstP">
                <h1>Take physical (social) distancing seriously</h1>
                <p>
                    If you’re carrying the SARS-CoV-2 virus, it’ll be found in high amounts in your spit (sputum). This can happen even if you don’t have symptoms.
                    Physical (social) distancing, also means staying home and working remotely when possible.
                    If you must go out for necessities, keep a distance of 6 feet (2 m) from other people. You can transmit the virus by speaking to someone in close contact to you.
                </p>
            </div>

        </div>
        <div className="prevent">
            
            <div className="firstP">
                <h1>Stop shaking hands and hugging people — for now</h1>
                <p>
                Similarly, avoid touching other people. Skin-to-skin contact can transmit SARS-CoV-2 from one person to another.
                </p>
            </div>
            <div className="secondP">
                <img src="hand.png" alt="Not Found" />
            </div>
        </div>


    </>)
}
export default Prevention;