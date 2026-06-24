import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Profilecard = () => {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl bg-card px-8 py-10 text-foreground shadow-lg border border-border w-[320px] max-h-[600px]">

            <div className="w-60 h-70 rounded-xl overflow-hidden">
                <img src="/profile.jpg" alt="profile" />
            </div>

            <div className="flex flex-col items-center mt-6 space-y-2">
                <h1 className="text-2xl font-anton font-bold text-center">
                    Rafael Saraiva
                </h1>

                <p className="text-muted-foreground font-zalando text-xl text-center px-2">
                    Just starting my journey in software development, turning learning into real-world projects.
                </p>
            </div>

            <div className="flex flex-row items-center gap-5 mt-6">
                <a
                    href="https://github.com/RafaelSaraiva124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href="https://www.linkedin.com/in/rafael-saraiva-517bb6418/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <FaLinkedin size={20} />
                </a>

                <a
                    href="mailto:rafaelsaraivawork@gmail.com"
                    className="hover:text-white transition"
                >
                    <BiLogoGmail size={22} />
                </a>
            </div>
        </div>
    );
};
export default Profilecard
