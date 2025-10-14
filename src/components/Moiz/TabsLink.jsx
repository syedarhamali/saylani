import { useState } from 'react'
import { NavLink } from 'react-router'

function TabsLink() {

    const [tabs, setTabs] = useState([
        {
            id: 1,
            label: "Home",
            Path: "/"
        },

        {
            id: 2,
            label: "About",
            Path: "/about"
        },
        {
            id: 3,
            label: "Services",
            Path: "/services"
        },

        {
            id: 4,
            label: "Contact",
            Path: "/contact"
        }

    ])
    return (
        <div className="flex flex-col justify-center gap-6 bg-gray-100 py-4 shadow-md">
            {tabs.map((elem) => (
                <NavLink
                    key={elem.id}
                    to={elem.Path}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                >
                    {elem.label}
                </NavLink>
            ))}
        </div>
    )
}

export default TabsLink
