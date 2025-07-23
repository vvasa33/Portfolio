import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function SectionWrapper({children}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-20% 0px" })

    return (
        <section className={"h-screen snap-start snap-section"}>
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 50}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
                className="h-full"
                >
                {children}
            </motion.div>
        </section>
    )
}
