import React, { useRef, useEffect } from 'react'
import { profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa'
import { assets } from '../assets/asstes'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.about-heading', {
                x: -60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'bottom 20%',
                    toggleActions: "play reverse play reverse"
                },
            })

            gsap.from('.about-text', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                    end: 'bottom 20%',
                    toggleActions: "play reverse play reverse"
                },
            })

            gsap.fromTo(
                '.about-card',
                {
                    opacity: 0,
                    y: 60,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 20%',
                        end: 'bottom 20%',
                        toggleActions: "play reverse play reverse"
                    },
                }
            )

            gsap.from('.about-image', {
                x: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: "play reverse play reverse"
                },
            })

        }, sectionRef)

        ScrollTrigger.refresh()

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="about-heading text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-teal-800">About </span>Me
                        </h2>

                        <p className="about-text mb-4 text-zinc-700 leading-8">
                            I'm a frontend developer with a passion for creating immersive digital experiences.
                            With over 5 years in the industry, I've worked with startups and Fortune 500 companies.
                        </p>

                        <p className="about-text mb-8 text-zinc-700 leading-8">
                            My approach combines technical expertise with creative design thinking to build
                            applications that are functional and visually stunning.
                        </p>

                        {/* CARDS */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {profileData.map((data) => (
                                <div
                                    key={data.title}
                                    className="about-card min-h-\[240px\] p-6 border border-zinc-300 rounded-lg bg-white
                  transition hover:-translate-y-1 hover:border-zinc-800"
                                >
                                    <FaCode className="text-3xl mb-4" />
                                    <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                                    <p className="text-zinc-600">{data.technologies.join(', ')}</p>
                                </div>
                            ))}
                        </div>

                        <a href="/resume.pdf">
                            <button className="px-8 py-4 bg-zinc-800 text-white rounded-full hover:bg-zinc-900 transition">
                                Download Resume
                            </button>
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="about-image flex justify-center">
                        <div className="w-full max-w-md rounded-3xl overflow-hidden">
                            <img 
                                src={assets.profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
