function ProfileName(profileObj) {
    let { fullName, bio } = profileObj.profileDetails
    return (
        <>
            <h2 className="text-white text-3xl pl-0 text-left font-medium">{fullName}</h2>
            <p className="text-white text-left">{bio}</p>
        </>
    )
}
export default ProfileName