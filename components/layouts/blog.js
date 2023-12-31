import { motion } from 'framer-motion'
import Head from 'next/head'
import { ProjectItemStyle } from '../grid-i'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => (
    <motion.article
    initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut'}}>
        <>
            {title && ( <Head>
                <title>Blog - {title}</title>
            </Head>
            )}
            {children}
            <ProjectItemStyle />
        </>
    </motion.article>
)

export default Layout