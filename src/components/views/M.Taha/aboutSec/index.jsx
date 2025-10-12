import EditButton from "./editButton"
import Intro from "./Introduction"
import Profile from "./profileImage"
import ProfileName from "./profileName&About"
import SocialIcons from "./Social-icons"
function AboutSec() {
    let profileObj = {
        fullName: "Taha Bin Shafiq",
        bio: "Front-End Developer and Learner",
        socialMedia: [],
        intro: ""
    }
    return (
        <section className="flex h-[100vh] justify-center bg-black">
            <aside className="basis-1/3 h-auto flex justify-start pl-10">
                <div className="flex flex-col justify-start gap-2">
                    <Profile />
                    <div className="flex flex-col gap-3">
                        <ProfileName profileDetails={profileObj} />
                        <EditButton />
                    </div>
                    <div>
                        <SocialIcons />
                    </div>
                </div>
            </aside>
            <aside className="basis-2/3 pt-0 pr-20 pl-0">
                <div className="border-1 border-amber-50 p-5 rounded-[5px] w-[100%]">
                    <Intro />
                </div>
            </aside>
        </section>
    )
}

export default AboutSec