import EditButton from "./editButton"
import Profile from "./profileImage"
import ProfileName from "./profileName&About"
function AboutSec() {
    return (
        <section className="flex h-auto">
            <aside className="basis-1/3 h-auto flex justify-start pl-10">
                <div className="flex flex-col justify-start gap-2">
                    <Profile />
                    <div className="flex flex-col gap-3">
                        <ProfileName />
                        <EditButton />
                    </div>
                    <div className="flex flex-col border-1 border-amber-50 h-[200px]">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </aside>
            <aside className="basis-2/3 pt-0 pr-20 pl-20">
                <div>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam deleniti accusamus amet nihil harum aspernatur quo asperiores explicabo dolores in ea natus, esse sequi architecto libero maiores eligendi vero!
                        Qui tempore temporibus quidem alias enim quo debitis illum harum, assumenda at. Autem eveniet ea et adipisci voluptate quaerat similique perferendis? Exercitationem autem minima maxime debitis praesentium porro. Doloremque, sed!
                        Dolor impedit alias voluptate aut repellat porro delectus, obcaecati perspiciatis odit expedita beatae, aliquam assumenda est quia nemo molestiae hic et? Amet, dicta repellendus aperiam soluta at non quo ratione?
                        Odit laboriosam vel earum, excepturi quae fuga, voluptate iste doloribus possimus animi mollitia optio. Itaque impedit quasi voluptatum nam quos, perferendis labore quidem sequi fuga, aliquid sapiente culpa corporis autem.
                        Eos ab, et, quae sunt voluptates neque eaque quisquam nam commodi voluptatum nihil. Sint nobis dolorum provident illo odit. Quisquam laboriosam, nam sapiente soluta porro rerum quasi autem minus? Iure?
                    </p>
                </div>
            </aside>
        </section>
    )
}

export default AboutSec