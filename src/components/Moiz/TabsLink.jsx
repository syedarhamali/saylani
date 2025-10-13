import React, { useState } from 'react'

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
        <div className="flex justify-center gap-6 bg-gray-100 py-4 shadow-md">
            {tabs.map((elem) => (
                <a
                    key={elem.id}
                    href={elem.Path}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                >
                    {elem.label}
                </a>
            ))}
        </div>
    )
}

export default TabsLink
