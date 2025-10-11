import Profile from "./profileImage"
import ProfileName from "./profileName&About"
function AboutSec() {
    return (
        <section className="flex h-screen">
            <aside className="basis-1/3 h-auto flex justify-center">
                <div className="flex flex-col justify-start gap-5">
                    <Profile />
                    <ProfileName />
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